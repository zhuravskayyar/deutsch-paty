/* public/app.js - Оновлена версія з WebSocket підтримкою */

(() => {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  
  const isHost = document.title.includes("Host");
  
  // WebSocket підключення
  const socket = io();
  
  // Стан гри
  const state = {
    roomCode: "",
    nickname: "",
    socketId: null,
    playerId: null, // <-- додати
    isReady: false,
    phase: "JOIN", // JOIN | LOBBY | QUESTION | RESULTS
    currentQuestion: null,
    selectedAnswer: null,
    timeLeft: 0,
    timerInterval: null,
    usedQuestions: new Set() // Для уникнення повторів питань
  };
  
  let hostTimerInterval = null;
  
  // ==================== DOM ЕЛЕМЕНТИ ====================
  // Player
  const joinCard  = $("#joinCard");
  const lobbyCard = $("#lobbyCard");
  const answerCard = $("#answerCard");
  const resultsCard = $("#resultCard");
  
  const roomInput = $("#roomInput");
  const nameInput = $("#nameInput");
  const btnJoin   = $("#btnJoin");
  const btnReady  = $("#btnReady");
  
  const pillRoom  = $("#pillRoom");
  const roomText  = $("#roomText");
  const meText    = $("#meText");
  
  // Host
  const btnCreateRoom = $("#btnCreateRoom");
  const btnReset = $("#btnReset");
  const btnCopy = $("#btnCopy");
  const roomCodeEl = $("#roomCode");
  const playersList = $("#playersList");
  
  // ==================== ДОПОМІЖНІ ФУНКЦІЇ ====================
  function toast(title, text = "") {
    let el = $(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      el.innerHTML = `<b></b><div class="muted"></div>`;
      document.body.appendChild(el);
    }
    el.querySelector("b").textContent = title;
    el.querySelector(".muted").textContent = text;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 1200);
  }
  
  // Функції для фідбеку після відповіді
  function showCorrect() {
    const el = $('#feedback');
    if (!el) return;
    
    el.textContent = '✅ Правильно!';
    el.className = 'feedback success show';
  }
  
  function showHint(text) {
    const el = $('#feedback');
    if (!el) return;
    
    el.textContent = `❌ Неправильно. ${text}`;
    el.className = 'feedback error show';
  }
  
  function lockAnswers() {
    $$('.answer-btn').forEach(btn => btn.disabled = true);
  }
  
  function showResults(data) {
    const resultCard = $('#resultCard');
    const resultSub = $('#resultSub');
    const resultsContainer = resultCard?.querySelector('.results-container');
    const resultExplain = $('#resultExplain');
    const btnResultOk = $('#btnResultOk');
    
    if (!resultCard || !resultsContainer) return;
    
    // Заголовок
    if (resultSub) {
      resultSub.textContent = `Раунд ${data.round}/${data.maxRounds} завершено`;
    }
    
    // Результати гравців
    let resultsHtml = '<div class="leaderboard">';
    resultsHtml += '<h3>Результати раунду:</h3>';
    
    // Сортуємо за очками в раунді
    const sortedResults = data.results.sort((a, b) => b.points - a.points);
    
    sortedResults.forEach((result, index) => {
      const isCurrentPlayer = result.playerId === state.playerId;
      const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
      const status = result.correct ? '✅' : '❌';
      
      resultsHtml += `
        <div class="result-row ${isCurrentPlayer ? 'current-player' : ''}">
          <div class="result-left">
            <span class="medal">${medal}</span>
            <span class="status">${status}</span>
            <span class="name">${result.name}</span>
          </div>
          <div class="result-right">
            <span class="points">+${result.points}</span>
          </div>
        </div>
      `;
    });
    
    resultsHtml += '</div>';
    
    // Загальна таблиця
    resultsHtml += '<div class="total-scores">';
    resultsHtml += '<h3>Загальні результати:</h3>';
    
    const sortedScores = data.scores.sort((a, b) => b.score - a.score);
    
    sortedScores.forEach((player, index) => {
      const isCurrentPlayer = player.id === state.playerId;
      const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
      
      resultsHtml += `
        <div class="score-row ${isCurrentPlayer ? 'current-player' : ''}">
          <div class="score-left">
            <span class="medal">${medal}</span>
            <span class="name">${player.name}</span>
          </div>
          <div class="score-right">
            <span class="total-points">${player.score}</span>
          </div>
        </div>
      `;
    });
    
    resultsHtml += '</div>';
    
    resultsContainer.innerHTML = resultsHtml;
    
    // Пояснення правильної відповіді
    if (resultExplain && state.currentQuestion) {
      resultExplain.textContent = `Правильна відповідь: ${state.currentQuestion.correct}`;
    }
    
    // Кнопка OK
    if (btnResultOk) {
      btnResultOk.onclick = () => {
        // Повертаємось до лобі для наступного раунду
        setPhase('LOBBY');
        toast('Готовий до наступного раунду!', '');
      };
    }
  }
  
  function setPhase(phase) {
    state.phase = phase;
    
    [joinCard, lobbyCard, answerCard, resultsCard].forEach(card => {
      if (card) card.classList.add('hidden');
    });
    
    switch(phase) {
      case 'JOIN':
        if (joinCard) joinCard.classList.remove('hidden');
        break;
      case 'LOBBY':
        if (lobbyCard) lobbyCard.classList.remove('hidden');
        break;
      case 'QUESTION':
        if (answerCard) answerCard.classList.remove('hidden');
        break;
      case 'RESULTS':
        if (resultsCard) resultsCard.classList.remove('hidden');
        break;
    }
  }
  
  function startTimer(duration) {
    state.timeLeft = duration;
    const timerFill = $('.timer > div');
    const timerText = $('.timer > span');
    
    if (timerText) timerText.textContent = duration;
    if (timerFill) timerFill.style.width = '100%';
    
    state.timerInterval = setInterval(() => {
      state.timeLeft--;
      const percent = (state.timeLeft / duration) * 100;
      
      if (timerFill) timerFill.style.width = `${percent}%`;
      if (timerText) timerText.textContent = state.timeLeft;
      
      if (state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        submitAnswer(null);
        // Disable all buttons
        $$('.answer-btn').forEach(btn => btn.disabled = true);
        const submitBtn = $('.card-foot .btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Час вийшов';
        }
      }
    }, 1000);
  }
  
  // ==================== HOST ЛОГІКА ====================
  function hostCreateRoom() {
    socket.emit('host:create-room');
  }
  
  function hostStartGrammarRound() {
    const themeSelect = $('#themeSelect');
    const theme = themeSelect?.value;
    if (!theme) return toast('Помилка', 'Обери тему!');
    
    if (!window.grammarQuestions?.[theme]) return toast('Помилка', 'Немає запитань для цієї теми!');
    
    socket.emit('host:start-round', { theme });
    toast('Раунд стартував', 'Гравці отримали питання');
  }
  
  function hostShowResults() {
    socket.emit('host:show-results');
  }
  
  function hostResetRoom() {
    socket.emit('host:reset-room');
  }
  
  function updatePlayerList(players) {
    if (!playersList) return;
    
    playersList.innerHTML = '';
    players.forEach(player => {
      const playerEl = document.createElement('div');
      playerEl.className = 'player-row';
      playerEl.innerHTML = `
        <div class="player-left">
          <div class="avatar"></div>
          <div class="player-name">${player.name}</div>
        </div>
        <div class="badge ${player.ready ? 'ready' : ''}">
          ${player.ready ? 'готовий' : 'не готовий'}
        </div>
      `;
      playersList.appendChild(playerEl);
    });
  }
  
  // ==================== PLAYER ЛОГІКА ====================
  function playerJoin() {
    const code = (roomInput?.value || "").trim().replace(/\s+/g, "");
    const nick = (nameInput?.value || "").trim().substring(0, 14);
    
    if (!/^\d{6}$/.test(code)) return toast('Помилка', 'Код кімнати - 6 цифр');
    if (!nick) return toast('Помилка', 'Введи нік');
    
    state.roomCode = code;
    state.nickname = nick;
    
    socket.emit('player:join', { roomCode: code, name: nick });
  }
  
  function playerReady() {
    if (state.isReady) return;
    socket.emit('player:ready');
  }
  
  function submitAnswer(answer) {
    if (state.phase !== 'QUESTION') return;
    
    state.selectedAnswer = answer;
    socket.emit('player:answer', {
      playerId: state.playerId, // <-- додати
      answer: answer, // може бути null
      timeLeft: state.timeLeft
    });
    
    // Візуальна підтвердження
    $$('.answer-btn').forEach(btn => {
      const val = btn.querySelector('b')?.textContent;
      if (answer != null && val === answer) {
        btn.classList.add('is-selected');
      }
      btn.disabled = true;
    });
    
    const submitBtn = $('.card-foot .btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent =
        (answer == null) ? 'Час вийшов' : 'Відповідь надіслано';
    }
  }
  
  function startTimer(duration) {
    state.timeLeft = duration;
    const timerFill = $('.timer > div');
    const timerText = $('.timer > span');
    
    if (timerText) timerText.textContent = duration;
    if (timerFill) timerFill.style.width = '100%';
    
    state.timerInterval = setInterval(() => {
      state.timeLeft--;
      const percent = (state.timeLeft / duration) * 100;
      
      if (timerFill) timerFill.style.width = `${percent}%`;
      if (timerText) timerText.textContent = state.timeLeft;
      
      if (state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        submitAnswer(null);
        // Disable all buttons
        $$('.answer-btn').forEach(btn => btn.disabled = true);
        const submitBtn = $('.card-foot .btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Час вийшов';
        }
      }
    }, 1000);
  }
  
  // ==================== SOCKET ПОДІЇ ====================
  // Загальні події
  socket.on('connect', () => {
    state.socketId = socket.id;
    console.log('🔗 Підключено до сервера');
  });
  
  socket.on('disconnect', () => {
    toast('З\'єднання втрачено', 'Перепідключення...');
  });
  
  socket.on('error', (data) => {
    toast('Помилка', data.message);
  });
  
  // Host події
  socket.on('room-created', (data) => {
    state.roomCode = data.roomCode;
    if (roomCodeEl) roomCodeEl.textContent = data.roomCode.split('').join(' ');
    toast('Кімната створена', `Код: ${data.roomCode}`);
  });
  
  socket.on('player-joined', (player) => {
    toast('Гравець приєднався', player.name);
  });
  
  socket.on('player-list-updated', (players) => {
    updatePlayerList(players);
  });
  
  socket.on('player-answered', (data) => {
    if (!isHost) return;

    const li = document.createElement('li');
    li.textContent = `✔ ${data.playerName}`;
    document.getElementById('answeredList').appendChild(li);
  });
  
  socket.on('round-started', (data) => {
    if (!isHost) return;

    const { question, duration, round, maxRounds } = data;

    document.getElementById('hostRound').classList.remove('hidden');
    document.getElementById('hostQuestion').textContent =
      `Раунд ${round}/${maxRounds}: ${question.question}`;

    const optWrap = document.getElementById('hostOptions');
    optWrap.innerHTML = '';
    question.options.forEach(o => {
      const div = document.createElement('div');
      div.textContent = o;
      optWrap.appendChild(div);
    });

    document.getElementById('answeredList').innerHTML = '';

    let timeLeft = duration;
    document.getElementById('hostTime').textContent = timeLeft;

    clearInterval(hostTimerInterval);
    hostTimerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById('hostTime').textContent = timeLeft;
      if (timeLeft <= 0) clearInterval(hostTimerInterval);
    }, 1000);
  });
  
  socket.on('round-ended', (data) => {
    if (!isHost) return;

    clearInterval(hostTimerInterval);

    const list = document.getElementById('answeredList');
    list.innerHTML += `<li>— Раунд завершено —</li>`;
  });
  
  socket.on('host:round-details', (data) => {
    // Хост бачить деталі питання
    const roundEl = $('.round');
    if (roundEl) {
      const questionEl = roundEl.querySelector('.question');
      const answersEl = roundEl.querySelector('.answers');
      
      if (questionEl) {
        questionEl.innerHTML = `
          ${data.question.question}
          <small>Режим: Fast Choice • Тема: ${data.theme}</small>
        `;
      }
      
      if (answersEl) {
        answersEl.innerHTML = data.question.options.map((opt, i) => `
          <button class="answer-btn" disabled>
            <b>${opt}</b><span>варіант ${String.fromCharCode(65 + i)}</span>
          </button>
        `).join('');
      }
    }
  });
  
  // Player події
  socket.on('joined', (data) => {
    state.roomCode = data.roomCode;
    state.nickname = data.name;
    state.playerId = data.playerId;   // <-- ключове
    setPhase('LOBBY');
    
    if (pillRoom) pillRoom.textContent = data.roomCode;
    if (roomText) roomText.textContent = data.roomCode;
    if (meText) meText.textContent = state.nickname;
    
    toast('Успішно!', `У кімнаті ${data.roomCode}`);
  });
  
  socket.on('player-ready-changed', (data) => {
    if (data.playerId === state.socketId) {
      state.isReady = data.ready;
      if (btnReady) {
        btnReady.textContent = data.ready ? 'Готовий ✅' : 'Готовий';
        btnReady.disabled = data.ready;
      }
    }
  });

  socket.on('ready-check:status', (data) => {
    // data: { allReady, countdownSec }
    const note = document.querySelector('#lobbyCard .note');
    if (!note) return;

    if (!data.allReady) {
      note.textContent = 'Чекаємо поки всі натиснуть "Готовий".';
      return;
    }

    note.textContent = `Всі готові! Старт через ${data.countdownSec}...`;
  });

  socket.on('round-started', (data) => {
    state.currentQuestion = data.question;
    state.selectedAnswer = null;
    
    setPhase('QUESTION');
    renderQuestion(data.question, data.duration);
    startTimer(data.duration);
    
    toast('Раунд почався!', `${data.duration} секунд`);
  });
  
  socket.on('answer-received', ({ correct }) => {
    clearInterval(state.timerInterval);
    
    if (correct) {
      showCorrect(); // ✅ тільки "Правильно"
    } else {
      showHint(state.currentQuestion.explanation); // ❗ ТІЛЬКИ тут
    }
    
    lockAnswers();
  });
  
  socket.on('round-ended', (data) => {
    clearInterval(state.timerInterval);
    setPhase('RESULTS');
    showResults(data);
  });
  
  socket.on('match-ended', (data) => {
    clearInterval(state.timerInterval);
    setPhase('RESULTS');
    
    // Показуємо фінальні результати
    const resultCard = $('#resultCard');
    const resultSub = $('#resultSub');
    const resultsContainer = resultCard?.querySelector('.results-container');
    const resultExplain = $('#resultExplain');
    const btnResultOk = $('#btnResultOk');
    
    if (resultCard && resultsContainer) {
      if (resultSub) {
        resultSub.textContent = '🎉 Матч завершено! Фінальні результати:';
      }
      
      let resultsHtml = '<div class="final-results">';
      resultsHtml += '<h2>🏆 Переможці матчу:</h2>';
      
      const sortedScores = data.scores.sort((a, b) => b.score - a.score);
      
      sortedScores.forEach((player, index) => {
        const isCurrentPlayer = player.id === state.playerId;
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅';
        const trophy = index === 0 ? '👑' : '';
        
        resultsHtml += `
          <div class="final-row ${isCurrentPlayer ? 'current-player' : ''} ${index === 0 ? 'winner' : ''}">
            <div class="final-left">
              <span class="medal">${medal}</span>
              <span class="trophy">${trophy}</span>
              <span class="name">${player.name}</span>
            </div>
            <div class="final-right">
              <span class="final-score">${player.score} очок</span>
            </div>
          </div>
        `;
      });
      
      resultsHtml += '</div>';
      resultsContainer.innerHTML = resultsHtml;
      
      if (resultExplain) {
        resultExplain.textContent = 'Дякуємо за участь! Створіть нову кімнату для наступного матчу.';
      }
      
      if (btnResultOk) {
        btnResultOk.textContent = 'Повернутись до меню';
        btnResultOk.onclick = () => {
          setPhase('JOIN');
          toast('Готовий до нового матчу!', '');
        };
      }
    }
  });
  
  socket.on('results', (data) => {
    // Для хоста
    showHostResults(data);
  });
  
  socket.on('room-reset', () => {
    state.phase = 'LOBBY';
    state.isReady = false;
    setPhase('LOBBY');
    
    if (btnReady) {
      btnReady.textContent = 'Готовий';
      btnReady.disabled = false;
    }
    
    if (isHost) {
      const b = document.getElementById('btnStartMatch');
      if (b) b.style.display = '';
    }
    
    toast('Кімната скинута', 'Готовий до нового раунду?');
  });
  
  socket.on('host-disconnected', () => {
    toast('Хост вийшов', 'Кімната закрита');
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  });
  
  socket.on('player-left', (data) => {
    if (data.playerId !== state.socketId) {
      toast('Гравець вийшов', data.playerName);
    }
  });
  
  socket.on('room-state-updated', (roomState) => {
    // Синхронізація стану кімнати
    console.log('Оновлення стану кімнати:', roomState);
  });
  
  // ==================== UI РЕНДЕРИНГ ====================
  function renderQuestion(q, duration) {
    if (!answerCard) return;
    
    const qWrap = answerCard.querySelector(".question");
    const answersWrap = answerCard.querySelector(".answers");
    const note = answerCard.querySelector(".note");
    const footBtn = answerCard.querySelector(".card-foot .btn");
    const timerFill = answerCard.querySelector(".timer > div");
    
    // Скидання
    state.selectedAnswer = null;
    if (timerFill) timerFill.style.width = "100%";
    if (note) note.textContent = q.hint || q.explanation || "";
    
    // Питання
    if (qWrap) {
      qWrap.innerHTML = `
        ${q.question}
        <small>Обери правильну відповідь • ${duration} сек</small>
      `;
    }
    
    // Варіанти відповідей
    if (answersWrap) {
      answersWrap.innerHTML = "";
      q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "answer-btn";
        btn.innerHTML = `<b>${opt}</b><span>tap</span>`;
        
        btn.addEventListener("click", () => {
          // Single select
          answersWrap.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('is-selected'));
          btn.classList.add('is-selected');
          state.selectedAnswer = opt;
          
          if (footBtn) {
            footBtn.disabled = false;
            footBtn.textContent = "Надіслати";
          }
        });
        answersWrap.appendChild(btn);
      });
    }
    
    // Кнопка відправки
    if (footBtn) {
      footBtn.disabled = true;
      footBtn.textContent = "Обери відповідь";
      footBtn.onclick = () => {
        if (!state.selectedAnswer) return;
        submitAnswer(state.selectedAnswer);
      };
    }
  }
  
  function showResults(data) {
    const container = resultsCard.querySelector('.results-container');
    if (!container) return;
    
    // Знаходимо свою відповідь
    const myResult = data.results.find(r => r.playerId === state.socketId || r.name === state.nickname);
    const isCorrect = myResult?.correct || false;
    const myAnswer = myResult?.answer || 'Немає відповіді';
    
    let html = `
      <div style="text-align:center; margin-bottom:20px;">
        <div style="font-size:20px; font-weight:bold; color:var(--accent); margin-bottom:12px;">
          Правильна відповідь: ${data.correctAnswer}
        </div>
        <div style="color:var(--muted); margin-bottom:16px;">
          ${data.explanation}
        </div>
        
        <div class="answer-highlight ${isCorrect ? 'correct-highlight' : 'incorrect-highlight'}" style="margin: 0 auto 20px;">
          Ваша відповідь: ${myAnswer} ${isCorrect ? '✅ Правильно!' : '❌ Неправильно'}
        </div>
      </div>
      <div class="list">
    `;
    
    data.results.forEach((result, index) => {
      const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
      const correctIcon = result.correct ? '✅' : '❌';
      const isMe = result.playerId === state.socketId || result.name === state.nickname;
      const highlight = isMe ? 'background: rgba(255,77,122,0.2); border: 2px solid var(--accent);' : '';
      
      html += `
        <div class="player-row" style="align-items:center; ${highlight}">
          <div class="player-left">
            <div style="font-size:18px; margin-right:10px;">${medal}</div>
            <div class="avatar" style="${isMe ? 'background: linear-gradient(135deg, var(--accent), var(--tertiary));' : ''}">
              ${isMe ? 'Я' : result.name.charAt(0)}
            </div>
            <div>
              <div class="player-name">${result.name} ${isMe ? '(Ви)' : ''}</div>
              <div style="font-size:12px; color:${result.correct ? '#00ff00' : '#ff4444'};">
                ${result.answer || 'Немає відповіді'} ${correctIcon}
              </div>
            </div>
          </div>
          <div class="badge ${result.correct ? 'ready' : ''}" style="${result.correct ? 'background: rgba(0,255,0,0.2); border-color: #00ff00; color: #00ff00;' : 'background: rgba(255,0,0,0.1); border-color: #ff4444; color: #ff4444;'}">
            ${result.points} балів
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    container.innerHTML = html;
  }
  
  function showHostResults(data) {
    // Хост бачить детальні результати
    const roundEl = $('.round');
    if (!roundEl) return;
    
    const noteEl = roundEl.querySelector('.note');
    if (noteEl) {
      noteEl.innerHTML = `
        <strong>Результати раунду:</strong><br>
        ${data.map(r => `${r.name}: ${r.answer} (${r.correct ? '✅' : '❌'})`).join('<br>')}
      `;
    }
  }
  
  // ==================== ІНІЦІАЛІЗАЦІЯ ====================
  function init() {
    // Тема
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      const icon = $('#themeToggle .value');
      if (icon) icon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    }
    
    $('#themeToggle')?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      const icon = $('#themeToggle .value');
      if (icon) icon.textContent = next === 'light' ? '☀️' : '🌙';
    });
    
    // Host обробники
    if (isHost) {
      btnCreateRoom?.addEventListener('click', hostCreateRoom);
      btnReset?.addEventListener('click', hostResetRoom);
      
      btnCopy?.addEventListener('click', async () => {
        if (!state.roomCode) return;
        try {
          await navigator.clipboard.writeText(state.roomCode);
          toast('Скопійовано', state.roomCode);
        } catch {
          toast('Помилка', 'Скопіюй вручну');
        }
      });
      
      $('#btnStartMatch')?.addEventListener('click', () => {
        socket.emit('host:start-match');
        const b = document.getElementById('btnStartMatch');
        if (b) b.style.display = 'none'; // ✅ зникає
      });
      
      // Створюємо кімнату при завантаженні
      // setTimeout(hostCreateRoom, 500);
      
    } else {
      // Player обробники
      setPhase('JOIN');
      
      btnJoin?.addEventListener('click', playerJoin);
      btnReady?.addEventListener('click', playerReady);
      
      $('#btnResultOk')?.addEventListener('click', () => {
        setPhase('LOBBY');
      });
      
      nameInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') playerJoin();
      });
      roomInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') playerJoin();
      });
    }
  }
  
  // Запуск
  document.addEventListener('DOMContentLoaded', init);
})();