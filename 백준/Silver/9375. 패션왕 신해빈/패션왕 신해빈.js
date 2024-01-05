const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const TEST_COUNT = Number(input.shift());

let map = new Map();
const answers = [];

// console.time('test');

let i = 0;
let cur = 0;
while (1) {
  if (cur >= TEST_COUNT) break;

  const testLength = Number(input[i]);
  const clotheInfos = input.slice(i + 1, i + 1 + testLength);

  clotheInfos.forEach((clotheInfo) => {
    const [_, type] = clotheInfo.split(' ');

    if (map.has(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  });

  let caseCount = 1;
  [...map.keys()].forEach((type) => {
    const typeCount = map.get(type) + 1; // NULL 도 포함해준다.

    caseCount *= typeCount;
  });

  answers.push(caseCount - 1);
  map = new Map();
  i += testLength + 1;
  cur += 1;
}
console.log(answers.join('\n'));
// console.timeEnd('test');
