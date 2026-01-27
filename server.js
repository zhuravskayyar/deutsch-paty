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
    // Запобігає дублюванню під час перезавантаження
    maxDisconnectionDuration: 2 * 60 * 1000, // 2 хвилини
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

// ==================== ПОЛІПШЕНІ СТРУКТУРИ ДАНИХ ====================
const rooms = new Map(); // roomCode -> Room object
const playerConnections = new Map(); // playerId -> socketId[] (всі підключення гравця)
const allUsedQuestionsGlobal = new Set(); // Глобальний набір використаних питань для всіх кімнат

// Поліпшена структура кімнати
class Room {
  constructor(code, hostSocketId) {
    this.code = code;
    this.hostSocketId = hostSocketId;
    this.hostConnections = [hostSocketId]; // Всі підключення хоста
    this.players = new Map(); // playerId -> {name, ready, score, connections[]}
    this.state = 'lobby';
    this.currentQuestion = null;
    this.questionStartTime = null;
    this.roundDuration = 25;
    this.theme = 'sein'; // дефолт тема
    this.answers = new Map();
    this.createdAt = Date.now();
    this.matchStarted = false;
    this.loopQuestions = false;
    this.roundPauseMs = 1500; // пауза між питаннями
    this.readyCheckStartedAt = Date.now();
    this.autoStartCountdown = null; // timeout id
    this.autoStartDelaySec = 3;     // короткий "3..2..1"
    this.usedQuestions = new Set(); // Для уникнення повторів питань
    this.roundIndex = 0;
    this.maxRounds = 10;
    this.totalQuestionsUsed = 0;
  }
  
  // Отримати список гравців для відображення
  getPlayerList() {
    return Array.from(this.players.values()).map(p => ({
      id: p.id,
      name: p.name,
      ready: p.ready,
      score: p.score,
      connectionCount: p.connections.length
    }));
  }
  
  // Додати підключення гравця
  addPlayerConnection(playerId, socketId) {
    if (!this.players.has(playerId)) return;
    const player = this.players.get(playerId);
    if (!player.connections.includes(socketId)) {
      player.connections.push(socketId);
    }
  }
  
  // Видалити підключення гравця
  removePlayerConnection(playerId, socketId) {
    if (!this.players.has(playerId)) return;
    const player = this.players.get(playerId);
    player.connections = player.connections.filter(id => id !== socketId);
    return player.connections.length === 0; // Повертає true, якщо не залишилось підключень
  }
  
  // Отримати активні сокети гравця
  getPlayerSockets(playerId) {
    return this.players.has(playerId) ? this.players.get(playerId).connections : [];
  }
}

// ==================== ПОЛІПШЕНІ ФУНКЦІЇ ====================
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

function getRandomQuestionGlobal(allUsedQuestions, lastQuestionId = null) {
  // Собираем все доступные вопросы из всех тем
  const allQuestions = [];
  for (const theme in grammarQuestions) {
    allQuestions.push(...grammarQuestions[theme]);
  }
  
  // Фильтруем неиспользованные
  const availableQuestions = allQuestions.filter(q => !allUsedQuestions.has(q.id));
  
  if (availableQuestions.length === 0) {
    // Все вопросы использованы - возвращаем null для окончания матча
    return null;
  }
  
  // Избегаем повторения последнего вопроса
  let candidates = availableQuestions;
  if (lastQuestionId !== null && availableQuestions.length > 1) {
    candidates = availableQuestions.filter(q => q.id !== lastQuestionId);
  }
  
  return candidates[Math.floor(Math.random() * candidates.length)];
}

// Функція для надсилання подій лише один раз на гравця
function emitToPlayer(room, playerId, event, data) {
  const playerSockets = room.getPlayerSockets(playerId);
  if (playerSockets.length > 0) {
    // Надсилаємо лише першому активному сокету
    io.to(playerSockets[0]).emit(event, data);
  }
}

// Функція для надсилання всім у кімнаті без дублів
function emitToRoom(room, event, data) {
  // Збираємо унікальні сокети
  const uniqueSockets = new Set();
  
  // Додаємо хоста
  room.hostConnections.forEach(socketId => uniqueSockets.add(socketId));
  
  // Додаємо гравців
  for (let player of room.players.values()) {
    if (player.connections.length > 0) {
      uniqueSockets.add(player.connections[0]); // Тільки перше підключення
    }
  }
  
  // Надсилаємо
  uniqueSockets.forEach(socketId => {
    io.to(socketId).emit(event, data);
  });
}

