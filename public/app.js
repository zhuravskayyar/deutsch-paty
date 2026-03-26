/* public/app.js - Оновлена версія з WebSocket підтримкою */

(() => {
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  
  const isHost = window.APP_MODE === "host";

  // Remove/hide any leftover loading overlay early to avoid blank screens
  try {
    document.addEventListener('DOMContentLoaded', () => {
      // IDs/classes commonly used for loaders
      const selectors = ['#loader', '.loader', '.loading-screen', '.loading-overlay', '.loading'];
      selectors.forEach(s => {
        document.querySelectorAll(s).forEach(el => {
          try { el.remove(); } catch(e) { el.style.display = 'none'; }
        });
      });

      // also hide elements whose text clearly indicates loading in UA/RU/EN
      const texts = ['Завантаження', 'Загрузка', 'Loading', 'Завантаження…', 'Loading...'];
      document.querySelectorAll('body *').forEach(el => {
        try {
          const t = (el.textContent || '').trim();
          if (texts.includes(t) || texts.some(x => t.startsWith(x))) {
            // hide parent overlay if it looks like a loader
            const p = el.closest('div') || el.parentElement;
            if (p) p.style.display = 'none';
          }
        } catch(e) {}
      });

      // Fail-safe: hide loader after 3 seconds if still visible
      setTimeout(() => {
        const loader = document.querySelector('.loader, #loader');
        if (loader) loader.style.display = 'none';
      }, 3000);
    });
  } catch(e) {}

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
      ,
      feedbackCorrect: "✅ Правильно!",
      feedbackIncorrectPrefix: "❌ Неправильно.",
      explanationPrefix: "Правильна відповідь:"
      ,
      // index
      subtitle: "Мультиплеєрна вікторина німецької",
      selectRole: "ВИБЕРІТЬ РОЛЬ",
      selectRoleSub: "Приєднуйтесь до гри або створіть власну кімнату",
      iAmHost: "🎭 Я — Хост",
      iAmPlayer: "🎮 Я — Гравець",
      clockQuestion: "Котра година?",
      selectLanguage: "Оберіть мову",
      chooseInterfaceLanguage: "Виберіть мову інтерфейсу",
      ukrainian: "Українська",
      german: "Deutsch",
      teacherMode: "Teacher Mode",
      // player UI
      joinTitle: "Вхід у кімнату",
      joinDesc: "Введи код і нік. Потім натисни “Готовий”.",
      joinBtn: "Увійти",
      readyBtn: "Готовий",
      submitAnswer: "Обери відповідь",
      ok: "Ок",
      waitingTitle: "Очікуємо старт…",
      waitingSub: "Попроси вчителя натиснути старт раунду",
      lobbyNote: "Після старту з’явиться завдання. Відповідь — одним натисканням.",
      chooseAnswer: "Обери правильну відповідь",
      joinNote: "Після входу чекай на старт від вчителя.",
      round: "Раунд",
      time: "Час",
      result: "Результат"
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
      ,
      feedbackCorrect: "✅ Richtig!",
      feedbackIncorrectPrefix: "❌ Falsch.",
      explanationPrefix: "Richtige Antwort:"
      ,
      // index
      subtitle: "Mehrspielerviktory Deutsch",
      selectRole: "ROLLE WÄHLEN",
      selectRoleSub: "Trete einem Spiel bei oder erstelle deinen eigenen Raum",
      iAmHost: "🎭 Ich bin Host",
      iAmPlayer: "🎮 Ich bin Spieler",
      clockQuestion: "Wie spät ist es?",
      selectLanguage: "Sprache wählen",
      chooseInterfaceLanguage: "Wähle die Schnittstellensprache",
      ukrainian: "Ukrainisch",
      german: "Deutsch",
      teacherMode: "Lehrer-Modus",
      // player UI
      joinTitle: "Raum beitreten",
      joinDesc: "Gib den Code und deinen Namen ein. Danach auf „Bereit“ klicken.",
      joinBtn: "Beitreten",
      readyBtn: "Bereit",
      submitAnswer: "Antwort wählen",
      ok: "OK",
      waitingTitle: "Warten auf den Start…",
      waitingSub: "Bitte den Lehrer, die Runde zu starten",
      lobbyNote: "Nach dem Start erscheint die Aufgabe. Antwort per Tipp.",
      chooseAnswer: "Wähle die richtige Antwort",
      joinNote: "Nach dem Beitreten warte auf den Start durch den Lehrer.",
      round: "Runde",
      time: "Zeit",
      result: "Ergebnis"
    }
  };

  function resolveLocalizedText(value, lang) {
    if (!value) return "";
    if (typeof value === "string") return value;         // старий формат
    if (typeof value === "object") return value[lang] || value.de || value.uk || "";
    return "";
  }

  // ===== LANG SYSTEM =====
  const LANG = {
    current: 'de'
  };

  let isTeacherMode = false; // Teacher mode toggle
  try { isTeacherMode = localStorage.getItem('dp_teacher_mode') === 'true'; } catch {}

  function setLanguage(lang) {
    LANG.current = lang;
    localStorage.setItem('dp_lang', lang);
    applyLanguage(lang);
    renderDynamicTexts();
  }

  function t(key) {
    return I18N[LANG.current]?.[key] ?? key;
  }

  function uiText(key) {
    const copy = LANG.current === 'de'
      ? {
          hostSub: 'Raum • Lobby • Match',
          hostHint: 'Klicke auf "Spiel starten" - Fragen laufen nonstop.',
          serverLabel: 'Server',
          playerSub: 'Beitritt • Lobby • Runde',
          codeLabel: 'Code',
          roomCodeLabel: 'Raumcode',
          roomCodePlaceholder: 'z.B. 483921',
          roomCodeHelper: '6 Ziffern, ohne Leerzeichen.',
          nicknameLabel: 'Name',
          nicknamePlaceholder: 'Dein Name',
          nicknameHelper: 'Kurz, damit es in die Liste passt.',
          roomMetaLabel: 'Raum',
          youLabel: 'Du',
          waitingPanelTitle: 'Warten auf den Start...',
          timerLabel: 'Zeit',
          yourPoints: 'Deine Punkte',
          rankLabel: 'Rang',
          answeredLabel: 'Geantwortet',
          clockType: 'Uhr',
          clockPrompt: 'Wähle die richtige Uhrzeit',
          resultSub: 'Rundenergebnis',
          you: 'Du',
          added: 'Dazu',
          total: 'Gesamt',
          correctStat: 'Richtig',
          progressToNextLevel: 'Fortschritt bis zum nächsten Level',
          topPlayers: 'Top-Spieler',
          nextRound: 'Nächste Runde',
          tap: 'Tippen',
          sendAnswer: 'Senden',
          sent: 'Gesendet',
          waitingOthers: 'Warten auf die anderen...',
          roundStarted: 'Runde gestartet',
          seconds: 'Sek.',
          timeUp: 'Zeit ist um',
          timeUpSub: 'Du hast nicht rechtzeitig geantwortet',
          readyWaitingOthers: 'Du bist bereit. Wir warten auf die anderen...',
          pressReady: 'Klicke auf "Bereit", damit der Lehrer starten kann.',
          waitingReady: 'Warten, bis alle auf "Bereit" klicken.',
          allReadyPrefix: 'Alle sind bereit! Start in',
          noData: 'Keine Daten',
          noAnswers: 'Keine Antworten'
        }
      : {
          hostSub: 'Кімната • Лобі • Матч',
          hostHint: 'Натисни "Почати матч" - питання підуть нонстоп.',
          serverLabel: 'Сервер',
          playerSub: 'Вхід • Лобі • Раунд',
          codeLabel: 'Код',
          roomCodeLabel: 'Код кімнати',
          roomCodePlaceholder: 'Напр. 483921',
          roomCodeHelper: '6 цифр, без пробілів.',
          nicknameLabel: 'Нік',
          nicknamePlaceholder: 'Твій нік',
          nicknameHelper: 'Коротко, щоб помістилось у таблицю.',
          roomMetaLabel: 'Кімната',
          youLabel: 'Ти',
          waitingPanelTitle: 'Очікуємо старт...',
          timerLabel: 'Час',
          yourPoints: 'Ваші бали',
          rankLabel: 'Рейтинг',
          answeredLabel: 'Відповіли',
          clockType: 'Час',
          clockPrompt: 'Оберіть правильний час',
          resultSub: 'Результат раунду',
          you: 'Ви',
          added: 'Додано',
          total: 'Загалом',
          correctStat: 'Правильно',
          progressToNextLevel: 'Прогрес до наступного рівня',
          topPlayers: 'Топ гравців',
          nextRound: 'Наступний раунд',
          tap: 'натисни',
          sendAnswer: 'Надіслати',
          sent: 'Надіслано',
          waitingOthers: 'Чекаємо інших...',
          roundStarted: 'Раунд почався',
          seconds: 'сек.',
          timeUp: 'Час вийшов',
          timeUpSub: 'Не встигли відповісти',
          readyWaitingOthers: 'Ти готовий. Чекаємо інших...',
          pressReady: 'Натисни "Готовий", щоб вчитель міг почати раунд.',
          waitingReady: 'Чекаємо, поки всі натиснуть "Готовий".',
          allReadyPrefix: 'Всі готові! Старт через',
          noData: 'Немає даних',
          noAnswers: 'Немає відповідей'
        };

    return copy[key] ?? t(key);
  }

  function formatRank(rank) {
    if (!rank) return '-';
    return LANG.current === 'de' ? `${rank}.` : `${rank}-ий`;
  }

  function formatDifficultyLabel(level) {
    const map = LANG.current === 'de'
      ? { easy: 'Leicht', normal: 'Mittel', hard: 'Schwer' }
      : { easy: 'Легко', normal: 'Середньо', hard: 'Важко' };
    return map[level] || level || t('difficulty');
  }

  function getLocalizedField(field, isTeacher = false) {
    if (!field) return "";
    if (typeof field === "string") return field;
    // Если объект, и isTeacher, то взять teacherExplanation если есть
    if (isTeacher && field.teacherExplanation) {
      return field.teacherExplanation[LANG.current] || "";
    }
    return field[LANG.current] || field.de || field.uk || "";
  }

  function renderDynamicTexts() {
    const setText = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && value != null) el.textContent = value;
    };
    const setPlaceholder = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && value != null) el.setAttribute('placeholder', value);
    };

    setText('#hostSub', uiText('hostSub'));
    setText('#hostHint', uiText('hostHint'));
    setText('#serverPill .label', uiText('serverLabel'));

    setText('#playerSub', uiText('playerSub'));
    setText('body.player .pill .label', uiText('codeLabel'));
    setText('label[for="roomInput"]', uiText('roomCodeLabel'));
    setText('label[for="nameInput"]', uiText('nicknameLabel'));
    setPlaceholder('#roomInput', uiText('roomCodePlaceholder'));
    setPlaceholder('#nameInput', uiText('nicknamePlaceholder'));
    setText('.field:nth-of-type(1) .helper', uiText('roomCodeHelper'));
    setText('.field:nth-of-type(2) .helper', uiText('nicknameHelper'));
    setText('.player-status .status-item:nth-child(1) .status-label', uiText('yourPoints'));
    setText('.player-status .status-item:nth-child(2) .status-label', uiText('rankLabel'));
    setText('.player-status .status-item:nth-child(3) .status-label', uiText('answeredLabel'));
    setText('#lobbyCard .waiting-title', uiText('waitingPanelTitle'));
    setText('.timer-label span', uiText('timerLabel'));
    setText('#clockQuestionType', uiText('clockType'));
    setText('#clockPrompt', uiText('clockPrompt'));
    setText('#resultSub', uiText('resultSub'));
    setText('#resultPlayerName', uiText('you'));
    setText('.result-stats .stat:nth-child(1) span', uiText('added'));
    setText('.result-stats .stat:nth-child(2) span', uiText('total'));
    setText('.result-stats .stat:nth-child(3) span', uiText('correctStat'));
    setText('.result-stats .stat:nth-child(4) span', uiText('rankLabel'));
    setText('.progress-label span:first-child', uiText('progressToNextLevel'));
    setText('.leaderboard-compact h4', uiText('topPlayers'));
    setText('#btnNextRound span', uiText('nextRound'));

    const playerLobbyMeta = document.querySelector('#lobbyCard .card-sub');
    if (playerLobbyMeta) {
      const roomValue = state.roomCode || document.getElementById('roomText')?.textContent || '—';
      const meValue = state.nickname || document.getElementById('meText')?.textContent || '—';
      playerLobbyMeta.innerHTML = `${uiText('roomMetaLabel')}: <b id="roomText">${roomValue}</b> • ${uiText('youLabel')}: <b id="meText">${meValue}</b>`;
    }

    const lobbyStatus = document.getElementById('lobbyStatus');
    if (lobbyStatus) {
      lobbyStatus.textContent = state.isReady ? uiText('readyWaitingOthers') : t('waitingSub');
    }

    if (btnReady) {
      btnReady.textContent = state.isReady ? `${t('readyBtn')} ✅` : t('readyBtn');
    }
  }

  function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.de;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    try { localStorage.setItem('dp_lang', lang); } catch {}
  }

  // Expose and auto-apply language for player UI
  try {
    window.setLanguage = setLanguage;
    window.applyLanguage = setLanguage;
    const savedLang = (function(){ try { return localStorage.getItem('dp_lang'); } catch(e){ return null; }})();
    setLanguage(savedLang || 'de');
  } catch(e) {}
  
  // Вимкнення всіх сервіс-воркерів (тимчасово, для дебагу)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (let registration of registrations) {
        registration.unregister().then(success => {
          if (success) console.log('Service Worker unregistered:', registration.scope);
        }).catch(err => console.error('Unregister failed:', err));
      }
    });
    
    // Також видаляємо всі кеші, якщо вони заважають
    if ('caches' in window) {
      caches.keys().then(keys => {
        keys.forEach(key => caches.delete(key));
      });
    }
  }
  
  // Перевірка наявності Socket.IO
  if (typeof io === 'undefined') {
    console.error('Socket.IO клієнт не завантажився! Перевір <script src="/socket.io/socket.io.js">');
    document.body.innerHTML = '<h1 style="color:red; text-align:center;">Помилка: Socket.IO не завантажився</h1>';
    throw new Error('Socket.IO not loaded');
  }
  
  // WebSocket підключення
  const socket = io(window.location.origin, {
    transports: ['websocket'],           // ← примусово тільки websocket, без polling
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    timeout: 20000,
    forceNew: true                       // на всяк випадок, щоб не кешував старе підключення
  });
  
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
    score: 0,     // ← додай це
    rank: 0,      // ← додай це
    level: 1,     // ← додай це
    // usedQuestions: new Set() // Для уникнення повторів питань — ПЕРЕНЕСЕНО НА СЕРВЕР
  };

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
  let hostTimerInterval;
  let hostRoundStats = { correct: 0, wrong: 0, noAnswer: 0 };
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
  const elScoreList = $("#scoreList");
  
  // Quiz elements
  const elQuizQuestion = $("#quizQuestion");
  const elQuizAnswers = $("#quizAnswers");
  const elQuizTimer = $("#quizTimer");
  const elQuizTimerFill = $("#quizTimerFill");
  const elQuestionTheme = $("#questionTheme");
  const elQuestionDiff = $("#questionDifficulty");
  const elRoundNumber = $("#roundNumber");
  const elPlayersCount = $("#playersCount");
  const elRoomCodeBig = $("#roomCodeBig");
  
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
    const lang = document.documentElement.lang || 'uk';
    const dict = I18N[lang] || I18N.uk;
    el.textContent = dict.feedbackCorrect || '✅ Правильно!';
    el.className = 'feedback success show';
  }
  
  function showHint(text) {
    const el = $('#feedback');
    if (!el) return;
    const lang = document.documentElement.lang || 'uk';
    const dict = I18N[lang] || I18N.uk;
    const prefix = dict.feedbackIncorrectPrefix || '❌ Неправильно.';
    el.textContent = `${prefix} ${text || ''}`.trim();
    el.className = 'feedback error show';
  }
  
  function lockAnswers() {
    $$('.answer-btn').forEach(btn => btn.disabled = true);
  }

  function clearFeedback() {
    const el = $('#feedback');
    if (!el) return;
    el.hidden = true;
    el.className = 'feedback';
    el.innerHTML = '';
    el.removeAttribute('style');
  }

  function showFeedback(message, type = '') {
    let el = $('#feedback');
    if (!el) {
      el = document.createElement('div');
      el.id = 'feedback';
      el.className = 'feedback';
      const roundEl = document.querySelector('.round');
      if (roundEl) {
        roundEl.appendChild(el);
      }
    }
    el.hidden = false;
    el.className = `feedback${type ? ` ${type}` : ''} show`;
    el.removeAttribute('style');
    el.innerHTML = message;
  }

  function setQuestionNote(text = '') {
    const note = document.getElementById('hintText') || answerCard?.querySelector('.note');
    if (!note) return;
    note.textContent = text || '';
    note.hidden = !text;
    note.style.display = text ? '' : 'none';
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
      const lang = document.documentElement.lang || 'uk';
      const dict = I18N[lang] || I18N.uk;
      const prefix = dict.explanationPrefix || 'Правильна відповідь:';
      // Покажемо пояснення, якщо воно є, інакше — правильний варіант
      const explain = state.currentQuestion.explanation || state.currentQuestion.correct || '';
      resultExplain.textContent = `${prefix} ${explain}`;
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
          ? uiText('readyWaitingOthers')
          : uiText('pressReady');

        break;
      case 'QUESTION':
        if (answerCard) answerCard.classList.remove('hidden');
        break;
      case 'RESULTS':
        if (resultsCard) resultsCard.classList.remove('hidden');
        break;
    }
  }
  
  function startTimer(duration, endsAt = null) {
    clearInterval(state.timerInterval);
    state.timeLeft = Math.max(0, Number(duration) || 0);

    const timerFill = document.getElementById('timerFill') || answerCard?.querySelector('.timer-fill');
    const tText = document.getElementById('timerText');
    const totalMs = Math.max(1000, state.timeLeft * 1000);
    const finishAt = endsAt || (Date.now() + totalMs);
    const setUI = (msLeft) => {
      const safeMs = Math.max(0, msLeft);
      const leftSec = Math.ceil(safeMs / 1000);
      state.timeLeft = leftSec;
      const percent = totalMs > 0 ? (safeMs / totalMs) * 100 : 0;
      if (timerFill) timerFill.style.width = `${percent}%`;
      if (tText) tText.textContent = `${leftSec}s`;
    };

    setUI(finishAt - Date.now());

    state.timerInterval = setInterval(() => {
      const msLeft = finishAt - Date.now();
      setUI(msLeft);

      if (msLeft <= 0) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;

        // Якщо гравець ще не відповів — надсилаємо порожню відповідь
        if (!state.answered && state.selectedAnswer == null) {
          socket.emit('player:answer', {
            playerId: state.playerId || state.socketId,
            answer: null,
            timeLeft: 0
          });
        }

        // socket.emit('time_up'); // Видаляємо, бо сервер сам знає коли час вийшов

        // Не блокуємо кнопки тут — вони вже заблоковані в submitAnswer
        // $$('.answer-btn').forEach(btn => btn.disabled = true);

        const submitBtn = $('.card-foot .btn');
        const timerEndedLabel = uiText('timeUp');
        if (submitBtn && !state.answered) {
          submitBtn.disabled = true;
          submitBtn.textContent = timerEndedLabel;
          submitBtn.textContent = 'Час вийшов';
        }

        // Показуємо повідомлення тільки якщо не відповіли
        if (submitBtn && !state.answered) {
          submitBtn.textContent = timerEndedLabel;
        }

        if (!state.answered) {
          let feedback = $('#feedback');
          if (!feedback) {
            feedback = document.createElement('div');
            feedback.id = 'feedback';
            feedback.className = 'feedback';
            const roundEl = document.querySelector('.round');
            if (roundEl) {
              roundEl.appendChild(feedback);
            }
          }
          feedback.innerHTML = '⏰ Час вийшов<br><small>Не встигли відповісти</small>';
          feedback.style.color = 'var(--warning)';
          feedback.style.textAlign = 'center';
          feedback.style.marginTop = '10px';
          feedback.style.fontSize = '14px';
        }
        if (!state.answered) {
          showFeedback(`⏰ ${uiText('timeUp')}<br><small>${uiText('timeUpSub')}</small>`, 'error');
        }
      }
    }, 200);
  }

  // ===== Analog clock (SVG) helper =====
  let analogClockInstance = null;

  window.setAnalogClock = function setAnalogClock(hhmm) {
    // Destroy existing instance if it exists
    if (analogClockInstance) {
      analogClockInstance.destroy();
      analogClockInstance = null;
    }

    // Initialize clock
    const clockContainer = document.getElementById('clockWrap');
    if (clockContainer) {
      // Clear existing content
      clockContainer.innerHTML = '<div id="analog-clock-container"></div>';

      // Create new AnalogClock instance
      analogClockInstance = new AnalogClock('analog-clock-container', {
        size: 200,
        showDigital: true,
        showSeconds: false,
        smoothAnimation: true
      });

      // Set the time if provided
      if (hhmm) {
        const [hours, minutes] = hhmm.split(':').map(Number);
        console.log('Setting clock time:', hours, minutes, 'from', hhmm);
        analogClockInstance.setTime(hours, minutes);
      }
    }
  };

  // ===== CLOCK RENDER HELPERS (used by socket handler) =====
  function renderClock(hhmm) {
    const wrap = document.getElementById('clockWrap');
    if (!wrap) return;
    wrap.classList.remove('hidden');

    // prefer global helper if available
    if (typeof window.setAnalogClock === 'function') {
      try { window.setAnalogClock(hhmm); } catch (e) {}
      return;
    }

    // fallback: direct rotate
    const [H, M] = (hhmm || '00:00').split(':').map(v => parseInt(v,10));
    const hourDeg = ((H % 12) + (M / 60)) * 30;
    const minDeg = (M || 0) * 6;
    const hourEl = document.getElementById('hourHand');
    const minEl = document.getElementById('minHand');
    if (hourEl) hourEl.style.transform = `rotate(${hourDeg}deg)`;
    if (minEl) minEl.style.transform = `rotate(${minDeg}deg)`;
  }

  function hideClock() {
    const wrap = document.getElementById('clockWrap');
    if (wrap) wrap.classList.add('hidden');
  }
  // ==================== КРИТИЧНО: ПЕРЕХІД У QUESTION ====================
  socket.on('question', data => {
    console.log('Received question:', data);
    state.currentQuestion = data;
    state.answered = false; // Скидаємо стан відповіді на початку раунду
    console.log('State answered reset to false');
    setPhase('QUESTION');
    startTimer(data.duration, data.endsAt);

    // текст питання
    if (document.querySelector('#questionText')) {
      document.querySelector('#questionText').textContent = data.question;
    }

    // ⏱ CLOCK SUPPORT
    if (data.type === "clock") {
      if (typeof data.hour !== 'number' || typeof data.minute !== 'number') {
        console.error('Помилка: питання типу clock без hour або minute', data);
        hideClock();
      } else {
        const hh = String(data.hour).padStart(2,'0');
        const mm = String(data.minute).padStart(2,'0');
        window.setAnalogClock?.(`${hh}:${mm}`);
        const clockWrap = document.getElementById('clockWrap');
        if (clockWrap) clockWrap.classList.remove('hidden');
      }
    } else {
      hideClock();
    }

    // відповіді
    const answers = document.querySelectorAll('.answer-btn');
    answers.forEach((btn, i) => {
      btn.textContent = data.options[i] || '';
      btn.disabled = false;
    });
  });

  // Debug helper: імітує прихід питання з годинником (виклик у консолі)
  window.debugShowClockQuestion = function(idx = 0) {
    // знайти питання з годинником у grammarQuestions або timeClockQuestions
    const pool = (window.grammarQuestions && window.grammarQuestions.time_clock) || window.timeClockQuestions || [];
    if (!pool.length) return console.warn('No clock questions found');
    const q = pool[idx % pool.length];

    // імітуємо обробник socket.on('question', ...)
    try {
      state.currentQuestion = q;
      setPhase('QUESTION');
      startTimer(q.timeLimitSec || q.duration || 14);

      // текст питання
      const qt = document.querySelector('#questionText') || document.querySelector('#qText');
      if (qt) qt.textContent = q.question || q.sentence || '—';

      // clock
      if (q.type === 'clock_time' || q.clock) renderClock(q.clock || q.time || '00:00'); else hideClock();

      // render answers into answersWrap
      const answersWrap = document.getElementById('answersWrap') || document.querySelector('.answers');
      if (answersWrap) {
        answersWrap.innerHTML = '';
        (q.options || []).forEach(opt => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'answer-btn';
          btn.textContent = opt;
          btn.onclick = () => {
            // emulate selection + submit
            document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('is-selected'));
            btn.classList.add('is-selected');
            state.selectedAnswer = opt;
          };
          answersWrap.appendChild(btn);
        });
      }

      console.log('Debug: shown clock question', q);
    } catch (e) {
      console.error(e);
    }
  };
  
  // ==================== HOST ЛОГІКА ====================
