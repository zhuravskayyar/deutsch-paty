const DUEL_SETTINGS = {
  combo: {
    getMultiplier(streak) {
      if (streak >= 8) return 2.0;
      if (streak >= 5) return 1.5;
      if (streak >= 3) return 1.2;
      return 1.0;
    }
  },
  time: {
    byDifficulty: {
      easy: 15,
      normal: 20,
      hard: 25
    }
  }
};

const POINTS_BY_DIFFICULTY = {
  easy: 1,
  normal: 2,
  hard: 3
};

function buildExplanationDe(correct, hintDe) {
  return `Richtig: ${correct}. ${hintDe}`;
}

function buildExplanationUk(correct, hintUk) {
  return `Правильна відповідь: ${correct}. ${hintUk}`;
}

function makeQuestionBuilder(meta) {
  let nextId = 1;

  return function buildQuestion(spec) {
    const difficulty = spec.difficulty || "easy";
    const correct = spec.correct;
    const timeLimitSec = spec.timeLimitSec || DUEL_SETTINGS.time.byDifficulty[difficulty] || 15;
    const explanationDe = spec.explanationDe || buildExplanationDe(correct, spec.hintDe);
    const explanationUk = spec.explanationUk || buildExplanationUk(correct, spec.hintUk);

    return {
      id: nextId++,
      type: "multiple_choice",
      level: "A1",
      difficulty,
      timeLimitSec,
      points: spec.points || POINTS_BY_DIFFICULTY[difficulty] || 1,
      book: meta.book,
      lektion: meta.lektion,
      theme: meta.label,
      skill: spec.skill,
      question: spec.question,
      options: spec.options,
      correct,
      hint: {
        de: spec.hintDe,
        uk: spec.hintUk
      },
      explanation: {
        de: explanationDe,
        uk: explanationUk
      },
      teacherExplanation: {
        de: spec.teacherDe || explanationDe,
        uk: spec.teacherUk || explanationUk
      }
    };
  };
}

function mc(skill, question, options, correct, hintDe, hintUk, difficulty = (skill === "Lesen" ? "normal" : "easy")) {
  return { skill, question, options, correct, hintDe, hintUk, difficulty };
}

function tf(skill, question, isTrue, hintDe, hintUk, difficulty = "normal") {
  return {
    skill,
    question,
    options: ["Richtig", "Falsch"],
    correct: isTrue ? "Richtig" : "Falsch",
    hintDe,
    hintUk,
    difficulty
  };
}

function createTheme(key, label, book, lektion, specs) {
  const build = makeQuestionBuilder({ label, book, lektion });
  return [key, specs.map(build)];
}

const lessonThemeEntries = [];

lessonThemeEntries.push(createTheme("lektion_01_hallo", "A1.1 Lektion 1: Hallo und Kennenlernen", "Schritte plus Neu 1", 1, [
  mc("Grammatik", "Wie ___ dein Name?", ["bist", "ist", "bin", "seid"], "ist", "Bei 'dein Name' steht die 3. Person Singular: 'ist'.", "Для 'dein Name' потрібна 3-тя особа однини: 'ist'."),
  mc("Wortschatz", "Guten ___, Frau Berger!", ["Nacht", "Tag", "Name", "Morgen"], "Tag", "'Guten Tag' ist eine formelle Begrüßung.", "'Guten Tag' — це офіційне привітання."),
  mc("Grammatik", "Wer ___ das?", ["ist", "bin", "bist", "sind"], "ist", "Bei 'Wer ... das?' benutzt man 'ist'.", "У питанні 'Wer ... das?' вживаємо 'ist'."),
  mc("Wortschatz", "Eins, zwei, ___, vier.", ["elf", "drei", "acht", "null"], "drei", "Nach zwei kommt drei.", "Після zwei йде drei."),
  mc("Lesen", "Wie geht es Ihnen? - ___, danke.", ["Tschüss", "Sehr gut", "Name", "Guten Abend"], "Sehr gut", "Eine freundliche positive Antwort ist 'Sehr gut, danke'.", "Природна позитивна відповідь: 'Sehr gut, danke'."),
  mc("Grammatik", "Ich ___ Paco.", ["bin", "bist", "ist", "seid"], "bin", "Mit 'ich' nimmt man beim Verb 'sein' die Form 'bin'.", "З 'ich' дієслово 'sein' має форму 'bin'."),
  mc("Wortschatz", "Auf ___!", ["Wiedersehen", "Abend", "Deutsch", "Hallo"], "Wiedersehen", "'Auf Wiedersehen' ist eine formelle Verabschiedung.", "'Auf Wiedersehen' — це офіційне прощання."),
  tf("Lesen", "\"Guten Morgen\" sagt man am Abend.", false, "'Guten Morgen' benutzt man morgens, nicht am Abend.", "'Guten Morgen' вживають зранку, а не ввечері."),
  mc("Lesen", "Lies: \"Hallo, ich heiße Mia und komme aus Köln.\" Was stimmt?", ["Sie heißt Mia.", "Sie kommt aus Wien.", "Sie heißt Köln.", "Sie kommt aus Bern."], "Sie heißt Mia.", "Im Text steht direkt: 'ich heiße Mia'.", "У тексті прямо сказано: 'ich heiße Mia'."),
  mc("Wortschatz", "Welche Zahl passt? 17 = ___", ["siebzehn", "siebenzig", "siebzehnte", "sieben"], "siebzehn", "Die Zahl 17 schreibt man 'siebzehn'.", "Число 17 німецькою — 'siebzehn'.")
]));

lessonThemeEntries.push(createTheme("lektion_02_herkunft", "A1.1 Lektion 2: Herkunft und Sprachen", "Schritte plus Neu 1", 2, [
  mc("Grammatik", "Woher ___ du?", ["komme", "kommt", "kommst", "kommen"], "kommst", "Mit 'du' hat das Verb die Endung '-st'.", "З 'du' дієслово має закінчення '-st'."),
  mc("Grammatik", "Ich ___ aus der Ukraine.", ["komme", "kommst", "kommt", "kommen"], "komme", "Mit 'ich' hat das Verb meistens die Endung '-e'.", "З 'ich' дієслово зазвичай має закінчення '-e'."),
  mc("Wortschatz", "Was sprichst du? - Ich spreche ___.", ["Deutschland", "Deutsch", "Deutscher", "Deutschs"], "Deutsch", "Für die Sprache sagt man 'Deutsch'.", "Назва мови тут — 'Deutsch'."),
  mc("Grammatik", "Wo ___ Sie? - In Berlin.", ["wohne", "wohnst", "wohnt", "wohnen"], "wohnen", "Die Höflichkeitsform 'Sie' nimmt die Verbform wie im Plural: 'wohnen'.", "Ввічлива форма 'Sie' вживає дієслово як у множині: 'wohnen'."),
  mc("Grammatik", "___ wohnst du? - In Kyjiw.", ["Wo", "Woher", "Wer", "Wie"], "Wo", "Mit 'Wo?' fragt man nach dem Ort.", "'Wo?' питає про місце."),
  mc("Grammatik", "Sie ___ in München.", ["wohne", "wohnt", "wohnen", "wohnst"], "wohnt", "Bei 'sie' (Singular) steht die Endung '-t'.", "Для 'sie' в однині вживаємо закінчення '-t'."),
  mc("Wortschatz", "Bist du verheiratet? - Nein, ich bin ___.", ["ledig", "Stadt", "Name", "Land"], "ledig", "'Ledig' bedeutet: nicht verheiratet.", "'Ledig' означає: не одружений / не заміжня."),
  tf("Lesen", "\"Ich bin Single\" bedeutet: Ich habe keinen Partner.", true, "'Single' heißt: ohne Partner oder Partnerin.", "'Single' означає: без партнера / партнерки."),
  mc("Lesen", "Lies: \"Ali wohnt in Bonn und spricht Arabisch und Deutsch.\" Was stimmt?", ["Er wohnt in Bonn.", "Er spricht nur Deutsch.", "Er wohnt in Bern.", "Er spricht Englisch."], "Er wohnt in Bonn.", "Im Text steht: 'Ali wohnt in Bonn'.", "У тексті сказано: 'Ali wohnt in Bonn'."),
  mc("Lesen", "Welche Frage passt? \"___? - Aus Spanien.\"", ["Wie heißt du", "Woher kommst du", "Wo wohnst du", "Wie alt bist du"], "Woher kommst du", "'Aus Spanien' beantwortet die Frage nach der Herkunft.", "'Aus Spanien' відповідає на питання про походження.")
]));

