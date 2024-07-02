const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const length = Number(input);

console.log((length * length) * Math.sqrt(3) / 4)