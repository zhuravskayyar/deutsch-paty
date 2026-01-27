// questions.js - Нормальні питання для Deutsch Party
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
    {
      id: 5,
      type: "multiple_choice",
      question: "Was machst du in deiner Freizeit? Ich ___ .",
      options: ["lese", "spiele", "schwimme", "alle"],
      correct: "alle",
      explanation: "Можливі всі варіанти (читаю, граю, плаваю)",
      hint: "Що ти робиш у вільний час?",
      points: 2
    }
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

// Допоміжна функція для отримання випадкового питання з теми
function getRandomQuestionFromTheme(theme, usedQuestions = new Set()) {
  if (!grammarQuestions[theme] || grammarQuestions[theme].length === 0) {
    return null;
  }
  
  const availableQuestions = grammarQuestions[theme].filter(q => !usedQuestions.has(q.id));
  
  // Якщо всі питання використані, очищуємо список
  if (availableQuestions.length === 0) {
    usedQuestions.clear();
    return grammarQuestions[theme][Math.floor(Math.random() * grammarQuestions[theme].length)];
  }
  
  return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
}

// Функція для отримання всіх тем
function getAllThemes() {
  return Object.keys(grammarQuestions);
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
}

// Експорт для Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    grammarQuestions,
    getRandomQuestionFromTheme,
    getAllThemes,
    getQuestionCountForTheme
  };
}