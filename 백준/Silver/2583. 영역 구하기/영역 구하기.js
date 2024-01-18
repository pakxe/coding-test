/*
가로세로 크기대로 2차원 배열을 만든다.

// 맵 막기
for 주어지는 직사각형 개수 {
    const 가로 세로 좌표
    for(y 세로) {
        for(x 가로) {
            map[y][x] = BLOCK
        }
    }
}

const blockSizes = [];
for(map 세로) {
    for(map 가로) {
        만약 이 칸이 BLOCK이 아니라면 {
            blockSizes.push(bfs(map, 현재 위치));
        }
    }
}

console.log(blockSizes.length);

*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [row, col, blockCount] = input.shift().split(' ').map(Number);

const BLOCK = 1; // 벽(블럭)
const NONE = 0;
const ALREADY_CHECK = 2;

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

function bfs(map, [sy, sx]) {
  const queue = [[sy, sx]];
  map[sy][sx] = ALREADY_CHECK;
  let count = 1;

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];
      if (ny < 0 || ny >= map.length || nx < 0 || nx >= map[0].length) continue;
      if (map[ny][nx] === NONE) {
        queue.push([ny, nx]);
        map[ny][nx] = ALREADY_CHECK;
        count += 1;
      }
    }
  }

  return count;
}

const map = new Array(row).fill().map(() => new Array(col).fill(NONE));

for (let i = 0; i < blockCount; i++) {
  const [fx, fy, lx, ly] = input[i].split(' ').map(Number);

  for (let y = fy; y < ly; y++) {
    for (let x = fx; x < lx; x++) {
      map[map.length - 1 - y][x] = BLOCK; // y 축 반전은 - 붙이기
    }
  }
}

const blockSizes = [];

for (let y = 0; y < row; y++) {
  for (let x = 0; x < col; x++) {
    if (map[y][x] === NONE) blockSizes.push(bfs(map, [y, x]));
  }
}

console.log(blockSizes.length);
console.log(blockSizes.sort((a, b) => a - b).join(' '));
