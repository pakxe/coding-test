const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

let index = 0;

const nums = [null, ...new Array(n).fill().map((_, i) => i + 1)];

function nextUntilNum(i) {
  let index = i + 1 === nums.length ? 0 : i + 1;

  while (1) {
    if (nums[index] === null) {
      if (index + 1 === nums.length) index = 0;
      else index += 1;
    } else break;
  }

  return index; // 값이 최초로 존재하는 index
}

// 마지막 제거자 위치부터 시작
function findIndex(initialIndex) {
  let nextStartIndex = initialIndex; // 마지막 제거자의 다음

  for (let i = 0; i < k; i++) {
    nextStartIndex = nextUntilNum(nextStartIndex);
  }

  return nextStartIndex;
}

const results = [];
while (1) {
  const idx = findIndex(index); // 1
  const cur = nums[idx];
  results.push(cur);

  nums[idx] = null;

  if (results.length === n) break;
  index = idx;
}

console.log(`<${results.join(', ')}>`);

/*
새로운 좌표를 찾는 것이 핵심 로직이다.

1부터 1을 카운트해 원으로 진입한다.


*/