lessonThemeEntries.push(createTheme("lektion_03_essen", "A1.1 Lektion 3: Essen und Trinken", "Schritte plus Neu 1", 3, [
  mc("Grammatik", "Das ist ___ Apfel.", ["ein", "eine", "keine", "einem"], "ein", "'Apfel' ist maskulin: 'der Apfel', darum hier 'ein'.", "'Apfel' чоловічого роду: 'der Apfel', тому тут 'ein'."),
  mc("Grammatik", "Das ist ___ Banane.", ["ein", "eine", "einer", "kein"], "eine", "'Banane' ist feminin: 'die Banane', darum 'eine'.", "'Banane' жіночого роду: 'die Banane', тому 'eine'."),
  mc("Grammatik", "Das ist kein Brot, das ist ___ Ei.", ["ein", "eine", "kein", "keine"], "ein", "'Ei' ist neutral: 'das Ei', darum 'ein'.", "'Ei' середнього роду: 'das Ei', тому 'ein'."),
  mc("Grammatik", "Ich habe ___ Hunger.", ["nicht", "keinen", "keine", "kein"], "keinen", "'Hunger' ist maskulin; in der Verneinung im Akkusativ: 'keinen Hunger'.", "'Hunger' чоловічого роду; у знахідному відмінку із запереченням: 'keinen Hunger'."),
  mc("Wortschatz", "Was kostet das? - Zwei ___.", ["Preis", "Euro", "Geld", "Centimeter"], "Euro", "Die passende Währung ist hier 'Euro'.", "Тут потрібна назва валюти — 'Euro'."),
  mc("Wortschatz", "Möchten Sie etwas trinken? - Ja, einen ___ bitte.", ["Apfel", "Kaffee", "Kuchen", "Salat"], "Kaffee", "'Kaffee' ist ein Getränk.", "'Kaffee' — це напій."),
  mc("Grammatik", "Wie ist der Plural von 'das Ei'?", ["die Eis", "die Eier", "die Eiern", "die Eie"], "die Eier", "Der korrekte Plural ist 'die Eier'.", "Правильна множина — 'die Eier'."),
  mc("Grammatik", "Das sind ___ Orangen.", ["ein", "eine", "kein Artikel", "keine"], "kein Artikel", "Im Plural benutzt man keinen unbestimmten Artikel.", "У множині неозначений артикль не вживається."),
  mc("Wortschatz", "Ich brauche Schokolade. Ich gehe in den ___.", ["Supermarkt", "Bank", "Kino", "Park"], "Supermarkt", "Lebensmittel kauft man im Supermarkt.", "Продукти купують у супермаркеті."),
  tf("Lesen", "\"Die Banane\" ist maskulin.", false, "'Banane' ist feminin: die Banane.", "'Banane' жіночого роду: die Banane.")
]));

lessonThemeEntries.push(createTheme("lektion_04_alltag_uhrzeit", "A1.1 Lektion 4: Alltag und Uhrzeit", "Schritte plus Neu 1", 4, [
  mc("Wortschatz", "Der Deutschkurs beginnt um acht ___.", ["Tag", "Uhr", "Zeit", "Minute"], "Uhr", "Bei einer genauen Uhrzeit sagt man 'um acht Uhr'.", "Для точної години кажуть 'um acht Uhr'."),
  mc("Wortschatz", "Es ist 14:30 Uhr. Auf Deutsch sagt man: ___", ["halb zwei", "halb drei", "Viertel vor drei", "zwei Uhr"], "halb drei", "14:30 ist auf Deutsch 'halb drei'.", "14:30 німецькою — 'halb drei'.", "hard"),
  mc("Wortschatz", "Was kommt nach Dienstag?", ["Montag", "Mittwoch", "Freitag", "Sonntag"], "Mittwoch", "Nach Dienstag kommt Mittwoch.", "Після Dienstag йде Mittwoch."),
  mc("Grammatik", "Ich stehe um sechs Uhr ___.", ["auf", "an", "mit", "zu"], "auf", "Das trennbare Verb heißt 'aufstehen'.", "Це відокремлюване дієслово 'aufstehen'."),
  mc("Wortschatz", "07:15 Uhr ist ___", ["Viertel nach sieben", "halb sieben", "Viertel vor sieben", "sieben Uhr"], "Viertel nach sieben", "15 Minuten nach sieben = Viertel nach sieben.", "15 хвилин після сьомої = Viertel nach sieben."),
  mc("Wortschatz", "Am ___ habe ich frei.", ["Sonntag", "Stuhl", "Morgen", "Haus"], "Sonntag", "'Am Sonntag' ist eine typische Zeitangabe für einen Wochentag.", "'Am Sonntag' — типова часова вказівка для дня тижня."),
  mc("Lesen", "Lies: \"Der Kurs ist am Montag und am Mittwoch um 18 Uhr.\" Wann ist der Kurs?", ["Am Montag und am Mittwoch", "Nur am Dienstag", "Jeden Morgen um acht", "Am Freitag"], "Am Montag und am Mittwoch", "Im Text stehen genau zwei Tage: Montag und Mittwoch.", "У тексті прямо названо два дні: Montag і Mittwoch."),
  tf("Lesen", "\"Am Freitag\" ist eine Uhrzeit.", false, "'Am Freitag' ist ein Wochentag, keine Uhrzeit.", "'Am Freitag' — це день тижня, а не точна година."),
  mc("Grammatik", "Heute ___ ich keine Zeit.", ["hast", "habe", "haben", "hat"], "habe", "Mit 'ich' heißt es 'ich habe'.", "З 'ich' вживаємо 'ich habe'."),
  mc("Wortschatz", "Um 21 Uhr sage ich meistens: ___", ["Gute Nacht", "Guten Morgen", "Hallo", "Tschüsschen"], "Gute Nacht", "Spät am Abend sagt man oft 'Gute Nacht'.", "Пізно ввечері часто кажуть 'Gute Nacht'.")
]));

lessonThemeEntries.push(createTheme("lektion_05_familie", "A1.1 Lektion 5: Familie und Freunde", "Schritte plus Neu 1", 5, [
  mc("Grammatik", "Das ist ___ Bruder.", ["mein", "meine", "meinen", "meinem"], "mein", "'Bruder' ist maskulin im Nominativ: 'mein Bruder'.", "'Bruder' — чоловічий рід у називному: 'mein Bruder'."),
  mc("Grammatik", "Anna hat zwei Kinder. Das sind ___ Kinder.", ["ihr", "ihre", "ihren", "ihrem"], "ihre", "Im Plural im Nominativ heißt es 'ihre Kinder'.", "У множині в називному: 'ihre Kinder'."),
  mc("Wortschatz", "Wer ist die Mutter von deinem Vater?", ["die Tante", "die Schwester", "die Großmutter", "die Cousine"], "die Großmutter", "Die Mutter des Vaters ist die Großmutter.", "Мати батька — це бабуся, die Großmutter."),
  mc("Wortschatz", "Mein Bruder ist 10 und ich bin 18. Mein Bruder ist ___.", ["älter", "jünger", "verheiratet", "ledig"], "jünger", "10 Jahre ist weniger als 18, also ist er jünger.", "10 років менше за 18, отже він 'jünger'."),
  mc("Lesen", "Lies: \"Julia lebt mit ihrem Mann und ihrer Tochter in Graz.\" Wer lebt mit Julia?", ["Ihr Mann und ihre Tochter", "Nur ihre Tochter", "Ihre Eltern", "Ihr Bruder"], "Ihr Mann und ihre Tochter", "Im Text stehen beide Personen direkt.", "У тексті прямо названо обох: чоловік і донька."),
  tf("Lesen", "\"Eltern\" ist Singular.", false, "'Eltern' ist ein Pluralwort.", "'Eltern' — це множина."),
  mc("Grammatik", "Das sind meine Eltern. ___ wohnen in Lwiw.", ["Er", "Sie", "Es", "Ihr"], "Sie", "Für 'meine Eltern' benutzt man das Pronomen 'sie'.", "Для 'meine Eltern' вживаємо займенник 'sie'."),
  mc("Wortschatz", "Die Schwester von meiner Mutter ist meine ___.", ["Tante", "Cousine", "Nichte", "Tochter"], "Tante", "Die Schwester der Mutter heißt 'Tante'.", "Сестра мами — це 'Tante'."),
  mc("Grammatik", "Ich habe einen Bruder, aber ___ Schwester.", ["nicht", "keinen", "keine", "kein"], "keine", "'Schwester' ist feminin: 'keine Schwester'.", "'Schwester' — жіночого роду, тому 'keine Schwester'."),
  mc("Wortschatz", "Tom ist der Sohn meiner Eltern. Tom ist mein ___.", ["Onkel", "Großvater", "Bruder", "Vater"], "Bruder", "Der Sohn derselben Eltern ist der Bruder.", "Син тих самих батьків — це брат, Bruder.")
]));

