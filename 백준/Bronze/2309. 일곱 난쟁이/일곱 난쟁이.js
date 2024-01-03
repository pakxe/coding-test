const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const heightList = input.map(Number);

/**
 * 조합이 필요할 것 같다.
 *
 * 조합을 모두 구하고 그 조합 인덱스 대로 초록 난재읻들의 키를 합하고 100이 되는 순간 반복을 종료한다
 *
 */

const PEOPLE = 9;
const DWARF = 7;

const temp = [];
const combArr = [];

const combination = (n, r, depth) => {
  if (temp.length === r) {
    combArr.push([...temp]);
    return;
  }

  for (let i = depth; i < n; i++) {
    temp.push(i);
    combination(n, r, i + 1);
    temp.pop();
  }
};

combination(PEOPLE, DWARF, 0);

const getHeight = (indexArr) => {
  const result = [];

  indexArr.forEach((index) => {
    result.push(heightList[index]);
  });

  return result;
};

let answer;

combArr.forEach((comb) => {
  const selectedHeight = getHeight(comb);

  const sum = selectedHeight.reduce((sum, cur) => sum + cur, 0);

  if (sum === 100) {
    answer = selectedHeight;
  }
});

console.log(answer.sort((a, b) => a - b).join('\n'));
