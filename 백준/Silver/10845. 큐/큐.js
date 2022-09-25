const fs = require("fs");
// let [n, ...input] = fs
//   .readFileSync("example.txt")
//   .toString()
//   .trim()
//   .split("\n");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n = Number(n);

let result = "";
let arr = [];
for (let i = 0; i < n; i++) {
  let line = input[i].split(" ");

  if (line[0] === "push") {
    arr.push(Number(line[1]));
  }

  if (line[0] === "pop") {
    if (arr.length === 0) result += `-1\n`;
    else {
      let top = arr.shift();
      result += `${top}\n`;
    }
  }

  if (line[0] === "size") {
    result += `${arr.length}\n`;
  }

  if (line[0] === "empty") {
    if (arr.length === 0) result += `1\n`;
    else result += `0\n`;
  }

  if (line[0] === "front") {
    if (arr.length === 0) result += `-1\n`;
    else {
      result += `${Number(arr[0])}\n`;
    }
  }

  if (line[0] === "back") {
    if (arr.length === 0) result += `-1\n`;
    else {
      result += `${Number(arr[arr.length - 1])}\n`;
    }
  }
}

console.log(result);
