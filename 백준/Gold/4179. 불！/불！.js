/*
s: 8
불은 어떻게 확산될지가 이미 정해져있다.
캐릭터는 불에서 떨어진 곳으로 무조건 피해야한다. 불이 있는 곳과 가장 가까운 탈출구... 
출구와 가까운 곳으로 걸음 수가 불 타임보다 작다면 갈 수 있다. 
만약 같다면 다른 곳으로 피해가야 한다.-> 직진해야하는데, 가야하는 

가장 빠른 탈출 시간을 구해야한다.
(시작은 불이 언제 퍼지는지의 최소 시간을 맵에 구해 놓는다.)
1. 시작 위치에서 가장 빠른 탈출구를 구한다. 
2. 그쪽으로 이동한다. 
3. 만약 불이 지금 이거나 이전에 있었다면 불이 없는 다른 방향으로 이동한다. 
    -> 이때 지금 가려는 위치에 불이 있다면 다른 방향으로 피해야한다. 수직한 부분에서 양쪽에서 다시 가장 빠른 탈출구를 구하고 그쪽으로 이동한다.
4. 

아 그냥 확산시키면되잖아 지훈쿤을..

불 맵을 만든다.
지훈을 시작위치에서 확산시킨다. 
만약 확산되는 위치의 불타임이 현재 지훈의 시간보다 작거나 같으면 더이상 큐에 넣지않는다(죽음)
현재 지훈의 시간이 더 작다면 확산시킨다. 


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
      this.#tail = null;
      this.#head = null;
    } else this.#head = this.#head.next;

    this.size -= 1;

    return value;
  }
}

function isOutline(y, x) {
  return y === 0 || x === 0 || y === height - 1 || x === width - 1;
}

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];
// 불맵은 음수로, 지훈은 양수로
function bfs([sy, sx]) {
  let minEscapeCost = Infinity;

  const queue = new Queue();
  queue.push([sy, sx]);
  map[sy][sx] = 0;

  while (queue.size) {
    const [y, x] = queue.shift();

    if (isOutline(y, x)) {
      minEscapeCost = Math.min(minEscapeCost, map[y][x] + 1);
      continue;
    }

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= height || nx < 0 || nx >= width) continue;
      if (map[ny][nx] === WALL) continue;
      // 불이 하나도 없는 경우도 있나봐....
      if (map[ny][nx] === ROAD || Math.abs(map[ny][nx]) > map[y][x] + 1) {
        queue.push([ny, nx]);
        map[ny][nx] = map[y][x] + 1;
      }
    }
  }

  return minEscapeCost;
}

function makeFireMap(fires) {
  const queue = new Queue();
  fires.forEach(([y, x]) => {
    queue.push([y, x]);
    map[y][x] = 0; // 출발점
  });

  while (queue.size) {
    const [y, x] = queue.shift();
    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= height || nx < 0 || nx >= width) continue;
      // 이동할 지점이 이미 불이 있는데 현재 값보다 크다면(더 빠른 불이 온다면x) 갱신해줌
      if (map[ny][nx] === WALL) continue;
      if (map[ny][nx] !== ROAD && map[ny][nx] >= map[y][x] - 1) continue;

      map[ny][nx] = map[y][x] - 1; // 음수로 불 표시, visited와 cost를 한번에 사용하기 위함
      queue.push([ny, nx]);
    }
  }
}

// --- 시작 ---
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [WALL, ROAD, USER, FIRE] = ['#', '.', 'J', 'F'];
const CANT_ESCAPE = 'IMPOSSIBLE';

const [height, width] = input[0].split(' ').map(Number);
const map = new Array(height).fill();

let userLocation;
const fireLocations = [];
for (let i = 0; i < height; i++) {
  const row = input[i + 1].split('');
  map[i] = row;

  row.forEach((el, idx) => {
    if (el === USER) userLocation = [i, idx];
    else if (el === FIRE) fireLocations.push([i, idx]);
  });
}

makeFireMap(fireLocations);
// console.log(map.map((j) => j.join(' ')).join('\n'));

const minDistance = bfs(userLocation);

if (minDistance === Infinity) console.log(CANT_ESCAPE);
else console.log(minDistance);
// console.log(map.map((j) => j.join(' ')).join('\n'));
// console.log(minDistance);