lessonThemeEntries.push(createTheme("lektion_06_freizeit_wetter", "A1.1 Lektion 6: Freizeit und Wetter", "Schritte plus Neu 1", 6, [
  mc("Wortschatz", "Ich spiele am Wochenende gern ___.", ["Fußball", "Küche", "Bäckerei", "U-Bahn"], "Fußball", "'Fußball spielen' ist ein Hobby.", "'Fußball spielen' — це хобі / дозвілля."),
  mc("Wortschatz", "Im Sommer ist das Wetter oft ___.", ["kalt", "warm", "nass", "schmutzig"], "warm", "Im Sommer ist es normalerweise warm.", "Влітку зазвичай тепло: warm."),
  mc("Wortschatz", "Wenn es regnet, brauche ich einen ___.", ["Regenschirm", "Ball", "Mantelknopf", "Löffel"], "Regenschirm", "Bei Regen braucht man einen Regenschirm.", "Під час дощу потрібна парасоля — Regenschirm."),
  mc("Wortschatz", "Heute scheint die Sonne. Es ist ___.", ["windig", "sonnig", "neblig", "dunkel"], "sonnig", "Wenn die Sonne scheint, ist es sonnig.", "Коли світить сонце, кажуть 'sonnig'."),
  mc("Wortschatz", "Im Winter ist es oft kalt und es ___.", ["schneit", "backt", "telefoniert", "fährt"], "schneit", "Im Winter schneit es oft.", "Взимку часто сніжить: schneit."),
  mc("Lesen", "Lies: \"Lena fährt gern Rad und hört abends Musik.\" Was macht Lena gern?", ["Rad fahren", "Tennis spielen", "Kochen", "Arbeiten"], "Rad fahren", "Im Text steht: 'Lena fährt gern Rad'.", "У тексті сказано: 'Lena fährt gern Rad'."),
  tf("Lesen", "\"Bei 30 Grad ist es kalt.\"", false, "30 Grad sind warm oder heiß, nicht kalt.", "30 градусів — це тепло або спекотно, не холодно."),
  mc("Wortschatz", "Meine Freundin sammelt Briefmarken. Das ist ihr ___.", ["Beruf", "Hobby", "Problem", "Zimmer"], "Hobby", "Das regelmäßige Sammeln ist ein Hobby.", "Регулярне збирання — це хобі."),
  mc("Wortschatz", "Am Sonntag gehen wir oft ___.", ["schwimmen", "krank", "spät", "schön"], "schwimmen", "'Schwimmen gehen' ist eine typische Freizeitaktivität.", "'Schwimmen gehen' — типова активність у вільний час."),
  mc("Grammatik", "Wenn das Wetter schön ist, ___ wir spazieren.", ["geht", "gehen", "gehst", "gehe"], "gehen", "Mit 'wir' benutzt man die Form 'gehen'.", "З 'wir' потрібна форма 'gehen'.")
]));

lessonThemeEntries.push(createTheme("lektion_07_termine", "A1.1 Lektion 7: Aktivitäten und Termine", "Schritte plus Neu 1", 7, [
  mc("Wortschatz", "Ich habe heute um 18 Uhr einen ___.", ["Termin", "Teller", "Bahnhof", "Schrank"], "Termin", "Eine feste Zeit mit einer Person ist ein Termin.", "Домовлений час / зустріч — це Termin."),
  mc("Grammatik", "___ du morgen Zeit?", ["Habe", "Hast", "Hat", "Habt"], "Hast", "In der Frage mit 'du' steht 'hast'.", "У питанні з 'du' стоїть 'hast'."),
  mc("Wortschatz", "Wir treffen uns am Samstag im ___.", ["Café", "Wetter", "April", "Fenster"], "Café", "Für ein Treffen passt hier ein Ort wie 'im Café'.", "Для зустрічі тут підходить місце, наприклад 'im Café'."),
  mc("Wortschatz", "Ich komme nicht. Ich bin ___.", ["krank", "Uhr", "blau", "links"], "krank", "Wenn man krank ist, kann man oft nicht kommen.", "Коли людина хвора, вона часто не може прийти."),
  mc("Lesen", "Lies: \"Um 17 Uhr lernt Karim Deutsch, um 19 Uhr spielt er Tennis.\" Was macht Karim um 19 Uhr?", ["Er spielt Tennis.", "Er lernt Deutsch.", "Er arbeitet.", "Er schläft."], "Er spielt Tennis.", "Im Text steht die Aktivität um 19 Uhr direkt.", "У тексті прямо сказано, що о 19:00 він грає в теніс."),
  tf("Lesen", "\"Morgen\" bedeutet gestern.", false, "'Morgen' bedeutet der nächste Tag.", "'Morgen' означає наступний день, а не вчора."),
  mc("Grammatik", "Heute Abend gehe ich ins Kino, ___ morgen arbeite ich.", ["oder", "aber", "denn", "und"], "aber", "'Aber' verbindet hier zwei Gegensätze.", "'Aber' поєднує тут дві протилежні частини."),
  mc("Wortschatz", "Welche Antwort passt? \"Wann treffen wir uns?\" - ___", ["Um halb sieben.", "Im Bahnhof.", "Mit Anna.", "Weil ich müde bin."], "Um halb sieben.", "Die Frage 'Wann?' verlangt eine Zeitangabe.", "Питання 'Wann?' потребує відповіді з часом."),
  mc("Wortschatz", "Der Bus kommt in zehn ___.", ["Minuten", "Freunde", "Straßen", "Mails"], "Minuten", "Bei einer Wartezeit benutzt man 'Minuten'.", "Коли йдеться про очікування, потрібні 'Minuten'."),
  mc("Wortschatz", "Ich schreibe den Termin in meinen ___.", ["Kalender", "Regenschirm", "Mantel", "Schlüssel"], "Kalender", "Termine notiert man im Kalender.", "Зустрічі записують у календар.")
]));

