// questions.js - Нормальні питання для Deutsch Party
// ===== THEME DISPLAY NAMES (UI) =====
// Щоб у лобі показувати красиві назви замість технічних ключів (sein, traps тощо)
function getThemeDisplayName(theme) {
  const display = {
    sein: "SEIN (бути)",
    articles_definite: "Артиклі: der/die/das",
    greetings: "Привітання",
    numbers: "Числа",
    family: "Сімʼя",
    food: "Їжа та напої",
    colors: "Кольори",
    time: "Час",
    house: "Дім",
    animals: "Тварини",
    clothes: "Одяг",
    weather: "Погода",
    hobbies: "Хобі",
    school: "Школа",
    city: "Місто",
    body: "Тіло",
    pronouns: "Займенники / питання",
    verbs_present: "Дієслова (Präsens)",
    prepositions: "Прийменники",
    adjectives: "Прикметники",
    plurals: "Множина",
    time_expressions: "Вирази часу",
    shopping: "Покупки",
    travel: "Подорожі",
    health: "Здоровʼя",
    work: "Робота",
    traps: "TRAP MODE 😈"
  };
  return display[theme] || theme.replace(/_/g, " ");
}

// ===== FIND-ERROR QUESTIONS =====
const findErrorQuestions = [
  {
    id: 1,
    level: "A1",
    sentence: "Ich bin in Schule.",
    options: ["Ich", "bin", "in", "Schule"],
    correct: "Schule",
    fix: "Ich bin in der Schule."
  },
  {
    id: 2,
    level: "A1",
    sentence: "Er haben keine Zeit.",
    options: ["Er", "haben", "keine", "Zeit"],
    correct: "haben",
    fix: "Er hat keine Zeit."
  },
  {
    id: 3,
    level: "A1",
    sentence: "Wir geht nach Hause.",
    options: ["Wir", "geht", "nach", "Hause"],
    correct: "geht",
    fix: "Wir gehen nach Hause."
  },
  {
    id: 4,
    level: "A1",
    sentence: "Ich habe ein Schwester.",
    options: ["Ich", "habe", "ein", "Schwester"],
    correct: "ein",
    fix: "Ich habe eine Schwester."
  },
  {
    id: 5,
    level: "A1",
    sentence: "Das ist der Auto.",
    options: ["Das", "ist", "der", "Auto"],
    correct: "der",
    fix: "Das ist das Auto."
  },
  {
    id: 6,
    level: "A1",
    sentence: "Heute ich lerne Deutsch.",
    options: ["Heute", "ich", "lerne", "Deutsch"],
    correct: "ich",
    fix: "Heute lerne ich Deutsch."
  },
  {
    id: 7,
    level: "A1",
    sentence: "Sie bist sehr nett.",
    options: ["Sie", "bist", "sehr", "nett"],
    correct: "bist",
    fix: "Sie ist sehr nett."
  },
  {
    id: 8,
    level: "A1",
    sentence: "Ich trinke einen Wasser.",
    options: ["Ich", "trinke", "einen", "Wasser"],
    correct: "einen",
    fix: "Ich trinke ein Wasser."
  },
  {
    id: 9,
    level: "A1",
    sentence: "Wir haben kein Freunde.",
    options: ["Wir", "haben", "kein", "Freunde"],
    correct: "kein",
    fix: "Wir haben keine Freunde."
  },
  {
    id: 10,
    level: "A1",
    sentence: "Er wohnt nach Berlin.",
    options: ["Er", "wohnt", "nach", "Berlin"],
    correct: "nach",
    fix: "Er wohnt in Berlin."
  },
  {
    id: 11,
    level: "A2",
    sentence: "Ich gehe zu Hause.",
    options: ["Ich", "gehe", "zu", "Hause"],
    correct: "zu",
    fix: "Ich gehe nach Hause."
  },
  {
    id: 12,
    level: "A2",
    sentence: "Wir sind gestern kommen.",
    options: ["Wir", "sind", "gestern", "kommen"],
    correct: "kommen",
    fix: "Wir sind gestern gekommen."
  },
  {
    id: 13,
    level: "A2",
    sentence: "Ich habe gegangen ins Kino.",
    options: ["Ich", "habe", "gegangen", "Kino"],
    correct: "habe",
    fix: "Ich bin ins Kino gegangen."
  },
  {
    id: 14,
    level: "A2",
    sentence: "Er wartet mir.",
    options: ["Er", "wartet", "mir"],
    correct: "mir",
    fix: "Er wartet auf mich."
  },
  {
    id: 15,
    level: "A2",
    sentence: "Sie gibt der Mann das Buch.",
    options: ["Sie", "gibt", "der", "Mann"],
    correct: "der",
    fix: "Sie gibt dem Mann das Buch."
  },
  {
    id: 16,
    level: "A2",
    sentence: "Ich sehe den Frau.",
    options: ["Ich", "sehe", "den", "Frau"],
    correct: "den",
    fix: "Ich sehe die Frau."
  },
  {
    id: 17,
    level: "A2",
    sentence: "Das Essen schmecken gut.",
    options: ["Das", "Essen", "schmecken", "gut"],
    correct: "schmecken",
    fix: "Das Essen schmeckt gut."
  },
  {
    id: 18,
    level: "A2",
    sentence: "Wir fahren mit Auto.",
    options: ["Wir", "fahren", "mit", "Auto"],
    correct: "Auto",
    fix: "Wir fahren mit dem Auto."
  },
  {
    id: 19,
    level: "A2",
    sentence: "Ich bin interessiere an Musik.",
    options: ["Ich", "bin", "interessiere", "Musik"],
    correct: "interessiere",
    fix: "Ich bin an Musik interessiert."
  },
  {
    id: 20,
    level: "A2",
    sentence: "Heute ist kalt es.",
    options: ["Heute", "ist", "kalt", "es"],
    correct: "es",
    fix: "Heute ist es kalt."
  },
  {
    id: 21,
    level: "A2",
    sentence: "Er kann zu Hause bleiben nicht.",
    options: ["Er", "kann", "bleiben", "nicht"],
    correct: "nicht",
    fix: "Er kann nicht zu Hause bleiben."
  },
  {
    id: 22,
    level: "A2",
    sentence: "Ich habe viele Arbeit.",
    options: ["Ich", "habe", "viele", "Arbeit"],
    correct: "viele",
    fix: "Ich habe viel Arbeit."
  },
  {
    id: 23,
    level: "A2",
    sentence: "Sie ist mehr größer als ich.",
    options: ["Sie", "mehr", "größer", "ich"],
    correct: "mehr",
    fix: "Sie ist größer als ich."
  },
  {
    id: 24,
    level: "A2",
    sentence: "Wir sprechen über der Film.",
    options: ["Wir", "sprechen", "über", "der"],
    correct: "der",
    fix: "Wir sprechen über den Film."
  },
  {
    id: 25,
    level: "A2",
    sentence: "Ich freue mich für dich.",
    options: ["Ich", "freue", "für", "dich"],
    correct: "für",
    fix: "Ich freue mich für dich."
  },
  {
    id: 26,
    level: "A2",
    sentence: "Er hilft mir zu lernen.",
    options: ["Er", "hilft", "mir", "zu"],
    correct: "zu",
    fix: "Er hilft mir beim Lernen."
  },
  {
    id: 27,
    level: "A2",
    sentence: "Ich warte dich.",
    options: ["Ich", "warte", "dich"],
    correct: "dich",
    fix: "Ich warte auf dich."
  },
  {
    id: 28,
    level: "A2",
    sentence: "Das ist der beste Film was ich kenne.",
    options: ["der", "beste", "was", "kenne"],
    correct: "was",
    fix: "Das ist der beste Film, den ich kenne."
  },
  {
    id: 29,
    level: "A2",
    sentence: "Ich gehe jeden Tage arbeiten.",
    options: ["jeden", "Tage", "arbeiten"],
    correct: "Tage",
    fix: "Ich gehe jeden Tag arbeiten."
  },
  {
    id: 30,
    level: "A2",
    sentence: "Wir sind fertig zu essen.",
    options: ["Wir", "sind", "fertig", "zu"],
    correct: "zu",
    fix: "Wir sind mit dem Essen fertig."
  }
];

// ===== TIME/CLOCK QUESTIONS =====
const timeClockQuestions = [
  {
    id: 1,
    level: "A1",
    clock: "05:00",
    question: "Wie spät ist es?",
    options: [
      "fünf Uhr",
      "fünf nach fünf",
      "halb fünf",
      "fünf vor fünf"
    ],
    correct: "fünf Uhr"
  },
  {
    id: 2,
    level: "A1",
    clock: "04:10",
    question: "Wie spät ist es?",
    options: [
      "zehn nach vier",
      "zehn vor vier",
      "vier Uhr zehn",
      "halb fünf"
    ],
    correct: "zehn nach vier"
  },
  {
    id: 3,
    level: "A1",
    clock: "06:55",
    question: "Wie spät ist es?",
    options: [
      "fünf vor sieben",
      "fünf nach sechs",
      "sechs Uhr fünf",
      "halb sieben"
    ],
    correct: "fünf vor sieben"
  },
  {
    id: 4,
    level: "A1",
    clock: "07:30",
    question: "Wie spät ist es?",
    options: [
      "halb acht",
      "halb sieben",
      "sieben dreißig",
      "dreißig nach sieben"
    ],
    correct: "halb acht"
  },
  {
    id: 5,
    level: "A1",
    clock: "03:15",
    question: "Wie spät ist es?",
    options: [
      "Viertel nach drei",
      "Viertel vor drei",
      "drei fünfzehn",
      "halb vier"
    ],
    correct: "Viertel nach drei"
  },

  {
    id: 6,
    level: "A2",
    clock: "08:25",
    question: "Wie spät ist es?",
    options: [
      "fünf vor halb neun",
      "fünf nach halb neun",
      "fünfundzwanzig nach acht",
      "halb acht"
    ],
    correct: "fünf vor halb neun"
  },
  {
    id: 7,
    level: "A2",
    clock: "09:35",
    question: "Wie spät ist es?",
    options: [
      "fünf nach halb zehn",
      "fünf vor halb zehn",
      "neun fünfunddreißig",
      "halb neun"
    ],
    correct: "fünf nach halb zehn"
  },
  {
    id: 8,
    level: "A2",
    clock: "10:45",
    question: "Wie spät ist es?",
    options: [
      "Viertel vor elf",
      "Viertel nach zehn",
      "halb elf",
      "zehn fünfundvierzig"
    ],
    correct: "Viertel vor elf"
  },
  {
    id: 9,
    level: "A2",
    clock: "11:20",
    question: "Wie spät ist es?",
    options: [
      "zwanzig nach elf",
      "zwanzig vor elf",
      "zehn nach halb zwölf",
      "halb elf"
    ],
    correct: "zwanzig nach elf"
  },
  {
    id: 10,
    level: "A2",
    clock: "12:40",
    question: "Wie spät ist es?",
    options: [
      "zwanzig vor eins",
      "zwanzig nach zwölf",
      "vierzig nach zwölf",
      "halb eins"
    ],
    correct: "zwanzig vor eins"
  },

  {
    id: 11,
    level: "A2",
    clock: "14:05",
    question: "Wie spät ist es?",
    options: [
      "fünf nach zwei",
      "fünf vor zwei",
      "zwei Uhr fünf",
      "halb drei"
    ],
    correct: "fünf nach zwei"
  },
  {
    id: 12,
    level: "A2",
    clock: "15:50",
    question: "Wie spät ist es?",
    options: [
      "zehn vor vier",
      "zehn nach drei",
      "fünfzig nach drei",
      "halb vier"
    ],
    correct: "zehn vor vier"
  },
  {
    id: 13,
    level: "A2",
    clock: "16:30",
    question: "Wie spät ist es?",
    options: [
      "halb fünf",
      "halb vier",
      "dreißig nach vier",
      "vier Uhr dreißig"
    ],
    correct: "halb fünf"
  },
  {
    id: 14,
    level: "A2",
    clock: "17:15",
    question: "Wie spät ist es?",
    options: [
      "Viertel nach fünf",
      "Viertel vor fünf",
      "halb sechs",
      "fünf fünfzehn"
    ],
    correct: "Viertel nach fünf"
  },
  {
    id: 15,
    level: "A2",
    clock: "18:45",
    question: "Wie spät ist es?",
    options: [
      "Viertel vor sieben",
      "Viertel nach sechs",
      "halb sieben",
      "sechs fünfundvierzig"
    ],
    correct: "Viertel vor sieben"
  },

  {
    id: 16,
    level: "A2",
    clock: "19:05",
    question: "Wie spät ist es?",
    options: [
      "fünf nach sieben",
      "fünf vor sieben",
      "halb acht",
      "sieben Uhr fünf"
    ],
    correct: "fünf nach sieben"
  },
  {
    id: 17,
    level: "A2",
    clock: "20:25",
    question: "Wie spät ist es?",
    options: [
      "fünf vor halb neun",
      "fünf nach halb neun",
      "zwanzig nach acht",
      "halb acht"
    ],
    correct: "fünf vor halb neun"
  },
  {
    id: 18,
    level: "A2",
    clock: "21:35",
    question: "Wie spät ist es?",
    options: [
      "fünf nach halb zehn",
      "fünf vor halb zehn",
      "halb neun",
      "neun fünfunddreißig"
    ],
    correct: "fünf nach halb zehn"
  },
  {
    id: 19,
    level: "A2",
    clock: "22:55",
    question: "Wie spät ist es?",
    options: [
      "fünf vor elf",
      "fünf nach zehn",
      "zehn Uhr fünfundfünfzig",
      "halb elf"
    ],
    correct: "fünf vor elf"
  },
  {
    id: 20,
    level: "A2",
    clock: "23:30",
    question: "Wie spät ist es?",
    options: [
      "halb zwölf",
      "halb elf",
      "dreißig nach elf",
      "elf Uhr dreißig"
    ],
    correct: "halb zwölf"
  }
];

