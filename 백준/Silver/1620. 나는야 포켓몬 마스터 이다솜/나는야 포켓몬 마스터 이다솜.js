const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

/*
시간초과가 잘 날 것 같은 문제다. 

맵이랑 배열 2개를 써야하나?
2개를 써서 배열에는 이름을 넣고, 맵에는 번호를 넣어? 그게 맞는듯. 
*/

function isAlphabet(char) {
  const ascii = char.charCodeAt();

  if (ascii >= 65 && ascii <= 65 + 26 - 1) return true;
  if (ascii >= 97 && ascii <= 97 + 26 - 1) return true;
  return false;
}

const [DICT_LENGTH, PROBLEM_COUNT] = input.shift().split(' ').map(Number);
const arr = new Array(DICT_LENGTH + 1).fill();
const map = new Map();

for (let i = 0; i < DICT_LENGTH; i++) {
  const name = input[i];

  arr[i + 1] = name;
  map.set(name, i + 1);
}

const answers = [];

for (let i = DICT_LENGTH; i < DICT_LENGTH + PROBLEM_COUNT; i++) {
  const problem = input[i];
  if (isAlphabet(problem[0])) answers.push(map.get(problem));
  else answers.push(arr[Number(problem)]);
}

console.log(answers.join('\n'));
