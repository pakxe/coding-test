const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let fac = function (n) {
  if (n === 0) return 1;
  return n * fac(n - 1);
};

let up = fac(a);
let down = fac(b) * fac(a - b);

console.log(up / down);