// ==================== HELPER-ФУНКЦІЇ ДЛЯ READY-CHECK ====================
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
  // Не стартуємо під час питання / якщо матч уже йде
  if (room.matchStarted) return;
  if (room.state !== 'lobby') return;

  // Якщо не всі ready — прибираємо таймер
  if (!isEveryoneReady(room)) {
    clearAutoStart(room);
    emitToRoom(room, 'ready-check:status', {
      allReady: false,
      countdownSec: null
    });
    return;
  }

  // Всі ready — ставимо countdown, якщо ще не стоїть
  if (room.autoStartCountdown) return;

  emitToRoom(room, 'ready-check:status', {
    allReady: true,
    countdownSec: room.autoStartDelaySec
  });

  room.autoStartCountdown = setTimeout(() => {
    room.autoStartCountdown = null;

    // Перевіряємо ще раз (хтось міг відвалитись)
    if (!isEveryoneReady(room)) {
      emitToRoom(room, 'ready-check:status', { allReady: false, countdownSec: null });
      return;
    }

    room.matchStarted = true;

    emitToRoom(room, 'match-started', {
      startedAt: Date.now()
    });

    // (опційно) автостарт першого граматичного раунду з дефолт темою
    // end-user: можна змінити на room.theme або останню вибрану
    const theme = room.theme || 'sein';
    startRound(room, theme);

  }, room.autoStartDelaySec * 1000);
}