// scheduleTimeQuestions (A1-A2)
const scheduleTimeQuestions = [
  {
    id: 1,
    type: "schedule_time",
    level: "A1",
    difficulty: "easy",
    timeLimitSec: 12,
    question: "Um wie viel Uhr beginnt der Unterricht?",
    clock: "08:00",
    options: [
      "acht Uhr",
      "acht nach acht",
      "halb acht",
      "acht vor acht"
    ],
    correct: "acht Uhr",
    explanation: "08:00 = acht Uhr",
    points: 2
  },
  {
    id: 2,
    type: "schedule_time",
    level: "A1",
    difficulty: "easy",
    timeLimitSec: 12,
    question: "Der Zug fährt um …",
    clock: "09:15",
    options: [
      "Viertel nach neun",
      "Viertel vor neun",
      "halb zehn",
      "neun Uhr dreißig"
    ],
    correct: "Viertel nach neun",
    explanation: "09:15 = Viertel nach neun",
    points: 2
  },
  {
    id: 3,
    type: "schedule_time",
    level: "A1",
    difficulty: "easy",
    timeLimitSec: 12,
    question: "Um wie viel Uhr ist die Pause?",
    clock: "10:30",
    options: [
      "halb elf",
      "halb zehn",
      "zehn Uhr dreißig",
      "dreißig nach zehn"
    ],
    correct: "halb elf",
    explanation: "10:30 = halb elf",
    points: 2
  },
  {
    id: 4,
    type: "schedule_time",
    level: "A1",
    difficulty: "easy",
    timeLimitSec: 12,
    question: "Der Film startet um …",
    clock: "18:00",
    options: [
      "sechs Uhr",
      "sechs nach sechs",
      "halb sechs",
      "sechs vor sechs"
    ],
    correct: "sechs Uhr",
    explanation: "18:00 = sechs Uhr",
    points: 2
  },
  {
    id: 5,
    type: "schedule_time",
    level: "A1",
    difficulty: "easy",
    timeLimitSec: 12,
    question: "Um wie viel Uhr isst du zu Mittag?",
    clock: "12:30",
    options: [
      "halb eins",
      "halb zwölf",
      "zwölf Uhr dreißig",
      "dreißig nach zwölf"
    ],
    correct: "halb eins",
    explanation: "12:30 = halb eins",
    points: 2
  },

  {
    id: 6,
    type: "schedule_time",
    level: "A2",
    difficulty: "normal",
    timeLimitSec: 14,
    question: "Der Bus kommt um …",
    clock: "07:05",
    options: [
      "fünf nach sieben",
      "fünf vor sieben",
      "halb acht",
      "sieben Uhr fünfzig"
    ],
    correct: "fünf nach sieben",
    explanation: "07:05 = fünf nach sieben",
    points: 3
  },
  {
    id: 7,
    type: "schedule_time",
    level: "A2",
    difficulty: "normal",
    timeLimitSec: 14,
    question: "Um wie viel Uhr beginnt die Prüfung?",
    clock: "08:25",
    options: [
      "fünf vor halb neun",
      "fünf nach halb neun",
      "acht Uhr fünfundzwanzig",
      "halb acht"
    ],
    correct: "fünf vor halb neun",
    explanation: "08:25 = fünf vor halb neun",
    points: 3
  },
  {
    id: 8,
    type: "schedule_time",
    level: "A2",
    difficulty: "normal",
    timeLimitSec: 14,
    question: "Der Kurs endet um …",
    clock: "16:45",
    options: [
      "Viertel vor fünf",
      "Viertel nach vier",
      "halb fünf",
      "vier Uhr fünfundvierzig"
    ],
    correct: "Viertel vor fünf",
    explanation: "16:45 = Viertel vor fünf",
    points: 3
  },
  {
    id: 9,
    type: "schedule_time",
    level: "A2",
    difficulty: "normal",
    timeLimitSec: 14,
    question: "Um wie viel Uhr beginnt das Meeting?",
    clock: "14:10",
    options: [
      "zehn nach zwei",
      "zehn vor zwei",
      "halb drei",
      "zwei Uhr zehn"
    ],
    correct: "zehn nach zwei",
    explanation: "14:10 = zehn nach zwei",
    points: 3
  },
  {
    id: 10,
    type: "schedule_time",
    level: "A2",
    difficulty: "normal",
    timeLimitSec: 14,
    question: "Der Zug fährt ab um …",
    clock: "17:55",
    options: [
      "fünf vor sechs",
      "fünf nach fünf",
      "halb sechs",
      "sechs Uhr fünf"
    ],
    correct: "fünf vor sechs",
    explanation: "17:55 = fünf vor sechs",
    points: 3
  },

  {
    id: 11,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Um wie viel Uhr beginnt das Konzert?",
    clock: "19:35",
    options: [
      "fünf nach halb acht",
      "fünf vor halb acht",
      "halb sieben",
      "sieben Uhr fünfunddreißig"
    ],
    correct: "fünf nach halb acht",
    explanation: "19:35 = fünf nach halb acht",
    points: 4
  },
  {
    id: 12,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Der Zug kommt um … an",
    clock: "20:25",
    options: [
      "fünf vor halb neun",
      "fünf nach halb neun",
      "zwanzig nach acht",
      "halb acht"
    ],
    correct: "fünf vor halb neun",
    explanation: "20:25 = fünf vor halb neun",
    points: 4
  },
  {
    id: 13,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Um wie viel Uhr beginnt der Vortrag?",
    clock: "21:05",
    options: [
      "fünf nach neun",
      "fünf vor neun",
      "halb zehn",
      "neun Uhr fünfzig"
    ],
    correct: "fünf nach neun",
    explanation: "21:05 = fünf nach neun",
    points: 4
  },
  {
    id: 14,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Der Unterricht endet um …",
    clock: "13:50",
    options: [
      "zehn vor zwei",
      "zehn nach eins",
      "halb zwei",
      "eins Uhr fünfzig"
    ],
    correct: "zehn vor zwei",
    explanation: "13:50 = zehn vor zwei",
    points: 4
  },
  {
    id: 15,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Um wie viel Uhr treffen wir uns?",
    clock: "18:30",
    options: [
      "halb sieben",
      "halb sechs",
      "sechs Uhr dreißig",
      "dreißig nach sechs"
    ],
    correct: "halb sieben",
    explanation: "18:30 = halb sieben",
    points: 4
  },

  {
    id: 16,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Der Bus fährt um … ab",
    clock: "06:55",
    options: [
      "fünf vor sieben",
      "fünf nach sechs",
      "halb sieben",
      "sechs Uhr fünfundfünfzig"
    ],
    correct: "fünf vor sieben",
    explanation: "06:55 = fünf vor sieben",
    points: 4
  },
  {
    id: 17,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Um wie viel Uhr beginnt der Termin?",
    clock: "11:20",
    options: [
      "zwanzig nach elf",
      "zwanzig vor elf",
      "zehn nach halb zwölf",
      "halb elf"
    ],
    correct: "zwanzig nach elf",
    explanation: "11:20 = zwanzig nach elf",
    points: 4
  },
  {
    id: 18,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Der Zug fährt um …",
    clock: "15:40",
    options: [
      "zwanzig vor vier",
      "zwanzig nach drei",
      "halb vier",
      "drei Uhr vierzig"
    ],
    correct: "zwanzig vor vier",
    explanation: "15:40 = zwanzig vor vier",
    points: 4
  },
  {
    id: 19,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Um wie viel Uhr beginnt der Film?",
    clock: "22:45",
    options: [
      "Viertel vor elf",
      "Viertel nach zehn",
      "halb elf",
      "zehn Uhr fünfundvierzig"
    ],
    correct: "Viertel vor elf",
    explanation: "22:45 = Viertel vor elf",
    points: 4
  },
  {
    id: 20,
    type: "schedule_time",
    level: "A2",
    difficulty: "hard",
    timeLimitSec: 16,
    question: "Der Unterricht beginnt um …",
    clock: "07:30",
    options: [
      "halb acht",
      "halb sieben",
      "sieben Uhr dreißig",
      "dreißig nach sieben"
    ],
    correct: "halb acht",
    explanation: "07:30 = halb acht",
    points: 4
  }
];

// also add to grammarQuestions for theme access
// (assignment of `schedule_time` and `time_clock` moved below
// after `grammarQuestions` is declared to avoid TDZ errors)

