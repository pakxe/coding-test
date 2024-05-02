const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const char = input[0];

console.log(char.charCodeAt(0))