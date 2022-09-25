const fs = require("fs");
const [n, ...peoples] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = [];
let i = 0;

peoples.forEach((person) => {
  let result = {};
  let p = person.split(" ");
  result.age = Number(p[0]);
  result.name = p[1];
  result.index = i;
  i++;
  arr.push(result);
});

arr.sort(function (a, b) {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  else {
    //동갑일경우
    if (a.index < b.index) return -1;
    else return 1;
  }
});

let str = "";
arr.forEach((e) => {
  str += `${e.age} ${e.name}\n`;
});

console.log(str);
//객체배열로 만들어서 가입 순서 프로퍼티 추가.
// 나이가 같을 경우 가입 순서 프로퍼티로 비교
