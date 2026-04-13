const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
c = c.replace('.slice(0, 25)', '.slice(0, 12)');
c = c.replace('max_tokens: 4000', 'max_tokens: 8000');
c = c.replace("muestra: p.articulos.slice(0,2).map(a => a.art.slice(0,30)).filter(Boolean).join(', ')", '""');
fs.writeFileSync('index.html', c);
console.log('OK - cambios aplicados');
