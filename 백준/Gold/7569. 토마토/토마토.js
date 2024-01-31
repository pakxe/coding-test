/*
start: 9:20

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

const MATURE = 1;
const BABY = 0;
const EMPTY = -1;

const NOT_ALL_MATURE = -1;
const ALREADY_ALL_MATURE = 0;

const DX = [0, 1, 0, -1, 0, 0];
const DY = [1, 0, -1, 0, 0, 0];
const DZ = [0, 0, 0, 0, 1, -1];

function bfs(list) {
  const queue = new Queue();
  list.forEach((location) => queue.push([...location, 0])); // x, y, z, day

  let finalDay = 0;

  while (queue.size) {
    const [x, y, z, day] = queue.shift();
    finalDay = Math.max(finalDay, day);

    for (let i = 0; i < 6; i++) {
      const [nx, ny, nz] = [x + DX[i], y + DY[i], z + DZ[i]];

      if (nx < 0 || nx >= X || ny < 0 || ny >= Y || nz < 0 || nz >= Z) continue;
      if (map[nz][ny][nx] === BABY) {
        map[nz][ny][nx] = MATURE;
        queue.push([nx, ny, nz, day + 1]);
      }
    }
  }

  return finalDay;
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [X, Y, Z] = input[0].split(' ').map(Number);

// 맵 받아오기
let isAlreadyAllMature = true;
const map = new Array(Z).fill().map(() => new Array(Y).fill()); // 2차원 빈배열
for (let z = 0; z < Z; z++) {
  for (let y = 0; y < Y; y++) {
    map[z][y] = input[z * Y + y + 1].split(' ').map(Number);
    if (isAlreadyAllMature && map[z][y].includes(BABY)) isAlreadyAllMature = false;
  }
}

// 이미 모두 익어있는 상황
if (isAlreadyAllMature) {
  console.log(ALREADY_ALL_MATURE);
  return;
}

const matureList = [];
for (let z = 0; z < Z; z++) {
  for (let y = 0; y < Y; y++) {
    for (let x = 0; x < X; x++) {
      if (map[z][y][x] === MATURE) matureList.push([x, y, z]);
    }
  }
}

const minDay = bfs(matureList);

let isHaveBabyAfterTime = false;
for (let z = 0; z < Z; z++) {
  for (let y = 0; y < Y; y++) {
    for (let x = 0; x < X; x++) {
      if (map[z][y][x] === BABY) {
        isHaveBabyAfterTime = true;
        break;
      }
    }
  }
}

if (isHaveBabyAfterTime) console.log(NOT_ALL_MATURE);
else console.log(minDay);
