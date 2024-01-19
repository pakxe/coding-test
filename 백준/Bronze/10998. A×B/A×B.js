const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [A, B] = input[0].split(' ').map(Number);

console.log(A * B);