const grammarQuestions = {
  sein: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Ich ___ aus Deutschland.",
      options: ["bin", "bist", "ist", "sind"],
      correct: "bin",
      explanation: "Ich bin aus Deutschland. (я + bin)",
      hint: "Я з Німеччини.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Du ___ sehr nett.",
      options: ["bin", "bist", "ist", "seid"],
      correct: "bist",
      explanation: "Du bist sehr nett. (ти + bist)",
      hint: "Ти дуже милий/мила.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Er ___ mein Bruder.",
      options: ["bin", "bist", "ist", "sind"],
      correct: "ist",
      explanation: "Er ist mein Bruder. (він + ist)",
      hint: "Він мій брат.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Wir ___ gute Freunde.",
      options: ["bin", "bist", "ist", "sind"],
      correct: "sind",
      explanation: "Wir sind gute Freunde. (ми + sind)",
      hint: "Ми хороші друзі.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Ihr ___ aus der Ukraine.",
      options: ["bin", "seid", "ist", "sind"],
      correct: "seid",
      explanation: "Ihr seid aus der Ukraine. (ви + seid)",
      hint: "Ви з України.",
      points: 2
    }
  ],

  articles_definite: [
    {
      id: 1,
      type: "multiple_choice",
      question: "___ Hund spielt im Garten.",
      options: ["Der", "Die", "Das", "Ein"],
      correct: "Der",
      explanation: "Der Hund (чоловічий рід - maskulin)",
      hint: "Собака грає в саду.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "___ Katze ist süß.",
      options: ["Der", "Die", "Das", "Eine"],
      correct: "Die",
      explanation: "Die Katze (жіночий рід - feminin)",
      hint: "Кішка мила.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "___ Haus ist groß.",
      options: ["Der", "Die", "Das", "Ein"],
      correct: "Das",
      explanation: "Das Haus (середній рід - neutrum)",
      hint: "Будинок великий.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "___ Kinder spielen Fußball.",
      options: ["Der", "Die", "Das", "Die"],
      correct: "Die",
      explanation: "Die Kinder (множина - plural)",
      hint: "Діти грають у футбол.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "___ Buch ist interessant.",
      options: ["Der", "Die", "Das", "Ein"],
      correct: "Das",
      explanation: "Das Buch (середній рід)",
      hint: "Книга цікава.",
      points: 2
    }
  ],

  greetings: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Wie ___ Sie?",
      options: ["heißt", "heißen", "bist", "sind"],
      correct: "heißen",
      explanation: "Wie heißen Sie? (Як вас звати? - формальне)",
      hint: "Як вас звати?",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Guten ___ !",
      options: ["Morgen", "Tag", "Abend", "alle"],
      correct: "Tag",
      explanation: "Guten Tag! (Доброго дня!)",
      hint: "Доброго дня!",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "___ geht es dir?",
      options: ["Wer", "Wie", "Was", "Wo"],
      correct: "Wie",
      explanation: "Wie geht es dir? (Як справи?)",
      hint: "Як справи?",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Auf ___ !",
      options: ["Wiedersehen", "Morgen", "Tag", "Abend"],
      correct: "Wiedersehen",
      explanation: "Auf Wiedersehen! (До побачення!)",
      hint: "До побачення!",
      points: 1
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "___ heiße Anna.",
      options: ["Du", "Ich", "Er", "Sie"],
      correct: "Ich",
      explanation: "Ich heiße Anna. (Мене звати Анна)",
      hint: "Мене звати Анна.",
      points: 2
    }
  ],

  numbers: [
    {
      id: 1,
      type: "multiple_choice",
      question: "eins, zwei, ___",
      options: ["vier", "drei", "fünf", "sechs"],
      correct: "drei",
      explanation: "1, 2, 3 - eins, zwei, drei",
      hint: "1, 2, 3",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Wie alt ___ du?",
      options: ["bist", "ist", "bin", "sind"],
      correct: "bist",
      explanation: "Wie alt bist du? (Скільки тобі років?)",
      hint: "Скільки тобі років?",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Ich bin ___ Jahre alt.",
      options: ["einundzwanzig", "zwanzig", "dreißig", "zehn"],
      correct: "zwanzig",
      explanation: "Ich bin zwanzig Jahre alt. (Мені 20 років)",
      hint: "Мені 20 років.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "sieben + acht = ___",
      options: ["fünfzehn", "sechzehn", "vierzehn", "dreizehn"],
      correct: "fünfzehn",
      explanation: "7 + 8 = 15 (sieben + acht = fünfzehn)",
      hint: "7 + 8 = ?",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Telefonnummer: null, ___ , zwei",
      options: ["eins", "drei", "vier", "fünf"],
      correct: "eins",
      explanation: "0, 1, 2 (null, eins, zwei)",
      hint: "0, ?, 2",
      points: 1
    }
  ],

  family: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Meine ___ heißt Maria.",
      options: ["Vater", "Mutter", "Bruder", "Schwester"],
      correct: "Mutter",
      explanation: "Meine Mutter heißt Maria. (Мою маму звати Марія)",
      hint: "Мою маму звати Марія.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Das ist mein ___ .",
      options: ["Vater", "Mütter", "Schwestern", "Eltern"],
      correct: "Vater",
      explanation: "Das ist mein Vater. (Це мій батько)",
      hint: "Це мій батько.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Ich habe zwei ___ .",
      options: ["Bruder", "Brüder", "Schwester", "Schwestern"],
      correct: "Brüder",
      explanation: "Ich habe zwei Brüder. (У мене два брати)",
      hint: "У мене два брати.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Meine ___ ist sieben Jahre alt.",
      options: ["Bruder", "Vater", "Schwester", "Mutter"],
      correct: "Schwester",
      explanation: "Meine Schwester ist sieben Jahre alt. (Моїй сестрі 7 років)",
      hint: "Моїй сестрі 7 років.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Das sind meine ___ .",
      options: ["Vater", "Mutter", "Eltern", "Bruder"],
      correct: "Eltern",
      explanation: "Das sind meine Eltern. (Це мої батьки)",
      hint: "Це мої батьки.",
      points: 2
    }
  ],

  food: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Ich trinke ___ .",
      options: ["Brot", "Wasser", "Apfel", "Käse"],
      correct: "Wasser",
      explanation: "Ich trinke Wasser. (Я п'ю воду)",
      hint: "Я п'ю воду.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Das ist ein ___ .",
      options: ["Milch", "Apfel", "Wasser", "Kaffee"],
      correct: "Apfel",
      explanation: "Das ist ein Apfel. (Це яблуко)",
      hint: "Це яблуко.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Ich esse ___ mit Marmelade.",
      options: ["Wasser", "Brot", "Kaffee", "Fleisch"],
      correct: "Brot",
      explanation: "Ich esse Brot mit Marmelade. (Я їм хліб з варенням)",
      hint: "Я їм хліб з варенням.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Möchtest du ___ ?",
      options: ["essen", "trinken", "Tee", "gehen"],
      correct: "Tee",
      explanation: "Möchtest du Tee? (Хочеш чаю?)",
      hint: "Хочеш чаю?",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Das ___ schmeckt gut.",
      options: ["Wasser", "Essen", "Tee", "Kaffee"],
      correct: "Essen",
      explanation: "Das Essen schmeckt gut. (Їжа смачна)",
      hint: "Їжа смачна.",
      points: 2
    }
  ],

  colors: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Die Sonne ist ___ .",
      options: ["blau", "gelb", "grün", "schwarz"],
      correct: "gelb",
      explanation: "Die Sonne ist gelb. (Сонце жовте)",
      hint: "Сонце жовте.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Der Himmel ist ___ .",
      options: ["rot", "weiß", "blau", "grün"],
      correct: "blau",
      explanation: "Der Himmel ist blau. (Небо синє)",
      hint: "Небо синє.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Das Gras ist ___ .",
      options: ["rot", "gelb", "grün", "blau"],
      correct: "grün",
      explanation: "Das Gras ist grün. (Трава зелена)",
      hint: "Трава зелена.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Die Nacht ist ___ .",
      options: ["weiß", "schwarz", "blau", "rot"],
      correct: "schwarz",
      explanation: "Die Nacht ist schwarz. (Ніч чорна)",
      hint: "Ніч чорна.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Schnee ist ___ .",
      options: ["schwarz", "rot", "blau", "weiß"],
      correct: "weiß",
      explanation: "Schnee ist weiß. (Сніг білий)",
      hint: "Сніг білий.",
      points: 2
    }
  ],

  time: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Wie ___ ist es?",
      options: ["alt", "viel", "spät", "viele"],
      correct: "spät",
      explanation: "Wie spät ist es? (Котра година?)",
      hint: "Котра година?",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Es ist ___ Uhr.",
      options: ["drei", "dritte", "dreite", "dreien"],
      correct: "drei",
      explanation: "Es ist drei Uhr. (Зараз три години)",
      hint: "Зараз три години.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "___ Morgen",
      options: ["am", "im", "um", "zu"],
      correct: "am",
      explanation: "am Morgen (вранці)",
      hint: "вранці",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Ich stehe ___ 7 Uhr auf.",
      options: ["am", "im", "um", "zu"],
      correct: "um",
      explanation: "Ich stehe um 7 Uhr auf. (Я встаю о 7 годині)",
      hint: "Я встаю о 7 годині.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Heute ist ___ .",
      options: ["Morgen", "gestern", "Montag", "Jahr"],
      correct: "Montag",
      explanation: "Heute ist Montag. (Сьогодні понеділок)",
      hint: "Сьогодні понеділок.",
      points: 2
    }
  ],

  house: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Ich wohne in einem ___ .",
      options: ["Auto", "Haus", "Baum", "Buch"],
      correct: "Haus",
      explanation: "Ich wohne in einem Haus. (Я живу в будинку)",
      hint: "Я живу в будинку.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Das ___ ist in der Küche.",
      options: ["Bett", "Tisch", "Fenster", "Auto"],
      correct: "Tisch",
      explanation: "Das Tisch ist in der Küche. (Стіл на кухні)",
      hint: "Стіл на кухні.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Ich schlafe im ___ .",
      options: ["Bad", "Zimmer", "Wohnzimmer", "Küche"],
      correct: "Zimmer",
      explanation: "Ich schlafe im Zimmer. (Я сплю в кімнаті)",
      hint: "Я сплю в кімнаті.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Das ___ ist im Bad.",
      options: ["Bett", "Tisch", "Fenster", "Waschbecken"],
      correct: "Waschbecken",
      explanation: "Das Waschbecken ist im Bad. (Умивальник у ванній)",
      hint: "Умивальник у ванній.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Wir essen im ___ .",
      options: ["Schlafzimmer", "Wohnzimmer", "Bad", "Keller"],
      correct: "Wohnzimmer",
      explanation: "Wir essen im Wohnzimmer. (Ми їмо у вітальні)",
      hint: "Ми їмо у вітальні.",
      points: 2
    }
  ],

  animals: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Der ___ bellt.",
      options: ["Katze", "Hund", "Maus", "Vogel"],
      correct: "Hund",
      explanation: "Der Hund bellt. (Собака гавкає)",
      hint: "Собака гавкає.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Die ___ miaut.",
      options: ["Hund", "Katze", "Maus", "Pferd"],
      correct: "Katze",
      explanation: "Die Katze miaut. (Кішка нявкає)",
      hint: "Кішка нявкає.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Das ___ fliegt.",
      options: ["Pferd", "Fisch", "Vogel", "Hund"],
      correct: "Vogel",
      explanation: "Das Vogel fliegt. (Птах літає)",
      hint: "Птах літає.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Die ___ schwimmt.",
      options: ["Katze", "Maus", "Kuh", "Ente"],
      correct: "Ente",
      explanation: "Die Ente schwimmt. (Качка плаває)",
      hint: "Качка плаває.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Das ___ läuft schnell.",
      options: ["Fisch", "Pferd", "Vogel", "Hase"],
      correct: "Pferd",
      explanation: "Das Pferd läuft schnell. (Кінь бігає швидко)",
      hint: "Кінь бігає швидко.",
      points: 2
    }
  ],

  clothes: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Ich trage eine ___ .",
      options: ["Hose", "Jacke", "Hemde", "Schuhe"],
      correct: "Jacke",
      explanation: "Ich trage eine Jacke. (Я ношу куртку)",
      hint: "Я ношу куртку.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Das ___ ist blau.",
      options: ["Hose", "Hemde", "T-Shirt", "Schuhe"],
      correct: "T-Shirt",
      explanation: "Das T-Shirt ist blau. (Футболка синя)",
      hint: "Футболка синя.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Er trägt eine ___ .",
      options: ["Rock", "Kleid", "Hose", "Schuhe"],
      correct: "Hose",
      explanation: "Er trägt eine Hose. (Він носить штани)",
      hint: "Він носить штани.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Sie trägt ein ___ .",
      options: ["Hose", "Hemde", "Kleid", "Schuhe"],
      correct: "Kleid",
      explanation: "Sie trägt ein Kleid. (Вона носить сукню)",
      hint: "Вона носить сукню.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Die ___ sind neu.",
      options: ["Hose", "Jacke", "Hemde", "Schuhe"],
      correct: "Schuhe",
      explanation: "Die Schuhe sind neu. (Взуття нове)",
      hint: "Взуття нове.",
      points: 2
    }
  ],

  weather: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Heute ___ die Sonne.",
      options: ["regnet", "scheint", "schneit", "stürmt"],
      correct: "scheint",
      explanation: "Heute scheint die Sonne. (Сьогодні світить сонце)",
      hint: "Сьогодні світить сонце.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Es ___ .",
      options: ["scheint", "regnet", "sonnig", "warm"],
      correct: "regnet",
      explanation: "Es regnet. (Іде дощ)",
      hint: "Іде дощ.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Im Winter ___ es.",
      options: ["regnet", "scheint", "schneit", "warm"],
      correct: "schneit",
      explanation: "Im Winter schneit es. (Взимку йде сніг)",
      hint: "Взимку йде сніг.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Es ist sehr ___ .",
      options: ["kalt", "Sonne", "Regen", "schneit"],
      correct: "kalt",
      explanation: "Es ist sehr kalt. (Дуже холодно)",
      hint: "Дуже холодно.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Das ___ ist gut.",
      options: ["kalt", "warm", "Wetter", "schneit"],
      correct: "Wetter",
      explanation: "Das Wetter ist gut. (Погода хороша)",
      hint: "Погода хороша.",
      points: 2
    }
  ],

  hobbies: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Ich ___ Fußball.",
      options: ["spiele", "lese", "sehe", "höre"],
      correct: "spiele",
      explanation: "Ich spiele Fußball. (Я граю у футбол)",
      hint: "Я граю у футбол.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Sie ___ Musik.",
      options: ["spielt", "hört", "sieht", "liest"],
      correct: "hört",
      explanation: "Sie hört Musik. (Вона слухає музику)",
      hint: "Вона слухає музику.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Er ___ ein Buch.",
      options: ["spielt", "hört", "sieht", "liest"],
      correct: "liest",
      explanation: "Er liest ein Buch. (Він читає книгу)",
      hint: "Він читає книгу.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Wir ___ fern.",
      options: ["spielen", "sehen", "lesen", "hören"],
      correct: "sehen",
      explanation: "Wir sehen fern. (Ми дивимося телевізор)",
      hint: "Ми дивимося телевізор.",
      points: 2
    },
    
  ],

  school: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Ich lerne ___ .",
      options: ["Deutsch", "spielen", "essen", "schwimmen"],
      correct: "Deutsch",
      explanation: "Ich lerne Deutsch. (Я вчу німецьку)",
      hint: "Я вчу німецьку.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Der ___ erklärt die Aufgabe.",
      options: ["Schüler", "Lehrer", "Student", "Kind"],
      correct: "Lehrer",
      explanation: "Der Lehrer erklärt die Aufgabe. (Вчитель пояснює завдання)",
      hint: "Вчитель пояснює завдання.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Das ___ ist im Klassenzimmer.",
      options: ["Bett", "Tisch", "Auto", "Fenster"],
      correct: "Tisch",
      explanation: "Das Tisch ist im Klassenzimmer. (Стіл у класі)",
      hint: "Стіл у класі.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Ich schreibe mit einem ___ .",
      options: ["Buch", "Stift", "Radiergummi", "Lineal"],
      correct: "Stift",
      explanation: "Ich schreibe mit einem Stift. (Я пишу ручкою)",
      hint: "Я пишу ручкою.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Die ___ ist interessant.",
      options: ["Stunde", "Pause", "Schule", "Tafel"],
      correct: "Stunde",
      explanation: "Die Stunde ist interessant. (Урок цікавий)",
      hint: "Урок цікавий.",
      points: 2
    }
  ],

  city: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Ich wohne in einer ___ .",
      options: ["Dorf", "Stadt", "Land", "Haus"],
      correct: "Stadt",
      explanation: "Ich wohne in einer Stadt. (Я живу в місті)",
      hint: "Я живу в місті.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Da ist ein ___ .",
      options: ["Park", "Haus", "Auto", "Buch"],
      correct: "Park",
      explanation: "Da ist ein Park. (Там парк)",
      hint: "Там парк.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Die ___ fährt in die Stadt.",
      options: ["Auto", "Bus", "Fahrrad", "Zug"],
      correct: "Bus",
      explanation: "Die Bus fährt in die Stadt. (Автобус їде в місто)",
      hint: "Автобус їде в місто.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Ich kaufe im ___ ein.",
      options: ["Park", "Supermarkt", "Schule", "Haus"],
      correct: "Supermarkt",
      explanation: "Ich kaufe im Supermarkt ein. (Я купую в супермаркеті)",
      hint: "Я купую в супермаркеті.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Das ___ ist groß.",
      options: ["Geschäft", "Haus", "Auto", "Buch"],
      correct: "Geschäft",
      explanation: "Das Geschäft ist groß. (Магазин великий)",
      hint: "Магазин великий.",
      points: 2
    }
  ],

  body: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Ich sehe mit den ___ .",
      options: ["Ohren", "Augen", "Händen", "Füßen"],
      correct: "Augen",
      explanation: "Ich sehe mit den Augen. (Я бачу очима)",
      hint: "Я бачу очима.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Ich höre mit den ___ .",
      options: ["Ohren", "Augen", "Händen", "Füßen"],
      correct: "Ohren",
      explanation: "Ich höre mit den Ohren. (Я чую вухами)",
      hint: "Я чую вухами.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      question: "Ich gehe mit den ___ .",
      options: ["Ohren", "Augen", "Händen", "Füßen"],
      correct: "Füßen",
      explanation: "Ich gehe mit den Füßen. (Я ходжу ногами)",
      hint: "Я ходжу ногами.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Das ___ tut weh.",
      options: ["Kopf", "sehen", "hören", "gehen"],
      correct: "Kopf",
      explanation: "Das Kopf tut weh. (Голова болить)",
      hint: "Голова болить.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Ich wasche meine ___ .",
      options: ["Hände", "Augen", "Ohren", "Füße"],
      correct: "Hände",
      explanation: "Ich wasche meine Hände. (Я мию руки)",
      hint: "Я мию руки.",
      points: 2
    }
  ]
};

