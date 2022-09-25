const fs = require("fs");
let arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let stack = [];
let stop = false;
let result = false;
let con = "";
for (let i = 0; i < arr.length - 1; i++) {
  // 문장들
  stop = false;
  stack = []; // 스택 비우기
  let str = arr[i];
  for (let j = 0; j < str.length; j++) {
    // 문장 내부
    if (str[j] === "(") {
      // 열린 괄호
      stack.push("(");
    }
    if (str[j] === "[") {
      // 열린 괄호
      stack.push("[");
    }
    if (str[j] === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        stop = true;
        break;
      } else {
        stack.pop();
      }
    }
    if (str[j] === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        stop = true;
        break;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length !== 0 || stop === true) console.log("no");
  else console.log("yes");
}

// 스택이 안비어있으면 false, 또는 스택이 비어있으면서
