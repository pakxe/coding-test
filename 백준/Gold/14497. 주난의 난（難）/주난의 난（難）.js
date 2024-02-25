/*
1을만나면 폭탄은 확산하지 않는다. 
0이면 
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

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];
function isEnd([sy, sx]) {
  const queue = new Queue();
  const visited = new Array(h).fill(false).map(() => new Array(w).fill(false));

  queue.push([sy, sx]);
  const deads = [];

  while (queue.size) {
    const [y, x] = queue.shift();

    if (map[y][x] === '#') {
      return true;
    }

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= h || nx < 0 || nx >= w || map[ny][nx] === '*') continue;
      if (visited[ny][nx]) continue;
      if (map[ny][nx] == '0' || map[ny][nx] === '#') {
        queue.push([ny, nx]);
        visited[ny][nx] = true;
      }
      if (map[ny][nx] == '1') deads.push([ny, nx]);
    }
  }

  deads.forEach(([y, x]) => (map[y][x] = 0));

  return false;
}

const [h, w] = input[0].split(' ').map(Number);
const [boomY, boomX, targetY, targetX] = input[1]
  .split(' ')
  .map(Number)
  .map((el) => el - 1);

const map = new Array(h).fill();

for (let i = 0; i < h; i++) {
  map[i] = input[i + 2].split('');
}

let jumpCount = 1;

// for (let i = 0; i < 3; i++) {
//   const result = isEnd([boomY, boomX]);

//   console.log(result);
//   console.log(map.map((el) => el.join(' ')).join('\n'));
//   if (result) {
//     console.log(jumpCount);
//   } else jumpCount += 1;
// }

while (true) {
  const result = isEnd([boomY, boomX]);

  // console.log(result);
  // console.log(map.map((el) => el.join(' ')).join('\n'));
  if (result) {
    console.log(jumpCount);
    break;
  } else jumpCount += 1;
}
