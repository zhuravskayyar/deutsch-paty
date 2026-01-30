// tools/localize-hints.js
const fs = require("fs");

const input = "questions.js";
const out = "questions.localized.js";

let s = fs.readFileSync(input, "utf8");

// правила: exact + частково regex
const rules = [
  // SEIN
  ["Ich + sein", "Ich bin …"],
  ["Du + sein", "Du bist …"],
  ["Er/Sie/Es + sein", "Er/Sie/Es ist …"],
  ["Wir + sein", "Wir sind …"],
  ["Ihr + sein", "Ihr seid …"],
  ["sie (вони) = plural", "Sie (Plural) sind …"],

  // W-Fragen (UA hints)
  ["Як тебе звати?", "Name?"],
  ["Звідки?", "Herkunft?"],
  ["Де?", "Ort?"],
  ["Що це?", "Was ist das?"],
  ["Хто?", "Person?"],

  // TIME
  ["Котра година?", "Wie spät?"],
  ["точний час", "um … Uhr"],
  ["частина дня", "am Morgen/Abend"],
  ["пора року", "im Sommer/Winter"],
  ["день тижня", "Wochentag"],
  ["послідовність", "Reihe"],

  // Preps без термінів
  ["mit + Dativ", "mit der/mit dem"],
  ["einsteigen in + Akk", "in den Bus einsteigen"],
  ["am = an dem", "am …"],
  ["Accusativ maskulin", "einen/den …"]
];

// helper: генерувати de hint за правилами
function mapDe(ukHint) {
  for (const [from, to] of rules) if (ukHint === from) return to;

  // "X = maskulin/feminin/das" -> "der/die/das X"
  let m = ukHint.match(/^(.+)\s=\s(maskulin|feminin|neutrum|das)$/i);
  if (m) {
    const noun = m[1].trim();
    const g = m[2].toLowerCase();
    if (g === "maskulin") return `der ${noun}`;
    if (g === "feminin") return `die ${noun}`;
    if (g === "neutrum" || g === "das") return `das ${noun}`;
  }

  // якщо вже німецькою і виглядає як патерн — лишаємо
  if (/^[A-Za-zÄÖÜäöüß0-9 .…/+()-]+$/.test(ukHint)) return ukHint;

  // fallback: нічого не вигадуємо
  return "";
}

// replace all occurrences of hint: "..."
s = s.replace(/hint:\s*"([^"]*)"/g, (full, hintStr) => {
  const uk = hintStr;
  const de = mapDe(uk);
  return `hint: { uk: ${JSON.stringify(uk)}, de: ${JSON.stringify(de)} }`;
});

fs.writeFileSync(out, s, "utf8");
console.log("Wrote:", out);