// ==================== ФУНКЦІЯ ЗАПУСКУ РАУНДУ ====================
function startRound(room, theme = null) {
  if (!room || room.state === 'question') return;

  // Перевірка ліміту питань: 50 на матч
  if (room.totalQuestionsUsed >= 50) {
    console.log(`🎉 50 питань використано! Матч завершено.`);
    emitToRoom(room, 'match-ended', {
      scores: room.getPlayerList(),
      reason: 'questions-limit-reached'
    });
    room.matchStarted = false;
    return;
  }

  // Використовуємо глобальну логіку вибору питань
  const question = getRandomQuestionGlobal(
    allUsedQuestionsGlobal,
    room.currentQuestion?.id
  );

  if (!question) {
    // Всі питання використані - завершуємо матч
    console.log(`🎉 Всі ${getTotalQuestionsCount()} питань використані! Матч завершено.`);
    emitToRoom(room, 'match-ended', {
      scores: room.getPlayerList(),
      reason: 'all-questions-used'
    });
    room.matchStarted = false;
    return;
  }

  allUsedQuestionsGlobal.add(question.id);
  room.totalQuestionsUsed++;
  room.state = 'question';
  room.currentQuestion = question;
  room.questionStartTime = Date.now();
  room.answers.clear();

  emitToRoom(room, 'round-started', {
    question,
    duration: room.roundDuration,
    round: room.totalQuestionsUsed,
    maxRounds: 50,
    playerCount: room.players.size,
    scores: room.getPlayerList()
  });

  // ⏱ серверний таймер
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
  console.log(`🔌 Нове підключення: ${socket.id}`);
  
  // Таймер для відстеження дублів
  const connectionId = Date.now();
  socket.connectionId = connectionId;
  
  // Відстежуємо всі підключення
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
    // Перевіряємо, чи вже є кімната у цього хоста
    const existingRoom = findRoomByHostSocket(socket.id);
    if (existingRoom) {
      socket.emit('room-created', { roomCode: existingRoom.code });
      return;
    }
    
    const roomCode = generateRoomCode();
    const room = new Room(roomCode, socket.id);
    
    rooms.set(roomCode, room);
    socket.join(roomCode);
    
    // Оновлюємо інформацію про підключення
    playerConnections.get(socket.id).roomCode = roomCode;
    playerConnections.get(socket.id).isHost = true;
    
    socket.emit('room-created', { roomCode });
    socket.emit('player-list-updated', room.getPlayerList());
    
    console.log(`🎮 Хост ${socket.id} створив кімнату ${roomCode}`);
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

    if (room.matchStarted) return; // уже запущено

    room.matchStarted = true;
    // Не встановлюємо loopQuestions = true, використовуємо глобальну логіку питань

    emitToRoom(room, 'match-started', { startedAt: Date.now() });

    // Запускаємо перший раунд з глобальної бази питань
    startRound(room);

    console.log(`🚀 MATCH START (all questions) у кімнаті ${room.code}`);
  });
  
  // ========== PLAYER ДІЇ ==========
  socket.on('player:join', ({ roomCode, name, playerId = null }) => {
    const room = rooms.get(roomCode);
    if (!room) {
      socket.emit('error', { message: 'Кімнату не знайдено' });
      return;
    }
    
    // Генеруємо унікальний ID гравця, якщо не надано
    const actualPlayerId = playerId || `player_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Перевіряємо, чи гравець вже в кімнаті
    let player = room.players.get(actualPlayerId);
    
    if (player) {
      // Гравець вже існує - додаємо нове підключення
      player.connections.push(socket.id);
      console.log(`↪️ Повторне підключення: ${player.name} (${actualPlayerId})`);
    } else {
      // Новий гравець
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
    
    // Оновлюємо інформацію про підключення
    playerConnections.get(socket.id).roomCode = roomCode;
    playerConnections.get(socket.id).isHost = false;
    playerConnections.get(socket.id).playerId = actualPlayerId;
    
    socket.join(roomCode);
    
    // Надсилаємо відповідь клієнту
    socket.emit('joined', {
      roomCode,
      playerId: actualPlayerId,
      name: player.name,
      playerList: room.getPlayerList(),
      isReconnect: !!playerId
    });
    
    // Хост отримує оновлення (тільки якщо це новий гравець або перше підключення)
    if (player.connections.length === 1) {
      io.to(room.hostSocketId).emit('player-joined', {
        playerId: actualPlayerId,
        name: player.name,
        connectionCount: player.connections.length
      });
    }
    
    // Всім у кімнаті - оновлений список
    emitToRoom(room, 'player-list-updated', room.getPlayerList());

    // якщо прийшов новий гравець — автостарт таймер скинути
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
  });
  
  socket.on('player:answer', ({ playerId, answer, timeLeft }) => {
    const connInfo = playerConnections.get(socket.id);
    const actualPlayerId = playerId || connInfo?.playerId;
    if (!actualPlayerId) return;
    
    const room = findRoomByPlayerSocket(socket.id);
    if (!room || room.state !== 'question') return;
    
    const player = room.players.get(actualPlayerId);
    if (!player) return;
    
    // Перевіряємо, чи гравець вже відповів
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
    
    // Хост отримує відповідь
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
    
    // Гравцю - підтвердження (тільки на активний сокет)
    socket.emit('answer-received', { correct: isCorrect });
    
    console.log(`📝 ${player.name} відповів: ${answer} (${isCorrect ? 'правильно' : 'помилка'})`);
  });
  
  // ========== ДОДАТКОВІ ПОДІЇ ==========
  socket.on('player:reconnect', ({ playerId, roomCode }) => {
    // Клієнт намагається перепідключитися
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
  
  // ========== DISCONNECT ЛОГІКА ==========
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
      // Хост відключається
      room.hostConnections = room.hostConnections.filter(id => id !== socket.id);
      
      if (room.hostConnections.length === 0) {
        // Немає активних підключень хоста - закриваємо кімнату
        emitToRoom(room, 'host-disconnected');
        rooms.delete(roomCode);
        console.log(`🚫 Кімната ${roomCode} закрита (хост вийшов)`);
      }
    } else if (playerId) {
      // Гравець відключається
      const player = room.players.get(playerId);
      if (player) {
        const noConnectionsLeft = room.removePlayerConnection(playerId, socket.id);
        
        if (noConnectionsLeft) {
          // Гравець повністю вийшов
          room.players.delete(playerId);
          
          emitToRoom(room, 'player-left', {
            playerId: playerId,
            playerName: player.name
          });
          
          console.log(`👋 ${player.name} повністю вийшов з ${roomCode}`);

          // Після видалення гравця — перевіряємо ready-check
          scheduleAutoStartIfReady(room);
        } else {
          console.log(`📴 ${player.name} відключив один пристрій, залишилось: ${player.connections.length}`);
        }
      }
    }
    
    // Видаляємо інформацію про це підключення
    playerConnections.delete(socket.id);
  });
});

// ==================== ФУНКЦІЇ ДЛЯ РАУНДІВ ====================
function endRound(roomCode, meta = {}) {
  const room = rooms.get(roomCode);
  if (!room) return;
  if (room.state !== 'question') return;

  room.state = 'lobby';
  clearRoundTimer(room);

  // ✅ старий формат (щоб фронт не падав)
  const resultsSimple = Array.from(room.answers.entries()).map(([playerId, a]) => ({
    playerId,
    correct: a.correct,
    points: a.points,
    answer: a.answer
  }));

  // ✅ новий детальний (для хоста/лідерборда, якщо треба)
  const resultsDetailed = calculateResults(room);

  emitToRoom(room, 'round-ended', {
    results: resultsSimple,              // <-- як було раніше
    resultsDetailed: resultsDetailed,    // <-- додатково
    scores: room.getPlayerList(),
    round: room.totalQuestionsUsed,
    maxRounds: 50,
    reason: meta.reason || 'ended'
  });

  console.log(`🏁 Питання ${room.totalQuestionsUsed}/50 завершено`);

  // ⏭ автоперехід до наступного питання
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

// ==================== СЕРВЕР ====================
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🎯 Сервер запущено на порті ${PORT}`);
  console.log(`🌐 Хост: http://localhost:${PORT}/host.html`);
  console.log(`📱 Гравець: http://localhost:${PORT}/player.html`);
  console.log(`📊 Перевірка підключень: http://localhost:${PORT}/`);
});