lessonThemeEntries.push(createTheme("lektion_08_beruf", "A1.2 Lektion 8: Beruf und Arbeit", "Schritte plus Neu 2", 8, [
  mc("Wortschatz", "Ich arbeite als ___.", ["Verkäuferin", "Wohnung", "Wetter", "Haltestelle"], "Verkäuferin", "Eine Person mit Beruf im Laden ist eine Verkäuferin.", "Професія людини в магазині — Verkäuferin."),
  mc("Wortschatz", "Wo arbeitest du? - In einem ___.", ["Büro", "Bett", "Balkon", "Parkhaus"], "Büro", "'Im Büro arbeiten' ist eine typische Antwort auf diese Frage.", "'Im Büro arbeiten' — типова відповідь на це питання."),
  mc("Grammatik", "Mein Vater ___ in einer Schule.", ["arbeite", "arbeitest", "arbeitet", "arbeiten"], "arbeitet", "Mit 'mein Vater' (3. Person Singular) benutzt man 'arbeitet'.", "З 'mein Vater' (3-тя особа однини) вживаємо 'arbeitet'."),
  mc("Wortschatz", "Frau Klein ist Ärztin. Sie arbeitet im ___.", ["Krankenhaus", "Supermarkt", "Kino", "Garten"], "Krankenhaus", "Eine Ärztin arbeitet typischerweise im Krankenhaus.", "Лікарка зазвичай працює в лікарні — Krankenhaus."),
  mc("Lesen", "Lies: \"Murat arbeitet von Montag bis Freitag in einer Bäckerei.\" Wo arbeitet Murat?", ["In einer Bäckerei.", "In einem Museum.", "Zu Hause.", "In einer Apotheke."], "In einer Bäckerei.", "Der Arbeitsort steht direkt im Text.", "Місце роботи прямо назване в тексті."),
  tf("Lesen", "\"Ein Koch arbeitet in einem Restaurant.\"", true, "Das ist eine typische Berufs- und Ortskombination.", "Це типове поєднання професії та місця роботи."),
  mc("Wortschatz", "Ich suche eine neue ___.", ["Arbeit", "Jacke", "Lampe", "Bahn"], "Arbeit", "Wenn man einen Job braucht, sucht man eine Arbeit.", "Коли людині потрібна робота, вона шукає Arbeit."),
  mc("Lesen", "Paul schreibt jeden Tag E-Mails am Computer. Wo arbeitet Paul wahrscheinlich?", ["Im Büro.", "Im Schwimmbad.", "Im Wald.", "Im Zug."], "Im Büro.", "E-Mails am Computer schreiben passt am besten zum Büro.", "Писати e-mail за комп'ютером найбільш природно в офісі."),
  mc("Lesen", "Welche Frage passt? \"___? - Ich bin Mechaniker.\"", ["Wie heißt du", "Was sind Sie von Beruf", "Wo wohnen Sie", "Wann haben Sie Zeit"], "Was sind Sie von Beruf", "Die Antwort nennt einen Beruf.", "Відповідь називає професію."),
  mc("Grammatik", "Wir ___ heute lange.", ["arbeite", "arbeitet", "arbeiten", "arbeitet ihr"], "arbeiten", "Mit 'wir' heißt die Form 'arbeiten'.", "З 'wir' потрібна форма 'arbeiten'.")
]));

lessonThemeEntries.push(createTheme("lektion_09_wohnen", "A1.2 Lektion 9: Wohnen und Haus", "Schritte plus Neu 2", 9, [
  mc("Wortschatz", "Ich wohne in einer kleinen ___.", ["Wohnung", "Uhr", "Arzt", "Jacke"], "Wohnung", "Zum Wohnen passt hier 'Wohnung'.", "Для проживання тут підходить 'Wohnung'."),
  mc("Wortschatz", "Das Sofa steht im ___.", ["Wohnzimmer", "Kühlschrank", "Bahnhof", "Gartenhaus"], "Wohnzimmer", "Ein Sofa steht meistens im Wohnzimmer.", "Диван зазвичай стоїть у вітальні — Wohnzimmer."),
  mc("Wortschatz", "In der Küche ___.", ["kocht man", "schläft man", "lernt man Deutsch", "wartet man auf den Bus"], "kocht man", "Die Küche ist der Ort zum Kochen.", "Кухня — це місце, де готують."),
  mc("Wortschatz", "Das Bett steht im ___.", ["Schlafzimmer", "Bad", "Büro", "Flur"], "Schlafzimmer", "Ein Bett steht normalerweise im Schlafzimmer.", "Ліжко зазвичай стоїть у спальні."),
  mc("Lesen", "Lies: \"Unsere Wohnung hat zwei Zimmer, eine Küche und einen Balkon.\" Was hat die Wohnung?", ["Einen Balkon.", "Einen Garten.", "Drei Küchen.", "Kein Zimmer."], "Einen Balkon.", "Der Balkon wird im Text direkt genannt.", "Балкон прямо названо в тексті."),
  tf("Lesen", "\"Das Bad ist ein guter Ort für das Sofa.\"", false, "Ein Sofa steht normalerweise nicht im Bad.", "Диван зазвичай не ставлять у ванній."),
  mc("Wortschatz", "Wir brauchen einen Tisch für das ___.", ["Esszimmer", "Auto", "Schwimmbad", "Bürofach"], "Esszimmer", "Ein Tisch passt hier am besten zum Esszimmer.", "Стіл найкраще пасує до їдальні — Esszimmer."),
  mc("Wortschatz", "Neben dem Fenster steht eine ___.", ["Lampe", "Haltestelle", "Bäckerei", "U-Bahn"], "Lampe", "In einer Wohnung kann neben dem Fenster eine Lampe stehen.", "У квартирі біля вікна може стояти лампа."),
  mc("Wortschatz", "Die ___ ist zu hoch.", ["Miete", "Sonne", "Freizeit", "Straße"], "Miete", "Bei einer Wohnung ist die Miete oft wichtig.", "Для житла важливим є слово 'Miete' — оренда."),
  mc("Lesen", "Im Haus gibt es keinen ___.", ["Aufzug", "Mann", "Tag", "Platz"], "Aufzug", "In einem Haus kann es einen Aufzug geben oder nicht geben.", "У будинку може бути або не бути ліфта — Aufzug.")
]));

lessonThemeEntries.push(createTheme("lektion_10_stadt", "A1.2 Lektion 10: In der Stadt unterwegs", "Schritte plus Neu 2", 10, [
  mc("Wortschatz", "Wo ist der Bahnhof? - Geradeaus und dann ___.", ["links", "warm", "krank", "spät"], "links", "Bei Wegbeschreibungen passt 'links'.", "У поясненні дороги тут підходить 'links'."),
  mc("Wortschatz", "Ich fahre mit dem ___ zur Arbeit.", ["Bus", "Wohnzimmer", "Hemd", "Kuchen"], "Bus", "Zur Arbeit fährt man oft mit dem Bus.", "На роботу часто їздять автобусом — Bus."),
  mc("Wortschatz", "Entschuldigung, wie komme ich ___ Markt?", ["zum", "am", "im", "bei"], "zum", "'Zu dem Markt' wird zu 'zum Markt'.", "'Zu dem Markt' скорочується до 'zum Markt'.", "hard"),
  mc("Wortschatz", "Die Apotheke ist an der ___.", ["Ecke", "Einladung", "Größe", "Nummer"], "Ecke", "'An der Ecke' ist eine typische Ortsangabe.", "'An der Ecke' — типова вказівка місця."),
  mc("Lesen", "Lies: \"Vom Bahnhof gehst du geradeaus. Dann siehst du rechts die Bank.\" Wo ist die Bank?", ["Rechts.", "Links.", "Hinter dem Bahnhof.", "Im Bus."], "Rechts.", "Im Text steht: 'rechts die Bank'.", "У тексті прямо сказано: 'rechts die Bank'."),
  tf("Lesen", "\"Zu Fuß\" bedeutet: mit dem Auto.", false, "'Zu Fuß' bedeutet: man geht.", "'Zu Fuß' означає, що людина йде пішки."),
  mc("Wortschatz", "Ich steige an der nächsten ___ aus.", ["Haltestelle", "Einladung", "Wohnung", "Lampe"], "Haltestelle", "Bei Bus und Straßenbahn steigt man an einer Haltestelle aus.", "З автобуса або трамвая виходять на зупинці — Haltestelle."),
  mc("Wortschatz", "Wir warten auf die ___.", ["U-Bahn", "Küche", "Schwester", "Jacke"], "U-Bahn", "Auf ein Verkehrsmittel wartet man hier auf die U-Bahn.", "Тут чекають на транспорт — U-Bahn."),
  mc("Wortschatz", "Der Supermarkt ist ___ der Post und dem Café.", ["zwischen", "krank", "heute", "immer"], "zwischen", "'Zwischen' benutzt man für zwei Orte.", "'Zwischen' використовують між двома місцями."),
  mc("Lesen", "Welche Antwort passt? \"Wie komme ich zum Museum?\" - ___", ["Nimm die Linie 3.", "Ich habe morgen Zeit.", "Das T-Shirt kostet 20 Euro.", "Es ist sehr kalt."], "Nimm die Linie 3.", "Die Frage verlangt eine Weg- oder Fahrinfo.", "Питання вимагає підказку про маршрут або транспорт.")
]));

