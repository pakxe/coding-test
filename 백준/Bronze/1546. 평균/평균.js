const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

let max = 0; //최고 점수을 저장해줄 변수
arr.forEach((e) => {
  if(e >= max) max = e;
})

let newScore = []; //조작한 점수를 담아줄 배열
arr.forEach((e)=> {
    newScore.push(e/max*100);
})

let sum = 0;
newScore.forEach((e) => {
  sum += e;
})

console.log(sum / n);