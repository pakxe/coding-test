let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
// let input = fs.readFileSync("example.txt").toString().split(" ").map(Number);

const A = input[0];
const B = input[1];
if (A > B) console.log(">");
else if (A < B) console.log("<");
else if (A == B) console.log("==");