// ==================== HOST QUIZ UI (matches host.html ids) ====================
// UI init: до старту раунду показуємо нейтральне значення, а не 1/10 з макету
if (elRoundNumber && !document.body.classList.contains('is-quiz')) {
  const v = (elRoundNumber.textContent || '').trim();
  if (v === '1/10' || v === '') elRoundNumber.textContent = '—/—';
}



function setRoundStatsUI() {
  if (!elRoundStats) return;
  elRoundStats.textContent = `${hostRoundStats.correct} правильних • ${hostRoundStats.wrong} неправильних • ${hostRoundStats.noAnswer} не відповіли`;
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
  if (elQuestionDiff)  elQuestionDiff.textContent  = formatDifficultyLabel(question.difficulty);
}

function renderHostScoreboard(scores = []) {
  if (!elScoreList) return;
  if (!scores.length) {
    elScoreList.innerHTML = `<div class="srow empty"><div></div><div class="muted">${uiText('noData')}</div><div></div></div>`;
    return;
  }

  const sorted = [...scores].sort((a,b) => (b.score ?? 0) - (a.score ?? 0));
  elScoreList.innerHTML = sorted.map((p, idx) => `
    <div class="score-row">
      <div>${idx + 1}</div>
      <div>${p.name ?? '—'}</div>
      <div class="right">${p.score ?? 0}</div>
    </div>
  `).join('');
}

