const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let m = 1;

input.forEach((e) => {
  m *= e;
});

let str = m.toString();
let arr = new Array(10);
arr.fill(0);

for (let i = 0; i < str.length; i++) {
  arr[Number(str[i])]++;
}

arr.forEach((e) => {
  console.log(e);
});
