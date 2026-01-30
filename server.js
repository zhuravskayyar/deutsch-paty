const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const { grammarQuestions, getRandomQuestionFromTheme } = require('./questions');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000,
    skipMiddlewares: true
  }
});

app.use(cors());
app.use(express.static('public'));

// ===== DUEL RULES =====
const DUEL_RULES = {
  QUESTION_TIME_MS: 15000,     // 15s на відповідь
  STEAL_WINDOW_MS: 3500,       // 3.5s на "вкрасти"
  HINT_PENALTY: 1,             // -1 очко за підказку
  COMBO_STEP: 3,               // кожні 3 правильних підряд
  COMBO_MULT: 0.5              // +50% очок за активний комбо-бонус
};

function ensurePlayerState(p) {
  if (!p) return;
  if (p.score == null) p.score = 0;
  if (p.streak == null) p.streak = 0;
  if (p.comboLevel == null) p.comboLevel = 0; // 0,1,2...
  if (p.usedHint == null) p.usedHint = false;
}

function calcAward(basePoints, player) {
  const level = player.comboLevel || 0;
  const mult = 1 + level * DUEL_RULES.COMBO_MULT;
  return Math.max(0, Math.round(basePoints * mult));
}

// Статус сервера
app.get('/status', (req, res) => {
  res.send(`
    <h1>Deutsch Party Server Status</h1>
    <p>Активні кімнати: ${rooms.size}</p>
    <p>Час: ${new Date().toLocaleString()}</p>
  `);
});

// ==================== СТРУКТУРИ ДАНИХ ====================
const rooms = new Map();
const playerConnections = new Map();
const allUsedQuestionsGlobal = new Set();

class Room {
  constructor(code, hostSocketId) {
    this.code = code;
    this.hostSocketId = hostSocketId;
    this.hostConnections = [hostSocketId];
    this.players = new Map();
    this.state = 'lobby';
    this.currentQuestion = null;
    this.questionStartTime = null;
    this.roundDuration = 25;
    this.theme = 'sein';
    this.answers = new Map();
    this.createdAt = Date.now();
    this.matchStarted = false;
    this.loopQuestions = false;
    this.roundPauseMs = 1500;
    this.readyCheckStartedAt = Date.now();
    this.autoStartCountdown = null;
    this.autoStartDelaySec = 3;
    this.usedQuestions = new Set();
    this.roundIndex = 0;
    this.maxRounds = 50;
    this.totalQuestionsUsed = 0;
  }
  
  getPlayerList() {
    return Array.from(this.players.values()).map(p => ({
      id: p.id,
      name: p.name,
      ready: p.ready,
      score: p.score,
      connectionCount: p.connections.length
    }));
  }
  
  addPlayerConnection(playerId, socketId) {
    if (!this.players.has(playerId)) return;
    const player = this.players.get(playerId);
    if (!player.connections.includes(socketId)) {
      player.connections.push(socketId);
    }
  }
  
  removePlayerConnection(playerId, socketId) {
    if (!this.players.has(playerId)) return;
    const player = this.players.get(playerId);
    player.connections = player.connections.filter(id => id !== socketId);
    return player.connections.length === 0;
  }
  
  getPlayerSockets(playerId) {
    return this.players.has(playerId) ? this.players.get(playerId).connections : [];
  }
}

// ==================== ДОПОМІЖНІ ФУНКЦІЇ ====================
function generateRoomCode() {
  let code;
  do {
    code = Math.floor(100000 + Math.random() * 900000).toString();
  } while (rooms.has(code));
  return code;
}

function findRoomByHostSocket(socketId) {
  for (let room of rooms.values()) {
    if (room.hostConnections.includes(socketId)) return room;
  }
  return null;
}

function findRoomByPlayerSocket(socketId) {
  for (let room of rooms.values()) {
    for (let player of room.players.values()) {
      if (player.connections.includes(socketId)) return room;
    }
  }
  return null;
}

function getTotalQuestionsCount() {
  let total = 0;
  for (const theme in grammarQuestions) {
    total += grammarQuestions[theme].length;
  }
  return total;
}

