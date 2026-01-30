const fs = require('fs');
let s = fs.readFileSync('public/questions.js', 'utf8');
s = s.replace(/explanation:\s*"([^"]*?)"/g, 'explanation: { uk: "$1", de: "$1" }');
fs.writeFileSync('public/questions.js', s);
console.log('Updated explanations');