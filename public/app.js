/* public/app.js - Оновлена версія з WebSocket підтримкою */

(() => {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  
  const isHost = document.title.includes("Host");

  // ===== i18n =====
  const I18N = {
    uk: {
      // host
      room: "Кімната",
      roomDesc: "Гравці заходять з телефонів по коду. Після цього запускай матч і раунди.",
      createRoom: "Створити кімнату",
      reset: "Скинути",
      roomCode: "Код кімнати",
      copy: "Копіювати",
      players: "Гравці",
      startMatch: "Почати матч",
      // quiz
      quizHost: "Quiz — Панель хоста",
      quizDesc: "Питання, таймер, хто відповів.",
      openForPlayers: "Відкрито для гравців",
      timer: "Таймер",
      round: "Раунд",
      question: "Питання",
      theme: "Тема",
      difficulty: "Складність",
      questionText: "Текст питання буде тут...",
      number: "#",
      player: "Гравець",
      points: "Бали",
      roundStats: "Статистика раунду:",
      correct: "правильних",
      incorrect: "неправильних",
      noAnswer: "не відповіли",
      // toast
      copied: "Код скопійовано!"
    },
    de: {
      room: "Raum",
      roomDesc: "Spieler treten per Code über ihre Handys bei. Dann startest du das Match und die Runden.",
      createRoom: "Raum erstellen",
      reset: "Zurücksetzen",
      roomCode: "Raumcode",
      copy: "Kopieren",
      players: "Spieler",
      startMatch: "Spiel starten",
      quizHost: "Quiz — Host-Panel",
      quizDesc: "Fragen, Timer, wer geantwortet hat.",
      openForPlayers: "Offen für Spieler",
      timer: "Timer",
      round: "Runde",
      question: "Frage",
      theme: "Thema",
      difficulty: "Schwierigkeit",
      questionText: "Fragetext wird hier stehen...",
      number: "#",
      player: "Spieler",
      points: "Punkte",
      roundStats: "Rundenstatistik:",
      correct: "richtig",
      incorrect: "falsch",
      noAnswer: "nicht geantwortet",
      copied: "Code kopiert!"
    }
  };

  function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.uk;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    try { localStorage.setItem('dp_lang', lang); } catch {}
  }
  
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
    // usedQuestions: new Set() // Для уникнення повторів питань — ПЕРЕНЕСЕНО НА СЕРВЕР
  };
  
  let hostTimerInterval = null;

/* =========================
   PATCH A: Duel/Party Engine
   ========================= */

// Безпечні доступи до questions.js
const Q = (typeof window !== "undefined" ? window.grammarQuestions : null);
const getRand = (typeof window !== "undefined" ? window.getRandomQuestion : null);
const getMixRand = (typeof window !== "undefined" ? window.getRandomMixQuestion : null);
const DUEL = (typeof window !== "undefined" ? window.DUEL_SETTINGS : null);

function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
function nowMs() { return (typeof performance !== "undefined" ? performance.now() : Date.now()); }

