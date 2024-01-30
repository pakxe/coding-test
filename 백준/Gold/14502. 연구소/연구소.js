/*
설마 세워질 수 있는 벽의 모든 경우의 수를 구해서
그 경우마다의 바이러스 bfs를 해서
멀쩡한 땅의 개수를 세는 것이?
 
일단 띵의 개수가 많지 않다. 64 * 63 * 62 = 24만 이므로 할만하긴 하다...

그럼 이 세워질 수 있는 벽의 경우의 수를 어떻게 구할 수 있을까? 조합?
*/

// 이미 무언가 있는 칸을 제외하고 0만으로 조합을 돌려야 하는데?
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  #size;
  #head;
  #tail;

  constructor() {
    this.#size = 0;
    this.#head = null;
    this.#tail = null;
  }

  push(value) {
    const node = new Node(value);

    if (this.#size === 0) this.#head = node;
    else this.#tail.next = node;

    this.#tail = node;

    this.#size++;
  }

  shift() {
    if (this.#size === 0) return -1;

    const value = this.#head.value; // shift할 노드의 값 반환하기 위해 저장해주기

    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
    } else this.#head = this.#head.next;

    this.#size--;

    return value;
  }

  getSize() {
    return this.#size;
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const WALL_MAX = 3;
const [H, W] = input[0].split(' ').map(Number);

// 맵 가져오기
const map = new Array(H).fill();
for (let i = 0; i < H; i++) {
  const width = input[i + 1];
  map[i] = width.split(' ').map(Number);
}

// 0으로 비어있는 좌표 [h, w] 가져오기
const emptyIndexs = [];
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === 0) emptyIndexs.push([i, j]);
  }
}

const temp = []; // 조합 재귀에 사용할 임시 배열
const combArr = []; // 결과가 담길 배열 [[h, w], [h, w], ...]
function combination(n, r, depth) {
  if (temp.length === r) {
    combArr.push([...temp]);
    return;
  }

  for (let i = depth; i < n; i++) {
    temp.push(emptyIndexs[i]);
    combination(n, r, i + 1);
    temp.pop();
  }
}

const VIRUS = 2;
const WALL = 1;
const EMPTY = 0;

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];
function bfs([sy, sx], map) {
  const queue = new Queue();
  queue.push([sy, sx]);

  while (queue.getSize()) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny >= 0 && ny < H && nx >= 0 && nx < W && map[ny][nx] === EMPTY) {
        queue.push([ny, nx]);
        map[ny][nx] = VIRUS;
      }
    }
  }
}

// combArr로 3개의 벽을 세울 수 있는 경우의 수 마련하기
combination(emptyIndexs.length, WALL_MAX, 0);

function copy2(arr) {
  const map = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    map[i] = [...arr[i]];
  }

  return map;
}

function getEmptyCount(map) {
  let count = 0;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === EMPTY) count += 1;
    }
  }

  return count;
}

let max = -Infinity;

for (let i = 0; i < combArr.length; i++) {
  const curWallIndexs = combArr[i];
  const mapCopy = copy2(map); // 맵 복제해서 바이러스 용으로 사용
  // 경우의 수에 맞게 벽을 세우기
  curWallIndexs.forEach(([y, x]) => (mapCopy[y][x] = 1));

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (mapCopy[y][x] === VIRUS) bfs([y, x], mapCopy);
    }
  }

  const emptyCount = getEmptyCount(mapCopy);

  max = Math.max(max, emptyCount);
}

console.log(max);
