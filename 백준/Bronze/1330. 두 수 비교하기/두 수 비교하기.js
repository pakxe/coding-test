const fs = require('fs');
//let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);

if(a > b) console.log('>');
if(a < b) console.log('<');
if(a === b) console.log('==');