// Додати ще питань до існуючих тем
grammarQuestions.sein.push(
  {
    id: 6,
    type: "multiple_choice",
    question: "Sie (вони) ___ hier.",
    options: ["bin", "bist", "ist", "sind"],
    correct: "sind",
    explanation: "Sie sind hier. (вони + sind)",
    hint: "Вони тут.",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "Es ___ kalt heute.",
    options: ["bin", "bist", "ist", "sind"],
    correct: "ist",
    explanation: "Es ist kalt heute. (воно + ist)",
    hint: "Сьогодні холодно.",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Ich ___ glücklich.",
    options: ["bin", "bist", "ist", "sind"],
    correct: "bin",
    explanation: "Ich bin glücklich. (я + bin)",
    hint: "Я щасливий/щаслива.",
    points: 2
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Du ___ jung.",
    options: ["bin", "bist", "ist", "seid"],
    correct: "bist",
    explanation: "Du bist jung. (ти + bist)",
    hint: "Ти молодий/молода.",
    points: 2
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "Wir ___ im Park.",
    options: ["bin", "bist", "ist", "sind"],
    correct: "sind",
    explanation: "Wir sind im Park. (ми + sind)",
    hint: "Ми в парку.",
    points: 2
  }
);

grammarQuestions.articles_definite.push(
  {
    id: 6,
    type: "multiple_choice",
    question: "___ Stuhl ist bequem.",
    options: ["Der", "Die", "Das", "Ein"],
    correct: "Der",
    explanation: "Der Stuhl (чоловічий рід)",
    hint: "Стілець зручний.",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "___ Tür ist offen.",
    options: ["Der", "Die", "Das", "Eine"],
    correct: "Die",
    explanation: "Die Tür (жіночий рід)",
    hint: "Двері відкриті.",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "___ Fenster ist geschlossen.",
    options: ["Der", "Die", "Das", "Ein"],
    correct: "Das",
    explanation: "Das Fenster (середній рід)",
    hint: "Вікно закрите.",
    points: 2
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "___ Blume ist schön.",
    options: ["Der", "Die", "Das", "Eine"],
    correct: "Die",
    explanation: "Die Blume (жіночий рід)",
    hint: "Квітка гарна.",
    points: 2
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "___ Wasser ist kalt.",
    options: ["Der", "Die", "Das", "Ein"],
    correct: "Das",
    explanation: "Das Wasser (середній рід)",
    hint: "Вода холодна.",
    points: 2
  }
);

// НОВІ ТЕМИ

grammarQuestions.pronouns = [
  {
    id: 1,
    type: "multiple_choice",
    question: "___ heißt Peter.",
    options: ["Er", "Sie", "Es", "Ich"],
    correct: "Er",
    explanation: "Er heißt Peter. (Його звати Петер)",
    hint: "Його звати Петер.",
    points: 2
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "___ bin Maria.",
    options: ["Du", "Sie", "Ich", "Er"],
    correct: "Ich",
    explanation: "Ich bin Maria. (Я Марія)",
    hint: "Я Марія.",
    points: 2
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "___ kommst aus Berlin?",
    options: ["Wer", "Wo", "Wie", "Was"],
    correct: "Wer",
    explanation: "Wer kommst aus Berlin? (Хто приїхав з Берліна?)",
    hint: "Хто приїхав з Берліна?",
    points: 2
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Das ist mein Buch. ___ ist neu.",
    options: ["Er", "Sie", "Es", "Ich"],
    correct: "Es",
    explanation: "Es ist neu. (воно нове)",
    hint: "Воно нове.",
    points: 2
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Das sind meine Eltern. ___ wohnen in Köln.",
    options: ["Das", "Die", "Der", "Sie"],
    correct: "Sie",
    explanation: "Sie wohnen in Köln. (вони живуть у Кельні)",
    hint: "Вони живуть у Кельні.",
    points: 2
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "___ ist das?",
    options: ["Wer", "Was", "Wo", "Wie"],
    correct: "Wer",
    explanation: "Wer ist das? (Хто це?)",
    hint: "Хто це?",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "___ machst du?",
    options: ["Wer", "Was", "Wo", "Wie"],
    correct: "Was",
    explanation: "Was machst du? (Що ти робиш?)",
    hint: "Що ти робиш?",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "___ wohnst du?",
    options: ["Wer", "Was", "Wo", "Wie"],
    correct: "Wo",
    explanation: "Wo wohnst du? (Де ти живеш?)",
    hint: "Де ти живеш?",
    points: 2
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "___ alt bist du?",
    options: ["Wer", "Was", "Wo", "Wie"],
    correct: "Wie",
    explanation: "Wie alt bist du? (Скільки тобі років?)",
    hint: "Скільки тобі років?",
    points: 2
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "___ ist dein Name?",
    options: ["Wer", "Was", "Wo", "Wie"],
    correct: "Was",
    explanation: "Was ist dein Name? (Як тебе звати?)",
    hint: "Як тебе звати?",
    points: 2
  }
];

  // ===== PERFECT AUX QUESTIONS =====
  const perfectAuxQuestions = [
    {
      id: 1,
      type: "perfect_aux",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich ___ nach Hause gegangen.",
      options: ["bin", "habe"],
      correct: "bin",
      explanation: "gehen = рух → sein",
      points: 2
    },
    {
      id: 2,
      type: "perfect_aux",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Er ___ das Buch gelesen.",
      options: ["hat", "ist"],
      correct: "hat",
      explanation: "lesen = дія → haben",
      points: 2
    },
    {
      id: 3,
      type: "perfect_aux",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Wir ___ nach Berlin gefahren.",
      options: ["sind", "haben"],
      correct: "sind",
      explanation: "fahren (рух) → sein",
      points: 2
    },
    {
      id: 4,
      type: "perfect_aux",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Sie ___ viel gearbeitet.",
      options: ["hat", "ist"],
      correct: "hat",
      explanation: "arbeiten = дія → haben",
      points: 2
    },
    {
      id: 5,
      type: "perfect_aux",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich ___ früh aufgestanden.",
      options: ["bin", "habe"],
      correct: "bin",
      explanation: "aufstehen = зміна стану → sein",
      points: 2
    },

    {
      id: 6,
      type: "perfect_aux",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Wir ___ zu Hause geblieben.",
      options: ["sind", "haben"],
      correct: "sind",
      explanation: "bleiben = стан → sein",
      points: 3
    },
    {
      id: 7,
      type: "perfect_aux",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Er ___ einen Film gesehen.",
      options: ["hat", "ist"],
      correct: "hat",
      explanation: "sehen = дія → haben",
      points: 3
    },
    {
      id: 8,
      type: "perfect_aux",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich ___ schnell eingeschlafen.",
      options: ["bin", "habe"],
      correct: "bin",
      explanation: "einschlafen = зміна стану → sein",
      points: 3
    },
    {
      id: 9,
      type: "perfect_aux",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Sie ___ Pizza bestellt.",
      options: ["hat", "ist"],
      correct: "hat",
      explanation: "bestellen = дія → haben",
      points: 3
    },
    {
      id: 10,
      type: "perfect_aux",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Wir ___ spät angekommen.",
      options: ["sind", "haben"],
      correct: "sind",
      explanation: "ankommen = рух/результат → sein",
      points: 3
    },

    {
      id: 11,
      type: "perfect_aux",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich ___ lange gewartet.",
      options: ["habe", "bin"],
      correct: "habe",
      explanation: "warten = дія → haben",
      points: 3
    },
    {
      id: 12,
      type: "perfect_aux",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Er ___ aus dem Bus ausgestiegen.",
      options: ["ist", "hat"],
      correct: "ist",
      explanation: "aussteigen = рух → sein",
      points: 3
    },
    {
      id: 13,
      type: "perfect_aux",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Wir ___ den ganzen Tag gelernt.",
      options: ["haben", "sind"],
      correct: "haben",
      explanation: "lernen = дія → haben",
      points: 3
    },
    {
      id: 14,
      type: "perfect_aux",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Sie ___ sehr müde geworden.",
      options: ["ist", "hat"],
      correct: "ist",
      explanation: "werden = зміна стану → sein",
      points: 3
    },
    {
      id: 15,
      type: "perfect_aux",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich ___ mein Handy verloren.",
      options: ["habe", "bin"],
      correct: "habe",
      explanation: "verlieren = дія → haben",
      points: 3
    },

    {
      id: 16,
      type: "perfect_aux",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir ___ durch den Park gelaufen.",
      options: ["sind", "haben"],
      correct: "sind",
      explanation: "laufen (рух) → sein",
      points: 4
    },
    {
      id: 17,
      type: "perfect_aux",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Er ___ das Auto repariert.",
      options: ["hat", "ist"],
      correct: "hat",
      explanation: "reparieren = дія → haben",
      points: 4
    },
    {
      id: 18,
      type: "perfect_aux",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich ___ schnell nach Hause gerannt.",
      options: ["bin", "habe"],
      correct: "bin",
      explanation: "rennen = рух → sein",
      points: 4
    },
    {
      id: 19,
      type: "perfect_aux",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Sie ___ den Test bestanden.",
      options: ["hat", "ist"],
      correct: "hat",
      explanation: "bestehen = дія → haben",
      points: 4
    },
    {
      id: 20,
      type: "perfect_aux",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir ___ sehr früh zurückgekommen.",
      options: ["sind", "haben"],
      correct: "sind",
      explanation: "zurückkommen = рух → sein",
      points: 4
    }
  ];

  grammarQuestions.perfect_aux = perfectAuxQuestions;

  // Attach schedule/time pools created earlier
  grammarQuestions.schedule_time = scheduleTimeQuestions;
  grammarQuestions.time_clock = timeClockQuestions;