const PartyDuel = {
  // Налаштування режиму
  mode: "party", // "party" | "duel"
  theme: "sein",
  level: null, // "A1" | "A2" | null
  difficulty: null, // "easy"|"normal"|"hard"|null

  // Стан раунду
  usedByTheme: new Map(), // theme -> Set(ids)
  current: null,
  questionStartedAt: 0,
  timeLimitSec: 14,
  timeLeftSec: 14,
  timerId: null,

  // Гравці / очки
  players: [
    { name: "P1", score: 0, streak: 0, bestStreak: 0 },
    { name: "P2", score: 0, streak: 0, bestStreak: 0 }
  ],
  activePlayerIndex: 0, // для duel
  round: 0,

  // UI hooks (створимо якщо нема)
  ui: {
    hud: null,
    score: null,
    streak: null,
    timer: null,
    turn: null,
    toast: null
  },

  ensureUsedSet(theme) {
    if (!this.usedByTheme.has(theme)) this.usedByTheme.set(theme, new Set());
    return this.usedByTheme.get(theme);
  },

  // Створює HUD поверх сторінки, якщо ти не маєш свого
  mountHUD() {
    if (this.ui.hud) return;

    const hud = document.createElement("div");
    hud.id = "partyduel-hud";
    hud.innerHTML = `
      <div class="pd-row">
        <div class="pd-box">
          <div class="pd-label">SCORE</div>
          <div id="pd-score" class="pd-value">0</div>
        </div>
        <div class="pd-box">
          <div class="pd-label">STREAK</div>
          <div id="pd-streak" class="pd-value">0</div>
        </div>
        <div class="pd-box">
          <div class="pd-label">TIME</div>
          <div id="pd-timer" class="pd-value">00</div>
        </div>
        <div class="pd-box pd-turn">
          <div class="pd-label">TURN</div>
          <div id="pd-turn" class="pd-value">P1</div>
        </div>
      </div>
      <div id="pd-toast" class="pd-toast" style="display:none"></div>
    `;
    document.body.appendChild(hud);

    this.ui.hud = hud;
    this.ui.score = hud.querySelector("#pd-score");
    this.ui.streak = hud.querySelector("#pd-streak");
    this.ui.timer = hud.querySelector("#pd-timer");
    this.ui.turn = hud.querySelector("#pd-turn");
    this.ui.toast = hud.querySelector("#pd-toast");

    this.renderHUD();
  },

  toast(msg) {
    if (!this.ui.toast) return;
    this.ui.toast.textContent = msg;
    this.ui.toast.style.display = "block";
    clearTimeout(this._toastT);
    this._toastT = setTimeout(() => {
      this.ui.toast.style.display = "none";
    }, 1100);
  },

  setMode(mode) {
    this.mode = (mode === "duel") ? "duel" : "party";
    this.activePlayerIndex = 0;
    this.renderHUD();
  },

  setTheme(theme, opts = {}) {
    this.theme = theme;
    this.level = opts.level ?? this.level;
    this.difficulty = opts.difficulty ?? this.difficulty;
  },

  resetScores() {
    this.players[0].score = 0; this.players[0].streak = 0; this.players[0].bestStreak = 0;
    this.players[1].score = 0; this.players[1].streak = 0; this.players[1].bestStreak = 0;
    this.activePlayerIndex = 0;
    this.round = 0;
    this.renderHUD();
  },

  // Отримати нове питання (без повторів по темі)
  nextQuestion() {
    if (!Q || !getMixRand) {
      console.error("questions.js не підключений (window.grammarQuestions / window.getRandomMixQuestion).");
      return null;
    }
    const q = getMixRand();
    if (!q) return null;
    this.current = q;
    this.round += 1;
  // Тема більше не впливає на вибір питання

    // Таймер з питання або з дефолтів
    const baseLimit =
      (q.timeLimitSec != null ? q.timeLimitSec :
        (DUEL?.time?.byDifficulty?.[q.difficulty] ?? 14));

    this.timeLimitSec = clamp(baseLimit, 6, 30);
    this.timeLeftSec = this.timeLimitSec;
    this.questionStartedAt = nowMs();

    this.renderHUD();
    this.startTimer();

    return q;
  },

  // Розрахунок очок: base * combo * speedBonus
  calcPoints(isCorrect) {
    const p = this.players[this.activePlayerIndex];
    const q = this.current;
    const base = (q?.points ?? 1);

    if (!isCorrect) return 0;

    const mult = (DUEL?.combo?.getMultiplier ? DUEL.combo.getMultiplier(p.streak) : 1.0);

    // speed bonus: від 0 до +30% (чим швидше — тим більше)
    const elapsed = (nowMs() - this.questionStartedAt) / 1000;
    const t = clamp(elapsed / this.timeLimitSec, 0, 1);
    const speedBonus = 1.0 + (0.30 * (1 - t)); // 1.30 при миттєвій відповіді, 1.0 під кінець

    const raw = base * mult * speedBonus;
    return Math.max(1, Math.round(raw));
  },

  applyAnswer(selected) {
    if (!this.current) return { ok: false, reason: "no_question" };

    const q = this.current;
    const isCorrect = (selected === q.correct);

    this.stopTimer();

    const p = this.players[this.activePlayerIndex];

    if (isCorrect) {
      p.streak += 1;
      p.bestStreak = Math.max(p.bestStreak, p.streak);

      const pts = this.calcPoints(true);
      p.score += pts;

      // UX: короткий фідбек
      const mult = (DUEL?.combo?.getMultiplier ? DUEL.combo.getMultiplier(p.streak) : 1.0);
      const tag = mult >= 2 ? "🔥" : (mult >= 1.5 ? "⚡" : (mult >= 1.2 ? "✨" : ""));
      this.toast(`+${pts} ${tag}`);
    } else {
      p.streak = 0;
      this.toast("✖");
    }

    // У duel — передаємо хід
    if (this.mode === "duel") {
      this.activePlayerIndex = (this.activePlayerIndex === 0 ? 1 : 0);
    }

    this.renderHUD();

    return {
      ok: true,
      correct: isCorrect,
      correctAnswer: q.correct,
      explanation: q.explanation,
      hint: q.hint
    };
  },

  onTimeUp() {
    // Тайм-ап = помилка: streak скидається, у duel передається хід
    const p = this.players[this.activePlayerIndex];
    p.streak = 0;
    this.toast("⏱");

    if (this.mode === "duel") {
      this.activePlayerIndex = (this.activePlayerIndex === 0 ? 1 : 0);
    }
    this.renderHUD();
  },

  startTimer() {
    this.stopTimer();
    this.timerId = setInterval(() => {
      const elapsed = (nowMs() - this.questionStartedAt) / 1000;
      this.timeLeftSec = clamp(this.timeLimitSec - elapsed, 0, this.timeLimitSec);
      this.renderHUD();

      if (this.timeLeftSec <= 0.001) {
        this.stopTimer();
        this.onTimeUp();
        // Ти сам вирішуєш: авто-наступне питання чи чекати кліку "Next"
        // Залишаю нейтрально: просто timeUp, без auto-next.
      }
    }, 100);
  },

  stopTimer() {
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = null;
  },

  renderHUD() {
    if (!this.ui.score) return;

    const p = this.players[this.activePlayerIndex];
    const activeName = p?.name ?? "P1";

    // Score: в party — один скор, в duel — показуємо активного (внизу можеш розширити до 2)
    this.ui.score.textContent =
      this.mode === "party"
        ? String(this.players[0].score)
        : `${this.players[0].score} : ${this.players[1].score}`;

    this.ui.streak.textContent = String(p.streak);
    this.ui.timer.textContent = String(Math.ceil(this.timeLeftSec)).padStart(2, "0");
    this.ui.turn.textContent = (this.mode === "duel") ? activeName : "—";
  }
};
  
  // ==================== DOM ЕЛЕМЕНТИ ====================
  // Player
  const joinCard  = $("#joinCard");
  const lobbyCard = $("#lobbyCard");
  const answerCard = $("#answerCard");
  const resultsCard = $("#resultCard");
  
      // Додаємо логіку для quiz-переходу
      const btnStartMatch = document.getElementById('btnStartMatch');


      if (btnStartMatch) {
        btnStartMatch.onclick = () => {
          // Критично: відправляємо подію на сервер
          socket.emit('host:start-match');
        };
      }
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
  
  // Функція для оновлення статусу сервера
  function updateServerStatus(status) {
    const serverPill = $("#serverPill");
    const serverStatus = $("#serverStatus");
    
    if (serverPill && serverStatus) {
      serverStatus.textContent = status;
      serverPill.className = `pill ${status === 'online' ? 'online' : 'offline'}`;
    }
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
        <div class="result-row rank-${index+1} ${isCurrentPlayer ? 'current-player' : ''}">
          <div class="result-left">
            <span class="medal">${medal}</span>
            <span class="status">${status}</span>
            <span class="name">
              ${result.name}
              ${result.streak >= 2 ? '🔥' + result.streak : ''}
            </span>
          </div>
          <div class="result-right">
            <span class="points">
              +${result.points}
              <small class="muted">
                (⚡${result.speedBonus || 0} 🔥${result.streakBonus || 0})
              </small>
            </span>
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
    
    // Безпечно ховаємо всі картки
    [joinCard, lobbyCard, answerCard, resultsCard].forEach(card => {
      if (card && card.classList) card.classList.add('hidden');
    });
    
    switch(phase) {
      case 'JOIN':
        if (joinCard) joinCard.classList.remove('hidden');
        break;
      case 'LOBBY':
        if (lobbyCard) lobbyCard.classList.remove('hidden');

        // ✅ Гарантуємо що нік/кімната не "зникають" після RESULTS → LOBBY
        if (roomText) roomText.textContent = state.roomCode || roomText.textContent || '—';
        if (meText) meText.textContent = state.nickname || meText.textContent || '—';

        // waiting status (якщо є)
        const lobbyStatus = document.getElementById('lobbyStatus');
        if (lobbyStatus) lobbyStatus.textContent = state.isReady
          ? 'Ти готовий ✅ Чекаємо інших…'
          : 'Натисни “Готовий”, щоб вчитель міг почати раунд';

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
    clearInterval(state.timerInterval);
    state.timeLeft = duration;
    const timerFill = $('.timer > div');
    const timerText = $('.timer > span');
    const tText = document.getElementById('timerText');
    if (tText) tText.textContent = `${duration}s`;
    if (timerText) timerText.textContent = duration;
    if (timerFill) timerFill.style.width = '100%';
    state.timerInterval = setInterval(() => {
      state.timeLeft--;
      const percent = (state.timeLeft / duration) * 100;
      if (timerFill) timerFill.style.width = `${percent}%`;
      if (timerText) timerText.textContent = state.timeLeft;
      if (tText) tText.textContent = `${state.timeLeft}s`;
      if (state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
        socket.emit('time_up');
        submitAnswer(null);
        $$('.answer-btn').forEach(btn => btn.disabled = true);
        const submitBtn = $('.card-foot .btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Час вийшов';
        }
      }
    }, 1000);
  }
  // ==================== КРИТИЧНО: ПЕРЕХІД У QUESTION ====================
  socket.on('question', data => {
    state.currentQuestion = data;
    setPhase('QUESTION');
    startTimer(data.duration);
    // Рендер питання та варіантів (адаптуй під свою верстку)
    if (document.querySelector('#questionText')) {
      document.querySelector('#questionText').textContent = data.question;
    }
    const answers = document.querySelectorAll('.answer-btn');
    answers.forEach((btn, i) => {
      btn.textContent = data.options[i];
      btn.disabled = false;
    });
  });
  
  // ==================== HOST ЛОГІКА ====================
// ==================== HOST QUIZ UI (matches host.html ids) ====================
const elRoomCodeBig   = document.getElementById('roomCodeBig');
const elRoundNumber   = document.getElementById('roundNumber');
const elQuizTimer     = document.getElementById('quizTimer');
const elQuizTimerFill = document.getElementById('quizTimerFill');
const elPlayersCount  = document.getElementById('playersCount');
const elQuestionTheme = document.getElementById('questionTheme');
const elQuestionDiff  = document.getElementById('questionDifficulty');
const elQuizQuestion  = document.getElementById('quizQuestion');
const elQuizAnswers   = document.getElementById('quizAnswers');
const elScoreList     = document.getElementById('scoreList');
const elRoundStats    = document.getElementById('roundStats');

// UI init: до старту раунду показуємо нейтральне значення, а не 1/10 з макету
if (elRoundNumber && !document.body.classList.contains('is-quiz')) {
  const v = (elRoundNumber.textContent || '').trim();
  if (v === '1/10' || v === '') elRoundNumber.textContent = '—/—';
}



// hostTimerInterval оголошено глобально
let hostRoundStats = { correct: 0, wrong: 0, noAnswer: 0 };

function setRoundStatsUI() {
  if (!elRoundStats) return;
  elRoundStats.textContent = `${hostRoundStats.correct} правильних • ${hostRoundStats.wrong} неправильних • ${hostRoundStats.noAnswer} не відповіли`;
}

function renderHostScoreboard(scores = []) {
  if (!elScoreList) return;

  if (!scores.length) {
    elScoreList.innerHTML = `<div class=\"srow empty\"><div></div><div class=\"muted\">Немає даних</div><div></div></div>`;
    return;
  }

  const sorted = [...scores].sort((a,b) => (b.score ?? 0) - (a.score ?? 0));
  elScoreList.innerHTML = sorted.map((p, idx) => `
    <div class=\"srow\">
      <div>${idx + 1}</div>
      <div>${(p.name ?? '—')}</div>
      <div class=\"right\">${(p.score ?? 0)}</div>
    </div>
  `).join('');
}
  function renderHostScoreboard(scores = []) {
    if (!elScoreList) return;
    if (!scores.length) {
      elScoreList.innerHTML = `<div class="srow empty"><div></div><div class="muted">Немає даних</div><div></div></div>`;
      return;
    }
    const sorted = [...scores].sort((a,b) => (b.score ?? 0) - (a.score ?? 0));
    elScoreList.innerHTML = sorted.map((p, idx) => `
      <div class="srow">
        <div>${idx + 1}</div>
        <div>${(p.name ?? '—')}</div>
        <div class="right">${(p.score ?? 0)}</div>
      </div>
    `).join('');
  }

  // --- Рендер результатів питання (очок за питання) ---
  function renderHostRoundResults(results = [], scores = []) {
    if (!elScoreList) return;
    // Мапа: playerId -> name
    const nameById = new Map((scores || []).map(p => [p.id || p.playerId, p.name]));
    if (!results.length) {
      elScoreList.innerHTML =
        `<div class="srow empty"><div></div><div class="muted">Немає відповідей</div><div></div></div>`;
      return;
    }
    // показуємо очки саме за питання (points), сорт за points
    const sorted = [...results].sort((a, b) => (b.points ?? 0) - (a.points ?? 0));
    elScoreList.innerHTML = sorted.map((r, idx) => {
      const nm = r.name || nameById.get(r.playerId) || '—';
      const pts = (r.points ?? 0);
      const icon = r.correct ? '✅' : '❌';
      return `
        <div class="srow">
          <div>${idx + 1}</div>
          <div>${icon} ${nm}</div>
          <div class="right">+${pts}</div>
        </div>
      `;
    }).join('');
  }

function renderHostQuestion(question) {
  if (!question) return;
  if (elQuizQuestion) elQuizQuestion.textContent = question.question ?? '—';

  if (elQuizAnswers) {
    const opts = question.options ?? [];
    elQuizAnswers.innerHTML = opts.map(opt => `
      <button class=\"answer\" type=\"button\" disabled>${opt}</button>
    `).join('');
  }

  // якщо бек віддає theme/difficulty — показуємо
  if (elQuestionTheme) elQuestionTheme.textContent = question.theme ?? 'Grammar';
  if (elQuestionDiff)  elQuestionDiff.textContent  = question.difficulty ?? 'Легко';
}

function startHostTimer(seconds) {
  clearInterval(hostTimerInterval);

  const total = Math.max(0, Number(seconds) || 0);
  let t = total;

  if (elQuizTimer) elQuizTimer.textContent = `${t}s`;
  if (elQuizTimerFill) elQuizTimerFill.style.width = '100%';

  hostTimerInterval = setInterval(() => {
    t--;

    const clamped = Math.max(t, 0);
    if (elQuizTimer) elQuizTimer.textContent = `${clamped}s`;

    if (elQuizTimerFill) {
      const pct = total > 0 ? (clamped / total) * 100 : 0;
      elQuizTimerFill.style.width = `${pct}%`;
    }

    if (t <= 0) clearInterval(hostTimerInterval);
  }, 1000);
}

// Тема за замовчуванням (бо select у host.html відсутній)
function pickDefaultTheme() {
  const keys = Object.keys(window.grammarQuestions || {});
  return keys.includes('sein') ? 'sein' : (keys[0] || null);
}

function hostStartRoundDefault() {
  const theme = pickDefaultTheme();
  if (!theme) return toast('Помилка', 'questions.js не завантажився або немає тем');
  socket.emit('host:start-round', { theme });
}
  function hostCreateRoom() {
    socket.emit('host:create-room');
  }
  
  function hostStartGrammarRound() {
    // Вибір теми для раунду
    const themeSelect = document.getElementById('quizThemeSelect');
    const theme = themeSelect?.value;
    if (!theme) return toast('Помилка', 'Обери тему!');
    if (!window.grammarQuestions?.[theme]) return toast('Помилка', 'Немає запитань для цієї теми!');
    socket.emit('host:start-round', { theme });
    toast('Раунд стартував', 'Гравці отримали питання');
  }
  
  function hostShowResults() {
    socket.emit('host:show-results');
    toast('Показані результати раунду', '');
  }
  
  function hostResetRoom() {
    socket.emit('host:reset-room');
    toast('Кімната скинута', '');
  }
  
  function updatePlayerList(players) {
    if (!playersList) return;
    
    playersList.innerHTML = '';
    players.forEach(player => {
      const playerEl = document.createElement('div');
      playerEl.className = 'player-item'; // ЗМІНИТИ з 'player-row' на 'player-item'
      playerEl.innerHTML = `
        <div class="player-left">
          <div class="avatar">${player.name.charAt(0)}</div>
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
    // Використовуємо правильний ідентифікатор гравця
    socket.emit('player:answer', {
      playerId: state.playerId || state.socketId, // Додаємо fallback
      answer: answer,
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
  
  // ==================== SOCKET ПОДІЇ ====================


  // Загальні події
  socket.on('connect', () => {
    state.socketId = socket.id;
    console.log('🔗 Підключено до сервера');
    if (isHost) updateServerStatus('online');
  });
  
  socket.on('disconnect', () => {
    toast('З\'єднання втрачено', 'Перепідключення...');
    if (isHost) updateServerStatus('offline');
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

    // якщо сервер шле correct=true/false — обновляємо counters
    if (data?.correct === true) hostRoundStats.correct++;
    else if (data?.correct === false) hostRoundStats.wrong++;

    setRoundStatsUI();
  });
  
  socket.on('round-started', (data) => {
    if (!isHost) return;

    const { question, duration, round, maxRounds, scores, playerCount } = data;

    // перейти на quiz екран
    document.body.classList.add('is-quiz');
    document.getElementById('screenLobby')?.classList.add('hidden');
    document.getElementById('screenQuiz')?.classList.remove('hidden');

    // синхронізувати великий код кімнати
    if (elRoomCodeBig) elRoomCodeBig.textContent = (state.roomCode || '').split('').join(' ');

    // раунд / гравці
    if (elRoundNumber)  elRoundNumber.textContent  = `${round ?? 1}/${maxRounds ?? 10}`;
        if (elRoundNumber) {
          const total = (typeof window.getMixQuestionCount === 'function') ? window.getMixQuestionCount() : (maxRounds ?? 10);
          elRoundNumber.textContent = `${round ?? 1}/${total}`;
        }
    if (elPlayersCount) elPlayersCount.textContent = `${playerCount ?? 0}/8`;

    // reset round stats
    hostRoundStats = { correct: 0, wrong: 0, noAnswer: 0 };
    setRoundStatsUI();

    // рендер питання/варіантів + таблиця
    renderHostQuestion(question);
    renderHostScoreboard(scores || []);

    // таймер
    startHostTimer(duration ?? 15);
  });
  
  socket.on('round-ended', (data) => {
    if (!isHost) return;
    clearInterval(hostTimerInterval);

    const results = Array.isArray(data?.results) ? data.results : [];
    const scores  = Array.isArray(data?.scores)  ? data.scores  : [];

    // Рендер таблиці очок і/або результатів раунду
    if (scores.length) renderHostScoreboard(scores);
    if (results.length) renderHostRoundResults(results, scores);

    // статистика: предпочитаем данные от сервера, иначе считаем локально
    if (data?.stats && typeof data.stats === 'object') {
      hostRoundStats = {
        correct: data.stats.correct ?? hostRoundStats.correct,
        wrong: data.stats.wrong ?? hostRoundStats.wrong,
        noAnswer: data.stats.noAnswer ?? hostRoundStats.noAnswer
      };
    } else {
      const answered = results.length;
      const totalPlayers = scores.length;
      const correct = results.filter(r => r.correct).length;
      const wrong = results.filter(r => r.correct === false).length;
      const noAnswer = Math.max(totalPlayers - answered, 0);
      hostRoundStats = { correct, wrong, noAnswer };
    }

    setRoundStatsUI();

    // 3) оновити "раунд X/Y"
    if (elRoundNumber) elRoundNumber.textContent = `${data.round ?? '—'}/${data.maxRounds ?? '—'}`;
      if (elRoundNumber) {
        const total = (typeof window.getMixQuestionCount === 'function') ? window.getMixQuestionCount() : (data.maxRounds ?? '—');
        elRoundNumber.textContent = `${data.round ?? '—'}/${total}`;
      }
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
    state.playerId = data.playerId;
    setPhase('LOBBY');
    if (pillRoom) pillRoom.textContent = data.roomCode;
    if (roomText) roomText.textContent = data.roomCode;
    if (meText) meText.textContent = state.nickname;
    toast('Успішно!', `У кімнаті ${data.roomCode}`);

    try {
      localStorage.setItem('dp_room', state.roomCode || '');
      localStorage.setItem('dp_name', state.nickname || '');
    } catch {}
  });
  
  socket.on('player-ready-changed', (data) => {
    if (data.playerId === state.playerId || data.playerId === state.socketId) {
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

    const lobbyStatus = document.getElementById('lobbyStatus');
    if (lobbyStatus) {
      lobbyStatus.textContent = !data.allReady
        ? 'Чекаємо, поки всі натиснуть "Готовий"…'
        : `Всі готові! Старт через ${data.countdownSec}…`;
    }
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
    
    if (!isHost) {
      setPhase('RESULTS');
      showResults(data);
      
      // Оновлюємо кнопку "Ок"
      const btnResultOk = $('#btnResultOk');
      if (btnResultOk) {
        btnResultOk.onclick = () => {
          setPhase('LOBBY');
          toast('Готовий до наступного раунду!', '');
        };
      }
    } else {
      // Для хоста: просто показуємо повідомлення
      console.log('Хост отримав результати:', data);
    }
  });
  
  socket.on('match-ended', (data) => {
    clearInterval(state.timerInterval);
    
    if (!isHost) {
      setPhase('RESULTS');
      
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
        
        const sortedScores = data.scores?.sort((a, b) => b.score - a.score) || [];
        
        sortedScores.forEach((player, index) => {
          const isCurrentPlayer = player.id === state.playerId;
          const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅';
          const trophy = index === 0 ? '👑' : '';
          
          resultsHtml += `
            <div class="final-row ${isCurrentPlayer ? 'current-player' : ''} ${index === 0 ? 'winner' : ''}" 
                  style="display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; margin-bottom: 12px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid var(--card-border);">
              <div class="final-left" style="display: flex; align-items: center; gap: 12px;">
                <span class="medal" style="font-size: 16px; width: 20px; text-align: center;">${medal}</span>
                <span class="trophy" style="font-size: 24px;">${trophy}</span>
                <span class="name" style="font-weight: 500;">${player.name || 'Без імені'}</span>
              </div>
              <div class="final-right" style="font-weight: 700; font-size: 18px;">
                <span class="final-score" style="color: var(--accent); font-size: 20px; font-weight: 900;">
                  ${player.score || 0} очок
                </span>
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
    }
  });
  
  socket.on('results', (data) => {
    // Для хоста: показати фінальні результати у quiz UI
    if (scoreBox && data.scores) {
      renderQuizScoreboard(data.scores);
    }
    if (quizStats && data.stats) {
      renderQuizStats(data.stats);
    }
    toast('Матч завершено!', 'Фінальні результати оновлені');
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
      
      // Перемикаємо назад на lobby екран
      const screenLobby = document.getElementById('screenLobby');
      const screenQuiz = document.getElementById('screenQuiz');
      screenLobby?.classList.remove('hidden');
      screenQuiz?.classList.add('hidden');
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
    if (data.playerId !== state.playerId) {
      toast('Гравець вийшов', data.playerName);
    }
  });
  
  socket.on('room-state-updated', (roomState) => {
    // Синхронізація стану кімнати
    console.log('Оновлення стану кімнати:', roomState);
  });
  
  // ==================== UI РЕНДЕРИНГ ====================
  /* =========================
     PATCH C: Підключення до твого рендера/кнопок
     ========================= */
  // 1) Коли тобі треба показати нове питання

  function showNextQuestion() {
    const q = PartyDuel.nextQuestion();
    if (!q) return;

    // Підстав свої DOM-елементи:
    // Приклад очікуваних id (заміни на свої):
    const qt = document.getElementById("questionText");
    const box = document.getElementById("optionsBox");

    if (qt) qt.textContent = q.question;

    if (box) {
      box.innerHTML = "";
      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = opt;
        btn.onclick = () => onAnswerClick(opt);
        box.appendChild(btn);
      });
    }
  }

  // 2) Коли гравець натиснув відповідь

  function onAnswerClick(selectedOption) {
    const res = PartyDuel.applyAnswer(selectedOption);
    if (!res.ok) return;

    // Тут — твій фідбек/пояснення (опціонально)
    const explain = document.getElementById("explainBox");
    if (explain) {
      explain.textContent = res.correct
        ? `✅ Правильно. ${res.explanation || ""}`
        : `❌ Ні. Правильна: ${res.correctAnswer}. ${res.explanation || ""}`;
    }

    // Авто-перехід на наступне питання через 800мс (party feel)
    setTimeout(() => {
      showNextQuestion();
    }, 800);
  }

  // 3) Старт гри / раунд

  // Де ти зараз запускаєш вікторину — просто виклич:

  // showNextQuestion();

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
    // Перевіряємо чи є елемент resultCard
    const resultCard = $('#resultCard');
    if (!resultCard) {
      console.warn('resultCard не знайдено, пропускаємо показ результатів');
      return;
    }
    
    const container = resultCard.querySelector('.results-container');
    if (!container) return;
    
    // Знаходимо свою відповідь
    const myResult = data.results?.find(r => 
      r.playerId === state.playerId || r.name === state.nickname
    ) || {};
    
    const isCorrect = myResult.correct || false;
    const myAnswer = myResult.answer || 'Немає відповіді';
    
    let html = `
      <div style="text-align:center; margin-bottom:20px;">
        <div style="font-size:20px; font-weight:bold; color:var(--accent); margin-bottom:12px;">
          Правильна відповідь: ${data.correctAnswer || 'Не вказано'}
        </div>
    `;
    
    if (data.explanation) {
      html += `<div style="color:var(--muted); margin-bottom:16px;">${data.explanation}</div>`;
    }
    
    html += `
        <div class="answer-highlight ${isCorrect ? 'correct-highlight' : 'incorrect-highlight'}" style="margin: 0 auto 20px; max-width: 300px;">
          Ваша відповідь: ${myAnswer} ${isCorrect ? '✅ Правильно!' : '❌ Неправильно'}
        </div>
      </div>
      <div class="list">
    `;
    
    if (data.results && Array.isArray(data.results)) {
      data.results.forEach((result, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        const correctIcon = result.correct ? '✅' : '❌';
        const isMe = result.playerId === state.playerId || result.name === state.nickname;
        const highlight = isMe ? 'background: rgba(255,77,122,0.2); border: 2px solid var(--accent);' : '';
        
        html += `
          <div class="player-item" style="align-items:center; ${highlight}">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
              <div style="font-size:18px; margin-right:10px;">${medal}</div>
              <div class="avatar" style="${isMe ? 'background: linear-gradient(135deg, var(--accent), var(--tertiary));' : ''}">
                ${isMe ? 'Я' : (result.name?.charAt(0) || '?')}
              </div>
              <div>
                <div style="font-weight: 700; font-size: 16px;">${result.name || 'Без імені'} ${isMe ? '(Ви)' : ''}</div>
                <div style="font-size:12px; color:${result.correct ? '#00ff00' : '#ff4444'};">
                  ${result.answer || 'Немає відповіді'} ${correctIcon}
                </div>
              </div>
            </div>
            <div class="badge ${result.correct ? 'ready' : ''}" style="${result.correct ? 'background: rgba(0,255,0,0.2); border-color: #00ff00; color: #00ff00;' : 'background: rgba(255,0,0,0.1); border-color: #ff4444; color: #ff4444;'}">
              ${result.points || 0} балів
            </div>
          </div>
        `;
      });
    }
    
    html += '</div>';
    container.innerHTML = html;
    
    // Оновлюємо підзаголовок
    const resultSub = $('#resultSub');
    if (resultSub) {
      resultSub.textContent = `Раунд ${data.round || 1}/${data.maxRounds || 1} завершено`;
    }
    
    // Оновлюємо пояснення
    const resultExplain = $('#resultExplain');
    if (resultExplain) {
      resultExplain.textContent = data.explanation || '';
    }
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
  
  function setRoundStatsUI() {
    const roundStatsEl = document.getElementById('roundStats');
    if (!roundStatsEl || !window.hostRoundStats) return;
    
    const { correct, wrong, noAnswer } = window.hostRoundStats;
    // Используем функцию из host.html для обновления
    if (typeof updateRoundStats === 'function') {
      updateRoundStats(localStorage.getItem('dp_lang') || 'uk');
    } else {
      // Fallback
      roundStatsEl.textContent = `${correct} правильних • ${wrong} неправильних • ${noAnswer} не відповіли`;
    }
  }
  
  // ===== LANGUAGE SELECT (host/player) =====
  function initLanguageOverlay() {
    const screenLang = document.getElementById('screenLang');
    const screenLobby = document.getElementById('screenLobby');

    // 1) якщо мова вже збережена — застосувати і прибрати екран вибору
    let saved = null;
    try { saved = localStorage.getItem('dp_lang'); } catch {}
    if (saved) applyLanguage(saved);

    if (!screenLang) return;

    if (saved) {
      screenLang.remove(); // ✅ кнопки повністю зникають
      return;
    }

    // 2) якщо мови нема — ховаємо лобі до вибору
    if (screenLobby) screenLobby.classList.add('hidden');

    screenLang.querySelectorAll('button[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang || 'uk';
        applyLanguage(lang);

        // ✅ прибираємо весь екран (кнопки зникли)
        screenLang.remove();

        // показуємо лобі
        if (screenLobby) screenLobby.classList.remove('hidden');
      });
    });
  }
  
  // ==================== ІНІЦІАЛІЗАЦІЯ ====================
  function init() {
    /* =========================
       PATCH B: Init
       ========================= */
    document.addEventListener("DOMContentLoaded", () => {
      // Дефолт язык, якщо не встановлений
      if (!localStorage.getItem('dp_lang')) localStorage.setItem('dp_lang', 'uk');

      PartyDuel.mountHUD();

      // 1) стартові значення
      PartyDuel.setMode("party");        // або "duel"
      PartyDuel.setTheme("sein", { level: "A1" });

      // 2) імена для duel (опціонально)
      PartyDuel.players[0].name = "P1";
      PartyDuel.players[1].name = "P2";

      // 3) (опціонально) перевірка кількості питань
      if (window.getTotalQuestionCount) {
        console.log("Total questions:", window.getTotalQuestionCount());
      }

      initLanguageOverlay();
    });

    // Тема
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      const icon = $('#themeToggle .value');
      if (icon) icon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    }
    
    // Відновлення кімнати/ніку для стабільного UI
    try {
      const savedRoom = localStorage.getItem('dp_room');
      const savedName = localStorage.getItem('dp_name');
      if (savedRoom && !state.roomCode) state.roomCode = savedRoom;
      if (savedName && !state.nickname) state.nickname = savedName;

      if (pillRoom && state.roomCode) pillRoom.textContent = state.roomCode;
      if (roomText && state.roomCode) roomText.textContent = state.roomCode;
      if (meText && state.nickname) meText.textContent = state.nickname;
    } catch {}
    
    $('#themeToggle')?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      const icon = $('#themeToggle .value');
      if (icon) icon.textContent = next === 'light' ? '☀️' : '🌙';
    });
    
    // Ініціалізація статусу сервера
    if (isHost) updateServerStatus('offline');
    
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

        // Перемикаємо на quiz екран
        const screenLobby = document.getElementById('screenLobby');
        const screenQuiz = document.getElementById('screenQuiz');
        screenLobby?.classList.add('hidden');
        screenQuiz?.classList.remove('hidden');

        const b = document.getElementById('btnStartMatch');
        if (b) b.style.display = 'none';
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
  
  // Додатковий фікс для перемикання екранів
  document.addEventListener('DOMContentLoaded', function() {
    // Перевірка для хоста: правильне перемикання екранів
    if (isHost) {
    }
  });

  // ===== BACKGROUND MUSIC =====
  const bgMusic = document.getElementById('bgMusic');

  function startMusicOnce() {
    if (!bgMusic) return;
    bgMusic.volume = 0.35;
    bgMusic.play().catch(() => {
      // autoplay blocked — ок
    });
    document.removeEventListener('click', startMusicOnce);
  }

  // браузер дозволить звук тільки після першого кліку
  document.addEventListener('click', startMusicOnce);
})();