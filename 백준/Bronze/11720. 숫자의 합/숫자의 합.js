const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let n = input[0];
let str = input[1];

let sum = 0;
for(let i = 0; i < n; i++){
    sum += Number(str[i]);
}
console.log(sum);

