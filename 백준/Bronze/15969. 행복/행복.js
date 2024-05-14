const input = require('fs').readFileSync(0, "utf-8") .toString().trim().split('\n');
const count = parseInt(input[0]);
const scoreList = input[1].split(' ').map(Number);

const min = Math.min(...scoreList);
const max = Math.max(...scoreList);

console.log(max - min);