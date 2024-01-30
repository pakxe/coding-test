/*
괄호와 매우 유사한 문제

마찬가지로 스택 안에는 OPEN만 들어간다.
*/

const [VALID, INVALID] = ['yes', 'no'];
const [SMALL_OPEN, SMALL_CLOSE] = ['(', ')'];
const [BIG_OPEN, BIG_CLOSE] = ['[', ']'];

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const answers = [];

for (let i = 0; i < input.length; i++) {
  const str = input[i];

  if (str === '.') break;

  const stack = [];
  let state = true;

  for (let j = 0; j < str.length; j++) {
    const cur = str[j];

    if (cur === SMALL_OPEN || cur === BIG_OPEN) stack.push(cur);
    else if ((cur === SMALL_CLOSE) & (stack[stack.length - 1] === SMALL_OPEN)) stack.pop();
    else if (cur === BIG_CLOSE && stack[stack.length - 1] === BIG_OPEN) stack.pop();
    else {
      if (cur !== SMALL_OPEN && cur !== SMALL_CLOSE && cur !== BIG_OPEN && cur !== BIG_CLOSE)
        continue;
      else {
        state = false;
        break;
      }
    }
  }

  if (!state || stack.length !== 0) answers.push(INVALID);
  else answers.push(VALID);
}

console.log(answers.join('\n'));