function getRandomQuestionGlobal(allUsedQuestions, lastKey = null) {
  const allQuestions = [];

  for (const theme in grammarQuestions) {
    const arr = grammarQuestions[theme] || [];
    for (const q of arr) {
      // робимо унікальний ключ
      const key = `${theme}:${q.id}`;
      allQuestions.push({ ...q, _theme: theme, _key: key });
    }
  }

  const available = allQuestions.filter(q => !allUsedQuestions.has(q._key));
  if (available.length === 0) return null;

  let candidates = available;
  if (lastKey && available.length > 1) {
    candidates = available.filter(q => q._key !== lastKey);
  }

  return candidates[Math.floor(Math.random() * candidates.length)];
}

function emitToPlayer(room, playerId, event, data) {
  const playerSockets = room.getPlayerSockets(playerId);
  if (playerSockets.length > 0) {
    io.to(playerSockets[0]).emit(event, data);
  }
}

function emitToRoom(room, event, data) {
  const uniqueSockets = new Set();
  
  room.hostConnections.forEach(socketId => uniqueSockets.add(socketId));
  
  for (let player of room.players.values()) {
    if (player.connections.length > 0) {
      uniqueSockets.add(player.connections[0]);
    }
  }
  
  uniqueSockets.forEach(socketId => {
    io.to(socketId).emit(event, data);
  });
}

function isEveryoneReady(room) {
  const players = Array.from(room.players.values());
  if (players.length === 0) return false;
  return players.every(p => p.ready === true);
}

function clearAutoStart(room) {
  if (room.autoStartCountdown) {
    clearTimeout(room.autoStartCountdown);
    room.autoStartCountdown = null;
  }
}

function scheduleAutoStartIfReady(room) {
  if (room.matchStarted) return;
  if (room.state !== 'lobby') return;

  if (!isEveryoneReady(room)) {
    clearAutoStart(room);
    emitToRoom(room, 'ready-check:status', {
      allReady: false,
      countdownSec: null
    });
    return;
  }

  if (room.autoStartCountdown) return;

  emitToRoom(room, 'ready-check:status', {
    allReady: true,
    countdownSec: room.autoStartDelaySec
  });

  room.autoStartCountdown = setTimeout(() => {
    room.autoStartCountdown = null;

    if (!isEveryoneReady(room)) {
      emitToRoom(room, 'ready-check:status', { allReady: false, countdownSec: null });
      return;
    }

    room.matchStarted = true;

    emitToRoom(room, 'match-started', {
      startedAt: Date.now()
    });

    const theme = room.theme || 'sein';
    startRound(room, theme);

  }, room.autoStartDelaySec * 1000);
}

// ==================== ФУНКЦІЇ ДЛЯ РАУНДІВ ====================
function startRound(room, theme = null) {
  if (!room || room.state === 'question') return;

  // Скидаємо lastRoundPoints для всіх гравців на початку нового раунду
  for (const player of room.players.values()) {
    player.lastRoundPoints = 0;
  }

  if (room.totalQuestionsUsed >= room.maxRounds) {
    console.log(`🎉 ${room.maxRounds} питань використано! Матч завершено.`);
    emitToRoom(room, 'match-ended', {
      scores: room.getPlayerList(),
      reason: 'questions-limit-reached'
    });
    room.matchStarted = false;
    return;
  }

  const question = getRandomQuestionGlobal(
    allUsedQuestionsGlobal,
    room.currentQuestion?._key
  );

  if (!question) {
    console.log(`🎉 Всі ${getTotalQuestionsCount()} питань використані! Матч завершено.`);
    emitToRoom(room, 'match-ended', {
      scores: room.getPlayerList(),
      reason: 'all-questions-used'
    });
    room.matchStarted = false;
    return;
  }

  allUsedQuestionsGlobal.add(question._key);
  room.totalQuestionsUsed++;
  room.state = 'question';
  room.currentQuestion = question;
  room.questionStartTime = Date.now();
  // ✅ duration per question (priority: question.timeLimitSec/duration -> room.roundDuration)
  const durationSec =
    Number(question.timeLimitSec || question.duration || room.roundDuration || 15);
  const startedAt = Date.now();
  const endsAt = startedAt + (durationSec * 1000);

  // DUEL state for this round
  room.round = {
    qUid: question._key || `${question._theme}:${question.id}`,
    correct: question.correct,
    basePoints: question.points || 2,
    startedAt,
    endsAt,
    steal: { active: false },
    firstCorrect: null
  };

  // reset per-player hint usage for new round
  for (const p of room.players.values()) {
    p.usedHint = false;
  }

  // emit legacy event and duel-friendly event (endsAt)
  io.to(room.code).emit('round_started', {
    question,
    endsAt,
    basePoints: room.round.basePoints
  });
  room.answers.clear();

  emitToRoom(room, 'round-started', {
    question,
    duration: durationSec,
    endsAt,
    round: room.totalQuestionsUsed,
    maxRounds: room.maxRounds,
    playerCount: room.players.size,
    scores: room.getPlayerList()
  });

  room._roundTimer = setTimeout(() => {
    if (room.state === 'question') {
      endRound(room.code);
    }
  }, durationSec * 1000);

  console.log(`⏱ Питання ${room.totalQuestionsUsed}/${getTotalQuestionsCount()} у кімнаті ${room.code}`);
}

