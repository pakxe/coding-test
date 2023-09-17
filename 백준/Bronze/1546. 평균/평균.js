const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input[0]);
const subs = input[1].split(' ').map(Number);

const max = Math.max(...subs);

console.log(subs.reduce((sum, cost) => sum + (cost / max) * 100, 0) / count);
