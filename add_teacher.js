const fs = require('fs');
let s = fs.readFileSync('public/questions.js', 'utf8');

// Для каждого вопроса, где есть explanation: { uk: "...", de: "..." }
// Сделать explanation.de коротким
// И добавить teacherExplanation: { uk: длинное, de: короткое }

// Но поскольку переводов нет, пока оставлю одинаковыми, но добавлю teacherExplanation

// Найдем все explanation объекты
s = s.replace(/explanation:\s*\{\s*uk:\s*"([^"]*)",\s*de:\s*"([^"]*)"\s*\}/g, (match, uk, de) => {
  // Для teacherExplanation.uk - длинное (uk)
  // teacherExplanation.de - короткое (de)
  // explanation.uk - длинное (uk)
  // explanation.de - короткое (de)
  return `explanation: { uk: "${uk}", de: "${de}" },
      teacherExplanation: { uk: "${uk}", de: "${de}" }`;
});

fs.writeFileSync('public/questions.js', s);
console.log('Updated with teacherExplanation');