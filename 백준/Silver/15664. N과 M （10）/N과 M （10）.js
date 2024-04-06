const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

/*
왼쪽 상단에서 좌표를 시작한다. 다만 좌표는 1, 1부터 시작한다. 
*/

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
    bt(i + 1);
    temp.pop();
  }
}

bt(0);
console.log(resultList.join('\n'));
