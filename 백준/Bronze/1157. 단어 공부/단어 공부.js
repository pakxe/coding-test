let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().trim();
let input = fs.readFileSync("/dev/stdin").toString().trim();

let arr = [];
for (let i = 0; i < 26; i++) {
  arr.push(0);
}

let alphabet = "";

for (let i = 0; i < input.length; i++) {
  alphabet = input.charCodeAt(i) - 65;
  if (alphabet < 26) arr[alphabet]++;
  else arr[alphabet - 32]++;
}

const max = Math.max(...arr);
let both = 0;
let index = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === max) {
    both++;
    index = i;
  }
}

if (both >= 2) console.log("?");
else {
  let a = String.fromCharCode(index + 65);
  console.log(a);
}

//문제잘좀읽자;;;
