// questions.js — Deutsch Party (A1–A2) — 200 питань (20 тем × 10)
// Формат стабільний під існуючу гру: multiple_choice, + мета під duel/party.
// Виправлено критичні помилки типу "Das Tisch/Das Vogel/Das Kopf" → Der/Die.

const grammarQuestions = {
  // 1) SEIN (10)
  sein: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich ___ aus der Ukraine.",
      options: ["bin", "bist", "ist", "seid"],
      correct: "bin",
      hint: "Ich + sein",
      explanation: "З ich використовується форма дієслова sein: ich bin.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Du ___ sehr nett.",
      options: ["bin", "bist", "ist", "sind"],
      correct: "bist",
      hint: "Du + sein",
      explanation: "З du використовується bist: du bist.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Er ___ mein Bruder.",
      options: ["bin", "bist", "ist", "sind"],
      correct: "ist",
      hint: "Er/Sie/Es + sein",
      explanation: "З er/sie/es використовується ist.",
      points: 1
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Wir ___ heute zu Hause.",
      options: ["bin", "seid", "sind", "ist"],
      correct: "sind",
      hint: "Wir + sein",
      explanation: "З wir використовується sind: wir sind.",
      points: 1
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ihr ___ müde.",
      options: ["seid", "sind", "ist", "bist"],
      correct: "seid",
      hint: "Ihr + sein",
      explanation: "З ihr використовується seid: ihr seid.",
      points: 1
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Sie (plural) ___ im Park.",
      options: ["bin", "bist", "sind", "seid"],
      correct: "sind",
      hint: "sie (вони) = plural",
      explanation: "Sie (вони) = sind.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Sie (формально) ___ Herr Müller?",
      options: ["bist", "sind", "seid", "ist"],
      correct: "sind",
      hint: "Sie (Ви) = як plural",
      explanation: "Формальне Sie вживається як множина: Sie sind.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich ___ nicht sicher.",
      options: ["bin", "bist", "ist", "seid"],
      correct: "bin",
      hint: "„nicht“ після дієслова",
      explanation: "Ich bin nicht sicher. Дієслово на 2-му місці.",
      points: 2
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wo ___ du heute?",
      options: ["bin", "bist", "ist", "sind"],
      correct: "bist",
      hint: "Питання: дієслово на 1-му місці",
      explanation: "У питанні дієслово стоїть першим: Wo bist du?",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Heute ___ wir sehr spät.",
      options: ["sind", "seid", "bin", "ist"],
      correct: "sind",
      hint: "Heute (обставина) + V2",
      explanation: "Коли речення починається з Heute, дієслово все одно друге: Heute sind wir ...",
      points: 3
    }
  ],

  // 2) HABEN (10)
  haben: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich ___ eine Katze.",
      options: ["habe", "hast", "hat", "haben"],
      correct: "habe",
      hint: "Ich + haben",
      explanation: "З ich: ich habe.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Du ___ Zeit.",
      options: ["habe", "hast", "hat", "habt"],
      correct: "hast",
      hint: "Du + haben",
      explanation: "З du: du hast.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Er ___ ein Auto.",
      options: ["habe", "hast", "hat", "haben"],
      correct: "hat",
      hint: "Er/Sie/Es + haben",
      explanation: "З er/sie/es: hat.",
      points: 1
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Wir ___ Hunger.",
      options: ["habe", "habt", "haben", "hat"],
      correct: "haben",
      hint: "Wir + haben",
      explanation: "З wir: wir haben.",
      points: 1
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ihr ___ Durst.",
      options: ["habt", "haben", "hat", "hast"],
      correct: "habt",
      hint: "Ihr + haben",
      explanation: "З ihr: ihr habt.",
      points: 1
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Sie (plural) ___ viele Freunde.",
      options: ["habt", "haben", "hat", "hast"],
      correct: "haben",
      hint: "sie (вони) = plural",
      explanation: "Sie (вони) = haben.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Sie (формально) ___ recht.",
      options: ["haben", "hat", "hast", "habt"],
      correct: "haben",
      hint: "Sie (Ви) як plural",
      explanation: "Формальне Sie: Sie haben.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "___ du heute Zeit für ein Spiel?",
      options: ["Habe", "Hast", "Hat", "Habt"],
      correct: "Hast",
      hint: "Питання: дієслово перше",
      explanation: "Hast du ...? — у питанні дієслово на 1-му місці.",
      points: 2
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Heute ___ ich keine Zeit.",
      options: ["habe", "hat", "haben", "hast"],
      correct: "habe",
      hint: "haben",
      explanation: "Heute habe ich ... (дієслово друге).",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir ___ ein Problem, aber wir lösen es.",
      options: ["habt", "haben", "hat", "hast"],
      correct: "haben",
      hint: "wir + haben",
      explanation: "Wir haben ...",
      points: 3
    }
  ],

  // 3) ОЗНАЧЕНИЙ АРТИКЛ (Nominativ) (10)
  articles_definite: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "___ Hund spielt im Garten.",
      options: ["Der", "Die", "Das", "Den"],
      correct: "Der",
      hint: "Hund = maskulin",
      explanation: "У Nominativ: der Hund.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "___ Katze ist süß.",
      options: ["Der", "Die", "Das", "Den"],
      correct: "Die",
      hint: "Katze = feminin",
      explanation: "У Nominativ: die Katze.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "___ Haus ist groß.",
      options: ["Der", "Die", "Das", "Dem"],
      correct: "Das",
      hint: "Haus = neutrum",
      explanation: "У Nominativ: das Haus.",
      points: 1
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "___ Kinder spielen Fußball.",
      options: ["Der", "Die", "Das", "Den"],
      correct: "Die",
      hint: "Kinder = plural",
      explanation: "У Nominativ plural: die Kinder.",
      points: 1
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "___ Tisch ist in der Küche.",
      options: ["Der", "Die", "Das", "Den"],
      correct: "Der",
      hint: "Tisch = maskulin",
      explanation: "Правильно: der Tisch.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "___ Buch ist interessant.",
      options: ["Der", "Die", "Das", "Dem"],
      correct: "Das",
      hint: "Buch = neutrum",
      explanation: "Правильно: das Buch.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "___ Sonne scheint heute.",
      options: ["Der", "Die", "Das", "Den"],
      correct: "Die",
      hint: "Sonne = feminin",
      explanation: "Правильно: die Sonne.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "___ Wetter ist schlecht, aber ___ Stimmung ist gut.",
      options: ["Das / die", "Die / das", "Der / die", "Das / der"],
      correct: "Das / die",
      hint: "Wetter (das), Stimmung (die)",
      explanation: "Das Wetter, die Stimmung.",
      points: 2
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "___ Mädchen lacht. (Achtung!)",
      options: ["Der", "Die", "Das", "Den"],
      correct: "Das",
      hint: "Mädchen = neutrum ( -chen )",
      explanation: "Зменшувальні на -chen/-lein завжди das: das Mädchen.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "___ Leute sind hier.",
      options: ["Der", "Die", "Das", "Den"],
      correct: "Die",
      hint: "Leute = plural",
      explanation: "Die Leute (множина).",
      points: 3
    }
  ],

  // 4) НЕОЗНАЧЕНИЙ АРТИКЛ (Nominativ) (10)
  articles_indefinite: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Das ist ___ Hund.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "ein",
      hint: "Hund (mask.)",
      explanation: "Nominativ maskulin: ein Hund.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Das ist ___ Katze.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "eine",
      hint: "Katze (fem.)",
      explanation: "Nominativ feminin: eine Katze.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Das ist ___ Haus.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "ein",
      hint: "Haus (neut.)",
      explanation: "Nominativ neutrum: ein Haus.",
      points: 1
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich habe ___ Idee.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "eine",
      hint: "Idee (fem.)",
      explanation: "Eine Idee (fem.).",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Er ist ___ Lehrer.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "ein",
      hint: "Lehrer (mask.)",
      explanation: "Ein Lehrer (mask.).",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Sie ist ___ Studentin.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "eine",
      hint: "Studentin (fem.)",
      explanation: "Eine Studentin (fem.).",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Das ist ___ Mädchen.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "ein",
      hint: "Mädchen = neutrum",
      explanation: "Das Mädchen → ein Mädchen (neutrum).",
      points: 3
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich brauche ___ neuen Stift.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "einen",
      hint: "Accusativ maskulin",
      explanation: "Після brauchen часто Akkusativ: einen Stift.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir kaufen ___ frisches Brot.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "ein",
      hint: "Brot = neutrum (Akk=ein)",
      explanation: "Neutrum у Akkusativ = як Nominativ: ein Brot.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich sehe ___ schöne Frau.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "eine",
      hint: "Akkusativ feminin = eine",
      explanation: "Feminin у Akkusativ не змінюється: eine Frau.",
      points: 3
    }
  ],

  // 5) АКУЗАТИВ АРТИКЛІ (der/die/das → den/die/das) (10)
  articles_accusative: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich sehe ___ Hund.",
      options: ["der", "den", "dem", "die"],
      correct: "den",
      hint: "Akkusativ mask.: den",
      explanation: "Akkusativ maskulin: den Hund.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich sehe ___ Katze.",
      options: ["die", "den", "das", "dem"],
      correct: "die",
      hint: "Akkusativ fem.: die",
      explanation: "Akkusativ feminin не змінюється: die Katze.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich sehe ___ Haus.",
      options: ["das", "den", "dem", "die"],
      correct: "das",
      hint: "Akkusativ neut.: das",
      explanation: "Neutrum у Akkusativ: das Haus.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Wir kaufen ___ Apfel.",
      options: ["der", "den", "das", "die"],
      correct: "den",
      hint: "Apfel = maskulin",
      explanation: "Wir kaufen den Apfel.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Er liest ___ Buch.",
      options: ["das", "den", "der", "dem"],
      correct: "das",
      hint: "Buch = neutrum",
      explanation: "Er liest das Buch.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich habe ___ Schlüssel verloren.",
      options: ["der", "den", "das", "dem"],
      correct: "den",
      hint: "Schlüssel = maskulin",
      explanation: "Akkusativ: den Schlüssel.",
      points: 3
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir treffen ___ Lehrer.",
      options: ["der", "den", "das", "die"],
      correct: "den",
      hint: "treffen + Akk",
      explanation: "Treffen → Akkusativ: den Lehrer.",
      points: 3
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich finde ___ Idee gut.",
      options: ["die", "den", "das", "dem"],
      correct: "die",
      hint: "Idee (fem.)",
      explanation: "Ich finde die Idee gut.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Er hört ___ Musik.",
      options: ["der", "die", "das", "den"],
      correct: "die",
      hint: "Musik = feminin",
      explanation: "Er hört die Musik.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich sehe ___ Kinder im Hof.",
      options: ["die", "den", "das", "der"],
      correct: "die",
      hint: "Plural: die (Akk = die)",
      explanation: "Plural у Akkusativ: die Kinder.",
      points: 3
    }
  ],

  // 6) ОСОБОВІ ЗАЙМЕННИКИ (10)
  pronouns: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "___ heiße Alex.",
      options: ["Ich", "Du", "Er", "Sie"],
      correct: "Ich",
      hint: "Про себе",
      explanation: "Коли говоримо про себе: Ich.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "___ bist mein Freund.",
      options: ["Ich", "Du", "Er", "Wir"],
      correct: "Du",
      hint: "До співрозмовника",
      explanation: "Коли звертаємось до людини: Du.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Das ist Maria. ___ kommt aus Spanien.",
      options: ["Er", "Sie", "Es", "Wir"],
      correct: "Sie",
      hint: "Maria = вона",
      explanation: "Для Maria: Sie.",
      points: 1
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Das ist mein Buch. ___ ist neu.",
      options: ["Er", "Sie", "Es", "Wir"],
      correct: "Es",
      hint: "Buch = das",
      explanation: "Buch (das) → es.",
      points: 1
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Max und Tom? ___ sind hier.",
      options: ["Er", "Sie", "Wir", "Ihr"],
      correct: "Sie",
      hint: "вони",
      explanation: "Max und Tom → Sie (вони).",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Anna und ich? ___ gehen ins Kino.",
      options: ["Wir", "Ihr", "Sie", "Er"],
      correct: "Wir",
      hint: "ми",
      explanation: "Anna und ich → wir.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Du und Tom? ___ seid schnell.",
      options: ["Wir", "Ihr", "Sie", "Er"],
      correct: "Ihr",
      hint: "ви (множина)",
      explanation: "Du und Tom → ihr.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Entschuldigung, ___ sind Sie?",
      options: ["wer", "wie", "wo", "was"],
      correct: "wer",
      hint: "Питання про особу",
      explanation: "Wer sind Sie? — Хто ви?",
      points: 2
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Kommst ___ mit? (до друга)",
      options: ["ich", "du", "er", "sie"],
      correct: "du",
      hint: "звертання до співрозмовника",
      explanation: "Kommst du mit? — Ти йдеш з нами?",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir haben Tickets. Kommt ___ auch?",
      options: ["ihr", "er", "es", "ich"],
      correct: "ihr",
      hint: "до групи людей",
      explanation: "Kommt ihr auch? — Ви теж прийдете?",
      points: 3
    }
  ],

  // 7) ПОРЯДОК СЛІВ (V2) (10)
  word_order: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Heute ___ ich Sport.",
      options: ["mache", "ich mache", "machen", "mache ich"],
      correct: "mache",
      hint: "V2 правило",
      explanation: "У простому реченні дієслово 2-ге: Heute mache ich Sport.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Am Morgen ___ wir Kaffee.",
      options: ["trinken", "trinkt", "trinke", "trinkt ihr"],
      correct: "trinken",
      hint: "wir + trinken",
      explanation: "Am Morgen trinken wir Kaffee.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "In Berlin ___ sie.",
      options: ["wohnt", "wohnen", "wohnst", "wohne"],
      correct: "wohnt",
      hint: "sie (вона) + -t",
      explanation: "In Berlin wohnt sie.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Morgen ___ ich keine Zeit.",
      options: ["habe", "bin", "hat", "haben"],
      correct: "habe",
      hint: "haben",
      explanation: "Morgen habe ich keine Zeit.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "___ du heute ins Kino?",
      options: ["Gehst", "Du gehst", "Gehst du", "Heute gehst"],
      correct: "Gehst",
      hint: "Питання: дієслово 1-ше",
      explanation: "У yes/no питанні: Gehst du heute ins Kino?",
      points: 3
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Warum ___ du so müde?",
      options: ["bist", "ist", "sind", "seid"],
      correct: "bist",
      hint: "du + bist",
      explanation: "Warum bist du so müde?",
      points: 3
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Heute ___ es sehr kalt.",
      options: ["ist", "sind", "bist", "seid"],
      correct: "ist",
      hint: "es + ist",
      explanation: "Heute ist es sehr kalt.",
      points: 3
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Nach der Schule ___ ich nach Hause.",
      options: ["gehe", "geht", "gehen", "gehst"],
      correct: "gehe",
      hint: "ich + gehe",
      explanation: "Nach der Schule gehe ich nach Hause.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Im Park ___ die Kinder.",
      options: ["spielen", "spielt", "spielst", "spiele"],
      correct: "spielen",
      hint: "Kinder = plural",
      explanation: "Im Park spielen die Kinder.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Am Wochenende ___ wir oft Freunde.",
      options: ["treffen", "trifft", "treffe", "trefft"],
      correct: "treffen",
      hint: "wir + treffen",
      explanation: "Am Wochenende treffen wir oft Freunde.",
      points: 3
    }
  ],

  // 8) W-FRAGEN (Wer/Wie/Wo/Was/Wann/Warum) (10)
  questions_w: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "___ heißt du?",
      options: ["Wo", "Wie", "Wer", "Was"],
      correct: "Wie",
      hint: "Як тебе звати?",
      explanation: "Wie heißt du? — Як тебе звати?",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "___ kommst du?",
      options: ["Woher", "Warum", "Wann", "Wieviel"],
      correct: "Woher",
      hint: "Звідки?",
      explanation: "Woher kommst du? — Звідки ти?",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "___ wohnst du?",
      options: ["Wie", "Wo", "Was", "Wer"],
      correct: "Wo",
      hint: "Де?",
      explanation: "Wo wohnst du? — Де ти живеш?",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "___ ist das?",
      options: ["Was", "Wer", "Wie", "Wann"],
      correct: "Was",
      hint: "Що це?",
      explanation: "Was ist das? — Що це?",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "___ kommt heute?",
      options: ["Wer", "Wo", "Wie", "Was"],
      correct: "Wer",
      hint: "Хто?",
      explanation: "Wer kommt heute? — Хто прийде сьогодні?",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "___ beginnt der Film?",
      options: ["Wann", "Was", "Wo", "Wer"],
      correct: "Wann",
      hint: "Коли?",
      explanation: "Wann beginnt der Film? — Коли починається фільм?",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "___ bist du heute zu spät?",
      options: ["Warum", "Wann", "Wie", "Woher"],
      correct: "Warum",
      hint: "Чому?",
      explanation: "Warum bist du heute zu spät? — Чому ти сьогодні запізнився?",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "___ viel kostet das?",
      options: ["Was", "Wie", "Wo", "Wer"],
      correct: "Wie",
      hint: "Wie viel = скільки коштує",
      explanation: "Wie viel kostet das? — Скільки це коштує?",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "___ lange dauert es?",
      options: ["Wie", "Was", "Wo", "Wer"],
      correct: "Wie",
      hint: "Wie lange = як довго",
      explanation: "Wie lange dauert es? — Як довго це триває?",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "___ gehst du gern hin?",
      options: ["Wohin", "Woher", "Wann", "Warum"],
      correct: "Wohin",
      hint: "Куди?",
      explanation: "Wohin gehst du gern? — Куди ти любиш ходити?",
      points: 3
    }
  ],

  // 9) ЗАПЕРЕЧЕННЯ (nicht/kein) (10)
  negation: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich bin ___ müde.",
      options: ["nicht", "kein", "keine", "nichts"],
      correct: "nicht",
      hint: "не + прикметник",
      explanation: "Nicht заперечує прикметник/дієслово: nicht müde.",
      points: 2
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich habe ___ Zeit.",
      options: ["nicht", "kein", "keine", "nichts"],
      correct: "keine",
      hint: "Zeit (fem.)",
      explanation: "Kein/keine заперечує іменник: keine Zeit.",
      points: 2
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Das ist ___ Kaffee. (це чай)",
      options: ["nicht", "kein", "keine", "nichts"],
      correct: "kein",
      hint: "Kaffee (mask.)",
      explanation: "Kein + іменник (mask.): kein Kaffee.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Wir haben ___ Hunger.",
      options: ["nicht", "kein", "keinen", "keine"],
      correct: "keinen",
      hint: "Hunger (mask.) Akk",
      explanation: "Hunger (mask.) часто як Akk: keinen Hunger.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich gehe heute ___ ins Kino.",
      options: ["nicht", "kein", "keine", "nichts"],
      correct: "nicht",
      hint: "заперечення дії",
      explanation: "Заперечуємо дію/обставину: nicht ins Kino.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Er hat ___ Auto.",
      options: ["nicht", "kein", "keine", "keinen"],
      correct: "kein",
      hint: "Auto (neut.) → kein",
      explanation: "Neutrum: kein Auto.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Das ist ___ mein Problem.",
      options: ["nicht", "kein", "keine", "nichts"],
      correct: "nicht",
      hint: "заперечення займенника",
      explanation: "Nicht заперечує присвійний: nicht mein Problem.",
      points: 3
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich sehe ___ Menschen hier.",
      options: ["nicht", "kein", "keine", "keinen"],
      correct: "keine",
      hint: "Menschen = plural",
      explanation: "Plural: keine Menschen.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich verstehe das ___.",
      options: ["nicht", "kein", "keine", "nichts"],
      correct: "nicht",
      hint: "заперечення дієслова",
      explanation: "Ich verstehe das nicht. (не розумію цього)",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Heute habe ich ___ Lust.",
      options: ["nicht", "kein", "keine", "keinen"],
      correct: "keine",
      hint: "Lust (fem.)",
      explanation: "Keine Lust (фемінін).",
      points: 3
    }
  ],

  // 10) NUMBERS / MATH / PHONE (10)
  numbers: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "eins, zwei, ___",
      options: ["drei", "vier", "fünf", "sechs"],
      correct: "drei",
      hint: "1,2,3",
      explanation: "1–3: eins, zwei, drei.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "zehn, elf, ___",
      options: ["zwölf", "zwanzig", "dreizehn", "neun"],
      correct: "zwölf",
      hint: "10–12",
      explanation: "10–12: zehn, elf, zwölf.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Wie alt ___ du?",
      options: ["bist", "ist", "bin", "sind"],
      correct: "bist",
      hint: "du + bist",
      explanation: "Wie alt bist du?",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich bin ___ Jahre alt. (20)",
      options: ["zwanzig", "zwei", "zweite", "zwanzigste"],
      correct: "zwanzig",
      hint: "20 = ...",
      explanation: "20 = zwanzig.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "sieben + acht = ___",
      options: ["fünfzehn", "vierzehn", "sechzehn", "dreizehn"],
      correct: "fünfzehn",
      hint: "7+8",
      explanation: "7 + 8 = 15 → fünfzehn.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "null, eins, zwei, ___",
      options: ["drei", "vier", "fünf", "sechs"],
      correct: "drei",
      hint: "0–3",
      explanation: "0–3: null, eins, zwei, drei.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich habe ___ Euro. (12)",
      options: ["zwölf", "zwanzig", "zwei", "elf"],
      correct: "zwölf",
      hint: "12 = ...",
      explanation: "12 = zwölf.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "21 = ___",
      options: ["einundzwanzig", "zwanzigeins", "einszwanzig", "zweieins"],
      correct: "einundzwanzig",
      hint: "1 і 20",
      explanation: "21 = ein-und-zwanzig.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "35 = ___",
      options: ["fünfunddreißig", "dreißigfünf", "fünfdreißig", "dreiundfünfzig"],
      correct: "fünfunddreißig",
      hint: "5 і 30",
      explanation: "35 = fünf-und-dreißig.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Telefon: 0-1-2-___",
      options: ["3", "5", "7", "9"],
      correct: "3",
      hint: "послідовність",
      explanation: "Після 0-1-2 логічно 3.",
      points: 3
    }
  ],

  // 11) TIME / CLOCK / DAYS (10)
  time: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Wie ___ ist es?",
      options: ["spät", "alt", "viel", "viele"],
      correct: "spät",
      hint: "Котра година?",
      explanation: "Wie spät ist es? — Котра година?",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Es ist drei ___ .",
      options: ["Uhr", "Tag", "Woche", "Jahr"],
      correct: "Uhr",
      hint: "година",
      explanation: "Es ist drei Uhr.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich stehe ___ 7 Uhr auf.",
      options: ["um", "am", "im", "zu"],
      correct: "um",
      hint: "точний час",
      explanation: "Um + Uhrzeit: um 7 Uhr.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "___ Morgen trinke ich Tee.",
      options: ["Am", "Um", "Im", "Zu"],
      correct: "Am",
      hint: "частина дня",
      explanation: "Am Morgen = вранці.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "___ Sommer ist es warm.",
      options: ["Im", "Am", "Um", "Zu"],
      correct: "Im",
      hint: "пора року",
      explanation: "Im Sommer = влітку.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Heute ist ___ . (понеділок)",
      options: ["Montag", "Sonntag", "Freitag", "Dienst"],
      correct: "Montag",
      hint: "день тижня",
      explanation: "Montag = понеділок.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Morgen ist ___ . (після Montag)",
      options: ["Dienstag", "Sonntag", "Samstag", "Freitag"],
      correct: "Dienstag",
      hint: "послідовність",
      explanation: "Після Montag йде Dienstag.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir treffen uns ___ Abend.",
      options: ["am", "um", "im", "zu"],
      correct: "am",
      hint: "am Abend",
      explanation: "Am Abend = ввечері.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Der Kurs beginnt ___ 18:00.",
      options: ["um", "am", "im", "zu"],
      correct: "um",
      hint: "точний час",
      explanation: "Um 18:00 = о 18:00.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "___ Wochenende schlafe ich länger.",
      options: ["Am", "Um", "Im", "Zu"],
      correct: "Am",
      hint: "am Wochenende",
      explanation: "Am Wochenende = на вихідних.",
      points: 3
    },
    {
      id: 11,
      type: "clock",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 20,
      question: "Яка година на годиннику?",
      hour: 7,
      minute: 45,
      options: [
        "Viertel vor acht",
        "Viertel nach sieben",
        "Halb acht",
        "Sieben Uhr fünfundvierzig"
      ],
      correct: "Viertel vor acht",
      hint: "Годинна стрілка між 7 та 8, хвилинна на 9",
      explanation: "45 хвилин = Viertel vor наступної години",
      points: 2
    },
    {
      id: 12,
      type: "clock",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 20,
      question: "Wie spät ist es?",
      hour: 3,
      minute: 15,
      options: [
        "Viertel nach drei",
        "Viertel vor drei",
        "Halb vier",
        "Drei Uhr fünfzehn"
      ],
      correct: "Viertel nach drei",
      hint: "Годинна стрілка на 3, хвилинна на 3",
      explanation: "15 хвилин = Viertel nach",
      points: 2
    },
    {
      id: 13,
      type: "clock",
      level: "A1",
      difficulty: "hard",
      timeLimitSec: 25,
      question: "Welche Uhrzeit zeigt der Zeiger?",
      hour: 10,
      minute: 30,
      options: [
        "Halb elf",
        "Zehn Uhr dreißig",
        "Viertel vor elf",
        "Viertel nach zehn"
      ],
      correct: "Halb elf",
      hint: "Минутна стрілка на 6, годинна між 10 та 11",
      explanation: "30 хвилин = halb наступної години",
      points: 3
    }
  ],

  // 12) FAMILY (10)
  family: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Meine ___ heißt Maria.",
      options: ["Mutter", "Vater", "Bruder", "Schwester"],
      correct: "Mutter",
      hint: "мама",
      explanation: "Meine Mutter heißt Maria.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Das ist mein ___ .",
      options: ["Vater", "Mütter", "Schwestern", "Eltern"],
      correct: "Vater",
      hint: "тато",
      explanation: "Das ist mein Vater.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich habe zwei ___ .",
      options: ["Brüder", "Bruder", "Schwester", "Schwestern"],
      correct: "Brüder",
      hint: "множина",
      explanation: "Zwei → множина: Brüder.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Meine ___ ist sieben Jahre alt.",
      options: ["Schwester", "Bruder", "Vater", "Mutter"],
      correct: "Schwester",
      hint: "сестра",
      explanation: "Meine Schwester ist sieben Jahre alt.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Das sind meine ___ .",
      options: ["Eltern", "Vater", "Mutter", "Bruder"],
      correct: "Eltern",
      hint: "батьки",
      explanation: "Das sind meine Eltern.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Meine Oma ist die ___ meiner Mutter.",
      options: ["Mutter", "Schwester", "Tochter", "Freundin"],
      correct: "Mutter",
      hint: "родинні звʼязки",
      explanation: "Oma = мама твоєї мами/тата.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Mein Onkel ist der ___ meines Vaters.",
      options: ["Bruder", "Sohn", "Freund", "Lehrer"],
      correct: "Bruder",
      hint: "onkel",
      explanation: "Onkel = брат батька/матері.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich wohne mit meiner ___ zusammen. (жіноча форма)",
      options: ["Freundin", "Freund", "Bruder", "Vater"],
      correct: "Freundin",
      hint: "female partner",
      explanation: "Freundin = дівчина/подруга (жіноча форма).",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir besuchen ___ Großeltern.",
      options: ["unsere", "unser", "meine", "meinen"],
      correct: "unsere",
      hint: "Großeltern = plural",
      explanation: "Plural: unsere Großeltern.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Mein Bruder hat ___ Kind.",
      options: ["ein", "eine", "einen", "einem"],
      correct: "ein",
      hint: "Kind = neutrum",
      explanation: "Kind (das) → ein Kind.",
      points: 3
    }
  ],

  // 13) FOOD / DRINKS (10)
  food: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich trinke ___ .",
      options: ["Wasser", "Milch", "Saft", "Tee"],
      correct: "Wasser",
      hint: "найпростіше слово",
      explanation: "Trinken → напої. Wasser = вода.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich esse ___ .",
      options: ["Brot", "Wasser", "Tee", "Milch"],
      correct: "Brot",
      hint: "їжа",
      explanation: "Essen → їжа. Brot = хліб.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Möchtest du ___ ?",
      options: ["Tee", "gehen", "wohnen", "sehen"],
      correct: "Tee",
      hint: "питання в кафе",
      explanation: "Möchtest du Tee? — Хочеш чаю?",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Das Essen ___ gut.",
      options: ["schmeckt", "geht", "liest", "fliegt"],
      correct: "schmeckt",
      hint: "про смак",
      explanation: "Schmecken = смакувати: Das Essen schmeckt gut.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich nehme ___ Apfel. (Akk)",
      options: ["einen", "ein", "eine", "einem"],
      correct: "einen",
      hint: "Apfel (mask.) Akk",
      explanation: "Akk mask.: einen Apfel.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich hätte gern ___ Kaffee.",
      options: ["einen", "ein", "eine", "einem"],
      correct: "einen",
      hint: "Kaffee (mask.)",
      explanation: "Ich hätte gern einen Kaffee. (ввічливо)",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Wir kaufen ___ Brot. (neut.)",
      options: ["ein", "eine", "einen", "einem"],
      correct: "ein",
      hint: "Brot = neutrum",
      explanation: "Ein Brot (neutrum).",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Gib mir bitte ___ Salz. (neut.)",
      options: ["das", "den", "die", "dem"],
      correct: "das",
      hint: "Salz = das",
      explanation: "Das Salz (neutrum).",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Zum Frühstück esse ich ___ Käse. (mask.)",
      options: ["den", "das", "die", "der"],
      correct: "den",
      hint: "Akk mask.",
      explanation: "Ich esse den Käse. (Käse часто маск.)",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich trinke keinen Kaffee, sondern ___ .",
      options: ["Tee", "gehen", "lesen", "schnell"],
      correct: "Tee",
      hint: "альтернатива напою",
      explanation: "Sondern = а навпаки: ... sondern Tee.",
      points: 3
    }
  ],

  // 14) COLORS (10)
  colors: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Der Himmel ist ___ .",
      options: ["blau", "grün", "rot", "schwarz"],
      correct: "blau",
      hint: "небо",
      explanation: "Der Himmel ist blau.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Die Sonne ist ___ .",
      options: ["gelb", "blau", "schwarz", "grün"],
      correct: "gelb",
      hint: "сонце",
      explanation: "Die Sonne ist gelb.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Das Gras ist ___ .",
      options: ["grün", "rot", "blau", "weiß"],
      correct: "grün",
      hint: "трава",
      explanation: "Das Gras ist grün.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Schnee ist ___ .",
      options: ["weiß", "schwarz", "rot", "blau"],
      correct: "weiß",
      hint: "сніг",
      explanation: "Schnee ist weiß.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Die Nacht ist ___ .",
      options: ["schwarz", "weiß", "gelb", "grün"],
      correct: "schwarz",
      hint: "ніч",
      explanation: "Die Nacht ist schwarz.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Mein T-Shirt ist ___ und meine Hose ist schwarz.",
      options: ["weiß", "laufen", "sieben", "heute"],
      correct: "weiß",
      hint: "колір",
      explanation: "Weiß = білий.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Der Apfel ist ___ .",
      options: ["rot", "blau", "weiß", "schwarz"],
      correct: "rot",
      hint: "яблуко",
      explanation: "Der Apfel ist rot. (часто так кажуть)",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich mag die Farbe ___. (зелений)",
      options: ["grün", "grüne", "Grün", "grünen"],
      correct: "Grün",
      hint: "як іменник",
      explanation: "Коли колір як іменник → з великої: das Grün / Grün.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Das Auto ist ___ . (сірий)",
      options: ["grau", "grün", "braun", "lila"],
      correct: "grau",
      hint: "сірий",
      explanation: "Grau = сірий.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Meine Lieblingsfarbe ist ___ . (фіолетовий)",
      options: ["lila", "blau", "gelb", "weiß"],
      correct: "lila",
      hint: "violett/lila",
      explanation: "Lila = фіолетовий (розмовно).",
      points: 3
    }
  ],

  // 15) HOUSE / ROOMS / FURNITURE (10)
  house: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich wohne in einem ___ .",
      options: ["Haus", "Auto", "Buch", "Baum"],
      correct: "Haus",
      hint: "де живуть",
      explanation: "Ich wohne in einem Haus.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich schlafe im ___ .",
      options: ["Zimmer", "Küche", "Bad", "Balkon"],
      correct: "Zimmer",
      hint: "кімната",
      explanation: "Im Zimmer (кімната).",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Der ___ steht in der Küche.",
      options: ["Tisch", "Hund", "Himmel", "Film"],
      correct: "Tisch",
      hint: "меблі",
      explanation: "Правильно: Der Tisch steht in der Küche.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Das ___ ist im Bad.",
      options: ["Waschbecken", "Tisch", "Auto", "Brot"],
      correct: "Waschbecken",
      hint: "ванна",
      explanation: "Das Waschbecken ist im Bad.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Wir essen im ___ .",
      options: ["Wohnzimmer", "Keller", "Bad", "Schlafzimmer"],
      correct: "Wohnzimmer",
      hint: "вітальня",
      explanation: "Wir essen im Wohnzimmer.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Die Lampe hängt an der ___ .",
      options: ["Decke", "Tür", "Wand", "Straße"],
      correct: "Decke",
      hint: "стеля",
      explanation: "Decke = стеля/ковдра (тут стеля).",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich mache die ___ auf. (вікно)",
      options: ["Fenster", "Tisch", "Bett", "Schrank"],
      correct: "Fenster",
      hint: "відкрити",
      explanation: "Fenster aufmachen = відкрити вікно.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Der Schlüssel liegt ___ Tisch. (на)",
      options: ["auf dem", "in dem", "unter dem", "an dem"],
      correct: "auf dem",
      hint: "auf = на",
      explanation: "Auf dem Tisch = на столі.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Das Buch ist ___ Tasche. (всередині)",
      options: ["in der", "auf der", "unter der", "an der"],
      correct: "in der",
      hint: "in = в",
      explanation: "In der Tasche = в сумці.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Der Schrank steht ___ Wand. (біля/при)",
      options: ["an der", "in der", "auf der", "unter der"],
      correct: "an der",
      hint: "an = біля/при",
      explanation: "An der Wand = біля стіни/при стіні.",
      points: 3
    }
  ],

  // 16) ANIMALS (10) — виправлено Der Vogel
  animals: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Der ___ bellt.",
      options: ["Hund", "Katze", "Maus", "Vogel"],
      correct: "Hund",
      hint: "звук",
      explanation: "Der Hund bellt. (собака гавкає)",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Die ___ miaut.",
      options: ["Katze", "Hund", "Pferd", "Vogel"],
      correct: "Katze",
      hint: "звук",
      explanation: "Die Katze miaut. (кішка нявкає)",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Der ___ fliegt.",
      options: ["Vogel", "Fisch", "Pferd", "Hund"],
      correct: "Vogel",
      hint: "літає",
      explanation: "Правильно: Der Vogel fliegt.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Der ___ schwimmt.",
      options: ["Fisch", "Hund", "Kuh", "Hase"],
      correct: "Fisch",
      hint: "плаває",
      explanation: "Der Fisch schwimmt.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Das ___ läuft schnell.",
      options: ["Pferd", "Buch", "Tisch", "Milch"],
      correct: "Pferd",
      hint: "тварина",
      explanation: "Das Pferd läuft schnell.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich habe ___ Hund. (Akk)",
      options: ["einen", "ein", "eine", "einem"],
      correct: "einen",
      hint: "Hund (mask.)",
      explanation: "Ich habe einen Hund.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Die Katze sitzt ___ Sofa.",
      options: ["auf dem", "in dem", "unter dem", "an dem"],
      correct: "auf dem",
      hint: "на дивані",
      explanation: "Auf dem Sofa = на дивані.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Der Hund läuft ___ Garten.",
      options: ["im", "am", "um", "zu"],
      correct: "im",
      hint: "всередині місця",
      explanation: "Im Garten = в саду.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich sehe ___ Vögel.",
      options: ["die", "den", "das", "der"],
      correct: "die",
      hint: "plural Akk",
      explanation: "Plural Akk: die Vögel.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Das ist ___ Ente. (fem.)",
      options: ["eine", "ein", "einen", "einem"],
      correct: "eine",
      hint: "Ente (die)",
      explanation: "Die Ente → eine Ente.",
      points: 3
    }
  ],

  // 17) CLOTHES (10) — виправлено “Hemd” (не Hemde)
  clothes: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich trage eine ___ .",
      options: ["Jacke", "Hemd", "Hose", "Schuhe"],
      correct: "Jacke",
      hint: "одяг",
      explanation: "Ich trage eine Jacke.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich trage ein ___ .",
      options: ["Hemd", "Jacke", "Hose", "Schuhe"],
      correct: "Hemd",
      hint: "ein + neutrum",
      explanation: "Das Hemd → ein Hemd.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Das T-Shirt ist ___ .",
      options: ["blau", "laufen", "lesen", "heute"],
      correct: "blau",
      hint: "колір",
      explanation: "Das T-Shirt ist blau.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Er trägt eine ___ . (штани)",
      options: ["Hose", "Jacke", "Kleid", "Schuhe"],
      correct: "Hose",
      hint: "штани",
      explanation: "Er trägt eine Hose.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Sie trägt ein ___ .",
      options: ["Kleid", "Hose", "Jacke", "Schuhe"],
      correct: "Kleid",
      hint: "сукня",
      explanation: "Sie trägt ein Kleid.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Die ___ sind neu.",
      options: ["Schuhe", "Hose", "Jacke", "Hemd"],
      correct: "Schuhe",
      hint: "plural",
      explanation: "Die Schuhe sind neu.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich kaufe ___ Jacke. (Akk fem.)",
      options: ["eine", "ein", "einen", "einem"],
      correct: "eine",
      hint: "Jacke (die)",
      explanation: "Akk fem.: eine Jacke.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Er trägt ___ Mantel. (Akk mask.)",
      options: ["den", "das", "die", "dem"],
      correct: "den",
      hint: "Mantel = mask",
      explanation: "Akk mask.: den Mantel.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich brauche ___ neue Schuhe. (plural)",
      options: ["keine", "kein", "nicht", "keinen"],
      correct: "keine",
      hint: "plural",
      explanation: "Plural: keine Schuhe.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Die Mütze liegt ___ Stuhl.",
      options: ["auf dem", "in dem", "unter dem", "an dem"],
      correct: "auf dem",
      hint: "на стільці",
      explanation: "Auf dem Stuhl = на стільці.",
      points: 3
    }
  ],

  // 18) WEATHER (10)
  weather: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Heute ___ die Sonne.",
      options: ["scheint", "regnet", "schneit", "stürmt"],
      correct: "scheint",
      hint: "сонце",
      explanation: "Heute scheint die Sonne.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Es ___ . (дощ)",
      options: ["scheint", "regnet", "sonnig", "warm"],
      correct: "regnet",
      hint: "дощ",
      explanation: "Es regnet.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Im Winter ___ es.",
      options: ["regnet", "scheint", "schneit", "warm"],
      correct: "schneit",
      hint: "зима",
      explanation: "Im Winter schneit es.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Es ist sehr ___ .",
      options: ["kalt", "Sonne", "Regen", "schneit"],
      correct: "kalt",
      hint: "температура",
      explanation: "Es ist sehr kalt.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Das ___ ist gut.",
      options: ["kalt", "warm", "Wetter", "schneit"],
      correct: "Wetter",
      hint: "погода",
      explanation: "Das Wetter ist gut.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Es ist heute ___ . (сонячно)",
      options: ["sonnig", "windig", "nass", "kühl"],
      correct: "sonnig",
      hint: "сонце",
      explanation: "Sonnig = сонячно.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Es ist sehr ___ . (вітряно)",
      options: ["windig", "sonnig", "heißt", "grün"],
      correct: "windig",
      hint: "вітер",
      explanation: "Windig = вітряно.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Morgen wird es ___ . (тепло)",
      options: ["warm", "kalt", "schwarz", "spät"],
      correct: "warm",
      hint: "прогноз",
      explanation: "Warm = тепло.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Heute ist es ___ als gestern. (холодніше)",
      options: ["kälter", "kalt", "kalte", "kälteste"],
      correct: "kälter",
      hint: "порівняння",
      explanation: "Порівняння: kalt → kälter.",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wenn es regnet, nehme ich einen ___ .",
      options: ["Regenschirm", "Schlüssel", "Teller", "Stift"],
      correct: "Regenschirm",
      hint: "дощ",
      explanation: "Regenschirm = парасолька.",
      points: 3
    }
  ],

  // 19) HOBBIES / VERBS (10)
  hobbies: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich ___ Fußball.",
      options: ["spiele", "lese", "sehe", "höre"],
      correct: "spiele",
      hint: "ich + -e",
      explanation: "Ich spiele ...",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Sie ___ Musik.",
      options: ["spielt", "hört", "sieht", "liest"],
      correct: "hört",
      hint: "sie (вона) + -t",
      explanation: "Sie hört Musik.",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Er ___ ein Buch.",
      options: ["spielt", "hört", "sieht", "liest"],
      correct: "liest",
      hint: "er + -t",
      explanation: "Er liest ein Buch.",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Wir ___ gern.",
      options: ["spielen", "sehen", "lesen", "hören"],
      correct: "sehen",
      hint: "wir = infinitiv",
      explanation: "Wir sehen fern.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Spielst du gern? — Ja, ich ___ gern.",
      options: ["spiele", "spielst", "spielt", "spielen"],
      correct: "spiele",
      hint: "ich",
      explanation: "Я: ich spiele.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Am Wochenende ___ ich oft schwimmen.",
      options: ["gehe", "geht", "gehen", "gehst"],
      correct: "gehe",
      hint: "ich + gehe",
      explanation: "Ich gehe schwimmen.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Er ___ jeden Tag Fitness.",
      options: ["macht", "mache", "machst", "machen"],
      correct: "macht",
      hint: "er + -t",
      explanation: "Er macht Fitness.",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir ___ heute ein Spiel. (починаємо)",
      options: ["starten", "starte", "startet", "startest"],
      correct: "starten",
      hint: "wir",
      explanation: "Wir starten heute ein Spiel.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich ___ gern Serien, aber heute lerne ich.",
      options: ["schaue", "schaut", "schaust", "schauen"],
      correct: "schaue",
      hint: "ich + -e",
      explanation: "Ich schaue gern ...",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ihr ___ sehr gut Karten.",
      options: ["spielt", "spiele", "spielen", "spielst"],
      correct: "spielt",
      hint: "ihr + -t",
      explanation: "Ihr spielt ...",
      points: 3
    }
  ],

  // 20) CITY / PLACES / TRANSPORT (10) — виправлено “Der Bus”, порядок слів
  city: [
    {
      id: 1,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Ich wohne in einer ___ .",
      options: ["Stadt", "Dorf", "Haus", "Buch"],
      correct: "Stadt",
      hint: "місто",
      explanation: "In einer Stadt = у місті.",
      points: 1
    },
    {
      id: 2,
      type: "multiple_choice",
      level: "A1",
      difficulty: "easy",
      timeLimitSec: 10,
      question: "Da ist ein ___ .",
      options: ["Park", "Haus", "Auto", "Buch"],
      correct: "Park",
      hint: "місце",
      explanation: "Da ist ein Park. (Там парк)",
      points: 1
    },
    {
      id: 3,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "___ Bus fährt in die Stadt.",
      options: ["Der", "Die", "Das", "Den"],
      correct: "Der",
      hint: "Bus = maskulin",
      explanation: "Правильно: Der Bus fährt ...",
      points: 2
    },
    {
      id: 4,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Ich kaufe im ___ ein.",
      options: ["Park", "Supermarkt", "Schule", "Haus"],
      correct: "Supermarkt",
      hint: "магазин",
      explanation: "Im Supermarkt einkaufen = купувати в супермаркеті.",
      points: 2
    },
    {
      id: 5,
      type: "multiple_choice",
      level: "A1",
      difficulty: "normal",
      timeLimitSec: 12,
      question: "Das ___ ist groß. (магазин)",
      options: ["Geschäft", "Haus", "Auto", "Buch"],
      correct: "Geschäft",
      hint: "shop",
      explanation: "Das Geschäft ist groß.",
      points: 2
    },
    {
      id: 6,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Ich fahre mit ___ U-Bahn.",
      options: ["der", "die", "das", "den"],
      correct: "der",
      hint: "mit + Dativ",
      explanation: "Mit + Dativ: mit der U-Bahn.",
      points: 2
    },
    {
      id: 7,
      type: "multiple_choice",
      level: "A2",
      difficulty: "normal",
      timeLimitSec: 14,
      question: "Wir gehen ___ Bahnhof.",
      options: ["zum", "zur", "in den", "im"],
      correct: "zum",
      hint: "Bahnhof = der",
      explanation: "Zu + Dativ: zum Bahnhof (zu dem).",
      points: 2
    },
    {
      id: 8,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Entschuldigung, wo ist ___ nächste Bäckerei?",
      options: ["die", "der", "das", "den"],
      correct: "die",
      hint: "Bäckerei = feminin",
      explanation: "Die Bäckerei (fem.) → die nächste Bäckerei.",
      points: 3
    },
    {
      id: 9,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Ich steige ___ Bus ein.",
      options: ["in den", "im", "auf den", "an den"],
      correct: "in den",
      hint: "einsteigen in + Akk",
      explanation: "Einsteigen: in den Bus (Akk).",
      points: 3
    },
    {
      id: 10,
      type: "multiple_choice",
      level: "A2",
      difficulty: "hard",
      timeLimitSec: 16,
      question: "Wir treffen uns ___ Hauptbahnhof.",
      options: ["am", "im", "um", "zu"],
      correct: "am",
      hint: "am = an dem",
      explanation: "Am Hauptbahnhof = біля головного вокзалу.",
      points: 3
    }
  ]
};