// ==================== TRAP QUESTIONS (A1–A2, з "загвоздкою") ====================
// Пастки на типові помилки: sein/haben, порядок слів, viel/viele, Wer/Wen тощо.
grammarQuestions.traps = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich ___ Hunger.",
    options: ["bin", "habe", "ist", "hat"],
    correct: "habe",
    explanation: "У німецькій кажуть: Hunger haben (а не Hunger sein).",
    hint: "Голод → 'haben'.",
    points: 3
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Das Wetter ist ___ .",
    options: ["gutes", "gut", "gute", "guter"],
    correct: "gut",
    explanation: "Після sein прикметник без закінчення: Das Wetter ist gut.",
    hint: "sein + adj (без закінчення).",
    points: 3
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "___ siehst du?",
    options: ["Wer", "Was", "Wen", "Wie"],
    correct: "Wen",
    explanation: "Питаємо про об’єкт: Кого ти бачиш? → Wen siehst du?",
    hint: "Кого?",
    points: 4
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "___ Eltern wohnen hier.",
    options: ["Mein", "Meine", "Meiner", "Meines"],
    correct: "Meine",
    explanation: "Plural → meine: Meine Eltern wohnen hier.",
    hint: "Eltern = множина.",
    points: 3
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Ich ___ in Berlin.",
    options: ["lebe", "wohne", "bin", "bleibe"],
    correct: "wohne",
    explanation: "Про місце проживання: wohnen. (leben теж може, але пастка на 'правильніше' A1).",
    hint: "Де живеш?",
    points: 3
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "___ einen Park in der Stadt.",
    options: ["Es ist", "Es gibt", "Es sind", "Da ist"],
    correct: "Es gibt",
    explanation: "Для існування/наявності: Es gibt + Akk.",
    hint: "Є/існує…",
    points: 3
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "Meine ___ ist 0176 123456.",
    options: ["Nummer", "Zahl", "Alter", "Jahr"],
    correct: "Nummer",
    explanation: "Телефон → Nummer. Zahl = число.",
    hint: "Телефон.",
    points: 4
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Ich bin ___ Lehrer.",
    options: ["ein", "der", "(kein Artikel)", "meiner"],
    correct: "(kein Artikel)",
    explanation: "Професія після sein часто без артикля: Ich bin Lehrer.",
    hint: "Професія.",
    points: 4
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Der Film beginnt ___ 20 Uhr.",
    options: ["am", "im", "um", "zu"],
    correct: "um",
    explanation: "Конкретний час → um: um 20 Uhr.",
    hint: "Котра година?",
    points: 3
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "Heute ___ ich zu Hause.",
    options: ["bin", "ich bin", "bin ich", "ich"],
    correct: "bin ich",
    explanation: "Дієслово завжди на 2-му місці: Heute bin ich zu Hause.",
    hint: "Порядок слів.",
    points: 4
  },
  {
    id: 11,
    type: "multiple_choice",
    question: "Ich habe ___ Zeit.",
    options: ["viel", "viele", "vielen", "vieles"],
    correct: "viel",
    explanation: "Zeit — незлічуване → viel Zeit.",
    hint: "Zeit (незлічуване).",
    points: 3
  },
  {
    id: 12,
    type: "multiple_choice",
    question: "Ich fahre ___ dem Bus.",
    options: ["mit", "zu", "in", "auf"],
    correct: "mit",
    explanation: "Транспорт → mit: mit dem Bus.",
    hint: "Чим їдеш?",
    points: 3
  },
  {
    id: 13,
    type: "multiple_choice",
    question: "Mir ist ___ .",
    options: ["warm", "kalt", "beides", "alle"],
    correct: "beides",
    explanation: "Можна і 'Mir ist warm', і 'Mir ist kalt'. Обидва варіанти можливі.",
    hint: "Обидва підходять.",
    points: 4
  },
  {
    id: 14,
    type: "multiple_choice",
    question: "Ich ___ ein Geschenk.",
    options: ["bekomme", "werde", "nehme", "bin"],
    correct: "bekomme",
    explanation: "bekommen = отримувати (не 'ставати').",
    hint: "Отримати подарунок.",
    points: 4
  },
  {
    id: 15,
    type: "multiple_choice",
    question: "___ ist das? (про людину)",
    options: ["Wer", "Was", "Wo", "Wie"],
    correct: "Wer",
    explanation: "Про людину питаємо Wer? (хто це?).",
    hint: "Людина.",
    points: 3
  }
];

grammarQuestions.verbs_present = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich ___ Deutsch.",
    options: ["lerne", "lernst", "lernt", "lernen"],
    correct: "lerne",
    explanation: "Ich lerne Deutsch. (я + -e)",
    hint: "Я вчу німецьку.",
    points: 2
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Du ___ schnell.",
    options: ["laufe", "läufst", "läuft", "laufen"],
    correct: "läufst",
    explanation: "Du läufst schnell. (ти + -st)",
    hint: "Ти біжиш швидко.",
    points: 2
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Er ___ ein Buch.",
    options: ["lese", "liest", "lest", "lesen"],
    correct: "liest",
    explanation: "Er liest ein Buch. (він + -t, неправильне)",
    hint: "Він читає книгу.",
    points: 2
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Wir ___ Musik.",
    options: ["höre", "hörst", "hört", "hören"],
    correct: "hören",
    explanation: "Wir hören Musik. (ми + -en)",
    hint: "Ми слухаємо музику.",
    points: 2
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Ihr ___ Fußball.",
    options: ["spiele", "spielt", "spielst", "spielen"],
    correct: "spielt",
    explanation: "Ihr spielt Fußball. (ви + -t)",
    hint: "Ви граєте в футбол.",
    points: 2
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "Sie (вони) ___ fern.",
    options: ["sehe", "sieht", "seht", "sehen"],
    correct: "sehen",
    explanation: "Sie sehen fern. (вони + -en)",
    hint: "Вони дивляться телевізор.",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "Ich ___ Wasser.",
    options: ["trinke", "trinkst", "trinkt", "trinken"],
    correct: "trinke",
    explanation: "Ich trinke Wasser. (я + -e)",
    hint: "Я п'ю воду.",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Du ___ Pizza.",
    options: ["esse", "isst", "esst", "essen"],
    correct: "isst",
    explanation: "Du isst Pizza. (ти + -st, неправильне)",
    hint: "Ти їси піцу.",
    points: 2
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Es ___ .",
    options: ["regne", "regnet", "regnest", "regnen"],
    correct: "regnet",
    explanation: "Es regnet. (воно + -t)",
    hint: "Йде дощ.",
    points: 2
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "Wir ___ Hausaufgaben.",
    options: ["mache", "macht", "machst", "machen"],
    correct: "machen",
    explanation: "Wir machen Hausaufgaben. (ми + -en)",
    hint: "Ми робимо домашнє завдання.",
    points: 2
  }
];

grammarQuestions.prepositions = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich bin ___ Deutschland.",
    options: ["aus", "in", "bei", "mit"],
    correct: "aus",
    explanation: "Ich bin aus Deutschland. (я з Німеччини)",
    hint: "Я з Німеччини.",
    points: 2
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Das Buch ist ___ dem Tisch.",
    options: ["auf", "unter", "in", "neben"],
    correct: "auf",
    explanation: "Das Buch ist auf dem Tisch. (на столі)",
    hint: "Книга на столі.",
    points: 2
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Ich gehe ___ Schule.",
    options: ["zu", "in", "auf", "bei"],
    correct: "zu",
    explanation: "Ich gehe zu Schule. (до школи)",
    hint: "Я йду до школи.",
    points: 2
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Sie wohnt ___ ihren Eltern.",
    options: ["bei", "mit", "zu", "in"],
    correct: "bei",
    explanation: "Sie wohnt bei ihren Eltern. (у батьків)",
    hint: "Вона живе у батьків.",
    points: 2
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Ich komme ___ Ukraine.",
    options: ["aus", "in", "bei", "mit"],
    correct: "aus",
    explanation: "Ich komme aus Ukraine. (я з України)",
    hint: "Я з України.",
    points: 2
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "Der Hund ist ___ dem Haus.",
    options: ["vor", "hinter", "neben", "in"],
    correct: "vor",
    explanation: "Der Hund ist vor dem Haus. (перед будинком)",
    hint: "Собака перед будинком.",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "Ich fahre ___ dem Bus.",
    options: ["mit", "in", "auf", "zu"],
    correct: "mit",
    explanation: "Ich fahre mit dem Bus. (автобусом)",
    hint: "Я їду автобусом.",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Die Katze ist ___ dem Sofa.",
    options: ["auf", "unter", "in", "hinter"],
    correct: "auf",
    explanation: "Die Katze ist auf dem Sofa. (на дивані)",
    hint: "Кішка на дивані.",
    points: 2
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Wir sind ___ Park.",
    options: ["im", "am", "auf", "zu"],
    correct: "im",
    explanation: "Wir sind im Park. (в парку)",
    hint: "Ми в парку.",
    points: 2
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "Das Bild hängt ___ der Wand.",
    options: ["an", "auf", "in", "über"],
    correct: "an",
    explanation: "Das Bild hängt an der Wand. (на стіні)",
    hint: "Картина висить на стіні.",
    points: 2
  }
];

