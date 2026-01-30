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
      hint: { uk: "Ich + sein", de: "Ich bin …" },
      explanation: { uk: "З ich використовується форма дієслова sein: ich bin.", de: "З ich використовується форма дієслова sein: ich bin." },
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
      hint: { uk: "Du + sein", de: "Du bist …" },
      explanation: { uk: "З du використовується bist: du bist.", de: "З du використовується bist: du bist." },
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
      hint: { uk: "Er/Sie/Es + sein", de: "Er/Sie/Es ist …" },
      explanation: { uk: "З er/sie/es використовується ist.", de: "З er/sie/es використовується ist." },
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
      hint: { uk: "Wir + sein", de: "Wir sind …" },
      explanation: { uk: "З wir використовується sind: wir sind.", de: "З wir використовується sind: wir sind." },
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
      hint: { uk: "Ihr + sein", de: "Ihr seid …" },
      explanation: { uk: "З ihr використовується seid: ihr seid.", de: "З ihr використовується seid: ihr seid." },
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
      hint: { uk: "sie (вони) = plural", de: "Sie (Plural) sind …" },
      explanation: { uk: "Sie (вони) = sind.", de: "Sie (вони) = sind." },
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
      hint: { uk: "Sie (Ви) = як plural", de: "" },
      explanation: { uk: "Формальне Sie вживається як множина: Sie sind.", de: "Формальне Sie вживається як множина: Sie sind." },
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
      hint: { uk: "„nicht“ після дієслова", de: "" },
      explanation: { uk: "Ich bin nicht sicher. Дієслово на 2-му місці.", de: "Ich bin nicht sicher. Дієслово на 2-му місці." },
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
      hint: { uk: "Питання: дієслово на 1-му місці", de: "" },
      explanation: { uk: "У питанні дієслово стоїть першим: Wo bist du?", de: "У питанні дієслово стоїть першим: Wo bist du?" },
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
      hint: { uk: "Heute (обставина) + V2", de: "" },
      explanation: { uk: "Коли речення починається з Heute, дієслово все одно друге: Heute sind wir ...", de: "Коли речення починається з Heute, дієслово все одно друге: Heute sind wir ..." },
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
      hint: { uk: "Ich + haben", de: "Ich + haben" },
      explanation: { uk: "З ich: ich habe.", de: "З ich: ich habe." },
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
      hint: { uk: "Du + haben", de: "Du + haben" },
      explanation: { uk: "З du: du hast.", de: "З du: du hast." },
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
      hint: { uk: "Er/Sie/Es + haben", de: "Er/Sie/Es + haben" },
      explanation: { uk: "З er/sie/es: hat.", de: "З er/sie/es: hat." },
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
      hint: { uk: "Wir + haben", de: "Wir + haben" },
      explanation: { uk: "З wir: wir haben.", de: "З wir: wir haben." },
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
      hint: { uk: "Ihr + haben", de: "Ihr + haben" },
      explanation: { uk: "З ihr: ihr habt.", de: "З ihr: ihr habt." },
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
      hint: { uk: "sie (вони) = plural", de: "Sie (Plural) sind …" },
      explanation: { uk: "Sie (вони) = haben.", de: "Sie (вони) = haben." },
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
      hint: { uk: "Sie (Ви) як plural", de: "" },
      explanation: { uk: "Формальне Sie: Sie haben.", de: "Формальне Sie: Sie haben." },
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
      hint: { uk: "Питання: дієслово перше", de: "" },
      explanation: { uk: "Hast du ...? — у питанні дієслово на 1-му місці.", de: "Hast du ...? — у питанні дієслово на 1-му місці." },
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
      hint: { uk: "haben", de: "haben" },
      explanation: { uk: "Heute habe ich ... (дієслово друге).", de: "Heute habe ich ... (дієслово друге)." },
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
      hint: { uk: "wir + haben", de: "wir + haben" },
      explanation: { uk: "Wir haben ...", de: "Wir haben ..." },
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
      hint: { uk: "Hund = maskulin", de: "der Hund" },
      explanation: { uk: "У Nominativ: der Hund.", de: "У Nominativ: der Hund." },
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
      hint: { uk: "Katze = feminin", de: "die Katze" },
      explanation: { uk: "У Nominativ: die Katze.", de: "У Nominativ: die Katze." },
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
      hint: { uk: "Haus = neutrum", de: "das Haus" },
      explanation: { uk: "У Nominativ: das Haus.", de: "У Nominativ: das Haus." },
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
      hint: { uk: "Kinder = plural", de: "" },
      explanation: { uk: "У Nominativ plural: die Kinder.", de: "У Nominativ plural: die Kinder." },
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
      hint: { uk: "Tisch = maskulin", de: "der Tisch" },
      explanation: { uk: "Правильно: der Tisch.", de: "Правильно: der Tisch." },
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
      hint: { uk: "Buch = neutrum", de: "das Buch" },
      explanation: { uk: "Правильно: das Buch.", de: "Правильно: das Buch." },
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
      hint: { uk: "Sonne = feminin", de: "die Sonne" },
      explanation: { uk: "Правильно: die Sonne.", de: "Правильно: die Sonne." },
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
      hint: { uk: "Wetter (das), Stimmung (die)", de: "" },
      explanation: { uk: "Das Wetter, die Stimmung.", de: "Das Wetter, die Stimmung." },
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
      hint: { uk: "Mädchen = neutrum ( -chen )", de: "" },
      explanation: { uk: "Зменшувальні на -chen/-lein завжди das: das Mädchen.", de: "Зменшувальні на -chen/-lein завжди das: das Mädchen." },
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
      hint: { uk: "Leute = plural", de: "" },
      explanation: { uk: "Die Leute (множина).", de: "Die Leute (множина)." },
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
      hint: { uk: "Hund (mask.)", de: "Hund (mask.)" },
      explanation: { uk: "Nominativ maskulin: ein Hund.", de: "Nominativ maskulin: ein Hund." },
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
      hint: { uk: "Katze (fem.)", de: "Katze (fem.)" },
      explanation: { uk: "Nominativ feminin: eine Katze.", de: "Nominativ feminin: eine Katze." },
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
      hint: { uk: "Haus (neut.)", de: "Haus (neut.)" },
      explanation: { uk: "Nominativ neutrum: ein Haus.", de: "Nominativ neutrum: ein Haus." },
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
      hint: { uk: "Idee (fem.)", de: "Idee (fem.)" },
      explanation: { uk: "Eine Idee (fem.).", de: "Eine Idee (fem.)." },
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
      hint: { uk: "Lehrer (mask.)", de: "Lehrer (mask.)" },
      explanation: { uk: "Ein Lehrer (mask.).", de: "Ein Lehrer (mask.)." },
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
      hint: { uk: "Studentin (fem.)", de: "Studentin (fem.)" },
      explanation: { uk: "Eine Studentin (fem.).", de: "Eine Studentin (fem.)." },
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
      hint: { uk: "Mädchen = neutrum", de: "das Mädchen" },
      explanation: { uk: "Das Mädchen → ein Mädchen (neutrum).", de: "Das Mädchen → ein Mädchen (neutrum)." },
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
      hint: { uk: "Accusativ maskulin", de: "einen/den …" },
      explanation: { uk: "Після brauchen часто Akkusativ: einen Stift.", de: "Після brauchen часто Akkusativ: einen Stift." },
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
      hint: { uk: "Brot = neutrum (Akk=ein)", de: "" },
      explanation: { uk: "Neutrum у Akkusativ = як Nominativ: ein Brot.", de: "Neutrum у Akkusativ = як Nominativ: ein Brot." },
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
      hint: { uk: "Akkusativ feminin = eine", de: "" },
      explanation: { uk: "Feminin у Akkusativ не змінюється: eine Frau.", de: "Feminin у Akkusativ не змінюється: eine Frau." },
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
      hint: { uk: "Akkusativ mask.: den", de: "" },
      explanation: { uk: "Akkusativ maskulin: den Hund.", de: "Akkusativ maskulin: den Hund." },
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
      hint: { uk: "Akkusativ fem.: die", de: "" },
      explanation: { uk: "Akkusativ feminin не змінюється: die Katze.", de: "Akkusativ feminin не змінюється: die Katze." },
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
      hint: { uk: "Akkusativ neut.: das", de: "" },
      explanation: { uk: "Neutrum у Akkusativ: das Haus.", de: "Neutrum у Akkusativ: das Haus." },
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
      hint: { uk: "Apfel = maskulin", de: "der Apfel" },
      explanation: { uk: "Wir kaufen den Apfel.", de: "Wir kaufen den Apfel." },
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
      hint: { uk: "Buch = neutrum", de: "das Buch" },
      explanation: { uk: "Er liest das Buch.", de: "Er liest das Buch." },
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
      hint: { uk: "Schlüssel = maskulin", de: "der Schlüssel" },
      explanation: { uk: "Akkusativ: den Schlüssel.", de: "Akkusativ: den Schlüssel." },
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
      hint: { uk: "treffen + Akk", de: "treffen + Akk" },
      explanation: { uk: "Treffen → Akkusativ: den Lehrer.", de: "Treffen → Akkusativ: den Lehrer." },
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
      hint: { uk: "Idee (fem.)", de: "Idee (fem.)" },
      explanation: { uk: "Ich finde die Idee gut.", de: "Ich finde die Idee gut." },
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
      hint: { uk: "Musik = feminin", de: "die Musik" },
      explanation: { uk: "Er hört die Musik.", de: "Er hört die Musik." },
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
      hint: { uk: "Plural: die (Akk = die)", de: "" },
      explanation: { uk: "Plural у Akkusativ: die Kinder.", de: "Plural у Akkusativ: die Kinder." },
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
      hint: { uk: "Про себе", de: "" },
      explanation: { uk: "Коли говоримо про себе: Ich.", de: "Коли говоримо про себе: Ich." },
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
      hint: { uk: "До співрозмовника", de: "" },
      explanation: { uk: "Коли звертаємось до людини: Du.", de: "Коли звертаємось до людини: Du." },
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
      hint: { uk: "Maria = вона", de: "" },
      explanation: { uk: "Для Maria: Sie.", de: "Для Maria: Sie." },
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
      hint: { uk: "Buch = das", de: "das Buch" },
      explanation: { uk: "Buch (das) → es.", de: "Buch (das) → es." },
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
      hint: { uk: "вони", de: "" },
      explanation: { uk: "Max und Tom → Sie (вони).", de: "Max und Tom → Sie (вони)." },
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
      hint: { uk: "ми", de: "" },
      explanation: { uk: "Anna und ich → wir.", de: "Anna und ich → wir." },
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
      hint: { uk: "ви (множина)", de: "" },
      explanation: { uk: "Du und Tom → ihr.", de: "Du und Tom → ihr." },
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
      hint: { uk: "Питання про особу", de: "" },
      explanation: { uk: "Wer sind Sie? — Хто ви?", de: "Wer sind Sie? — Хто ви?" },
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
      hint: { uk: "звертання до співрозмовника", de: "" },
      explanation: { uk: "Kommst du mit? — Ти йдеш з нами?", de: "Kommst du mit? — Ти йдеш з нами?" },
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
      hint: { uk: "до групи людей", de: "" },
      explanation: { uk: "Kommt ihr auch? — Ви теж прийдете?", de: "Kommt ihr auch? — Ви теж прийдете?" },
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
      hint: { uk: "V2 правило", de: "" },
      explanation: { uk: "У простому реченні дієслово 2-ге: Heute mache ich Sport.", de: "У простому реченні дієслово 2-ге: Heute mache ich Sport." },
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
      hint: { uk: "wir + trinken", de: "wir + trinken" },
      explanation: { uk: "Am Morgen trinken wir Kaffee.", de: "Am Morgen trinken wir Kaffee." },
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
      hint: { uk: "sie (вона) + -t", de: "" },
      explanation: { uk: "In Berlin wohnt sie.", de: "In Berlin wohnt sie." },
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
      hint: { uk: "haben", de: "haben" },
      explanation: { uk: "Morgen habe ich keine Zeit.", de: "Morgen habe ich keine Zeit." },
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
      hint: { uk: "Питання: дієслово 1-ше", de: "" },
      explanation: { uk: "У yes/no питанні: Gehst du heute ins Kino?", de: "У yes/no питанні: Gehst du heute ins Kino?" },
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
      hint: { uk: "du + bist", de: "du + bist" },
      explanation: { uk: "Warum bist du so müde?", de: "Warum bist du so müde?" },
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
      hint: { uk: "es + ist", de: "es + ist" },
      explanation: { uk: "Heute ist es sehr kalt.", de: "Heute ist es sehr kalt." },
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
      hint: { uk: "ich + gehe", de: "ich + gehe" },
      explanation: { uk: "Nach der Schule gehe ich nach Hause.", de: "Nach der Schule gehe ich nach Hause." },
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
      hint: { uk: "Kinder = plural", de: "" },
      explanation: { uk: "Im Park spielen die Kinder.", de: "Im Park spielen die Kinder." },
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
      hint: { uk: "wir + treffen", de: "wir + treffen" },
      explanation: { uk: "Am Wochenende treffen wir oft Freunde.", de: "Am Wochenende treffen wir oft Freunde." },
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
      hint: { uk: "Як тебе звати?", de: "Name?" },
      explanation: { uk: "Wie heißt du? — Як тебе звати?", de: "Wie heißt du? — Як тебе звати?" },
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
      hint: { uk: "Звідки?", de: "Herkunft?" },
      explanation: { uk: "Woher kommst du? — Звідки ти?", de: "Woher kommst du? — Звідки ти?" },
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
      hint: { uk: "Де?", de: "Ort?" },
      explanation: { uk: "Wo wohnst du? — Де ти живеш?", de: "Wo wohnst du? — Де ти живеш?" },
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
      hint: { uk: "Що це?", de: "Was ist das?" },
      explanation: { uk: "Was ist das? — Що це?", de: "Was ist das? — Що це?" },
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
      hint: { uk: "Хто?", de: "Person?" },
      explanation: { uk: "Wer kommt heute? — Хто прийде сьогодні?", de: "Wer kommt heute? — Хто прийде сьогодні?" },
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
      hint: { uk: "Коли?", de: "" },
      explanation: { uk: "Wann beginnt der Film? — Коли починається фільм?", de: "Wann beginnt der Film? — Коли починається фільм?" },
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
      hint: { uk: "Чому?", de: "" },
      explanation: { uk: "Warum bist du heute zu spät? — Чому ти сьогодні запізнився?", de: "Warum bist du heute zu spät? — Чому ти сьогодні запізнився?" },
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
      hint: { uk: "Wie viel = скільки коштує", de: "" },
      explanation: { uk: "Wie viel kostet das? — Скільки це коштує?", de: "Wie viel kostet das? — Скільки це коштує?" },
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
      hint: { uk: "Wie lange = як довго", de: "" },
      explanation: { uk: "Wie lange dauert es? — Як довго це триває?", de: "Wie lange dauert es? — Як довго це триває?" },
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
      hint: { uk: "Куди?", de: "" },
      explanation: { uk: "Wohin gehst du gern? — Куди ти любиш ходити?", de: "Wohin gehst du gern? — Куди ти любиш ходити?" },
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
      hint: { uk: "не + прикметник", de: "" },
      explanation: { uk: "Nicht заперечує прикметник/дієслово: nicht müde.", de: "Nicht заперечує прикметник/дієслово: nicht müde." },
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
      hint: { uk: "Zeit (fem.)", de: "Zeit (fem.)" },
      explanation: { uk: "Kein/keine заперечує іменник: keine Zeit.", de: "Kein/keine заперечує іменник: keine Zeit." },
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
      hint: { uk: "Kaffee (mask.)", de: "Kaffee (mask.)" },
      explanation: { uk: "Kein + іменник (mask.): kein Kaffee.", de: "Kein + іменник (mask.): kein Kaffee." },
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
      hint: { uk: "Hunger (mask.) Akk", de: "Hunger (mask.) Akk" },
      explanation: { uk: "Hunger (mask.) часто як Akk: keinen Hunger.", de: "Hunger (mask.) часто як Akk: keinen Hunger." },
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
      hint: { uk: "заперечення дії", de: "" },
      explanation: { uk: "Заперечуємо дію/обставину: nicht ins Kino.", de: "Заперечуємо дію/обставину: nicht ins Kino." },
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
      hint: { uk: "Auto (neut.) → kein", de: "" },
      explanation: { uk: "Neutrum: kein Auto.", de: "Neutrum: kein Auto." },
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
      hint: { uk: "заперечення займенника", de: "" },
      explanation: { uk: "Nicht заперечує присвійний: nicht mein Problem.", de: "Nicht заперечує присвійний: nicht mein Problem." },
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
      hint: { uk: "Menschen = plural", de: "" },
      explanation: { uk: "Plural: keine Menschen.", de: "Plural: keine Menschen." },
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
      hint: { uk: "заперечення дієслова", de: "" },
      explanation: { uk: "Ich verstehe das nicht. (не розумію цього)", de: "Ich verstehe das nicht. (не розумію цього)" },
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
      hint: { uk: "Lust (fem.)", de: "Lust (fem.)" },
      explanation: { uk: "Keine Lust (фемінін).", de: "Keine Lust (фемінін)." },
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
      hint: { uk: "1,2,3", de: "" },
      explanation: { uk: "1–3: eins, zwei, drei.", de: "1–3: eins, zwei, drei." },
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
      hint: { uk: "10–12", de: "" },
      explanation: { uk: "10–12: zehn, elf, zwölf.", de: "10–12: zehn, elf, zwölf." },
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
      hint: { uk: "du + bist", de: "du + bist" },
      explanation: { uk: "Wie alt bist du?", de: "Wie alt bist du?" },
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
      hint: { uk: "20 = ...", de: "" },
      explanation: { uk: "20 = zwanzig.", de: "20 = zwanzig." },
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
      hint: { uk: "7+8", de: "7+8" },
      explanation: { uk: "7 + 8 = 15 → fünfzehn.", de: "7 + 8 = 15 → fünfzehn." },
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
      hint: { uk: "0–3", de: "" },
      explanation: { uk: "0–3: null, eins, zwei, drei.", de: "0–3: null, eins, zwei, drei." },
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
      hint: { uk: "12 = ...", de: "" },
      explanation: { uk: "12 = zwölf.", de: "12 = zwölf." },
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
      hint: { uk: "1 і 20", de: "" },
      explanation: { uk: "21 = ein-und-zwanzig.", de: "21 = ein-und-zwanzig." },
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
      hint: { uk: "5 і 30", de: "" },
      explanation: { uk: "35 = fünf-und-dreißig.", de: "35 = fünf-und-dreißig." },
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
      hint: { uk: "послідовність", de: "Reihe" },
      explanation: { uk: "Після 0-1-2 логічно 3.", de: "Після 0-1-2 логічно 3." },
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
      hint: { uk: "Котра година?", de: "Wie spät?" },
      explanation: { uk: "Wie spät ist es? — Котра година?", de: "Wie spät ist es? — Котра година?" },
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
      hint: { uk: "година", de: "" },
      explanation: { uk: "Es ist drei Uhr.", de: "Es ist drei Uhr." },
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
      hint: { uk: "точний час", de: "um … Uhr" },
      explanation: { uk: "Um + Uhrzeit: um 7 Uhr.", de: "Um + Uhrzeit: um 7 Uhr." },
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
      hint: { uk: "частина дня", de: "am Morgen/Abend" },
      explanation: { uk: "Am Morgen = вранці.", de: "Am Morgen = вранці." },
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
      hint: { uk: "пора року", de: "im Sommer/Winter" },
      explanation: { uk: "Im Sommer = влітку.", de: "Im Sommer = влітку." },
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
      hint: { uk: "день тижня", de: "Wochentag" },
      explanation: { uk: "Montag = понеділок.", de: "Montag = понеділок." },
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
      hint: { uk: "послідовність", de: "Reihe" },
      explanation: { uk: "Після Montag йде Dienstag.", de: "Після Montag йде Dienstag." },
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
      hint: { uk: "am Abend", de: "am Abend" },
      explanation: { uk: "Am Abend = ввечері.", de: "Am Abend = ввечері." },
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
      hint: { uk: "точний час", de: "um … Uhr" },
      explanation: { uk: "Um 18:00 = о 18:00.", de: "Um 18:00 = о 18:00." },
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
      hint: { uk: "am Wochenende", de: "am Wochenende" },
      explanation: { uk: "Am Wochenende = на вихідних.", de: "Am Wochenende = на вихідних." },
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
      hint: { uk: "Годинна стрілка між 7 та 8, хвилинна на 9", de: "" },
      explanation: { uk: "45 хвилин = Viertel vor наступної години", de: "45 хвилин = Viertel vor наступної години" },
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
      hint: { uk: "Годинна стрілка на 3, хвилинна на 3", de: "" },
      explanation: { uk: "15 хвилин = Viertel nach", de: "15 хвилин = Viertel nach" },
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
      hint: { uk: "Минутна стрілка на 6, годинна між 10 та 11", de: "" },
      explanation: { uk: "30 хвилин = halb наступної години", de: "30 хвилин = halb наступної години" },
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
      hint: { uk: "мама", de: "" },
      explanation: { uk: "Meine Mutter heißt Maria.", de: "Meine Mutter heißt Maria." },
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
      hint: { uk: "тато", de: "" },
      explanation: { uk: "Das ist mein Vater.", de: "Das ist mein Vater." },
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
      hint: { uk: "множина", de: "" },
      explanation: { uk: "Zwei → множина: Brüder.", de: "Zwei → множина: Brüder." },
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
      hint: { uk: "сестра", de: "" },
      explanation: { uk: "Meine Schwester ist sieben Jahre alt.", de: "Meine Schwester ist sieben Jahre alt." },
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
      hint: { uk: "батьки", de: "" },
      explanation: { uk: "Das sind meine Eltern.", de: "Das sind meine Eltern." },
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
      hint: { uk: "родинні звʼязки", de: "" },
      explanation: { uk: "Oma = мама твоєї мами/тата.", de: "Oma = мама твоєї мами/тата." },
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
      hint: { uk: "onkel", de: "onkel" },
      explanation: { uk: "Onkel = брат батька/матері.", de: "Onkel = брат батька/матері." },
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
      hint: { uk: "female partner", de: "female partner" },
      explanation: { uk: "Freundin = дівчина/подруга (жіноча форма).", de: "Freundin = дівчина/подруга (жіноча форма)." },
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
      hint: { uk: "Großeltern = plural", de: "" },
      explanation: { uk: "Plural: unsere Großeltern.", de: "Plural: unsere Großeltern." },
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
      hint: { uk: "Kind = neutrum", de: "das Kind" },
      explanation: { uk: "Kind (das) → ein Kind.", de: "Kind (das) → ein Kind." },
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
      hint: { uk: "найпростіше слово", de: "" },
      explanation: { uk: "Trinken → напої. Wasser = вода.", de: "Trinken → напої. Wasser = вода." },
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
      hint: { uk: "їжа", de: "" },
      explanation: { uk: "Essen → їжа. Brot = хліб.", de: "Essen → їжа. Brot = хліб." },
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
      hint: { uk: "питання в кафе", de: "" },
      explanation: { uk: "Möchtest du Tee? — Хочеш чаю?", de: "Möchtest du Tee? — Хочеш чаю?" },
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
      hint: { uk: "про смак", de: "" },
      explanation: { uk: "Schmecken = смакувати: Das Essen schmeckt gut.", de: "Schmecken = смакувати: Das Essen schmeckt gut." },
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
      hint: { uk: "Apfel (mask.) Akk", de: "Apfel (mask.) Akk" },
      explanation: { uk: "Akk mask.: einen Apfel.", de: "Akk mask.: einen Apfel." },
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
      hint: { uk: "Kaffee (mask.)", de: "Kaffee (mask.)" },
      explanation: { uk: "Ich hätte gern einen Kaffee. (ввічливо)", de: "Ich hätte gern einen Kaffee. (ввічливо)" },
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
      hint: { uk: "Brot = neutrum", de: "das Brot" },
      explanation: { uk: "Ein Brot (neutrum).", de: "Ein Brot (neutrum)." },
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
      hint: { uk: "Salz = das", de: "das Salz" },
      explanation: { uk: "Das Salz (neutrum).", de: "Das Salz (neutrum)." },
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
      hint: { uk: "Akk mask.", de: "Akk mask." },
      explanation: { uk: "Ich esse den Käse. (Käse часто маск.)", de: "Ich esse den Käse. (Käse часто маск.)" },
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
      hint: { uk: "альтернатива напою", de: "" },
      explanation: { uk: "Sondern = а навпаки: ... sondern Tee.", de: "Sondern = а навпаки: ... sondern Tee." },
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
      hint: { uk: "небо", de: "" },
      explanation: { uk: "Der Himmel ist blau.", de: "Der Himmel ist blau." },
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
      hint: { uk: "сонце", de: "" },
      explanation: { uk: "Die Sonne ist gelb.", de: "Die Sonne ist gelb." },
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
      hint: { uk: "трава", de: "" },
      explanation: { uk: "Das Gras ist grün.", de: "Das Gras ist grün." },
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
      hint: { uk: "сніг", de: "" },
      explanation: { uk: "Schnee ist weiß.", de: "Schnee ist weiß." },
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
      hint: { uk: "ніч", de: "" },
      explanation: { uk: "Die Nacht ist schwarz.", de: "Die Nacht ist schwarz." },
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
      hint: { uk: "колір", de: "" },
      explanation: { uk: "Weiß = білий.", de: "Weiß = білий." },
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
      hint: { uk: "яблуко", de: "" },
      explanation: { uk: "Der Apfel ist rot. (часто так кажуть)", de: "Der Apfel ist rot. (часто так кажуть)" },
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
      hint: { uk: "як іменник", de: "" },
      explanation: { uk: "Коли колір як іменник → з великої: das Grün / Grün.", de: "Коли колір як іменник → з великої: das Grün / Grün." },
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
      hint: { uk: "сірий", de: "" },
      explanation: { uk: "Grau = сірий.", de: "Grau = сірий." },
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
      hint: { uk: "violett/lila", de: "violett/lila" },
      explanation: { uk: "Lila = фіолетовий (розмовно).", de: "Lila = фіолетовий (розмовно)." },
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
      hint: { uk: "де живуть", de: "" },
      explanation: { uk: "Ich wohne in einem Haus.", de: "Ich wohne in einem Haus." },
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
      hint: { uk: "кімната", de: "" },
      explanation: { uk: "Im Zimmer (кімната).", de: "Im Zimmer (кімната)." },
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
      hint: { uk: "меблі", de: "" },
      explanation: { uk: "Правильно: Der Tisch steht in der Küche.", de: "Правильно: Der Tisch steht in der Küche." },
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
      hint: { uk: "ванна", de: "" },
      explanation: { uk: "Das Waschbecken ist im Bad.", de: "Das Waschbecken ist im Bad." },
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
      hint: { uk: "вітальня", de: "" },
      explanation: { uk: "Wir essen im Wohnzimmer.", de: "Wir essen im Wohnzimmer." },
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
      hint: { uk: "стеля", de: "" },
      explanation: { uk: "Decke = стеля/ковдра (тут стеля).", de: "Decke = стеля/ковдра (тут стеля)." },
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
      hint: { uk: "відкрити", de: "" },
      explanation: { uk: "Fenster aufmachen = відкрити вікно.", de: "Fenster aufmachen = відкрити вікно." },
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
      hint: { uk: "auf = на", de: "" },
      explanation: { uk: "Auf dem Tisch = на столі.", de: "Auf dem Tisch = на столі." },
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
      hint: { uk: "in = в", de: "" },
      explanation: { uk: "In der Tasche = в сумці.", de: "In der Tasche = в сумці." },
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
      hint: { uk: "an = біля/при", de: "" },
      explanation: { uk: "An der Wand = біля стіни/при стіні.", de: "An der Wand = біля стіни/при стіні." },
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
      hint: { uk: "звук", de: "" },
      explanation: { uk: "Der Hund bellt. (собака гавкає)", de: "Der Hund bellt. (собака гавкає)" },
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
      hint: { uk: "звук", de: "" },
      explanation: { uk: "Die Katze miaut. (кішка нявкає)", de: "Die Katze miaut. (кішка нявкає)" },
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
      hint: { uk: "літає", de: "" },
      explanation: { uk: "Правильно: Der Vogel fliegt.", de: "Правильно: Der Vogel fliegt." },
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
      hint: { uk: "плаває", de: "" },
      explanation: { uk: "Der Fisch schwimmt.", de: "Der Fisch schwimmt." },
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
      hint: { uk: "тварина", de: "" },
      explanation: { uk: "Das Pferd läuft schnell.", de: "Das Pferd läuft schnell." },
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
      hint: { uk: "Hund (mask.)", de: "Hund (mask.)" },
      explanation: { uk: "Ich habe einen Hund.", de: "Ich habe einen Hund." },
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
      hint: { uk: "на дивані", de: "" },
      explanation: { uk: "Auf dem Sofa = на дивані.", de: "Auf dem Sofa = на дивані." },
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
      hint: { uk: "всередині місця", de: "" },
      explanation: { uk: "Im Garten = в саду.", de: "Im Garten = в саду." },
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
      hint: { uk: "plural Akk", de: "plural Akk" },
      explanation: { uk: "Plural Akk: die Vögel.", de: "Plural Akk: die Vögel." },
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
      hint: { uk: "Ente (die)", de: "Ente (die)" },
      explanation: { uk: "Die Ente → eine Ente.", de: "Die Ente → eine Ente." },
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
      hint: { uk: "одяг", de: "" },
      explanation: { uk: "Ich trage eine Jacke.", de: "Ich trage eine Jacke." },
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
      hint: { uk: "ein + neutrum", de: "ein + neutrum" },
      explanation: { uk: "Das Hemd → ein Hemd.", de: "Das Hemd → ein Hemd." },
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
      hint: { uk: "колір", de: "" },
      explanation: { uk: "Das T-Shirt ist blau.", de: "Das T-Shirt ist blau." },
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
      hint: { uk: "штани", de: "" },
      explanation: { uk: "Er trägt eine Hose.", de: "Er trägt eine Hose." },
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
      hint: { uk: "сукня", de: "" },
      explanation: { uk: "Sie trägt ein Kleid.", de: "Sie trägt ein Kleid." },
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
      hint: { uk: "plural", de: "plural" },
      explanation: { uk: "Die Schuhe sind neu.", de: "Die Schuhe sind neu." },
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
      hint: { uk: "Jacke (die)", de: "Jacke (die)" },
      explanation: { uk: "Akk fem.: eine Jacke.", de: "Akk fem.: eine Jacke." },
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
      hint: { uk: "Mantel = mask", de: "" },
      explanation: { uk: "Akk mask.: den Mantel.", de: "Akk mask.: den Mantel." },
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
      hint: { uk: "plural", de: "plural" },
      explanation: { uk: "Plural: keine Schuhe.", de: "Plural: keine Schuhe." },
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
      hint: { uk: "на стільці", de: "" },
      explanation: { uk: "Auf dem Stuhl = на стільці.", de: "Auf dem Stuhl = на стільці." },
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
      hint: { uk: "сонце", de: "" },
      explanation: { uk: "Heute scheint die Sonne.", de: "Heute scheint die Sonne." },
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
      hint: { uk: "дощ", de: "" },
      explanation: { uk: "Es regnet.", de: "Es regnet." },
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
      hint: { uk: "зима", de: "" },
      explanation: { uk: "Im Winter schneit es.", de: "Im Winter schneit es." },
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
      hint: { uk: "температура", de: "" },
      explanation: { uk: "Es ist sehr kalt.", de: "Es ist sehr kalt." },
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
      hint: { uk: "погода", de: "" },
      explanation: { uk: "Das Wetter ist gut.", de: "Das Wetter ist gut." },
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
      hint: { uk: "сонце", de: "" },
      explanation: { uk: "Sonnig = сонячно.", de: "Sonnig = сонячно." },
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
      hint: { uk: "вітер", de: "" },
      explanation: { uk: "Windig = вітряно.", de: "Windig = вітряно." },
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
      hint: { uk: "прогноз", de: "" },
      explanation: { uk: "Warm = тепло.", de: "Warm = тепло." },
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
      hint: { uk: "порівняння", de: "" },
      explanation: { uk: "Порівняння: kalt → kälter.", de: "Порівняння: kalt → kälter." },
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
      hint: { uk: "дощ", de: "" },
      explanation: { uk: "Regenschirm = парасолька.", de: "Regenschirm = парасолька." },
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
      hint: { uk: "ich + -e", de: "ich + -e" },
      explanation: { uk: "Ich spiele ...", de: "Ich spiele ..." },
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
      hint: { uk: "sie (вона) + -t", de: "" },
      explanation: { uk: "Sie hört Musik.", de: "Sie hört Musik." },
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
      hint: { uk: "er + -t", de: "er + -t" },
      explanation: { uk: "Er liest ein Buch.", de: "Er liest ein Buch." },
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
      hint: { uk: "wir = infinitiv", de: "" },
      explanation: { uk: "Wir sehen fern.", de: "Wir sehen fern." },
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
      hint: { uk: "ich", de: "ich" },
      explanation: { uk: "Я: ich spiele.", de: "Я: ich spiele." },
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
      hint: { uk: "ich + gehe", de: "ich + gehe" },
      explanation: { uk: "Ich gehe schwimmen.", de: "Ich gehe schwimmen." },
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
      hint: { uk: "er + -t", de: "er + -t" },
      explanation: { uk: "Er macht Fitness.", de: "Er macht Fitness." },
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
      hint: { uk: "wir", de: "wir" },
      explanation: { uk: "Wir starten heute ein Spiel.", de: "Wir starten heute ein Spiel." },
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
      hint: { uk: "ich + -e", de: "ich + -e" },
      explanation: { uk: "Ich schaue gern ...", de: "Ich schaue gern ..." },
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
      hint: { uk: "ihr + -t", de: "ihr + -t" },
      explanation: { uk: "Ihr spielt ...", de: "Ihr spielt ..." },
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
      hint: { uk: "місто", de: "" },
      explanation: { uk: "In einer Stadt = у місті.", de: "In einer Stadt = у місті." },
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
      hint: { uk: "місце", de: "" },
      explanation: { uk: "Da ist ein Park. (Там парк)", de: "Da ist ein Park. (Там парк)" },
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
      hint: { uk: "Bus = maskulin", de: "der Bus" },
      explanation: { uk: "Правильно: Der Bus fährt ...", de: "Правильно: Der Bus fährt ..." },
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
      hint: { uk: "магазин", de: "" },
      explanation: { uk: "Im Supermarkt einkaufen = купувати в супермаркеті.", de: "Im Supermarkt einkaufen = купувати в супермаркеті." },
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
      hint: { uk: "shop", de: "shop" },
      explanation: { uk: "Das Geschäft ist groß.", de: "Das Geschäft ist groß." },
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
      hint: { uk: "mit + Dativ", de: "mit der/mit dem" },
      explanation: { uk: "Mit + Dativ: mit der U-Bahn.", de: "Mit + Dativ: mit der U-Bahn." },
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
      hint: { uk: "Bahnhof = der", de: "" },
      explanation: { uk: "Zu + Dativ: zum Bahnhof (zu dem).", de: "Zu + Dativ: zum Bahnhof (zu dem)." },
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
      hint: { uk: "Bäckerei = feminin", de: "die Bäckerei" },
      explanation: { uk: "Die Bäckerei (fem.) → die nächste Bäckerei.", de: "Die Bäckerei (fem.) → die nächste Bäckerei." },
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
      hint: { uk: "einsteigen in + Akk", de: "in den Bus einsteigen" },
      explanation: { uk: "Einsteigen: in den Bus (Akk).", de: "Einsteigen: in den Bus (Akk)." },
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
      hint: { uk: "am = an dem", de: "am …" },
      explanation: { uk: "Am Hauptbahnhof = біля головного вокзалу.", de: "Am Hauptbahnhof = біля головного вокзалу." },
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