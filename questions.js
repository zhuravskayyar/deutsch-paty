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
  {
    id: 10,
    type: "multiple_choice",
    question: "Die Reise war ___ .",
    options: ["schön", "teuer", "lang", "alle"],
    correct: "alle",
    explanation: "Всі відповіді можливі (гарна, дорога, довга)",
    hint: "Подорож була...",
    points: 2
  }
];

grammarQuestions.health = [
  {
    id: 1,
    type: "multiple_choice",
    question: "Ich bin ___ .",
    options: ["krank", "gesund", "müde", "alle"],
    correct: "alle",
    explanation: "Всі відповіді можливі (хворий, здоровий, втомлений)",
    hint: "Я...",
    points: 2
  },
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
    id: 6,
    type: "multiple_choice",
    question: "Ich habe ___ .",
    options: ["Fieber", "Hunger", "Durst", "alle"],
    correct: "alle",
    explanation: "Всі відповіді можливі (гарячку, голод, спрагу)",
    hint: "У мене...",
    points: 2
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
  {
    id: 10,
    type: "multiple_choice",
    question: "Ich trinke ___ Tee.",
    options: ["heiß", "kalten", "warmen", "alle"],
    correct: "alle",
    explanation: "Всі відповіді можливі (гарячий, холодний, теплий чай)",
    hint: "Я п'ю... чай.",
    points: 2
  }
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
    id: 3,
    type: "multiple_choice",
    question: "Ich bin ___ .",
    options: ["Arbeiter", "Lehrer", "Student", "alle"],
    correct: "alle",
    explanation: "Всі відповіді можливі (робітник, вчитель, студент)",
    hint: "Я...",
    points: 2
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Die ___ beginnt um 9 Uhr.",
    options: ["Arbeit", "Schule", "Pause", "alle"],
    correct: "alle",
    explanation: "Всі відповіді можливі (робота, школа, перерва)",
    hint: "... починається о 9 годині.",
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
    id: 6,
    type: "multiple_choice",
    question: "Ich habe ___ .",
    options: ["Kollegen", "Freunde", "Familie", "alle"],
    correct: "alle",
    explanation: "Всі відповіді можливі (колег, друзів, сім'ю)",
    hint: "У мене є...",
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
      name: theme.replace('_', ' '),
      count: grammarQuestions[theme].length,
      description: getThemeDescription(theme)
    });
  }
  return themes.sort((a, b) => a.name.localeCompare(b.name));
}

// Функція для отримання випадкових питань з різних тем
function getRandomQuestions(count = 10) {
  const allQuestions = [];
  for (const theme in grammarQuestions) {
    allQuestions.push(...grammarQuestions[theme]);
  }
  
  // Перемішуємо питання
  const shuffled = allQuestions.sort(() => Math.random() - 0.5);
  
  // Повертаємо потрібну кількість
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Статистика
console.log(`✅ Завантажено ${Object.keys(grammarQuestions).length} тем`);
let totalQuestions = 0;
for (const theme in grammarQuestions) {
  totalQuestions += grammarQuestions[theme].length;
}
console.log(`📚 Всього питань: ${totalQuestions}`);
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
  window.getThemesWithDescriptions = getThemesWithDescriptions;
  window.getRandomQuestions = getRandomQuestions;
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
  };
}