grammarQuestions.adjectives = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Das ist ein ___ Buch.",
    options: ["gut", "gute", "gutes", "guter"],
    correct: "gutes",
    explanation: "Das ist ein gutes Buch. (das Buch → gutes)",
    hint: "Це хороша книга.",
    points: 3
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Ich habe eine ___ Schwester.",
    options: ["klein", "kleine", "kleines", "kleiner"],
    correct: "kleine",
    explanation: "Ich habe eine kleine Schwester. (die Schwester → kleine)",
    hint: "У мене є маленька сестра.",
    points: 3
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Das ist mein ___ Freund.",
    options: ["alt", "alte", "altes", "alter"],
    correct: "alter",
    explanation: "Das ist mein alter Freund. (der Freund → alter)",
    hint: "Це мій старий друг.",
    points: 3
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Sie ist eine ___ Frau.",
    options: ["schön", "schöne", "schönes", "schöner"],
    correct: "schöne",
    explanation: "Sie ist eine schöne Frau. (die Frau → schöne)",
    hint: "Вона гарна жінка.",
    points: 3
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Er hat ___ Augen.",
    options: ["blau", "blaue", "blaues", "blauer"],
    correct: "blaue",
    explanation: "Er hat blaue Augen. (die Augen → blaue)",
    hint: "У нього сині очі.",
    points: 3
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "Das Wetter ist ___ .",
    options: ["gut", "gute", "gutes", "guter"],
    correct: "gut",
    explanation: "Das Wetter ist gut. (без артикля → gut)",
    hint: "Погода хороша.",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "Die Suppe ist ___ .",
    options: ["heiß", "heiße", "heißes", "heißer"],
    correct: "heiß",
    explanation: "Die Suppe ist heiß. (без артикля → heiß)",
    hint: "Суп гарячий.",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Ich bin ___ .",
    options: ["müde", "müder", "müdes", "müde"],
    correct: "müde",
    explanation: "Ich bin müde. (без артикля → müde)",
    hint: "Я втомлений/втомлена.",
    points: 2
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Das Auto ist ___ .",
    options: ["neu", "neue", "neues", "neuer"],
    correct: "neu",
    explanation: "Das Auto ist neu. (без артикля → neu)",
    hint: "Машина нова.",
    points: 2
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "Der Kaffee ist ___ .",
    options: ["kalt", "kalte", "kaltes", "kalter"],
    correct: "kalt",
    explanation: "Der Kaffee ist kalt. (без артикля → kalt)",
    hint: "Кава холодна.",
    points: 2
  }
];

grammarQuestions.plurals = [
  {
    id: 1,
    type: "multiple_choice",
    question: "ein Haus → zwei ___",
    options: ["Haus", "Häuse", "Häuser", "Häusen"],
    correct: "Häuser",
    explanation: "ein Haus → zwei Häuser",
    hint: "один будинок → два будинки",
    points: 3
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "ein Buch → viele ___",
    options: ["Buch", "Büche", "Bücher", "Büchen"],
    correct: "Bücher",
    explanation: "ein Buch → viele Bücher",
    hint: "одна книга → багато книг",
    points: 3
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "eine Frau → drei ___",
    options: ["Frau", "Fraue", "Frauen", "Fraus"],
    correct: "Frauen",
    explanation: "eine Frau → drei Frauen",
    hint: "одна жінка → три жінки",
    points: 3
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "ein Kind → viele ___",
    options: ["Kind", "Kinde", "Kinder", "Kindern"],
    correct: "Kinder",
    explanation: "ein Kind → viele Kinder",
    hint: "одна дитина → багато дітей",
    points: 3
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "ein Mann → zwei ___",
    options: ["Mann", "Männer", "Männer", "Männen"],
    correct: "Männer",
    explanation: "ein Mann → zwei Männer",
    hint: "один чоловік → два чоловіки",
    points: 3
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "eine Katze → viele ___",
    options: ["Katze", "Katz", "Katzen", "Kätzen"],
    correct: "Katzen",
    explanation: "eine Katze → viele Katzen",
    hint: "одна кішка → багато кішок",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "ein Auto → zwei ___",
    options: ["Auto", "Auto", "Autos", "Autos"],
    correct: "Autos",
    explanation: "ein Auto → zwei Autos (англіцизм)",
    hint: "одна машина → дві машини",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "ein Apfel → viele ___",
    options: ["Apfel", "Äpfel", "Äpfel", "Äpfeln"],
    correct: "Äpfel",
    explanation: "ein Apfel → viele Äpfel",
    hint: "одне яблуко → багато яблук",
    points: 3
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "eine Blume → drei ___",
    options: ["Blume", "Blüme", "Blumen", "Blümen"],
    correct: "Blumen",
    explanation: "eine Blume → drei Blumen",
    hint: "одна квітка → три квітки",
    points: 2
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "ein Stuhl → viele ___",
    options: ["Stuhl", "Stühle", "Stühle", "Stühlen"],
    correct: "Stühle",
    explanation: "ein Stuhl → viele Stühle",
    hint: "один стілець → багато стільців",
    points: 3
  }
];

grammarQuestions.time_expressions = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Gestern war ___ .",
    options: ["heute", "morgen", "gestern", "Montag"],
    correct: "Montag",
    explanation: "Gestern war Montag. (Вчора був понеділок)",
    hint: "Вчора був понеділок.",
    points: 2
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "___ ist Dienstag.",
    options: ["Gestern", "Heute", "Morgen", "Übermorgen"],
    correct: "Heute",
    explanation: "Heute ist Dienstag. (Сьогодні вівторок)",
    hint: "Сьогодні вівторок.",
    points: 2
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "___ ist Mittwoch.",
    options: ["Gestern", "Heute", "Morgen", "Übermorgen"],
    correct: "Morgen",
    explanation: "Morgen ist Mittwoch. (Завтра середа)",
    hint: "Завтра середа.",
    points: 2
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Im ___ ist es warm.",
    options: ["Winter", "Sommer", "Herbst", "Frühling"],
    correct: "Sommer",
    explanation: "Im Sommer ist es warm. (Влітку тепло)",
    hint: "Влітку тепло.",
    points: 2
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Im ___ schneit es.",
    options: ["Sommer", "Winter", "Frühling", "Herbst"],
    correct: "Winter",
    explanation: "Im Winter schneit es. (Взимку йде сніг)",
    hint: "Взимку йде сніг.",
    points: 2
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "___ Abend sehe ich fern.",
    options: ["Am", "Im", "Um", "Zu"],
    correct: "Am",
    explanation: "Am Abend sehe ich fern. (Ввечері я дивлюся телевізор)",
    hint: "Ввечері я дивлюся телевізор.",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "___ Nacht schlafe ich.",
    options: ["Am", "In der", "Zur", "Bei"],
    correct: "In der",
    explanation: "In der Nacht schlafe ich. (Вночі я сплю)",
    hint: "Вночі я сплю.",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Ich komme ___ Stunde.",
    options: ["in einer", "an einer", "um einer", "zu einer"],
    correct: "in einer",
    explanation: "Ich komme in einer Stunde. (Я прийду через годину)",
    hint: "Я прийду через годину.",
    points: 3
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Das Konzert beginnt ___ 20 Uhr.",
    options: ["am", "im", "um", "zu"],
    correct: "um",
    explanation: "Das Konzert beginnt um 20 Uhr. (Концерт починається о 8 вечора)",
    hint: "Концерт починається о 8 вечора.",
    points: 2
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "Ich habe Geburtstag ___ Juni.",
    options: ["am", "im", "um", "zu"],
    correct: "im",
    explanation: "Ich habe Geburtstag im Juni. (У мене день народження в червні)",
    hint: "У мене день народження в червні.",
    points: 2
  }
];

grammarQuestions.shopping = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich kaufe ___ Supermarkt ein.",
    options: ["im", "am", "auf", "zu"],
    correct: "im",
    explanation: "Ich kaufe im Supermarkt ein. (Я купую в супермаркеті)",
    hint: "Я купую в супермаркеті.",
    points: 2
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Das kostet 10 ___ .",
    options: ["Euro", "Dollar", "Pfund", "Cent"],
    correct: "Euro",
    explanation: "Das kostet 10 Euro. (Це коштує 10 євро)",
    hint: "Це коштує 10 євро.",
    points: 2
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Ich möchte ___ Brot.",
    options: ["ein", "eine", "einen", "ein"],
    correct: "ein",
    explanation: "Ich möchte ein Brot. (Я хочу хліб)",
    hint: "Я хочу хліб.",
    points: 2
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Wo ist die ___ ?",
    options: ["Kasse", "Tür", "Fenster", "Tisch"],
    correct: "Kasse",
    explanation: "Wo ist die Kasse? (Де каса?)",
    hint: "Де каса?",
    points: 2
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Das ist zu ___ .",
    options: ["billig", "teuer", "neu", "alt"],
    correct: "teuer",
    explanation: "Das ist zu teuer. (Це занадто дорого)",
    hint: "Це занадто дорого.",
    points: 2
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "Ich nehme ___ .",
    options: ["das", "die", "der", "den"],
    correct: "das",
    explanation: "Ich nehme das. (Я беру це)",
    hint: "Я беру це.",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "Haben Sie ___ ?",
    options: ["Geld", "Zeit", "Lust", "Appetit"],
    correct: "Geld",
    explanation: "Haben Sie Geld? (У вас є гроші?)",
    hint: "У вас є гроші?",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Ich zahle mit ___ .",
    options: ["Kreditkarte", "Buch", "Auto", "Handy"],
    correct: "Kreditkarte",
    explanation: "Ich zahle mit Kreditkarte. (Я плачу кредитною карткою)",
    hint: "Я плачу кредитною карткою.",
    points: 2
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Wo sind die ___ ?",
    options: ["Lebensmittel", "Bücher", "Autos", "Kleider"],
    correct: "Lebensmittel",
    explanation: "Wo sind die Lebensmittel? (Де продукти?)",
    hint: "Де продукти?",
    points: 3
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "Das ist im ___ .",
    options: ["Angebot", "Fenster", "Haus", "Auto"],
    correct: "Angebot",
    explanation: "Das ist im Angebot. (Це в акції)",
    hint: "Це в акції.",
    points: 3
  }
];

grammarQuestions.travel = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich fahre ___ Urlaub.",
    options: ["in", "im", "zu", "auf"],
    correct: "im",
    explanation: "Ich fahre im Urlaub. (Я їду у відпустку)",
    hint: "Я їду у відпустку.",
    points: 2
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Der ___ fährt nach Berlin.",
    options: ["Auto", "Bus", "Zug", "Fahrrad"],
    correct: "Zug",
    explanation: "Der Zug fährt nach Berlin. (Поїзд їде до Берліна)",
    hint: "Поїзд їде до Берліна.",
    points: 2
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Ich habe einen ___ .",
    options: ["Koffer", "Buch", "Stift", "Tisch"],
    correct: "Koffer",
    explanation: "Ich habe einen Koffer. (У мене є валіза)",
    hint: "У мене є валіза.",
    points: 2
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Wo ist der ___ ?",
    options: ["Bahnhof", "Park", "Supermarkt", "Schule"],
    correct: "Bahnhof",
    explanation: "Wo ist der Bahnhof? (Де вокзал?)",
    hint: "Де вокзал?",
    points: 2
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Ich brauche ein ___ .",
    options: ["Ticket", "Buch", "Auto", "Haus"],
    correct: "Ticket",
    explanation: "Ich brauche ein Ticket. (Мені потрібен квиток)",
    hint: "Мені потрібен квиток.",
    points: 2
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "Das Flugzeug ___ .",
    options: ["fährt", "fliegt", "geht", "schwimmt"],
    correct: "fliegt",
    explanation: "Das Flugzeug fliegt. (Літак летить)",
    hint: "Літак летить.",
    points: 2
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "Ich wohne im ___ .",
    options: ["Hotel", "Haus", "Auto", "Park"],
    correct: "Hotel",
    explanation: "Ich wohne im Hotel. (Я живу в готелі)",
    hint: "Я живу в готелі.",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Wo ist die ___ ?",
    options: ["Haltestelle", "Schule", "Kirche", "Brücke"],
    correct: "Haltestelle",
    explanation: "Wo ist die Haltestelle? (Де зупинка?)",
    hint: "Де зупинка?",
    points: 3
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Ich fahre mit dem ___ .",
    options: ["Fahrrad", "Buch", "Tisch", "Fenster"],
    correct: "Fahrrad",
    explanation: "Ich fahre mit dem Fahrrad. (Я їду на велосипеді)",
    hint: "Я їду на велосипеді.",
    points: 2
  },
  
];

