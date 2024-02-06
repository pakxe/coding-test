/*
보물은 서로 간에 최단 거리로 이동하는데 있어 가장 긴 시간이 걸리는 육지 두 곳에 나뉘어 묻힌다. 
=> 육지에서 BFS를 하는데 이떄 최대 거리를 갱신하면서 진행하면 된다. 

bfs라면 시작 지점이 중요한거 아닌가? 근데 얘는 시작 지점이 정해져있지 않은데, 그럼 모든 육지에 대해서 구해야하나?

바다가 하나도 없는 곳이라면...
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  #head;
  #tail;

  constructor() {
    this.size = 0;
    this.#head = null;
    this.#tail = null;
  }

  push(value) {
    const node = new Node(value);

    if (this.size === 0) this.#head = node;
    else this.#tail.next = node;

    this.#tail = node;

    this.size += 1;
  }

  shift() {
    if (this.size === 0) return -1;

    const value = this.#head.value;

    if (this.size === 1) {
      this.#head = null;
      this.#tail = null;
    } else this.#head = this.#head.next;

    this.size -= 1;

    return value;
  }
}

// -- 시작 --
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 상수
const [LAND, WATER] = ['L', 'W'];
const [CHECKED_WATER] = 'C';
const [height, width] = input[0].split(' ').map(Number);

const map = new Array(height).fill();

for (let i = 0; i < height; i++) {
  const row = input[i + 1].split('');
  map[i] = row;
}
// bfs를 응용한 최외각 영역 찾기
const DX = [0, 1, 1, 1, 0, -1, -1, -1]; // 북쪽부터 시작
const DY = [1, 1, 0, -1, -1, -1, 0, 1];
function getOutlines([sy, sx]) {
  const outlines = [];
  const queue = new Queue();
  queue.push([sy, sx]);

  map[sy][sx] = CHECKED_WATER;

  while (queue.size) {
    // console.log(map.map((c) => c.join(' ')).join('\n'));
    const [y, x] = queue.shift();

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= height || nx < 0 || nx >= width) continue;
      if (map[ny][nx] === WATER) {
        queue.push([ny, nx]);
        map[ny][nx] = CHECKED_WATER;
      }
      if (map[ny][nx] === LAND) outlines.push([ny, nx]);
    }
  }

  return outlines;
}

function getMaxDistance([sy, sx]) {
  const DX = [0, 1, 0, -1];
  const DY = [1, 0, -1, 0];

  let maxDistance = 0;
  const queue = new Queue();
  queue.push([sy, sx, 0]);

  const visited = new Array(height).fill().map(() => new Array(width).fill(0));
  visited[sy][sx] = 1;

  while (queue.size) {
    const [y, x, time] = queue.shift();
    maxDistance = Math.max(maxDistance, time);

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= height || nx < 0 || nx >= width) continue;
      if (visited[ny][nx]) continue;

      if (map[ny][nx] === LAND) {
        queue.push([ny, nx, time + 1]);
        visited[ny][nx] = 1;
      }
    }
  }

  return maxDistance;
}

// 최외각 좌표 리스트 만들기
// const outlines = new Set();
// for (let y = 0; y < height; y++) {
//   for (let x = 0; x < width; x++) {
//     if (map[y][x] === WATER) getOutlines([y, x]).forEach((o) => outlines.add(o.join(' ')));
//   }
// }

const outlines = [];
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (map[y][x] === LAND) outlines.push([y, x]);
  }
}

let maxDistance = -Infinity;

outlines.forEach((outline) => {
  const curMaxDistance = getMaxDistance(outline); // 현재 최외각의 가능한 제일 긴 경로의 길이
  maxDistance = Math.max(curMaxDistance, maxDistance);
});

console.log(maxDistance);
