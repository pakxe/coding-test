const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const [A, B] = input.shift().split(' ').map(Number);

console.log(A - B)