grammarQuestions.health = [
  
  {
    id: 2,
    type: "multiple_choice",
    question: "Mein ___ tut weh.",
    options: ["Kopf", "Buch", "Auto", "Haus"],
    correct: "Kopf",
    explanation: "Mein Kopf tut weh. (У мене болить голова)",
    hint: "У мене болить голова.",
    points: 2
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Ich gehe zum ___ .",
    options: ["Arzt", "Supermarkt", "Park", "Kino"],
    correct: "Arzt",
    explanation: "Ich gehe zum Arzt. (Я йду до лікаря)",
    hint: "Я йду до лікаря.",
    points: 2
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Ich nehme ___ .",
    options: ["Medikamente", "Bücher", "Autos", "Kleider"],
    correct: "Medikamente",
    explanation: "Ich nehme Medikamente. (Я приймаю ліки)",
    hint: "Я приймаю ліки.",
    points: 3
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Das ___ hilft.",
    options: ["Medikament", "Buch", "Auto", "Haus"],
    correct: "Medikament",
    explanation: "Das Medikament hilft. (Ліки допомагають)",
    hint: "Ліки допомагають.",
    points: 3
  },
  
  {
    id: 7,
    type: "multiple_choice",
    question: "Der ___ untersucht mich.",
    options: ["Arzt", "Lehrer", "Vater", "Bruder"],
    correct: "Arzt",
    explanation: "Der Arzt untersucht mich. (Лікар мене обстежує)",
    hint: "Лікар мене обстежує.",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Ich liege im ___ .",
    options: ["Bett", "Auto", "Park", "Supermarkt"],
    correct: "Bett",
    explanation: "Ich liege im Bett. (Я лежу в ліжку)",
    hint: "Я лежу в ліжку.",
    points: 2
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Ich ___ mich aus.",
    options: ["ruhe", "esse", "trinke", "lese"],
    correct: "ruhe",
    explanation: "Ich ruhe mich aus. (Я відпочиваю)",
    hint: "Я відпочиваю.",
    points: 2
  },
  
];

grammarQuestions.work = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich ___ bei einer Firma.",
    options: ["arbeite", "esse", "trinke", "schwimme"],
    correct: "arbeite",
    explanation: "Ich arbeite bei einer Firma. (Я працюю у фірмі)",
    hint: "Я працюю у фірмі.",
    points: 2
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Mein ___ ist interessant.",
    options: ["Arbeit", "Buch", "Auto", "Haus"],
    correct: "Arbeit",
    explanation: "Mein Arbeit ist interessant. (Моя робота цікава)",
    hint: "Моя робота цікава.",
    points: 2
  },
  
  
  {
    id: 5,
    type: "multiple_choice",
    question: "Ich verdiene ___ .",
    options: ["Geld", "Zeit", "Freunde", "Bücher"],
    correct: "Geld",
    explanation: "Ich verdiene Geld. (Я заробляю гроші)",
    hint: "Я заробляю гроші.",
    points: 2
  },
  
  {
    id: 7,
    type: "multiple_choice",
    question: "Der ___ ist streng.",
    options: ["Chef", "Kollege", "Freund", "Bruder"],
    correct: "Chef",
    explanation: "Der Chef ist streng. (Шеф суворий)",
    hint: "Шеф суворий.",
    points: 2
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Ich mache eine ___ .",
    options: ["Pause", "Reise", "Arbeit", "Übung"],
    correct: "Pause",
    explanation: "Ich mache eine Pause. (Я роблю перерву)",
    hint: "Я роблю перерву.",
    points: 2
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Das ___ ist schwer.",
    options: ["Projekt", "Buch", "Auto", "Haus"],
    correct: "Projekt",
    explanation: "Das Projekt ist schwer. (Проект важкий)",
    hint: "Проект важкий.",
    points: 3
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "Ich komme ___ Arbeit.",
    options: ["von der", "zu der", "in der", "auf der"],
    correct: "von der",
    explanation: "Ich komme von der Arbeit. (Я йду з роботи)",
    hint: "Я йду з роботи.",
    points: 2
  }
];

// ==================== MODAL VERBS (TRAPS A1–A2) ====================
grammarQuestions.modal_verbs_traps = [
  // können
  { id: 1, type:"multiple_choice", question:"Ich ___ schwimmen.", options:["kann","können","kannst","muss"], correct:"kann", explanation:"Ich kann ... (я можу)", hint:"Я можу плавати.", points:3 },
  { id: 2, type:"multiple_choice", question:"Du ___ heute nicht kommen.", options:["kann","kannst","können","will"], correct:"kannst", explanation:"Du kannst ...", hint:"Ти можеш не прийти.", points:3 },
  { id: 3, type:"multiple_choice", question:"Wir ___ Deutsch lernen.", options:["können","kann","kannst","müssen"], correct:"können", explanation:"Wir können ...", hint:"Ми можемо вчити.", points:3 },
  { id: 4, type:"multiple_choice", question:"___ Sie mir helfen?", options:["Kann","Können","Müssen","Wollen"], correct:"Können", explanation:"Формально: Können Sie ...?", hint:"Можете допомогти?", points:4 },
  { id: 5, type:"multiple_choice", question:"Er ___ kein Auto fahren.", options:["kann","können","kannst","muss"], correct:"kann", explanation:"Er kann ...", hint:"Він може водити.", points:3 },
  { id: 6, type:"multiple_choice", question:"Ich ___ das nicht verstehen.", options:["kann","muss","will","soll"], correct:"kann", explanation:"Nicht verstehen → kann nicht.", hint:"Я не можу зрозуміти.", points:4 },
  { id: 7, type:"multiple_choice", question:"Ihr ___ hier nicht parken.", options:["kann","könnt","müsst","wollt"], correct:"könnt", explanation:"ihr → könnt", hint:"Ви можете/не можете.", points:4 },
  { id: 8, type:"multiple_choice", question:"Sie (вони) ___ morgen bleiben.", options:["können","kann","könnt","will"], correct:"können", explanation:"sie → können", hint:"Вони можуть.", points:3 },
  { id: 9, type:"multiple_choice", question:"Ich ___ dir das erklären.", options:["kann","können","muss","wolle"], correct:"kann", explanation:"Ich kann ...", hint:"Я можу пояснити.", points:3 },
  { id:10, type:"multiple_choice", question:"___ du das wiederholen?", options:["Kann","Können","Musst","Wollt"], correct:"Kann", explanation:"Дружнє: Kannst du...?", hint:"Можеш повторити?", points:4 },

  // müssen
  { id:11, type:"multiple_choice", question:"Ich ___ arbeiten.", options:["muss","müssen","musst","will"], correct:"muss", explanation:"Ich muss ... (я мушу)", hint:"Я мушу працювати.", points:3 },
  { id:12, type:"multiple_choice", question:"Du ___ jetzt gehen.", options:["muss","musst","müssen","kann"], correct:"musst", explanation:"du → musst", hint:"Ти мусиш йти.", points:3 },
  { id:13, type:"multiple_choice", question:"Wir ___ leise sein.", options:["muss","müssen","musst","wollen"], correct:"müssen", explanation:"wir → müssen", hint:"Ми мусимо.", points:3 },
  { id:14, type:"multiple_choice", question:"Er ___ um 7 Uhr aufstehen.", options:["muss","musst","müssen","kann"], correct:"muss", explanation:"er → muss", hint:"Він мусить.", points:3 },
  { id:15, type:"multiple_choice", question:"___ ihr heute lernen?", options:["Muss","Müssen","Müsst","Wollt"], correct:"Müsst", explanation:"ihr → müsst", hint:"Ви мусите?", points:4 },
  { id:16, type:"multiple_choice", question:"Sie (ви) ___ bitte hier unterschreiben.", options:["müssen","muss","müsst","können"], correct:"müssen", explanation:"Sie → müssen", hint:"Ви повинні підписати.", points:4 },
  { id:17, type:"multiple_choice", question:"Ich ___ nicht alles machen.", options:["muss","müsse","müssen","will"], correct:"muss", explanation:"Ich muss nicht ... (не зобов’язаний)", hint:"Я не мушу.", points:4 },
  { id:18, type:"multiple_choice", question:"Du ___ nicht so schnell fahren.", options:["musst","muss","müssen","kannst"], correct:"musst", explanation:"du → musst", hint:"Ти не повинен.", points:4 },
  { id:19, type:"multiple_choice", question:"Wir ___ umsteigen.", options:["müssen","muss","musst","wollen"], correct:"müssen", explanation:"ми → müssen", hint:"Ми мусимо пересідати.", points:3 },
  { id:20, type:"multiple_choice", question:"Es ___ nicht perfekt sein.", options:["muss","müssen","will","kann"], correct:"muss", explanation:"es → muss", hint:"Це не мусить бути ідеально.", points:4 },

  // wollen
  { id:21, type:"multiple_choice", question:"Ich ___ einen Kaffee.", options:["will","wolle","willst","muss"], correct:"will", explanation:"Ich will ... (я хочу)", hint:"Я хочу каву.", points:3 },
  { id:22, type:"multiple_choice", question:"Du ___ nach Hause.", options:["will","willst","wollt","wollen"], correct:"willst", explanation:"du → willst", hint:"Ти хочеш додому.", points:3 },
  { id:23, type:"multiple_choice", question:"Wir ___ heute Pizza essen.", options:["wollen","will","willst","müssen"], correct:"wollen", explanation:"wir → wollen", hint:"Ми хочемо піцу.", points:3 },
  { id:24, type:"multiple_choice", question:"Er ___ nicht mitkommen.", options:["will","wollen","willst","kann"], correct:"will", explanation:"er → will", hint:"Він не хоче.", points:3 },
  { id:25, type:"multiple_choice", question:"___ ihr ins Kino?", options:["Will","Wollt","Wollen","Müsst"], correct:"Wollt", explanation:"ihr → wollt", hint:"Ви хочете?", points:4 },
  { id:26, type:"multiple_choice", question:"Sie (вони) ___ länger bleiben.", options:["wollen","will","wollt","können"], correct:"wollen", explanation:"sie → wollen", hint:"Вони хочуть.", points:3 },
  { id:27, type:"multiple_choice", question:"Ich ___ das nicht.", options:["will","kann","muss","bin"], correct:"will", explanation:"не хочу → will nicht", hint:"Я цього не хочу.", points:4 },
  { id:28, type:"multiple_choice", question:"Du ___ doch nur spielen.", options:["willst","kannst","musst","wollen"], correct:"willst", explanation:"du → willst", hint:"Ти ж просто хочеш грати.", points:4 },
  { id:29, type:"multiple_choice", question:"___ Sie etwas trinken?", options:["Wollen","Will","Müssen","Könnt"], correct:"Wollen", explanation:"Формально: Wollen Sie ...?", hint:"Хочете випити?", points:4 },
  { id:30, type:"multiple_choice", question:"Wir ___ nicht warten.", options:["wollen","will","müssen","können"], correct:"wollen", explanation:"ми → wollen", hint:"Ми не хочемо чекати.", points:3 }
];