function clearRoundTimer(room) {
  if (room._roundTimer) {
    clearTimeout(room._roundTimer);
    room._roundTimer = null;
  }
}

function endRound(roomCode, meta = {}) {
  const room = rooms.get(roomCode);
  if (!room) return;
  if (room.state !== 'question') return;

  room.state = 'lobby';
  clearRoundTimer(room);

  const resultsSimple = Array.from(room.answers.entries()).map(([playerId, a]) => ({
    playerId,
    correct: a.correct,
    points: a.points,
    answer: a.answer
  }));

  const resultsDetailed = calculateResults(room);

  emitToRoom(room, 'round-ended', {
    results: resultsSimple,
    resultsDetailed: resultsDetailed,
    scores: room.getPlayerList(),
    round: room.totalQuestionsUsed,
    maxRounds: room.maxRounds,
    reason: meta.reason || 'ended'
  });

  // Надсилаємо оновлений список гравців з балами
  emitToRoom(room, 'player-list-updated', room.getPlayerList());

  // Надсилаємо детальні результати раунду
  const playerList = room.getPlayerList();
  const sortedPlayers = [...playerList].sort((a, b) => b.score - a.score);
  emitToRoom(room, 'round-results', {
    results: playerList.map(p => ({
      id: p.id,
      name: p.name,
      score: p.score,
      lastRoundPoints: p.lastRoundPoints || 0,
      correct: resultsSimple.find(r => r.playerId === p.id)?.correct || false,
      rank: sortedPlayers.findIndex(sp => sp.id === p.id) + 1
    })),
    explanation: room.currentQuestion?.explanation || ''
  });

  // ensure steal window closed when round ends
  if (room.round?.steal) {
    room.round.steal.active = false;
  }

  console.log(`🏁 Питання ${room.totalQuestionsUsed}/${room.maxRounds} завершено`);

  // Очистка lastRoundPoints для наступного раунду
  room.players.forEach(p => p.lastRoundPoints = 0);

  if (room.matchStarted) {
    setTimeout(() => {
      if (!rooms.has(room.code)) return;
      if (!room.matchStarted) return;
      startRound(room);
    }, room.roundPauseMs);
  }
}

function calculateResults(room) {
  const results = [];
  
  for (let [playerId, answerData] of room.answers) {
    const player = room.players.get(playerId);
    if (player) {
      results.push({
        playerId,
        name: player.name,
        answer: answerData.answer,
        correct: answerData.correct,
        points: answerData.points,
        speedBonus: answerData.speedBonus,
        streakBonus: answerData.streakBonus,
        streak: answerData.streak,
        timeLeft: answerData.timeLeft,
        totalScore: player.score
      });
    }
  }
  
  results.sort((a, b) => b.totalScore - a.totalScore);
  return results;
}

