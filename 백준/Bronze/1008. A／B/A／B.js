const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0];
const [A, B] = input.split(' ').map(Number);
console.log(A / B)