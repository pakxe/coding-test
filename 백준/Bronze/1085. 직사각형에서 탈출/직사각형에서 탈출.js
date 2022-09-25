const fs = require("fs");
let [x, y, w, h] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let sol = [];
if (x < w - x) sol.push(x);
else sol.push(w - x);

if (y < h - y) sol.push(y);
else sol.push(h - y);

console.log(Math.min(...sol));
