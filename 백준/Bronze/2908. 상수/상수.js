const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

let a = input[0];
let b = input[1];

let revA = Number(a.split('').reverse().join(''));
let revB = Number(b.split('').reverse().join(''));

if(revA > revB) console.log(revA);
else console.log(revB);