const fs = require("fs");
let [n, a, m, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

a = a.split(" ").map(Number);
b = b.split(" ").map(Number);

a.sort((a, b) => a - b);

let bs = function (arr, target, start, end) {
  let mid = 0;
  while (start <= end) {
    mid = Math.trunc((start + end) / 2);
    if (target === arr[mid]) return 1;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return 0;
};

let str = "";
let res = 0;
for (let i = 0; i < m; i++) {
  res = bs(a, b[i], 0, n - 1);
  str += res + "\n";
}

console.log(str);