// ==================== RESTAURANT (SITUATIONS) ====================
grammarQuestions.restaurant = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich hätte gern ___ Wasser.",
    options: ["ein", "eine", "einen", "einem"],
    correct: "ein",
    explanation: "Ich hätte gern ein Wasser.",
    points: 3
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Die Rechnung, ___ .",
    options: ["bitte", "danke", "gern", "doch"],
    correct: "bitte",
    explanation: "Die Rechnung, bitte.",
    points: 3
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Was ___ Sie empfehlen?",
    options: ["haben", "können", "würden", "machen"],
    correct: "würden",
    explanation: "Was würden Sie empfehlen?",
    points: 4
  }
];

// ==================== DOCTOR (SITUATIONS) ====================
grammarQuestions.doctor = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich habe ___ Kopfschmerzen.",
    options: ["ein", "eine", "keine", "den"],
    correct: "keine",
    explanation: "Ich habe keine Kopfschmerzen.",
    points: 3
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Seit zwei Tagen ___ ich krank.",
    options: ["bin", "habe", "war", "werde"],
    correct: "bin",
    explanation: "Seit zwei Tagen bin ich krank.",
    points: 4
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Der Arzt sagt: Sie ___ im Bett bleiben.",
    options: ["kann", "muss", "will", "soll"],
    correct: "soll",
    explanation: "Sie sollen im Bett bleiben.",
    points: 4
  }
];

// Функція для отримання всіх тем з кількістю питань
function getThemesWithCounts() {
  const themes = {};
  for (const theme in grammarQuestions) {
    themes[theme] = {
      name: theme,
      count: grammarQuestions[theme].length,
      description: getThemeDescription(theme)
    };
  }
  return themes;
}

// Опис тем
function getThemeDescription(theme) {
  const descriptions = {
    sein: "Дієслово 'бути' (sein) в теперішньому часі",
    articles_definite: "Визначені артиклі (der, die, das)",
    greetings: "Привітання та основні фрази",
    numbers: "Числа та кількісні числівники",
    family: "Члени сім'ї та родинні зв'язки",
    food: "Їжа, напої та харчування",
    colors: "Кольори та їх опис",
    time: "Час, дні тижня, пори року",
    house: "Будинок, меблі, кімнати",
    animals: "Тварини та їх характеристики",
    clothes: "Одяг та взуття",
    weather: "Погода та погодні явища",
    hobbies: "Хобі та вільний час",
    school: "Школа, навчання, освіта",
    city: "Місто, будівлі, транспорт",
    body: "Частини тіла та здоров'я",
    pronouns: "Займенники та питальні слова",
    verbs_present: "Дієслова в теперішньому часі",
    prepositions: "Прийменники місця та часу",
    adjectives: "Прикметники та їх відмінювання",
    plurals: "Множина іменників",
    traps: "Пастки A1–A2: типові помилки (загвоздки)",
    modal_verbs_traps: "Modalverben TRAPS: können / müssen / wollen (пастки A1–A2)",
    modal_verbs: "Modalverben: können / müssen / wollen (практика)",
    restaurant: "Ситуації: ресторан (замовлення, рахунок, ввічливі фрази)",
    doctor: "Ситуації: лікар (симптоми, час, поради)",
    time_expressions: "Вираження часу та періоди",
    shopping: "Покупки, ціни, магазини",
    travel: "Подорожі, транспорт, відпочинок",
    health: "Здоров'я, ліки, відпочинок",
    work: "Робота, професії, кар'єра"
  };
  
  return descriptions[theme] || "Тема німецької мови";
}

// Оновлюємо функцію getAllThemes
function getAllThemes() {
  return Object.keys(grammarQuestions).sort();
}

// Оновлюємо функцію getQuestionCountForTheme
function getQuestionCountForTheme(theme) {
  return grammarQuestions[theme] ? grammarQuestions[theme].length : 0;
}

// Функція для отримання тем з описом
function getThemesWithDescriptions() {
  const themes = [];
  for (const theme in grammarQuestions) {
    themes.push({
      id: theme,
      name: getThemeDisplayName(theme),
      count: grammarQuestions[theme].length,
      description: getThemeDescription(theme)
    });
  }
  return themes.sort((a, b) => a.name.localeCompare(b.name));
}

// ==================== MODAL VERBS (practice) ====================
grammarQuestions.modal_verbs = [
  // === KÖNNEN ===
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich ___ heute kommen.",
    options: ["kann", "könne", "könnt", "kannst"],
    correct: "kann",
    explanation: "Ich kann heute kommen.",
    points: 3
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "Du ___ Deutsch sprechen.",
    options: ["kann", "kannst", "können", "sprichst"],
    correct: "kannst",
    explanation: "Du kannst Deutsch sprechen.",
    points: 3
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Er ___ nicht schlafen.",
    options: ["kann", "könnt", "können", "schläft"],
    correct: "kann",
    explanation: "Er kann nicht schlafen.",
    points: 3
  },

  // === MÜSSEN ===
  {
    id: 4,
    type: "multiple_choice",
    question: "Ich ___ arbeiten.",
    options: ["muss", "musst", "müssen", "arbeite"],
    correct: "muss",
    explanation: "Ich muss arbeiten.",
    points: 3
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Wir ___ jetzt gehen.",
    options: ["muss", "müssen", "musst", "geht"],
    correct: "müssen",
    explanation: "Wir müssen jetzt gehen.",
    points: 3
  },
  {
    id: 6,
    type: "multiple_choice",
    question: "Du ___ nicht kommen.",
    options: ["musst", "muss", "mussten", "kommst"],
    correct: "musst",
    explanation: "Du musst nicht kommen.",
    points: 3
  },

  // === WOLLEN ===
  {
    id: 7,
    type: "multiple_choice",
    question: "Ich ___ Kaffee trinken.",
    options: ["will", "willst", "wollen", "trinke"],
    correct: "will",
    explanation: "Ich will Kaffee trinken.",
    points: 3
  },
  {
    id: 8,
    type: "multiple_choice",
    question: "Was ___ du essen?",
    options: ["will", "willst", "möchtest", "isst"],
    correct: "willst",
    explanation: "Що ти хочеш поїсти?",
    points: 3
  },
  {
    id: 9,
    type: "multiple_choice",
    question: "Sie ___ nach Hause gehen.",
    options: ["will", "wollen", "geht", "möchte"],
    correct: "will",
    explanation: "Sie will nach Hause gehen.",
    points: 3
  }
];

// ===== NORMALIZE + DEDUPE QUESTIONS (NO DUPLICATES) =====

function makeQuestionContentKey(q) {
  const text = String(q.question || "").trim().toLowerCase();
  const correct = String(q.correct || "").trim().toLowerCase();
  const opts = Array.isArray(q.options)
    ? q.options.map(o => String(o).trim().toLowerCase()).join("|")
    : "";
  const type = String(q.type || "").trim().toLowerCase();
  return `${type}::${text}::${opts}::${correct}`;
}

function normalizeAndDedupeQuestions(questionsByTheme) {
  const seenContent = new Set();
  const usedUids = new Set();

  for (const theme of Object.keys(questionsByTheme)) {
    const arr = questionsByTheme[theme];
    if (!Array.isArray(arr)) continue;

    const cleaned = [];
    for (let i = 0; i < arr.length; i++) {
      const q = arr[i];
      if (!q || typeof q !== "object") continue;

      if (q.id == null) q.id = i + 1;

      q.uid = `${theme}:${q.id}`;

      if (usedUids.has(q.uid)) {
        let k = 2;
        let newUid = `${q.uid}#${k}`;
        while (usedUids.has(newUid)) {
          k++;
          newUid = `${q.uid}#${k}`;
        }
        q.uid = newUid;
      }
      usedUids.add(q.uid);

      const contentKey = makeQuestionContentKey(q);
      if (seenContent.has(contentKey)) continue;
      seenContent.add(contentKey);

      cleaned.push(q);
    }

    questionsByTheme[theme] = cleaned;
  }
}

// Run normalization once at load
normalizeAndDedupeQuestions(grammarQuestions);

// Статистика
console.log(`✅ Завантажено ${Object.keys(grammarQuestions).length} тем`);
let totalQuestions = 0;
for (const theme in grammarQuestions) totalQuestions += grammarQuestions[theme].length;
console.log(`📚 Всього унікальних питань: ${totalQuestions}`);

// Функція для отримання випадкових питань з різних тем (MIX-safe)
function getRandomQuestions(count = 10) {
  const all = [];
  for (const theme in grammarQuestions) all.push(...grammarQuestions[theme]);

  const map = new Map();
  for (const q of all) map.set(q.uid, q);
  const unique = Array.from(map.values());

  // Fisher–Yates shuffle
  for (let i = unique.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [unique[i], unique[j]] = [unique[j], unique[i]];
  }

  return unique.slice(0, Math.min(count, unique.length));
}

// Функція для отримання випадкового питання з теми (UID-aware)
function getRandomQuestionFromTheme(theme, usedQuestions = new Set(), lastQuestionUid = null) {
  const pool = grammarQuestions[theme];
  if (!pool || pool.length === 0) return null;

  const available = pool.filter(q => !usedQuestions.has(q.uid));

  let candidates = available.length ? available : pool.slice();

  if (lastQuestionUid && candidates.length > 1) {
    const filtered = candidates.filter(q => q.uid !== lastQuestionUid);
    if (filtered.length) candidates = filtered;
  }

  const selected = candidates[Math.floor(Math.random() * candidates.length)];

  if (!available.length) usedQuestions.clear();

  usedQuestions.add(selected.uid);
  return selected;
}

// Функція для отримання всіх тем
function getAllThemes() {
  return Object.keys(grammarQuestions).sort();
}

// Функція для отримання кількості питань у темі
function getQuestionCountForTheme(theme) {
  return grammarQuestions[theme] ? grammarQuestions[theme].length : 0;
}

// Експорт для модулів
if (typeof window !== 'undefined') {
  window.grammarQuestions = grammarQuestions;
  window.getRandomQuestionFromTheme = getRandomQuestionFromTheme;
  window.getAllThemes = getAllThemes;
  window.getQuestionCountForTheme = getQuestionCountForTheme;
  window.getThemesWithDescriptions = getThemesWithDescriptions;
  window.getRandomQuestions = getRandomQuestions;
  window.findErrorQuestions = findErrorQuestions;
  window.timeClockQuestions = timeClockQuestions;
  window.scheduleTimeQuestions = scheduleTimeQuestions;
}

// Експорт для Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    grammarQuestions,
    getRandomQuestionFromTheme,
    getAllThemes,
    getQuestionCountForTheme,
    getThemesWithDescriptions,
    getRandomQuestions
    ,findErrorQuestions
    ,timeClockQuestions
    ,scheduleTimeQuestions
  };
}


// ===== MIX MODE (ALL THEMES) =====

let usedMixUids = new Set();
let lastMixUid = null;

if (typeof window !== 'undefined') {
  window.getRandomMixQuestion = function () {
    const allQuestions = Object.values(window.grammarQuestions || {}).flat();
    if (!allQuestions.length) return null;

    const map = new Map();
    for (const q of allQuestions) map.set(q.uid, q);
    const unique = Array.from(map.values());

    if (usedMixUids.size >= unique.length) usedMixUids.clear();

    let candidates = unique.filter(q => !usedMixUids.has(q.uid));
    if (!candidates.length) {
      usedMixUids.clear();
      candidates = unique.slice();
    }

    if (lastMixUid && candidates.length > 1) {
      const filtered = candidates.filter(q => q.uid !== lastMixUid);
      if (filtered.length) candidates = filtered;
    }

    const q = candidates[Math.floor(Math.random() * candidates.length)];
    usedMixUids.add(q.uid);
    lastMixUid = q.uid;
    return q;
  };

  window.getMixQuestionCount = function () {
    const allQuestions = Object.values(window.grammarQuestions || {}).flat();
    const map = new Map();
    for (const q of allQuestions) map.set(q.uid, q);
    return map.size;
  };
}