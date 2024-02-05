/*
(답을 봤음)

사고 과정
O(n^2)임 -> n으로 줄일 수 없을까 생각 -> 자료구조 총 출동 -> 스택!

수들은 다음 큰 수가 나올 때까지 대기(스택에) -> 큰 수가 들어오면 그제서야 탈출
하락하다가 상승 수가 나오면 탈출할 수 있는 구조
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const stack = [];
const answers = new Array(n).fill(-1);

stack.push([arr[0], 0]); // [값, 인덱스];
for (let i = 1; i < n; i++) {
  if (stack.length === 0) {
    continue;
  }

  while (1) {
    if (stack.length === 0) {
      stack.push([arr[i], i]);
      break;
    }

    const [topValue, topIndex] = stack[stack.length - 1];

    if (topValue < arr[i]) {
      stack.pop();
      answers[topIndex] = arr[i];
    } else {
      stack.push([arr[i], i]);
      break;
    }
  }
}

console.log(answers.join(' '));
