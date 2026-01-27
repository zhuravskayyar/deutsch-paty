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
  room.answers.clear();

  emitToRoom(room, 'round-started', {
    question,
    duration: room.roundDuration,
    round: room.totalQuestionsUsed,
    maxRounds: room.maxRounds,
    playerCount: room.players.size,
    scores: room.getPlayerList()
  });

  room._roundTimer = setTimeout(() => {
    if (room.state === 'question') {
      endRound(room.code);
    }
  }, room.roundDuration * 1000);

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

  console.log(`🏁 Питання ${room.totalQuestionsUsed}/${room.maxRounds} завершено`);

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
    
    const isCorrect = answer === room.currentQuestion.correct;

    let points = 0;
    let speedBonus = 0;
    let streakBonus = 0;

    if (isCorrect) {
      player.correctCount++;
      player.streak++;

      const base = (room.currentQuestion.points || 1) * 5;
      speedBonus = Math.round((timeLeft / room.roundDuration) * 5);
      streakBonus = Math.min(player.streak * 2, 10);

      points = base + speedBonus + streakBonus;
      player.score += points;
    } else {
      player.wrongCount++;
      player.streak = 0;
    }
    
    room.answers.set(actualPlayerId, {
      answer,
      timeLeft,
      correct: isCorrect,
      points,
      speedBonus,
      streakBonus,
      streak: player.streak,
      timestamp: Date.now()
    });
    
    io.to(room.hostSocketId).emit('player-answered', {
      playerId: actualPlayerId,
      playerName: player.name,
      answer,
      correct: isCorrect,
      timeLeft,
      points,
      speedBonus,
      streakBonus,
      totalScore: player.score
    });
    
    socket.emit('answer-received', { correct: isCorrect });
    
    console.log(`📝 ${player.name} відповів: ${answer} (${isCorrect ? 'правильно' : 'помилка'})`);
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
server.listen(PORT, () => {
  console.log(`🎯 Сервер запущено на порті ${PORT}`);
  console.log(`🌐 Хост: http://localhost:${PORT}/host.html`);
  console.log(`📱 Гравець: http://localhost:${PORT}/player.html`);
  console.log(`📊 Перевірка підключень: http://localhost:${PORT}/`);
});