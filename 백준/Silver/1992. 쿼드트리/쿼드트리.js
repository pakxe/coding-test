/*
64 * 64가 제일 큰 맵이다.

가로 세로로 나뉠 수 있는 2의 제곱수로만 주어진다.

dfs식 구조 같다. 

전체를 본다 -> 통일되어있다 -> 반환
         -> 통일 안됐다 -> 4개로 나눈다. -> (전체를 본다...)
         
function dfs
    if(size 가 1이 되면 해당 값을 리턴한다. )
    if(이 안의 모든 값이 같으면 해당 값을 리턴한다.)
    
    const answer = [];
    for(4번 ) {
        answer.push(dfs(조정된 위치, size))
    }
    
    return answer(`(${answers.join('')})`);
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const SIZE = Number(input.shift());
const map = new Array(SIZE).fill();

for (let i = 0; i < SIZE; i++) {
  map[i] = input[i].split('').map(Number);
}

function isAllSame([sx, sy], size) {
  let base = map[sy][sx];

  for (let y = sy; y < sy + size; y++) {
    for (let x = sx; x < sx + size; x++) {
      if (base !== map[y][x]) return false;
    }
  }

  return base; // 통일 아니면 false, 통일이면 해당되는 값을 반환한다.
}

const ADD_X = [0, 1, 0, 1];
const ADD_Y = [0, 0, 1, 1];

function dfs(map, [sx, sy], size) {
  if (size === 1) return map[sy][sx];

  const sameValue = isAllSame([sx, sy], size);
  // console.log(sameValue);
  if (sameValue !== false) return sameValue;

  // 여기서부턴 이 영역이 통일되지 않았을 때 하는 로직
  let curAns = '';
  const dividedSize = size / 2; // log2
  for (let i = 0; i < 4; i++) {
    // console.log([sx + ADD_X[i] * dividedSize, sy + ADD_Y[i] * dividedSize], dividedSize);
    const zip = dfs(map, [sx + ADD_X[i] * dividedSize, sy + ADD_Y[i] * dividedSize], dividedSize);
    curAns += zip;
  }

  return `(${curAns})`;
}

const answer = dfs(map, [0, 0], SIZE);
console.log(answer);
