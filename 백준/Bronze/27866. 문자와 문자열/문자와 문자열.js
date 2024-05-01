const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const str = input[0].split('')
const i = parseInt(input[1]);
console.log(str[i - 1]);