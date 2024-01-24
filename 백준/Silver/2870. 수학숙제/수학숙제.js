/*
비내림차순 = 오름차순

숫자의 앞과 뒤에 문자가 있거나, 줄의 시작 또는 끝이어야 한다.

숫자의 앞에 0이 있는 경우는 생략, 0만 존재하는 경우는 '0'숫자로 사용할 수 있다.

숫자 배열에 계속 추가한다. 
문자면 스택을 pop하는데, 이때 스택이 비어있다면 아무 일도 하지 않는다. 
숫자면 스택에 push한다. 
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);

const numbers = [];

for (let i = 1; i <= N; i++) {
  const paper = input[i];
  let stack = [];

  for (let j = 0; j < paper.length; j++) {
    const cur = paper[j];

    if (isNaN(cur)) {
      // 문자라면
      if (stack.length) numbers.push(BigInt(stack.join('')));
      stack = [];
    } else {
      stack.push(cur);
    }
  }

  if (stack.length) numbers.push(BigInt(stack.join('')));
}

numbers.sort((a, b) => (a < b ? -1 : 1));

console.log(numbers.join('\n'));
