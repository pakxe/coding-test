const fs = require("fs");
let [n, a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n = Number(n);
a = a.split(" ").map(Number);
let count = n;
let now = 0;

for (let i = 0; i < n; i++) {
  now = a[i];
  if (now === 1) {
    count--;
    continue;
  }
  for (let j = 2; j <= now - 1; j++) {
    if (now % j === 0) {
      count--;
      break;
    }
  }
}

console.log(count);
