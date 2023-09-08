const fs = require('fs');
//let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const max = Math.max(...input.map(Number));
console.log(max);
console.log(input.map(Number).indexOf(max) + 1);