function setRoundStatsUI() {
  const roundStatsEl = document.getElementById('roundStats');
  if (!roundStatsEl) return;
  roundStatsEl.textContent = `${hostRoundStats.correct} ${t('correct')} • ${hostRoundStats.wrong} ${t('incorrect')} • ${hostRoundStats.noAnswer} ${t('noAnswer')}`;
}

function renderHostRoundResults(results, scores) {
  if (!elScoreList) return;

  const nameById = new Map((scores || []).map((p) => [p.id || p.playerId, p.name]));
  if (!results?.length) {
    elScoreList.innerHTML = `<div class="srow empty"><div></div><div class="muted">${uiText('noAnswers')}</div><div></div></div>`;
    return;
  }

  const sorted = [...results].sort((a, b) => (b.points ?? 0) - (a.points ?? 0));
  elScoreList.innerHTML = sorted.map((r, idx) => {
    const name = r.name || nameById.get(r.playerId) || '—';
    const icon = r.correct ? '✅' : '❌';
    return `
      <div class="srow">
        <div>${idx + 1}</div>
        <div>${icon} ${name}</div>
        <div class="right">+${r.points ?? 0}</div>
      </div>
    `;
  }).join('');
}


function renderAnalogClock(rootEl, timeStr) {
  if (!rootEl || !timeStr) return;

  const [h, m] = timeStr.split(':').map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return;

  const hourDeg = (h % 12) * 30 + m * 0.5;
  const minDeg = m * 6;

  const hourHand = rootEl.querySelector('.hour-hand');
  const minuteHand = rootEl.querySelector('.minute-hand');

  if (hourHand) {
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }
  if (minuteHand) {
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
  }
}