lessonThemeEntries.push(createTheme("lektion_11_einkaufen", "A1.2 Lektion 11: Einkaufen und Kleidung", "Schritte plus Neu 2", 11, [
  mc("Wortschatz", "Ich brauche eine ___.", ["Jacke", "Haltestelle", "Nachricht", "Arbeit"], "Jacke", "Ein Kleidungsstück ist hier 'Jacke'.", "Тут потрібен предмет одягу — Jacke."),
  mc("Wortschatz", "Was kostet das T-Shirt? - ___", ["20 Euro", "Größe M", "Im Supermarkt", "Blau"], "20 Euro", "Die Frage 'Was kostet ...?' verlangt einen Preis.", "Питання 'Was kostet ...?' вимагає ціну."),
  mc("Wortschatz", "Die Schuhe sind zu ___.", ["klein", "Bahnhof", "spät", "heute"], "klein", "Wenn Schuhe nicht passen, sind sie oft zu klein.", "Якщо взуття не пасує, воно часто 'zu klein'."),
  mc("Wortschatz", "Im Winter trage ich einen ___.", ["Mantel", "Saft", "Bus", "Bleistift"], "Mantel", "Im Winter trägt man oft einen Mantel.", "Взимку часто носять пальто — Mantel."),
  mc("Lesen", "Lies: \"Anna sucht eine blaue Hose und schwarze Schuhe.\" Was sucht Anna?", ["Eine blaue Hose.", "Einen grünen Rock.", "Ein rotes Kleid.", "Eine Mütze."], "Eine blaue Hose.", "Die Hose wird im Text direkt genannt.", "Штани прямо названі в тексті."),
  tf("Lesen", "\"Der Rock\" ist maskulin.", true, "Im Deutschen heißt es 'der Rock'.", "У німецькій мові правильно: 'der Rock'."),
  mc("Wortschatz", "Welche Farbe hat Schnee?", ["weiß", "schwarz", "orange", "lila"], "weiß", "Schnee ist weiß.", "Сніг білий — weiß."),
  mc("Lesen", "Die Verkäuferin sagt: \"Kann ich Ihnen ___?\"", ["helfen", "kochen", "fahren", "wohnen"], "helfen", "Im Geschäft fragt man oft: 'Kann ich Ihnen helfen?'", "У магазині часто питають: 'Kann ich Ihnen helfen?'"),
  mc("Wortschatz", "Ich nehme das Hemd in Größe ___.", ["M", "Bahnhof", "rechts", "Montag"], "M", "Bei Kleidung benutzt man Größen wie S, M oder L.", "Для одягу використовують розміри S, M або L."),
  mc("Wortschatz", "Heute ist es warm. Ich trage ein ___.", ["T-Shirt", "Regenschirm", "Krankenhaus", "Büro"], "T-Shirt", "Bei warmem Wetter trägt man oft ein T-Shirt.", "У теплу погоду часто носять T-Shirt.")
]));

lessonThemeEntries.push(createTheme("lektion_12_gesundheit", "A1.2 Lektion 12: Gesundheit und Körper", "Schritte plus Neu 2", 12, [
  mc("Wortschatz", "Mir tut der ___ weh.", ["Kopf", "Park", "Mantel", "Bus"], "Kopf", "Bei Kopfschmerzen sagt man: 'Mir tut der Kopf weh'.", "Коли болить голова, кажуть: 'Mir tut der Kopf weh'."),
  mc("Wortschatz", "Ich habe Husten und brauche ___.", ["Tee", "eine Wohnung", "eine Haltestelle", "einen Rock"], "Tee", "Bei Husten passt Tee sehr gut.", "При кашлі логічно вибрати чай — Tee."),
  mc("Lesen", "Der Arzt sagt: \"Sie müssen im Bett ___.\"", ["bleiben", "fahren", "laufen", "einkaufen"], "bleiben", "Bei Krankheit sagt der Arzt oft: 'im Bett bleiben'.", "При хворобі лікар часто каже: залишатися в ліжку."),
  mc("Grammatik", "Wenn ich Fieber habe, ___ ich nicht zur Arbeit.", ["gehe", "gehst", "geht", "gehen"], "gehe", "Mit 'ich' benutzt man hier 'gehe'.", "З 'ich' потрібна форма 'gehe'."),
  mc("Lesen", "Lies: \"Nina hat Zahnschmerzen. Sie geht morgen zum Zahnarzt.\" Wohin geht Nina?", ["Zum Zahnarzt.", "Zum Bahnhof.", "Zum Markt.", "Zur Schule."], "Zum Zahnarzt.", "Der Zielort steht direkt im Text.", "Місце, куди йде Ніна, прямо названо в тексті."),
  tf("Lesen", "\"Die Hand\" ist ein Körperteil.", true, "Die Hand gehört zum Körper.", "Hand — це частина тіла."),
  mc("Wortschatz", "Mein ___ tut nach dem Sport weh.", ["Rücken", "Kühlschrank", "Balkon", "Kurs"], "Rücken", "Nach dem Sport kann der Rücken wehtun.", "Після спорту може боліти спина — Rücken."),
  mc("Wortschatz", "Ich brauche einen Termin beim ___.", ["Arzt", "Rock", "Bus", "Computer"], "Arzt", "Bei Gesundheitsthemen braucht man oft einen Arzttermin.", "У темі здоров'я часто потрібен запис до лікаря — Arzt."),
  mc("Wortschatz", "Was sagt der Arzt? - \"Bitte öffnen Sie den ___.\"", ["Mund", "Schrank", "Bus", "Bleistift"], "Mund", "Beim Arzt heißt es oft: 'Bitte öffnen Sie den Mund'.", "У лікаря часто кажуть: 'Відкрийте рот'."),
  mc("Wortschatz", "Ich nehme die Medizin dreimal am ___.", ["Tag", "Mantel", "Bus", "Haus"], "Tag", "Für Medikamente sagt man oft 'dreimal am Tag'.", "Про ліки часто кажуть: 'три рази на день' — dreimal am Tag.")
]));

lessonThemeEntries.push(createTheme("lektion_13_medien", "A1.2 Lektion 13: Kommunikation und Medien", "Schritte plus Neu 2", 13, [
  mc("Wortschatz", "Ich schreibe dir heute eine ___.", ["E-Mail", "Küche", "Straße", "Schule"], "E-Mail", "Zum Schreiben am Computer passt 'E-Mail'.", "Для написання на комп'ютері підходить 'E-Mail'."),
  mc("Wortschatz", "Kannst du mir eine ___ schicken?", ["Nachricht", "Jacke", "Wohnung", "Bäckerei"], "Nachricht", "Schicken kann man hier eine Nachricht.", "Надіслати тут можна повідомлення — Nachricht."),
  mc("Wortschatz", "Mein Handy ist leer. Ich brauche ein ___.", ["Ladekabel", "Brot", "Fenster", "Bett"], "Ladekabel", "Wenn der Akku leer ist, braucht man ein Ladekabel.", "Коли батарея розряджена, потрібен зарядний кабель — Ladekabel."),
  mc("Wortschatz", "Im Internet suche ich ___.", ["Informationen", "Betten", "Bushaltestellen", "Socken"], "Informationen", "Im Internet sucht man oft Informationen.", "В інтернеті часто шукають інформацію."),
  mc("Lesen", "Lies: \"Tom schreibt seiner Freundin: Ich komme zehn Minuten später.\" Was schreibt Tom?", ["Dass er später kommt.", "Dass er krank ist.", "Dass er zu Hause bleibt.", "Dass er Geburtstag hat."], "Dass er später kommt.", "Im Text steht: 'Ich komme zehn Minuten später'.", "У тексті прямо сказано, що він прийде пізніше."),
  tf("Lesen", "\"Ein Passwort\" soll geheim bleiben.", true, "Ein Passwort darf man nicht offen weitergeben.", "Пароль не слід відкрито розголошувати."),
  mc("Wortschatz", "Wir ___ heute Abend.", ["telefonieren", "backen", "wohnen", "schlafen"], "telefonieren", "Mit dem Handy oder Telefon kann man telefonieren.", "По телефону або мобільному можна telefonieren."),
  mc("Lesen", "Ich lese die Nachricht auf dem ___.", ["Handy", "Balkon", "Mantel", "Bahnhof"], "Handy", "Nachrichten liest man oft auf dem Handy.", "Повідомлення часто читають на телефоні — Handy."),
  mc("Lesen", "Welche Antwort passt? \"Hast du WLAN?\" - ___", ["Ja, das Passwort ist hier.", "Nein, ich trage eine Jacke.", "Morgen ist Sonntag.", "Ich komme aus Bern."], "Ja, das Passwort ist hier.", "Die Frage nach WLAN verlangt eine Antwort zum Internetzugang.", "Питання про WLAN потребує відповіді про доступ до інтернету."),
  mc("Wortschatz", "Ich ___ das Formular aus.", ["drucke", "wohne", "kaufe", "regne"], "drucke", "'Ausdrucken' ist hier das passende Verb.", "Тут підходить дієслово 'ausdrucken' — друкувати.")
]));