// ===== Party / Duel meta (можеш використати у грі) =====
const DUEL_SETTINGS = {
  combo: {
    // множник до очок за серію правильних відповідей
    // streak 0-2: 1.0, 3-4: 1.2, 5-7: 1.5, 8+: 2.0
    getMultiplier(streak) {
      if (streak >= 8) return 2.0;
      if (streak >= 5) return 1.5;
      if (streak >= 3) return 1.2;
      return 1.0;
    }
  },
  time: {
    // базовий час під складність
    byDifficulty: {
      easy: 10,
      normal: 14,
      hard: 16
    }
  }
};

// Допоміжна функція: випадкове питання з теми (без повторів)
function getRandomQuestionFromTheme(theme, usedQuestions = new Set()) {
  const list = grammarQuestions[theme];
  if (!list || list.length === 0) return null;

  const available = list.filter(q => !usedQuestions.has(q.id));
  if (available.length === 0) {
    usedQuestions.clear();
    return list[Math.floor(Math.random() * list.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}

// Функція для отримання випадкового питання з фільтром (level/difficulty)
function getRandomQuestion(theme, opts = {}, usedQuestions = new Set()) {
  const list = grammarQuestions[theme];
  if (!list || list.length === 0) return null;

  const { level, difficulty } = opts;
  let filtered = list;

  if (level) filtered = filtered.filter(q => q.level === level);
  if (difficulty) filtered = filtered.filter(q => q.difficulty === difficulty);

  if (filtered.length === 0) filtered = list;

  const available = filtered.filter(q => !usedQuestions.has(q.id));
  if (available.length === 0) {
    usedQuestions.clear();
    return filtered[Math.floor(Math.random() * filtered.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}

// Функція для отримання всіх тем
function getAllThemes() {
  return Object.keys(grammarQuestions);
}

// Функція для отримання кількості питань у темі
function getQuestionCountForTheme(theme) {
  return grammarQuestions[theme] ? grammarQuestions[theme].length : 0;
}

// Функція: загальна кількість питань
function getTotalQuestionCount() {
  return Object.values(grammarQuestions).reduce((sum, arr) => sum + (arr?.length || 0), 0);
}

// Експорт для браузера
if (typeof window !== "undefined") {
  window.grammarQuestions = grammarQuestions;
  window.DUEL_SETTINGS = DUEL_SETTINGS;
  window.getRandomQuestionFromTheme = getRandomQuestionFromTheme;
  window.getRandomQuestion = getRandomQuestion;
  window.getAllThemes = getAllThemes;
  window.getQuestionCountForTheme = getQuestionCountForTheme;
  window.getTotalQuestionCount = getTotalQuestionCount;
}

// Експорт для Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    grammarQuestions,
    DUEL_SETTINGS,
    getRandomQuestionFromTheme,
    getRandomQuestion,
    getAllThemes,
    getQuestionCountForTheme,
    getTotalQuestionCount
  };
}