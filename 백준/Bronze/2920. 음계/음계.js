let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let copyArr = [];
input.forEach((e)=>{
  copyArr.push(e);
})

if(JSON.stringify(input) == JSON.stringify(copyArr.sort())) console.log('ascending');
else if(JSON.stringify(input) == JSON.stringify(copyArr.sort().reverse())) console.log('descending');
else console.log('mixed');