function renderQuestion(question, duration) {
  // Render question for player
  if (document.querySelector('#questionText')) {
    document.querySelector('#questionText').textContent = question.question || '—';
  }
  const answers = document.querySelectorAll('.answer-btn');
  answers.forEach((btn, i) => {
    btn.textContent = question.options[i] || '';
    btn.disabled = false;
  });

  // ✅ analog clock questions
  if (question.clock) {
    const clockEl = document.querySelector('.analog-clock');
    renderAnalogClock(clockEl, question.clock);
  }
}

function startHostTimer(durationSec, endsAt = null) {
  clearInterval(hostTimerInterval);
  let t = durationSec;

  hostTimerInterval = setInterval(() => {
    if (endsAt) t = Math.ceil((endsAt - Date.now()) / 1000);
    else t -= 1;

    if (elQuizTimer) elQuizTimer.textContent = `${Math.max(0, t)}s`;
    if (elQuizTimerFill) {
      const clamped = Math.max(0, t);
      const pct = durationSec > 0 ? (clamped / durationSec) * 100 : 0;
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
    console.log("🟡 CREATE ROOM CLICK");
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
    console.log('submitAnswer called with:', answer, 'current answered state:', state.answered);
    if (state.phase !== 'QUESTION') {
      console.log('Not in QUESTION phase, ignoring');
      return;
    }

    // Якщо вже відповіли — не дозволяємо змінити
    if (state.answered) {
      console.log('Already answered, ignoring');
      return;
    }

    state.selectedAnswer = answer;
    console.log('Setting selectedAnswer to:', answer);
    // Використовуємо правильний ідентифікатор гравця
    socket.emit('player:answer', {
      playerId: state.playerId || state.socketId, // Додаємо fallback
      answer: answer,
      timeLeft: state.timeLeft
    });

    // Позначаємо, що відповіли (блокуємо повторні кліки)
    state.answered = true;
    console.log('State answered set to true, timer should continue');

    // Візуальна підтвердження — зелений чек і текст "Чекаємо інших..."
    $$('.answer-btn').forEach(btn => {
      const val = btn.querySelector('b')?.textContent;
      if (answer != null && val === answer) {
        btn.classList.add('is-selected', 'correct'); // зелений стиль
      }
      btn.disabled = true;
      btn.style.opacity = '0.6';
      btn.style.pointerEvents = 'none';
    });

    $$('.answer-btn').forEach(btn => {
      btn.classList.remove('correct');
      btn.style.opacity = '';
    });

    const submitBtn = $('.card-foot .btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = uiText('submitAnswer');
    }

    // Додати фідбек елемент, якщо його немає
    let feedback = $('#feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.id = 'feedback';
      feedback.className = 'feedback';
      const roundEl = document.querySelector('.round');
      if (roundEl) {
        roundEl.appendChild(feedback);
      }
    }
    feedback.innerHTML = `✅ ${uiText('sent')}<br><small>${uiText('waitingOthers')}</small>`;
    feedback.style.color = 'var(--success)';
    feedback.style.textAlign = 'center';
    feedback.style.marginTop = '10px';
    feedback.style.fontSize = '14px';
    clearFeedback();
  }
  
  // ==================== SOCKET ПОДІЇ ====================


  // Загальні події
  socket.on('connect', () => {
    console.log('✅ Підключено через', socket.io.engine.transport.name); // має вивести "websocket"

    state.socketId = socket.id;
    console.log('🔗 Підключено до сервера');
    if (isHost) updateServerStatus('online');
  });

  socket.on('connect_error', (err) => {
    console.error('❌ Помилка підключення:', err.message, err.description);
  });
  
  socket.on('disconnect', (reason) => {
    console.log('🔌 Відключено:', reason);
    toast('З\'єднання втрачено', 'Перепідключення...');
    if (isHost) updateServerStatus('offline');
  });
  
  socket.on('error', (data) => {
    toast('Помилка', data.message);
  });
  
  // Host події
  socket.on('room-created', ({ code }) => {
    console.log("🟢 ROOM CREATED:", code);

    state.roomCode = code;

    const elSmall = document.getElementById("roomCode");
    const elBig = document.getElementById("roomCodeBig");

    if (elSmall) elSmall.textContent = code;
    if (elBig) elBig.textContent = code;

    // показуємо lobby screen
    const screenLang = document.getElementById("screenLang");
    const screenLobby = document.getElementById("screenLobby");

    if (screenLang) screenLang.classList.add("hidden");
    if (screenLobby) screenLobby.classList.remove("hidden");
  });
  
  socket.on('player-joined', (player) => {
    toast('Гравець приєднався', player.name);
  });
  
  socket.on('player-list-updated', (list) => {
    // Знаходимо себе
    const me = list.find(p => p.id === state.playerId);
    if (me) {
      state.score = me.score;
      // Розрахунок рангу: сортуємо по score desc
      const sorted = [...list].sort((a, b) => b.score - a.score);
      state.rank = sorted.findIndex(p => p.id === state.playerId) + 1;
      // Оновлюємо UI (answered/total - з твоїх даних, наприклад з room)
      updatePlayerStatus(state.score, state.rank, list.filter(p => p.answered).length, list.length);
    }
    
    // Для хоста: оновити таблицю гравців
    if (isHost) {
      // Оновити UI списку гравців з scores
      const playersTable = $('#playersTable');  // припустимо, є така таблиця
      if (playersTable) {
        playersTable.innerHTML = list.map(p => `
          <tr>
            <td>${p.name}</td>
            <td>${p.score}</td>
            <!-- інші колонки -->
          </tr>
        `).join('');
      }
    }
    
    updatePlayerList(list); // існуючий виклик
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
    startHostTimer(duration ?? 15, data.endsAt);
  });
  
  socket.on('round-started', (data) => {
    if (isHost) return; // хост обробляє вище

    state.currentQuestion = data.question;
    state.selectedAnswer = null;

    setPhase('QUESTION');
    renderQuestion(data.question, data.duration);
    // ✅ if endsAt present -> timer is perfectly synced with server
    startTimer(data.duration, data.endsAt);

    toast(uiText('roundStarted'), `${data.duration} ${uiText('seconds')}`);
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
        btnReady.textContent = data.ready ? `${t('readyBtn')} ✅` : t('readyBtn');
        btnReady.disabled = data.ready;
      }
    }
  });

  socket.on('ready-check:status', (data) => {
    // data: { allReady, countdownSec }
    const note = document.querySelector('#lobbyCard .note');
    if (!note) return;

    if (!data.allReady) {
      note.textContent = uiText('waitingReady');
      return;
    }

    note.textContent = `${uiText('allReadyPrefix')} ${data.countdownSec}...`;

    const lobbyStatus = document.getElementById('lobbyStatus');
    if (lobbyStatus) {
      lobbyStatus.textContent = !data.allReady
        ? uiText('waitingReady')
        : `${uiText('allReadyPrefix')} ${data.countdownSec}...`;
    }
  });

  socket.on('round-started', (data) => {
    if (isHost || state.phase === 'QUESTION') return;

    state.currentQuestion = data.question;
    state.selectedAnswer = null;
    
    setPhase('QUESTION');
    renderQuestion(data.question, data.duration);
    startTimer(data.duration, data.endsAt);
    
    toast(uiText('roundStarted'), `${data.duration} ${uiText('seconds')}`);
  });
  
  socket.on('answer-received', ({ correct }) => {
    lockAnswers();
    clearFeedback();
    if (correct) {
      setQuestionNote('');
      return;
    }

    const noteText =
      getLocalizedField(state.currentQuestion?.hint) ||
      getLocalizedField(state.currentQuestion?.explanation, isTeacherMode);

    setQuestionNote(noteText);
    return;

    clearInterval(state.timerInterval);
    
    if (correct) {
      showCorrect(); // ✅ тільки "Правильно"
    } else {
      const lang = document.documentElement.lang || 'uk';
      const t =
        getLocalizedField(state.currentQuestion?.hint) ||
        getLocalizedField(state.currentQuestion?.explanation, isTeacherMode);

      showHint(t);
    }
    
    lockAnswers();
  });
  
  socket.on('round-ended', (data) => {
    console.log('Round ended, clearing timer');
    clearInterval(state.timerInterval);
    
    if (!isHost) {
      setPhase('RESULTS');
      showResults(data);
      
      // Оновлюємо бали після раунду
      if (data.results) {
        const myResult = data.results.find(r => r.playerId === state.playerId);
        if (myResult) {
          state.score += myResult.points;  // якщо сервер не надсилає загальний, додаємо
        }
      }
      // Викликаємо оновлення UI (якщо сервер не надіслав 'player-list-updated')
      updatePlayerStatus(state.score, state.rank, /* answered/total з data */);
      
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

  socket.on('round-results', (data) => {
    // data.results — масив з усіма гравцями
    const myResult = data.results.find(r => r.id === state.playerId);
    if (myResult) {
      const lang = document.documentElement.lang || 'de';
      const roundPoints = Number(myResult.lastRoundPoints || 0);
      const answeredCorrectly = !!myResult.correct;

      // Оновлюємо загальний рахунок
      state.score = myResult.score;
      
      // Показуємо, скільки додано саме в цьому раунді
      const addedPointsEl = document.getElementById('resultPoints');
      if (addedPointsEl) {
        addedPointsEl.textContent = roundPoints > 0 ? `+${roundPoints}` : `${roundPoints}`;
        addedPointsEl.style.color = roundPoints > 0
          ? 'var(--success)'
          : roundPoints < 0
            ? 'var(--danger)'
            : 'var(--text)';
      }
      
      // Загальний рахунок (можна додати окремий елемент, наприклад #totalScore)
      const totalScoreEl = document.getElementById('totalScore') || addedPointsEl?.parentElement?.querySelector('.total');
      if (totalScoreEl) totalScoreEl.textContent = myResult.score;

      const correctEl = document.getElementById('resultCorrect');
      if (correctEl) {
        correctEl.textContent = answeredCorrectly
          ? (lang === 'de' ? 'Ja' : 'Так')
          : (lang === 'de' ? 'Nein' : 'Ні');
        correctEl.style.color = answeredCorrectly ? 'var(--success)' : 'var(--danger)';
      }
      
      // Рейтинг
      const rankEl = document.getElementById('resultRank');
      if (rankEl) rankEl.textContent = formatRank(myResult.rank || calculateRank(data.results, state.playerId));
      
      // Медаль
      const medalEl = document.getElementById('resultMedal');
      if (medalEl) {
        if (myResult.rank === 1) medalEl.textContent = '🥇';
        else if (myResult.rank === 2) medalEl.textContent = '🥈';
        else if (myResult.rank === 3) medalEl.textContent = '🥉';
        else medalEl.textContent = '';
      }
    }
    
    // Анімація додавання балів
    if (myResult) animatePointsAdded(Number(myResult.lastRoundPoints || 0));
    
    // Прогрес (приклад: кожні 100 балів рівень)
    const progress = (state.score % 100);
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressPercent) progressPercent.textContent = `${progress}%`;
  });

  // Допоміжна функція анімації додавання балів
  function animatePointsAdded(points) {
    if (points === 0) return;
    const pointsEl = document.getElementById('resultPoints');
    if (pointsEl) {
      pointsEl.style.animation = 'points-added 0.5s ease-in-out';
    }
  }

  // Допоміжна функція розрахунку місця (якщо сервер не надсилає)
  function calculateRank(results, myId) {
    const sorted = [...results].sort((a, b) => b.score - a.score);
    return sorted.findIndex(r => r.id === myId) + 1;
  }
  
  // ===== DUEL UI STATE =====
  let duelEndsAt = 0;
  let duelTotalMs = 0;
  let stealUntil = 0;
  let canSteal = false;

  function ensureDuelHud() {
    let root = document.getElementById('dp-duelhud');
    if (!root) {
      root = document.createElement('div');
      root.id = 'dp-duelhud';
      document.body.appendChild(root);
    }

    if (!document.getElementById('dpTimer')) {
      root.insertAdjacentHTML('beforeend', `
        <div id="dpTimer" class="dp-timer">
          <div class="dp-timerTop">
            <div class="dp-timerLabel">⏱</div>
            <div id="dpTimerText" class="dp-timerText"></div>
          </div>
          <div class="dp-timerBar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
            <div id="dpTimerFill" class="dp-timerFill"></div>
          </div>
        </div>
      `);
    }

    if (!document.getElementById('dpCombo')) {
      root.insertAdjacentHTML('beforeend', `
        <div id="dpCombo" class="dp-combo">
          <div class="dp-comboRow">
            <div class="dp-pill">Streak: <span id="dpStreakVal">0</span></div>
            <div class="dp-pill">Combo: <span id="dpComboVal">0</span></div>
            <div class="dp-pill dp-pillHot">x<span id="dpMultVal">1.0</span></div>
          </div>
        </div>
      `);
    }

    if (!document.getElementById('dpStealOverlay')) {
      document.body.insertAdjacentHTML('beforeend', `
        <div id="dpStealOverlay" class="dp-steal hidden" aria-live="polite">
          <div class="dp-stealCard">
            <div class="dp-stealTitle">⚡ STEAL WINDOW</div>
            <div class="dp-stealSub">Хтось відповів неправильно — ти можеш вкрасти очки</div>
            <div class="dp-stealTimer">
              <div class="dp-stealTimerLabel">Залишилось</div>
              <div id="dpStealTime" class="dp-stealTime">0.0s</div>
            </div>
            <div class="dp-stealHint">Натисни <b>STEAL</b> (і вибери відповідь), щоб забрати очки</div>
          </div>
        </div>
      `);
    }
  }

  function multFromComboLevel(comboLevel) {
    if (!comboLevel) return 1.0;
    if (comboLevel === 1) return 1.2;
    if (comboLevel === 2) return 1.5;
    if (comboLevel === 3) return 2.0;
    return 2.5;
  }

  function setComboHud(streak = 0, comboLevel = 0) {
    ensureDuelHud();
    const elStreak = document.getElementById('dpStreakVal');
    const elCombo = document.getElementById('dpComboVal');
    const elMult = document.getElementById('dpMultVal');
    if (elStreak) elStreak.textContent = String(streak || 0);
    if (elCombo) elCombo.textContent = String(comboLevel || 0);
    if (elMult) elMult.textContent = String(multFromComboLevel(comboLevel).toFixed(1));
  }

  function setTimerHud(msLeft) {
    ensureDuelHud();
    const elText = document.getElementById('dpTimerText');
    const elFill = document.getElementById('dpTimerFill');
    const sec = Math.max(0, msLeft / 1000);
    if (elText) elText.textContent = sec > 0 ? `${sec.toFixed(0)}s` : '';
    const total = Math.max(1, duelTotalMs || 1);
    const pct = Math.max(0, Math.min(100, (msLeft / total) * 100));
    if (elFill) elFill.style.width = `${pct}%`;
  }

  function showStealOverlay(show) {
    ensureDuelHud();
    const ov = document.getElementById('dpStealOverlay');
    if (!ov) return;
    ov.classList.toggle('hidden', !show);
  }

  function renderStealOverlay() {
    const ovTime = document.getElementById('dpStealTime');
    if (!ovTime) return;
    const left = Math.max(0, stealUntil - Date.now());
    ovTime.textContent = `${(left / 1000).toFixed(1)}s`;
    showStealOverlay(left > 0 && canSteal);
  }

  function renderTimer() {
    const leftMs = duelEndsAt ? (duelEndsAt - Date.now()) : 0;
    setTimerHud(leftMs);
    renderStealOverlay();
  }
  setInterval(renderTimer, 100);

  document.addEventListener('click', (e) => {
    if (e.target?.id === 'btnHint') {
      socket.emit('request_hint');
    }
    if (e.target?.id === 'btnSteal') {
      if (!canSteal || Date.now() > stealUntil) return;
      const picked = window.__lastPickedAnswer;
      if (!picked) return;
      socket.emit('steal_attempt', { answer: picked });
      canSteal = false;
      e.target.disabled = true;
    }
  });

  socket.on('round_started', ({ question, endsAt }) => {
    duelEndsAt = endsAt || 0;
    duelTotalMs = duelEndsAt ? Math.max(500, duelEndsAt - Date.now()) : duelTotalMs;
    stealUntil = 0;
    canSteal = false;
    showStealOverlay(false);
    const stealBtn = document.querySelector('#btnSteal'); if (stealBtn) stealBtn.disabled = true;
  });

  socket.on('round-started', (data) => {
    if (data?.endsAt) {
      duelEndsAt = data.endsAt;
      duelTotalMs = duelEndsAt ? Math.max(500, duelEndsAt - Date.now()) : duelTotalMs;
      stealUntil = 0;
      canSteal = false;
      showStealOverlay(false);
      const stealBtn = document.querySelector('#btnSteal'); if (stealBtn) stealBtn.disabled = true;
    }
  });

  socket.on('steal_open', ({ until }) => {
    stealUntil = until;
    canSteal = true;
    const stealBtn = document.querySelector('#btnSteal'); if (stealBtn) stealBtn.disabled = false;
    showStealOverlay(true);
  });

  socket.on('steal_result', ({ ok, by, points }) => {
    const stealBtn = document.querySelector('#btnSteal'); if (stealBtn) stealBtn.disabled = true;
    canSteal = false;
    showStealOverlay(false);
  });

  socket.on('score_update', ({ playerId, score, streak, comboLevel }) => {
    if (!state?.playerId) return;
    if (playerId !== state.playerId) return;
    setComboHud(streak || 0, comboLevel || 0);
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
      btnReady.textContent = t('readyBtn');
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
    clearFeedback();
    setQuestionNote('');
    
    // Скидання
    state.selectedAnswer = null;
    state.answered = false; // Скидаємо стан відповіді
    if (timerFill) timerFill.style.width = "100%";
    if (note) note.hidden = true;
    
    // Питання
    if (qWrap) {
      qWrap.innerHTML = `
        ${q.question}
        <small>${t('chooseAnswer')} • ${duration} ${uiText('seconds')}</small>
      `;

      // insert clock widget when question has clock property
      if (q.clock) {
        const clockHtml = `
          <div class="clock-wrap" id="clockWidget">
            <div class="clock-title" data-i18n="clockQuestion"></div>
            <div class="clock-card">
              <svg id="analogClock" viewBox="0 0 200 200" class="clock">
                <circle cx="100" cy="100" r="92" class="clock-face"/>
                <circle cx="100" cy="100" r="4" class="clock-pivot"/>
                <g id="ticks"></g>
                <line id="hourHand" x1="100" y1="100" x2="100" y2="62" class="clock-hand hour-hand"/>
                <line id="minHand"  x1="100" y1="100" x2="100" y2="38" class="clock-hand minute-hand"/>
              </svg>
              <div class="clock-meta">
                <div class="clock-meta-row"><span class="label">${t('question')}</span><span id="clockMode">—</span></div>
                <div class="clock-meta-row"><span class="label">${t('time')}</span><span id="clockTime">—</span></div>
              </div>
            </div>
          </div>
        `;

        // append or replace existing
        const existing = qWrap.querySelector('#clockWidget');
        if (existing) existing.remove();
        qWrap.insertAdjacentHTML('beforeend', clockHtml);
        // render clock
        try { showClockQuestion({ clock: q.clock, modeLabel: q.modeLabel || '—' }); } catch(e){}
      } else {
        const existing = qWrap.querySelector('#clockWidget');
        if (existing) existing.remove();
      }
    }
    
    // Варіанти відповідей
    if (answersWrap) {
      answersWrap.innerHTML = "";
      q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "answer-btn";
        btn.innerHTML = `<b>${opt}</b><span>${uiText('tap')}</span>`;
        
        btn.addEventListener("click", () => {
          // Якщо вже відповіли — ігноруємо
          if (state.answered) return;

          // Single select
          answersWrap.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('is-selected'));
          btn.classList.add('is-selected');
          state.selectedAnswer = opt;
          try { window.__lastPickedAnswer = opt; } catch(e){}
          
          submitAnswer(opt);
        });
        answersWrap.appendChild(btn);
      });
    }
    
    // Кнопка відправки
    if (footBtn) {
      footBtn.remove();
    }
  }
  
  function showClockQuestion({ clock, modeLabel = '—' }) {
    const svg = document.getElementById('analogClock');
    if (svg) {
      renderAnalogClock(svg, clock);
    }
    const modeEl = document.getElementById('clockMode');
    if (modeEl) modeEl.textContent = modeLabel;
    const timeEl = document.getElementById('clockTime');
    if (timeEl) timeEl.textContent = clock;
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
      updateRoundStats(localStorage.getItem('dp_lang') || 'de');
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
    if (saved) setLanguage(saved);

    if (!screenLang) return;

    if (saved) {
      screenLang.remove(); // ✅ кнопки повністю зникають
      return;
    }

    // 2) якщо мови нема — ховаємо лобі до вибору
    if (screenLobby) screenLobby.classList.add('hidden');

    screenLang.querySelectorAll('button[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang || 'de';
        setLanguage(lang);

        // ✅ прибираємо весь екран (кнопки зникли)
        screenLang.remove();

        // показуємо лобі
        if (screenLobby) screenLobby.classList.remove('hidden');
      });
    });
  }
  
  // ==================== ІНІЦІАЛІЗАЦІЯ ====================
  function init() {
    applyLanguage(LANG.current);
    renderDynamicTexts();

    /* =========================
       PATCH B: Init
       ========================= */
    document.addEventListener("DOMContentLoaded", () => {
      // Дефолт язык, якщо не встановлений
      if (!localStorage.getItem('dp_lang')) localStorage.setItem('dp_lang', 'de');

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
      const teacherModeToggle = $('#teacherModeToggle');
      if (teacherModeToggle) {
        teacherModeToggle.checked = isTeacherMode;
        teacherModeToggle.addEventListener('change', () => {
          isTeacherMode = teacherModeToggle.checked;
          localStorage.setItem('dp_teacher_mode', isTeacherMode);
        });
      }
      
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

  function initHost() {
    // Host specific initialization
    // Force show lobby screen for host mode
    document.getElementById('screenLobby')?.classList.remove('hidden');
  }

  if (window.APP_MODE === "host") {
    initHost();
  }
})();

// Додайте ці функції для покращених сповіщень
function showNotification(title, message, type = 'info') {
  const notificationCenter = document.getElementById('notifications');
  if (!notificationCenter) return;
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <h4>${title}</h4>
    <p>${message}</p>
  `;
  
  notificationCenter.appendChild(notification);
  
  // Автоматичне видалення через 5 секунд
  setTimeout(() => {
    notification.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Оновлення статусу гравця
function updatePlayerStatus(score, rank, answered, total) {
  const scoreEl = document.getElementById('playerScore');
  const rankEl = document.getElementById('playerRank');
  const answeredEl = document.getElementById('playersAnswered');
  
  if (scoreEl) scoreEl.textContent = score;
  if (rankEl) rankEl.textContent = rank ? `#${rank}` : '-';
  if (answeredEl) answeredEl.textContent = `${answered}/${total}`;
}

// Анімація відповіді
function animateAnswer(optionElement, isCorrect) {
  if (!optionElement) return;
  
  optionElement.classList.add(isCorrect ? 'correct' : 'wrong');
  
  // Додати звуковий ефект (опційно)
  const audio = new Audio(isCorrect ? 
    'https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3' : 
    'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'
  );
  audio.volume = 0.3;
  audio.play().catch(() => {}); // Ігнорувати помилки автоплею
  
  // Прибрати анімацію після завершення
  setTimeout(() => {
    optionElement.classList.remove('correct', 'wrong');
  }, 1000);
}

// Ініціалізація покращеного візуалу
function initEnhancedPlayerUI() {
  // Додати обробники кліків для варіантів відповідей
  document.addEventListener('click', (e) => {
    if (e.target.closest('.answer-option')) {
      const option = e.target.closest('.answer-option');
      const allOptions = document.querySelectorAll('.answer-option');
      
      // Зняти виділення з інших варіантів
      allOptions.forEach(opt => opt.classList.remove('selected'));
      
      // Виділити поточний
      option.classList.add('selected');
      
      // Активувати кнопку надсилання
      const submitBtn = document.getElementById('btnSubmit');
      if (submitBtn) submitBtn.disabled = false;
    }
  });
  
  // Показати вітальне сповіщення
  setTimeout(() => {
    showNotification('🎮 Вітаємо в Deutsch Party!', 
      'Чекайте на старт гри від вчителя', 'info');
  }, 1000);
}

// Викликати ініціалізацію при завантаженні
if (window.APP_MODE === 'player') {
  document.addEventListener('DOMContentLoaded', initEnhancedPlayerUI);
}
