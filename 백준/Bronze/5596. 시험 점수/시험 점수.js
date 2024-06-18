const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const score1 = input[0].split(' ').map(Number);
const score2 = input[1].split(' ').map(Number);

const sum1 = score1.reduce((sum, cur) => sum + cur, 0);
const sum2 = score2.reduce((sum, cur) => sum + cur, 0);

console.log(Math.max(sum1, sum2))