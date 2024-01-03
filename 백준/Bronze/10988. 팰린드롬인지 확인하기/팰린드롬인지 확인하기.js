const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const str = input.shift();
const [CLEAR, FAIL] = [1, 0];
let isClear = true;

for (let i = 0; i < str.length / 2; i++) {
  const front = str[i];
  const back = str[str.length - i - 1];

  if (front !== back) {
    isClear = false;
    break;
  }
}

console.log(isClear ? CLEAR : FAIL);
/**
문자를 앞과 뒤에서부터 보면 될 것 같은데
*/
