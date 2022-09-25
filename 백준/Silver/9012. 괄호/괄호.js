const fs = require("fs");
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let stack = [];
let stop = false;
let result = false;
let con = "";
for (let i = 0; i < n; i++) {
  // 문장들
  stop = false;
  stack = []; // 스택 비우기
  let str = arr[i];
  for (let j = 0; j < str.length; j++) {
    // 문장 내부
    if (str[j] === "(") {
      // 열린 괄호
      stack.push(1);
    } else {
      // 닫힌 괄호
      if (stack.length === 0) {
        // 스택이 비어있다면
        stop = true;
        break;
      } else {
        // 안비어있다면
        stack.pop();
      }
    }
  }
  if (stack.length !== 0 || stop === true) console.log("NO");
  else console.log("YES");
}

// 스택이 안비어있으면 false, 또는 스택이 비어있으면서
