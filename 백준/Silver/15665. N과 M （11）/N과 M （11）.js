/*
이미 중복인 숫자는 넣지 않는다. 
이전 숫자와 중복인 숫자는 괜찮다.
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [count, maxLength] = input[0].split(' ').map(Number);
const numbers = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const temp = [];
const resultList = [];
function bt() {
  if (temp.length === maxLength) {
    resultList.push(temp.join(' '));
    return;
  }

  let value = null;
  for (let i = 0; i < count; i++) {
    if (value === numbers[i]) continue;
    value = numbers[i];

    temp.push(numbers[i]);
    bt();
    temp.pop();
  }
}

bt();

console.log(resultList.join('\n'));
