const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input[0]);
const scores = input[1].split(' ').map(Number);
const max = Math.max(...scores);

const newScores = scores.map((score) => score/max * 100);
 
console.log(newScores.reduce((sum, cur) => sum + cur, 0) / count);