lessonThemeEntries.push(createTheme("lektion_14_einladungen", "A1.2 Lektion 14: Einladungen und Feste", "Schritte plus Neu 2", 14, [
  mc("Wortschatz", "Am Samstag feiere ich ___.", ["Geburtstag", "Wohnung", "Haltestelle", "Husten"], "Geburtstag", "Einen Geburtstag kann man feiern.", "Святкувати можна день народження — Geburtstag."),
  mc("Wortschatz", "Kommst du heute zu meiner ___?", ["Party", "Miete", "Praxis", "U-Bahn"], "Party", "Zu einer Feier kommt man zur Party.", "На святкування приходять на Party."),
  mc("Wortschatz", "Danke für die ___.", ["Einladung", "Krankheit", "Arbeit", "Nachbarin"], "Einladung", "Wenn jemand dich einlädt, sagst du: Danke für die Einladung.", "Коли тебе запрошують, кажеш: Danke für die Einladung."),
  mc("Wortschatz", "Leider kann ich nicht ___.", ["kommen", "wohnen", "tragen", "kosten"], "kommen", "Bei einer Absage sagt man oft: 'Ich kann leider nicht kommen'.", "Під час відмови часто кажуть: 'Я, на жаль, не можу прийти'."),
  mc("Lesen", "Lies: \"Liebe Jana, wir grillen am Sonntag um 16 Uhr im Garten. Kommst du?\" Wann ist die Einladung?", ["Am Sonntag um 16 Uhr.", "Am Montag um 8 Uhr.", "Heute Abend um 22 Uhr.", "Im Winter."], "Am Sonntag um 16 Uhr.", "Zeit und Tag stehen direkt in der Einladung.", "День і час прямо вказані у запрошенні."),
  tf("Lesen", "\"Eine Einladung\" ist eine Absage.", false, "Eine Einladung bedeutet, dass jemand kommen soll.", "Einladung означає, що когось запрошують, а не відмовляють."),
  mc("Wortschatz", "Ich bringe einen Kuchen ___.", ["mit", "ein", "nach", "um"], "mit", "Das trennbare Verb heißt 'mitbringen'.", "Це відокремлюване дієслово 'mitbringen'."),
  mc("Wortschatz", "Wir treffen uns ___ dem Restaurant.", ["vor", "mit", "zu", "ohne"], "vor", "Für einen Treffpunkt draußen benutzt man oft 'vor'.", "Для місця зустрічі перед будівлею часто вживають 'vor'."),
  mc("Wortschatz", "Zu Weihnachten besucht meine Familie die ___.", ["Großeltern", "Haltestellen", "Termine", "Kabel"], "Großeltern", "Zu Weihnachten besucht man oft die Familie, hier die Großeltern.", "На Різдво часто відвідують родину, тут — Großeltern."),
  mc("Lesen", "Welche Antwort passt? \"Was schenkst du Lena?\" - ___", ["Ein Buch.", "Am Samstag.", "Mit dem Bus.", "Im Wohnzimmer."], "Ein Buch.", "Die Frage nach einem Geschenk verlangt einen Gegenstand.", "Питання про подарунок потребує назви предмета.")
]));

lessonThemeEntries.push(createTheme("wiederholung_a11_grammatik", "A1.1 Wiederholung: Grammatik", "Schritte plus Neu 1", 101, [
  mc("Grammatik", "Ich ___ aus Polen.", ["komme", "kommst", "kommt", "kommen"], "komme", "Mit 'ich' benutzt man die Form 'komme'.", "З 'ich' вживаємо форму 'komme'."),
  mc("Grammatik", "Wo ___ Sie?", ["wohne", "wohnst", "wohnt", "wohnen"], "wohnen", "Die Höflichkeitsform 'Sie' steht mit 'wohnen'.", "Ввічлива форма 'Sie' стоїть із 'wohnen'."),
  mc("Grammatik", "Das ist ___ Orange.", ["ein", "eine", "einen", "kein"], "eine", "'Orange' ist feminin: 'die Orange'.", "'Orange' жіночого роду: 'die Orange'."),
  mc("Grammatik", "Wir ___ am Sonntag frei.", ["habe", "habt", "haben", "hat"], "haben", "Mit 'wir' benutzt man 'haben'.", "З 'wir' вживаємо 'haben'."),
  mc("Grammatik", "Heute ___ ich keine Lust.", ["hast", "habe", "haben", "hat"], "habe", "Mit 'ich' heißt es 'ich habe'.", "З 'ich' правильна форма — 'ich habe'."),
  mc("Grammatik", "___ du morgen Zeit?", ["Habe", "Hast", "Hat", "Habt"], "Hast", "In der Frage mit 'du' benutzt man 'hast'.", "У питанні з 'du' вживаємо 'hast'."),
  mc("Grammatik", "Das sind meine Eltern. ___ kommen aus Odesa.", ["Er", "Sie", "Es", "Ihr"], "Sie", "Für 'meine Eltern' passt das Pronomen 'sie'.", "Для 'meine Eltern' підходить займенник 'sie'."),
  mc("Grammatik", "Ich stehe um 6 Uhr ___.", ["auf", "an", "mit", "zu"], "auf", "Das passende trennbare Verb ist 'aufstehen'.", "Тут потрібне відокремлюване дієслово 'aufstehen'."),
  mc("Grammatik", "Wenn das Wetter schön ist, ___ wir spazieren.", ["geht", "gehen", "gehst", "gehe"], "gehen", "Mit 'wir' lautet die Form 'gehen'.", "З 'wir' потрібна форма 'gehen'."),
  tf("Grammatik", "\"Ich sind müde\" ist korrekt.", false, "Mit 'ich' benutzt man 'bin', nicht 'sind'.", "З 'ich' вживається 'bin', а не 'sind'.")
]));

lessonThemeEntries.push(createTheme("wiederholung_a11_lesen", "A1.1 Wiederholung: Lesen", "Schritte plus Neu 1", 102, [
  mc("Lesen", "Lies: \"Guten Tag, ich heiße Sara.\" Was stimmt?", ["Sie heißt Sara.", "Sie heißt Guten Tag.", "Sie kommt aus Rom.", "Sie ist Lehrerin."], "Sie heißt Sara.", "Der Name steht direkt im Text.", "Ім'я прямо вказане в тексті."),
  mc("Lesen", "Lies: \"Pedro kommt aus Spanien und wohnt in Wien.\" Wo wohnt Pedro?", ["In Wien.", "In Spanien.", "In Berlin.", "In Graz."], "In Wien.", "Der Wohnort steht direkt im Text.", "Місце проживання прямо назване в тексті."),
  mc("Lesen", "Lies: \"Im Kühlschrank sind Milch, Käse und Butter.\" Was ist im Kühlschrank?", ["Milch.", "Ein Computer.", "Ein Bett.", "Ein Schuh."], "Milch.", "Im Text wird Milch ausdrücklich genannt.", "У тексті прямо названа Milch."),
  mc("Lesen", "Lies: \"Der Kurs beginnt am Dienstag um 9 Uhr.\" Wann beginnt der Kurs?", ["Am Dienstag um 9 Uhr.", "Am Mittwoch um 9 Uhr.", "Am Dienstag um 19 Uhr.", "Am Freitag."], "Am Dienstag um 9 Uhr.", "Tag und Uhrzeit stehen direkt im Satz.", "День і час прямо вказані у реченні."),
  mc("Lesen", "Lies: \"Meine Schwester ist 12, mein Bruder ist 8.\" Wer ist jünger?", ["Der Bruder.", "Die Schwester.", "Beide.", "Niemand."], "Der Bruder.", "8 Jahre ist weniger als 12.", "8 років — менше, ніж 12."),
  mc("Lesen", "Lies: \"Am Samstag spielt Nina Tennis, am Sonntag besucht sie ihre Oma.\" Was macht Nina am Sonntag?", ["Sie besucht ihre Oma.", "Sie spielt Tennis.", "Sie arbeitet.", "Sie lernt Deutsch."], "Sie besucht ihre Oma.", "Die Sonntagsaktivität steht im Text.", "У тексті прямо вказано, що вона робить у неділю."),
  tf("Lesen", "Lies: \"Es regnet und Paul nimmt seinen Regenschirm.\" Paul nimmt einen Regenschirm mit.", true, "Die Aussage wiederholt die Information aus dem Text.", "Твердження повторює інформацію з тексту."),
  mc("Lesen", "Lies: \"Anna ist ledig und wohnt allein.\" Was stimmt?", ["Anna ist nicht verheiratet.", "Anna hat drei Kinder.", "Anna wohnt mit ihren Eltern.", "Anna ist Ärztin."], "Anna ist nicht verheiratet.", "'Ledig' bedeutet: nicht verheiratet.", "'Ledig' означає: не одружена."),
  mc("Lesen", "Lies: \"Um 19 Uhr treffe ich Freunde im Café.\" Wo ist das Treffen?", ["Im Café.", "Im Park.", "Im Krankenhaus.", "In der Küche."], "Im Café.", "Der Ort des Treffens steht direkt im Satz.", "Місце зустрічі прямо назване у реченні."),
  tf("Lesen", "Lies: \"Im Winter schneit es oft.\" Im Winter ist oft Schnee da.", true, "Schnee passt direkt zu 'es schneit'.", "Сніг безпосередньо пов'язаний із 'es schneit'.")
]));

