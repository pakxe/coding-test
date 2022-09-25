const fs = require("fs");
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let path = "";
let str = "";
let sub = "";
let count = Number(n);
for (let i = 0; i < n; i++) {
  str = arr[i];
  for (let j = 0; j < str.length; j++) {
    if (j === 0) continue;
    else path = str[j - 1];
    sub = str.slice(0, j + 1);
    if (path !== str[j] && sub.split(str[j]).length - 1 >= 2) {
      count--;
      break;
    }
  }
}

console.log(count);
// 바로전문자랑 일치하지 않으면서 이전 문자들중에 현재 문자가 있으면 그룹단어 아님
