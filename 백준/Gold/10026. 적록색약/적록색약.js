const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size += 1;

    return;
  }

  shift() {
    if (this.size === 0) return -1;

    const value = this.head.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.size -= 1;

    return value;
  }
}

// 적록색약은 빨강과 초록을 같은 색으로 본다.

const SIZE = parseInt(input[0]);
const map = new Array(SIZE).fill();

for (let i = 0; i < SIZE; i++) {
  map[i] = input[i + 1].split('');
}

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];
function normal(sy, sx, visited) {
  const targetValue = map[sy][sx];
  const queue = new Queue();
  visited[sy][sx] = true;

  queue.push([sy, sx]);

  while (queue.size !== 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= SIZE || nx < 0 || nx >= SIZE) continue;
      if (visited[ny][nx]) continue;
      if (targetValue !== map[ny][nx]) continue;

      visited[ny][nx] = true;
      queue.push([ny, nx]);
    }
  }
}

// 같은 영역으로 체크할 것
function checkRedGreenColor(ny, nx, targetValue) {
  const curValue = map[ny][nx];

  if (targetValue === 'B' && curValue === 'B') return true;
  if (targetValue !== 'B' && (curValue === 'G' || curValue === 'R')) return true;
  return false;
}

function redGreenColorBlindness(sy, sx, visited) {
  const targetValue = map[sy][sx];
  const queue = new Queue();
  visited[sy][sx] = true;

  queue.push([sy, sx]);

  while (queue.size !== 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= SIZE || nx < 0 || nx >= SIZE) continue;
      if (visited[ny][nx]) continue;
      if (checkRedGreenColor(ny, nx, targetValue)) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
}

let normalAreaCount = 0;
const normalVisited = new Array(SIZE).fill().map(() => new Array(SIZE).fill(false));
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    if (!normalVisited[y][x]) {
      normal(y, x, normalVisited);
      normalAreaCount += 1;
    }
  }
}

let specialAreaCount = 0;
const specialVisited = new Array(SIZE).fill().map(() => new Array(SIZE).fill(false));
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    if (!specialVisited[y][x]) {
      redGreenColorBlindness(y, x, specialVisited);
      specialAreaCount += 1;
    }
  }
}

console.log(normalAreaCount, specialAreaCount);
