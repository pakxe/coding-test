const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const START = 97;
const alphabetArr = new Array(26).fill(0);

for (let i = 0; i < input[0].length; i++) {
  const ascii = input[0][i].charCodeAt() - START;
  alphabetArr[ascii] += 1;
}

console.log(alphabetArr.join(' '));