// ==================== WEB SOCKET ОБРОБНИКИ ====================
io.on('connection', (socket) => {
  console.log(`🔌 Нове підключення: ${socket.id}`);
  
  const connectionId = Date.now();
  socket.connectionId = connectionId;
  
  if (!playerConnections.has(socket.id)) {
    playerConnections.set(socket.id, {
      connectedAt: Date.now(),
      roomCode: null,
      isHost: false,
      playerId: null
    });
  }
  
  // ========== HOST ДІЇ ==========
  socket.on('host:create-room', () => {
    console.log("🎯 host:create-room from", socket.id);

    const existingRoom = findRoomByHostSocket(socket.id);
    if (existingRoom) {
      socket.emit("room-created", { code: existingRoom.code });
      return;
    }

    const code = generateRoomCode();
    const room = new Room(code, socket.id);

    rooms.set(code, room);
    socket.join(code);

    // Зберігаємо інформацію про хоста
    playerConnections.get(socket.id).roomCode = code;
    playerConnections.get(socket.id).isHost = true;

    console.log("✅ Room created:", code);

    socket.emit("room-created", { code });
  });
  
  socket.on('host:start-round', ({ theme }) => {
    const room = findRoomByHostSocket(socket.id);
    if (!room) return;

    startRound(room, theme);

    socket.emit('host:round-details', {
      question: room.currentQuestion,
      playerCount: room.players.size,
      theme
    });
  });

  socket.on('host:start-match', () => {
    const room = findRoomByHostSocket(socket.id);
    if (!room) return;

    if (room.matchStarted) return;

    room.matchStarted = true;

    emitToRoom(room, 'match-started', { startedAt: Date.now() });

    startRound(room);

    console.log(`🚀 MATCH START (all questions) у кімнаті ${room.code}`);
  });
  
  socket.on('host:reset-room', () => {
    const room = findRoomByHostSocket(socket.id);
    if (!room) return;
    
    // Скидаємо стан кімнати
    room.state = 'lobby';
    room.matchStarted = false;
    room.answers.clear();
    clearAutoStart(room);
    clearRoundTimer(room);
    
    // Скидаємо готовність всіх гравців
    for (let player of room.players.values()) {
      player.ready = false;
    }
    
    emitToRoom(room, 'room-reset');
    emitToRoom(room, 'player-list-updated', room.getPlayerList());
    
    console.log(`🔄 Кімната ${room.code} скинута`);
  });
  
  socket.on('host:show-results', () => {
    const room = findRoomByHostSocket(socket.id);
    if (!room) return;
    
    // Якщо є активне питання - завершуємо його
    if (room.state === 'question') {
      endRound(room.code, { reason: 'manual' });
    }
  });
  
  // ========== PLAYER ДІЇ ==========
  socket.on('player:join', ({ roomCode, name, playerId = null }) => {
    const room = rooms.get(roomCode);
    if (!room) {
      socket.emit('error', { message: 'Кімнату не знайдено' });
      return;
    }
    
    const actualPlayerId = playerId || `player_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    let player = room.players.get(actualPlayerId);
    
    if (player) {
      // Гравець вже існує - додаємо нове підключення
      player.connections.push(socket.id);
      console.log(`↪️ Повторне підключення: ${player.name} (${actualPlayerId})`);
    } else {
      player = {
        id: actualPlayerId,
        name: name.substring(0, 14),
        ready: false,
        score: 0,
        lastRoundPoints: 0,
        streak: 0,
        correctCount: 0,
        wrongCount: 0,
        connections: [socket.id],
        joinedAt: Date.now()
      };
      
      room.players.set(actualPlayerId, player);
      console.log(`👤 Новий гравець: ${player.name} (${actualPlayerId})`);
    }
    
    playerConnections.get(socket.id).roomCode = roomCode;
    playerConnections.get(socket.id).isHost = false;
    playerConnections.get(socket.id).playerId = actualPlayerId;
    
    socket.join(roomCode);
    
    socket.emit('joined', {
      roomCode,
      playerId: actualPlayerId,
      name: player.name,
      playerList: room.getPlayerList(),
      isReconnect: !!playerId
    });
    
    if (player.connections.length === 1) {
      io.to(room.hostSocketId).emit('player-joined', {
        playerId: actualPlayerId,
        name: player.name,
        connectionCount: player.connections.length
      });
    }
    
    emitToRoom(room, 'player-list-updated', room.getPlayerList());
    scheduleAutoStartIfReady(room);
  });
  
  socket.on('player:ready', () => {
    const connInfo = playerConnections.get(socket.id);
    if (!connInfo?.playerId) return;

    const room = rooms.get(connInfo.roomCode);
    if (!room) return;

    const player = room.players.get(connInfo.playerId);
    if (!player) return;

    player.ready = true;

    emitToRoom(room, 'player-ready-changed', {
      playerId: connInfo.playerId,
      ready: true
    });

    console.log(`✅ ${player.name} готовий`);
    
    // Перевіряємо, чи можна запустити автостарт
    scheduleAutoStartIfReady(room);
  });
  
  socket.on('player:answer', ({ playerId, answer, timeLeft }) => {
    const connInfo = playerConnections.get(socket.id);
    const actualPlayerId = playerId || connInfo?.playerId;
    if (!actualPlayerId) return;

    const room = findRoomByPlayerSocket(socket.id);
    if (!room || room.state !== 'question') return;

    const player = room.players.get(actualPlayerId);
    if (!player) return;

    if (room.answers.has(actualPlayerId)) {
      socket.emit('error', { message: 'Ви вже відповіли на це питання' });
      return;
    }

    ensurePlayerState(player);

    // ✅ таймер: якщо час вийшов — ігноруємо (по реальному endsAt цього питання)
    if (room.round?.endsAt && Date.now() > room.round.endsAt) return;

    const correctAnswer = room.round?.correct ?? room.currentQuestion.correct;
    const isCorrect = String(answer) === String(correctAnswer);

    if (isCorrect) {
      player.correctCount = (player.correctCount || 0) + 1;
      player.streak = (player.streak || 0) + 1;

      // first correct in round -> mark owner; only that player gains combo bonuses
      if (!room.round.firstCorrect) {
        room.round.firstCorrect = player.id;
      }

      if (room.round.firstCorrect !== player.id) {
        // no combo bonuses for stealers / later correctors
        player.comboLevel = 0;
      } else {
        player.comboLevel = Math.floor((player.streak || 0) / DUEL_RULES.COMBO_STEP);
      }

      const pts = calcAward(room.round?.basePoints || (room.currentQuestion.points || 2), player);
      player.score += pts;
      player.lastRoundPoints += pts;

      // close steal window if open
      if (room.round?.steal) room.round.steal.active = false;

      // record answer
      room.answers.set(actualPlayerId, {
        answer,
        timeLeft,
        correct: true,
        points: pts,
        speedBonus: 0,
        streakBonus: 0,
        streak: player.streak,
        timestamp: Date.now()
      });

      // notify
      io.to(room.hostSocketId).emit('player-answered', {
        playerId: actualPlayerId,
        playerName: player.name,
        answer,
        correct: true,
        timeLeft,
        points: pts,
        totalScore: player.score
      });

      io.to(room.code).emit('answer_result', { playerId: actualPlayerId, ok:true, points: pts });
      io.to(room.code).emit('score_update', { playerId: actualPlayerId, score: player.score, streak: player.streak, comboLevel: player.comboLevel });

      socket.emit('answer-received', { correct: true });

      console.log(`📝 ${player.name} відповів: ${answer} (правильно) +${pts}`);
      return;
    }

    // wrong answer
    player.wrongCount = (player.wrongCount || 0) + 1;
    player.streak = 0;
    player.comboLevel = 0;

    const pts = 0;
    room.answers.set(actualPlayerId, {
      answer,
      timeLeft,
      correct: false,
      points: pts,
      speedBonus: 0,
      streakBonus: 0,
      streak: 0,
      timestamp: Date.now()
    });

    io.to(room.hostSocketId).emit('player-answered', {
      playerId: actualPlayerId,
      playerName: player.name,
      answer,
      correct: false,
      timeLeft,
      points: 0,
      totalScore: player.score
    });

    io.to(room.code).emit('answer_result', { playerId: actualPlayerId, ok:false });
    io.to(room.code).emit('score_update', { playerId: actualPlayerId, score: player.score, streak:0, comboLevel:0 });

    // відкриваємо STEAL-вікно
    room.round = room.round || { steal: { active: false } };
    room.round.steal = {
      active: true,
      correct: correctAnswer,
      until: Date.now() + DUEL_RULES.STEAL_WINDOW_MS,
      victimSocketId: socket.id
    };
    io.to(room.code).emit('steal_open', { until: room.round.steal.until });

    socket.emit('answer-received', { correct: false });
    console.log(`📝 ${player.name} відповів: ${answer} (помилка) — відкрито steal`);
  });

  socket.on('request_hint', () => {
    const connInfo = playerConnections.get(socket.id);
    if (!connInfo?.playerId) return;
    const room = rooms.get(connInfo.roomCode);
    if (!room) return;
    const player = room.players.get(connInfo.playerId);
    if (!player) return;
    ensurePlayerState(player);
    if (player.usedHint) return; // only one hint per round
    player.usedHint = true;
    player.score = Math.max(0, (player.score || 0) - DUEL_RULES.HINT_PENALTY);
    io.to(room.code).emit('score_update', { playerId: player.id, score: player.score });
  });

  socket.on('steal_attempt', ({ answer }) => {
    const connInfo = playerConnections.get(socket.id);
    if (!connInfo?.playerId) return;
    const room = rooms.get(connInfo.roomCode);
    if (!room || !room.round?.steal?.active) return;
    if (Date.now() > room.round.steal.until) return;
    const player = room.players.get(connInfo.playerId);
    if (!player) return;
    ensurePlayerState(player);

    const isCorrect = String(answer) === String(room.round.steal.correct);
    if (!isCorrect) {
      io.to(socket.id).emit('steal_result', { ok:false });
      return;
    }

    const pts = calcAward(room.round.basePoints || 2, player);
    player.score += pts;
    player.lastRoundPoints += pts;
    player.streak = (player.streak || 0) + 1;
    player.comboLevel = Math.floor(player.streak / DUEL_RULES.COMBO_STEP);
    room.round.steal.active = false;

    io.to(room.code).emit('steal_result', { ok:true, by: player.id, points: pts });
    io.to(room.code).emit('score_update', { playerId: player.id, score: player.score, streak:player.streak, comboLevel:player.comboLevel });
  });
  
  socket.on('player:reconnect', ({ playerId, roomCode }) => {
    const room = rooms.get(roomCode);
    if (!room) {
      socket.emit('error', { message: 'Кімнату не знайдено' });
      return;
    }
    
    const player = room.players.get(playerId);
    if (player) {
      player.connections.push(socket.id);
      socket.join(roomCode);
      
      playerConnections.get(socket.id).roomCode = roomCode;
      playerConnections.get(socket.id).playerId = playerId;
      
      socket.emit('reconnected', {
        roomCode,
        playerId,
        name: player.name,
        playerList: room.getPlayerList(),
        roomState: room.state
      });
      
      console.log(`🔄 Перепідключено: ${player.name} (${playerId})`);
    }
  });
  
  socket.on('time_up', () => {
    const connInfo = playerConnections.get(socket.id);
    if (!connInfo?.playerId) return;
    
    const room = rooms.get(connInfo.roomCode);
    if (!room || room.state !== 'question') return;
    
    const player = room.players.get(connInfo.playerId);
    if (!player) return;
    
    // Якщо гравець ще не відповів - рахуємо як невідповідь
    if (!room.answers.has(connInfo.playerId)) {
      player.wrongCount++;
      player.streak = 0;
      
      room.answers.set(connInfo.playerId, {
        answer: null,
        timeLeft: 0,
        correct: false,
        points: 0,
        speedBonus: 0,
        streakBonus: 0,
        streak: 0,
        timestamp: Date.now()
      });
      
      console.log(`⏱ ${player.name} не встиг відповісти`);
    }
  });
  
  // ========== DISCONNECT ==========
  socket.on('disconnect', (reason) => {
    console.log(`❌ Відключення: ${socket.id} (${reason})`);
    
    const connInfo = playerConnections.get(socket.id);
    if (!connInfo) return;
    
    const { roomCode, isHost, playerId } = connInfo;
    
    if (!roomCode) {
      playerConnections.delete(socket.id);
      return;
    }
    
    const room = rooms.get(roomCode);
    if (!room) {
      playerConnections.delete(socket.id);
      return;
    }
    
    if (isHost) {
      room.hostConnections = room.hostConnections.filter(id => id !== socket.id);
      
      if (room.hostConnections.length === 0) {
        emitToRoom(room, 'host-disconnected');
        rooms.delete(roomCode);
        console.log(`🚫 Кімната ${roomCode} закрита (хост вийшов)`);
      }
    } else if (playerId) {
      const player = room.players.get(playerId);
      if (player) {
        const noConnectionsLeft = room.removePlayerConnection(playerId, socket.id);
        
        if (noConnectionsLeft) {
          room.players.delete(playerId);
          
          emitToRoom(room, 'player-left', {
            playerId: playerId,
            playerName: player.name
          });
          
          console.log(`👋 ${player.name} повністю вийшов з ${roomCode}`);
          scheduleAutoStartIfReady(room);
        } else {
          console.log(`📴 ${player.name} відключив один пристрій, залишилось: ${player.connections.length}`);
        }
      }
    }
    
    playerConnections.delete(socket.id);
  });
});

// ==================== СЕРВЕР ====================
const PORT = process.env.PORT || 3000;
console.log('Starting server on port', PORT);
server.listen(PORT, () => {
  console.log(`🎯 Сервер запущено на порті ${PORT}`);
  console.log(`🌐 Хост: http://localhost:${PORT}/host.html`);
  console.log(`📱 Гравець: http://localhost:${PORT}/player.html`);
  console.log(`📊 Перевірка підключень: http://localhost:${PORT}/`);
});