/*
익은 토마토 옆에 있으면 익지 않은 토마토가 하루 뒤에 익은 토마토가 된다. 

0이 모두 없어질 때까지의 최소 날짜를 출력하는 것.
이미 다 익어있다면(0이 하나도 없다면) => 0
다 돌았는데도 0이 존재한다면 => -1


생각해야할게 있다. 토마토가 서로 다른 곳에 있는 경우 .. 그러면 어떻게 해아하지?

답을 봐버렸다. 둘 다 큐에 넣으면 된다...
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

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
    } else {
      this.#head = this.#head.next;
    }

    this.size -= 1;

    return value;
  }

  getSize() {
    return this.size;
  }
}

const BABY = 0;
const MATURE = 1;
const EMPTY = -1;

// 맵 초기화
const [W, H] = input[0].split(' ').map(Number);
const map = new Array(H).fill();

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

// 시작 좌표는 성숙 토마토 ``
function bfs(startList) {
  const queue = new Queue();
  startList.forEach(([y, x]) => queue.push([y, x, 0]));

  let lastDay = 0;

  while (queue.getSize()) {
    const [y, x, day] = queue.shift();
    lastDay = Math.max(day, lastDay);

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= H || nx < 0 || nx >= W) continue;
      if (map[ny][nx] === BABY) {
        map[ny][nx] = MATURE;
        queue.push([ny, nx, day + 1]);
      }
    }
  }

  return lastDay;
}

let onlyMature = true;
for (let i = 0; i < H; i++) {
  map[i] = input[i + 1].split(' ').map(Number);

  if (onlyMature && map[i].includes(BABY)) onlyMature = false;
}

if (onlyMature) {
  console.log(0);
  return;
}

const matureIndexList = [];

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (map[y][x] === MATURE) matureIndexList.push([y, x]);
  }
}

const minDay = bfs(matureIndexList);

let isHaveBaby = false;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (map[y][x] === BABY) {
      isHaveBaby = true;
      break;
    }
  }
}

if (isHaveBaby) console.log(-1);
else console.log(minDay);
