const input = require('fs').readFileSync('/dev/stdin').toString();
const [A, B, C] = input.split(' ').map(Number);

console.log(A + B + C);