lessonThemeEntries.push(createTheme("wiederholung_a11_wortschatz", "A1.1 Wiederholung: Wortschatz", "Schritte plus Neu 1", 103, [
  mc("Wortschatz", "Welche Begrüßung passt am Abend?", ["Guten Abend", "Guten Morgen", "Gute Reise", "Bis bald"], "Guten Abend", "Am Abend sagt man 'Guten Abend'.", "Увечері кажуть 'Guten Abend'."),
  mc("Wortschatz", "Welche Zahl ist richtig? 13 = ___", ["dreizehn", "dreißig", "dritten", "drei"], "dreizehn", "Die Zahl 13 schreibt man 'dreizehn'.", "Число 13 німецькою — 'dreizehn'."),
  mc("Wortschatz", "Die Sprache in Österreich ist meistens ___.", ["Deutsch", "Spanisch", "Arabisch", "Polnisch"], "Deutsch", "In Österreich spricht man standardmäßig Deutsch.", "В Австрії переважно говорять німецькою."),
  mc("Wortschatz", "Was trinkt man oft zum Frühstück?", ["Kaffee", "Schrank", "Mantel", "Bus"], "Kaffee", "Zum Frühstück trinkt man oft Kaffee.", "На сніданок часто п'ють каву."),
  mc("Wortschatz", "Was ist ein Wochentag?", ["Donnerstag", "Sommer", "Abend", "Wohnung"], "Donnerstag", "Donnerstag ist ein Wochentag.", "Donnerstag — це день тижня."),
  mc("Wortschatz", "Welche Person gehört zur Familie?", ["Onkel", "Bahnhof", "Regen", "Brot"], "Onkel", "Ein Onkel ist ein Familienmitglied.", "Onkel — це член родини."),
  mc("Wortschatz", "Welches Wort passt zum Wetter?", ["sonnig", "ledig", "Bäckerei", "Einladung"], "sonnig", "'Sonnig' beschreibt das Wetter.", "'Sonnig' описує погоду."),
  mc("Wortschatz", "Was ist ein Hobby?", ["Schwimmen", "Krankheit", "Miete", "Adresse"], "Schwimmen", "Schwimmen kann ein Hobby sein.", "Плавання може бути хобі."),
  mc("Wortschatz", "Wo notiert man einen Termin?", ["Im Kalender", "Im Kühlschrank", "Im Schuh", "In der Banane"], "Im Kalender", "Termine schreibt man in den Kalender.", "Зустрічі записують у календар."),
  tf("Wortschatz", "\"Auf Wiedersehen\" ist eine Verabschiedung.", true, "'Auf Wiedersehen' benutzt man zum Abschied.", "'Auf Wiedersehen' вживають під час прощання.")
]));

lessonThemeEntries.push(createTheme("wiederholung_a12_grammatik", "A1.2 Wiederholung: Grammatik", "Schritte plus Neu 2", 201, [
  mc("Grammatik", "Frau Stein ___ im Krankenhaus.", ["arbeite", "arbeitest", "arbeitet", "arbeiten"], "arbeitet", "Mit 'Frau Stein' benutzt man die 3. Person Singular.", "З 'Frau Stein' потрібна 3-тя особа однини."),
  mc("Grammatik", "Wir wohnen in ___ Wohnung.", ["eine", "einer", "einen", "einem"], "einer", "Nach 'in' bei einem Ort benutzt man hier den Dativ: 'in einer Wohnung'.", "Після 'in' для місця тут потрібен давальний: 'in einer Wohnung'.", "hard"),
  mc("Grammatik", "Ich brauche einen Termin ___ Arzt.", ["beim", "zum", "im", "an"], "beim", "'Beim Arzt' ist die feste Verbindung für einen Arzttermin.", "'Beim Arzt' — усталена форма для запису до лікаря."),
  mc("Grammatik", "Der Supermarkt ist zwischen ___ Post und dem Café.", ["die", "der", "den", "dem"], "der", "Nach 'zwischen' steht hier der Dativ: 'zwischen der Post ...'.", "Після 'zwischen' тут стоїть давальний: 'zwischen der Post ...'.", "hard"),
  mc("Grammatik", "Ich bringe einen Salat ___.", ["mit", "zu", "nach", "um"], "mit", "Das trennbare Verb heißt 'mitbringen'.", "Це відокремлюване дієслово 'mitbringen'."),
  mc("Grammatik", "Kannst du mir eine Nachricht ___?", ["schicken", "schickt", "schickst", "geschickt"], "schicken", "Nach 'kannst du' steht der Infinitiv.", "Після 'kannst du' стоїть інфінітив."),
  mc("Grammatik", "Zu Weihnachten ___ wir die Großeltern.", ["besuche", "besucht", "besuchen", "besuchst"], "besuchen", "Mit 'wir' heißt die Form 'besuchen'.", "З 'wir' потрібна форма 'besuchen'."),
  mc("Grammatik", "Ich ___ das Formular aus.", ["drucke", "druckst", "druckt", "drucken"], "drucke", "Mit 'ich' benutzt man 'drucke'.", "З 'ich' вживаємо 'drucke'."),
  mc("Grammatik", "Die Schuhe sind zu klein. Ich kaufe ___ nicht.", ["sie", "er", "es", "ihr"], "sie", "'Die Schuhe' ist Plural, darum passt 'sie'.", "'Die Schuhe' — множина, тому підходить 'sie'."),
  tf("Grammatik", "\"Zum Markt\" bedeutet: 'zu dem Markt'.", true, "'Zum' ist die Verschmelzung von 'zu dem'.", "'Zum' — це скорочення від 'zu dem'.")
]));

