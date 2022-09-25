const fs = require("fs");
let pipes = fs.readFileSync("/dev/stdin").toString().trim();

let res = 1;
let now = 1;
let past = "";

for (let i = 1; i < pipes.length; i++) {
  past = pipes[i - 1];
  if (pipes[i] === "(") {
    now++;
    res++;
  } else {
    // 닫힘괄호
    if (past === "(") {
      //레이저
      now--;
      res--;
      res += now;
    } else {
      now--;
    }
  }
}

console.log(res);
