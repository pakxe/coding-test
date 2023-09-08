const fs = require('fs');
//let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a, b] = input[0].split(' ').map(Number);

if (input[0] === ' ' || input[0] === '') console.log(0);
else console.log(input[0].trim().split(' ').length);