lessonThemeEntries.push(createTheme("wiederholung_a12_lesen", "A1.2 Wiederholung: Lesen", "Schritte plus Neu 2", 202, [
  mc("Lesen", "Lies: \"Sandra arbeitet in einem Büro und telefoniert viel.\" Was macht Sandra oft?", ["Sie telefoniert viel.", "Sie fährt Bus.", "Sie kocht im Garten.", "Sie verkauft Obst."], "Sie telefoniert viel.", "Die Tätigkeit steht direkt im Text.", "Дія прямо вказана в тексті."),
  mc("Lesen", "Lies: \"Die Wohnung hat ein Wohnzimmer, ein Bad und einen Balkon.\" Was gibt es in der Wohnung?", ["Einen Balkon.", "Einen Bahnhof.", "Eine Apotheke.", "Ein Restaurant."], "Einen Balkon.", "Der Balkon wird im Text genannt.", "Балкон прямо названо в тексті."),
  mc("Lesen", "Lies: \"Die Apotheke ist links neben der Bank.\" Wo ist die Apotheke?", ["Links neben der Bank.", "Hinter dem Museum.", "Im Bus.", "Vor dem Bett."], "Links neben der Bank.", "Die Ortsangabe steht direkt im Satz.", "Вказівка місця прямо стоїть у реченні.", "hard"),
  mc("Lesen", "Lies: \"Der Mantel kostet 80 Euro, die Jacke kostet 50 Euro.\" Was ist billiger?", ["Die Jacke.", "Der Mantel.", "Beide gleich.", "Nichts."], "Die Jacke.", "50 Euro sind weniger als 80 Euro.", "50 євро менше, ніж 80."),
  mc("Lesen", "Lies: \"Ali hat Fieber und bleibt heute zu Hause.\" Warum bleibt Ali zu Hause?", ["Weil er Fieber hat.", "Weil er Geburtstag hat.", "Weil er im Büro arbeitet.", "Weil er eine Party hat."], "Weil er Fieber hat.", "Der Grund steht direkt im Text.", "Причина прямо названа в тексті."),
  tf("Lesen", "Lies: \"Mina lädt ihre Freunde für Samstag ein.\" Die Einladung ist für Samstag.", true, "Die Zeitangabe stimmt mit dem Text überein.", "Час у твердженні збігається з текстом."),
  mc("Lesen", "Lies: \"Ich habe kein WLAN, aber mobiles Internet.\" Was hat die Person?", ["Mobiles Internet.", "Nur WLAN.", "Kein Handy.", "Eine Einladung."], "Mobiles Internet.", "Im Satz steht: 'aber mobiles Internet'.", "У реченні сказано: 'але мобільний інтернет'.", "hard"),
  mc("Lesen", "Lies: \"Wir warten an der Haltestelle auf den Bus.\" Worauf warten wir?", ["Auf den Bus.", "Auf den Arzt.", "Auf den Mantel.", "Auf den Kaffee."], "Auf den Bus.", "Das Verkehrsmittel steht direkt im Text.", "Транспорт прямо названо в тексті."),
  mc("Lesen", "Lies: \"Zum Fest bringe ich einen Kuchen mit.\" Was bringt die Person mit?", ["Einen Kuchen.", "Ein Hemd.", "Ein Bett.", "Eine U-Bahn."], "Einen Kuchen.", "Der Gegenstand steht direkt im Satz.", "Предмет прямо названо у реченні."),
  tf("Lesen", "Lies: \"Mein Handy ist leer.\" Die Batterie ist leer.", true, "'Handy ist leer' bedeutet: der Akku ist leer.", "'Handy ist leer' означає, що батарея розряджена.")
]));

lessonThemeEntries.push(createTheme("wiederholung_a12_wortschatz", "A1.2 Wiederholung: Wortschatz", "Schritte plus Neu 2", 203, [
  mc("Wortschatz", "Welches Wort passt zu einem Büro?", ["Computer", "Balkon", "Sofa", "Kuchenform"], "Computer", "Im Büro benutzt man oft einen Computer.", "В офісі часто користуються комп'ютером."),
  mc("Wortschatz", "Was gehört zu einer Wohnung?", ["Balkon", "Haltestelle", "Passwort", "Arzt"], "Balkon", "Ein Balkon kann Teil einer Wohnung sein.", "Балкон може бути частиною квартири."),
  mc("Wortschatz", "Wo wartet man auf den Bus?", ["An der Haltestelle", "Im Wohnzimmer", "Im Bett", "Im Kühlschrank"], "An der Haltestelle", "Auf den Bus wartet man an der Haltestelle.", "Автобус чекають на зупинці."),
  mc("Wortschatz", "Was trägt man im Winter?", ["Mantel", "Salat", "Ladekabel", "Teller"], "Mantel", "Im Winter trägt man oft einen Mantel.", "Взимку часто носять пальто."),
  mc("Wortschatz", "Welches Wort gehört zum Körper?", ["Rücken", "Kalender", "WLAN", "Einladung"], "Rücken", "Der Rücken ist ein Körperteil.", "Rücken — це частина тіла."),
  mc("Wortschatz", "Womit lädt man ein Handy?", ["Mit einem Ladekabel", "Mit einem Rock", "Mit einer Haltestelle", "Mit einer Banane"], "Mit einem Ladekabel", "Zum Laden braucht man ein Ladekabel.", "Для заряджання потрібен кабель."),
  mc("Wortschatz", "Was bekommt man vor einer Party oft?", ["Eine Einladung", "Eine Miete", "Einen Rücken", "Ein Formular"], "Eine Einladung", "Vor einer Feier bekommt man oft eine Einladung.", "Перед святом часто отримують запрошення."),
  mc("Wortschatz", "Welches Wort passt zu Kommunikation?", ["Nachricht", "Balkon", "Schlafzimmer", "Arzttermin"], "Nachricht", "Eine Nachricht gehört zur Kommunikation.", "Nachricht належить до спілкування."),
  mc("Wortschatz", "Wo arbeitet ein Arzt oft?", ["Im Krankenhaus", "Im Kino", "Im Bus", "Im Park"], "Im Krankenhaus", "Ein Arzt arbeitet oft im Krankenhaus.", "Лікар часто працює в лікарні."),
  tf("Wortschatz", "\"Geschenk\" passt zu Festen und Einladungen.", true, "Ein Geschenk ist typisch für Feste.", "Подарунок типово пов'язаний зі святами.")
]));

const lessonThemes = Object.fromEntries(lessonThemeEntries);

const mixQuestions = [];
let mixId = 1;
for (const themeKey of Object.keys(lessonThemes)) {
  for (const question of lessonThemes[themeKey]) {
    mixQuestions.push({
      ...question,
      id: mixId++
    });
  }
}

const grammarQuestions = {
  schritte_plus_a1_mix: mixQuestions,
  ...lessonThemes
};

function getRandomQuestionFromTheme(theme, usedQuestions = new Set()) {
  const list = grammarQuestions[theme];
  if (!list || list.length === 0) return null;

  const available = list.filter((q) => !usedQuestions.has(q.id));
  if (available.length === 0) {
    usedQuestions.clear();
    return list[Math.floor(Math.random() * list.length)];
  }

  return available[Math.floor(Math.random() * available.length)];
}

function getRandomQuestion(theme, opts = {}, usedQuestions = new Set()) {
  const list = grammarQuestions[theme];
  if (!list || list.length === 0) return null;

  const { level, difficulty, skill } = opts;
  let filtered = list;

  if (level) filtered = filtered.filter((q) => q.level === level);
  if (difficulty) filtered = filtered.filter((q) => q.difficulty === difficulty);
  if (skill) filtered = filtered.filter((q) => q.skill === skill);
  if (!filtered.length) filtered = list;

  const available = filtered.filter((q) => !usedQuestions.has(q.id));
  if (available.length === 0) {
    usedQuestions.clear();
    return filtered[Math.floor(Math.random() * filtered.length)];
  }

  return available[Math.floor(Math.random() * available.length)];
}

function getAllThemes() {
  return Object.keys(grammarQuestions);
}

function getQuestionCountForTheme(theme) {
  return grammarQuestions[theme] ? grammarQuestions[theme].length : 0;
}

function getMixQuestionCount() {
  return mixQuestions.length;
}

function getTotalQuestionCount() {
  return mixQuestions.length;
}

if (typeof window !== "undefined") {
  window.grammarQuestions = grammarQuestions;
  window.DUEL_SETTINGS = DUEL_SETTINGS;
  window.getRandomQuestionFromTheme = getRandomQuestionFromTheme;
  window.getRandomQuestion = getRandomQuestion;
  window.getAllThemes = getAllThemes;
  window.getQuestionCountForTheme = getQuestionCountForTheme;
  window.getMixQuestionCount = getMixQuestionCount;
  window.getTotalQuestionCount = getTotalQuestionCount;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    grammarQuestions,
    DUEL_SETTINGS,
    getRandomQuestionFromTheme,
    getRandomQuestion,
    getAllThemes,
    getQuestionCountForTheme,
    getMixQuestionCount,
    getTotalQuestionCount
  };
}
