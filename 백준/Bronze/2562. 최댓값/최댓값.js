const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let max = Math.max(...input);
let where = 0;

for (let i = 0; i < input.length; i++) {
  if (max === input[i]) {
    where = i + 1;
  }
}
console.log(max);
console.log(where);
