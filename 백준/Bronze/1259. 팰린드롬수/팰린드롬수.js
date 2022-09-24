const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

arr.pop();
let isF = false;

for (let i = 0; i < arr.length; i++) {
  isF = true;
  let str = arr[i];
  for (let j = 0; j < Math.floor(str.length / 2); j++) {
    if (str[j] !== str[str.length - j - 1]) isF = false;
  }

  if (isF) console.log("yes");
  else console.log("no");
}
