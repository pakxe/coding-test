const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let max = -Infinity;
let index = -1;

for (let i = 0; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i];
    index = i + 1;
  }
}

console.log(max);
console.log(index);
