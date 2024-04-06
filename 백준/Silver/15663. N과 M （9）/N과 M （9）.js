/*
이전 값이 아니라 같은 형제들 중에 이미 선택되었다면 걸린다. 

그러면 형제들 중에 이미 같은 값이 선택되었다는 사실은 어떻게 확인할 수 있지?

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
const visited = new Array(count).fill(false);

function bt() {
  if (temp.length === maxLength) {
    resultList.push(temp.join(' '));
    return;
  }

  let value = null;
  for (let i = 0; i < count; i++) {
    if (visited[i] === true) continue; // 이미 temp에 추가된 숫자
    if (value === numbers[i]) continue;

    value = numbers[i];
    visited[i] = true;
    temp.push(numbers[i]);
    bt();
    visited[i] = false;
    temp.pop();
  }
}

bt();

console.log(resultList.join('\n'));
