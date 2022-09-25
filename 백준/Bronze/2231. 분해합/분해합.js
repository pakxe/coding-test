const fs = require("fs");
let n = fs.readFileSync("/dev/stdin").toString().trim();
// let n = fs.readFileSync("example.txt").toString().trim();

n = Number(n); //Number(n) 만쓰먄안되네 아마 반환값이 숫자인듯

let min = [];

let sum = 0;
for (let i = 1; i < n; i++) {
  sum = i;
  let str = i.toString();
  for (let j = 0; j < str.length; j++) {
    sum += Number(str[j]);
  }
  if (sum === n) min.push(i);
}

//1
if (min.length === 0) console.log(0);
else console.log(min[0]);
