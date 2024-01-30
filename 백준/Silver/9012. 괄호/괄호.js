/*

*/

const [VALID, INVALID] = ['YES', 'NO'];
const [OPEN, CLOSE] = ['(', ')'];

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const count = Number(input[0]);
const answers = [];

for (let i = 1; i <= count; i++) {
  const str = input[i];
  const stack = []; // 1로 채워지는 스택
  let state = true;

  for (let j = 0; j < str.length; j++) {
    const cur = str[j];

    // 비어있는데 close오면 실패, open오면 push
    // 스택이 안비어있는데 close오면 pop, open오면 push

    if (stack.length === 0 && cur === CLOSE) {
      state = false;
      break;
    } else if (cur === OPEN) stack.push(1);
    else if (stack.length !== 0 && cur === CLOSE) stack.pop();
  }

  if (!state || stack.length !== 0) answers.push(false);
  else answers.push(true);
}

console.log(answers.map((state) => (state ? VALID : INVALID)).join('\n'));
