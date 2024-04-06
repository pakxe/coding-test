/*
오름차순. idx부터 시작
중복 한번만 허용
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
function bt(idx) {
  if (temp.length === maxLength) {
    resultList.push(temp.join(' '));
    return;
  }

  let value = null;
  for (let i = idx; i < count; i++) {
    if (value === numbers[i]) continue;
    value = numbers[i];

    temp.push(numbers[i]);
    bt(i);
    temp.pop();
  }
}

bt(0);

console.log(resultList.join('\n'));
