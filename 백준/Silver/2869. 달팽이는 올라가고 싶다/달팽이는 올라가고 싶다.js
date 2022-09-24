let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let a = input[0];
let b = input[1];
let v = input[2];
let days = 0;

if(a===v) days = 1;
else if(v-a >= a-b) days = Math.ceil((v-a) / (a-b))+1;
else if(v-a < a-b) days = 2; 

console.log(days);