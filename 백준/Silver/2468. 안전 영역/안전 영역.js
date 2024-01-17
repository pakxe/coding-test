/*
비의 양에 따라 일정한 높이 "이하"의 모든 지점은 물에 잠긴다. 

높이는 1 <= N <= 100

따라서 1이상 100이하의 모든 수에 대해서 bfs를 수행해야한다. 

하나의 맵에 대해 이 값이상이면 bfs수행 이런식으로 해야한다. 
배열을 복사해서 넘기고 방문한 것은 0(VISITED)로 바꿔가면서 하는게 좋을 것 같다.
일단 map을 만든다.

let max = -무한
for 1~100 
    맵 복제
    let 카운트
    for y
        for x
            만약 지금 값이 i이상이라면 bfs 수행 
            count++
    
    max = Math.max(max, count);

*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const VISITED = 0;
const [MIN, MAX] = [1, 100];
const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

const size = Number(input.shift());
const map = new Array(size).fill();

function bfs(map, height, start) {
  const [sy, sx] = start;
  const queue = [[sy, sx]];
  map[sy][sx] = VISITED;

  while (queue.length !== 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < DX.length; i++) {
      if (
        y + DY[i] >= 0 &&
        y + DY[i] < map.length &&
        x + DX[i] >= 0 &&
        x + DX[i] < map.length &&
        map[y + DY[i]][x + DX[i]] >= height &&
        map[y + DY[i]][x + DX[i]] !== VISITED
      ) {
        queue.push([y + DY[i], x + DX[i]]);
        map[y + DY[i]][x + DX[i]] = VISITED;
      }
    }
  }
}

for (let i = 0; i < size; i++) {
  map[i] = input[i].split(' ').map(Number);
}

let max = -Infinity;

for (let height = MIN; height <= MAX; height++) {
  let count = 0;
  const curMap = map.map((row) => [...row]);

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (curMap[row][col] >= height) {
        bfs(curMap, height, [row, col]);
        count += 1;
      }
    }
  }

  max = Math.max(max, count);
}

console.log(max);
