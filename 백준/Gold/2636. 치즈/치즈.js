/*
최외곽에 있는 치즈만 녹아서 없어진다..

치즈가 모두 녹아 없어지는데 걸리는 시간과
모두 녹기 한시간 전(최후의 치즈들)의 치즈가 있는 칸의 개수를 구해보자.

가로 세로의 최대는 100 총 만 칸

bfs를 딱 한번씩만 실행한다. 근데 이게 어케 되냐는거잖아?

치즈를 -1로 바꾸던가 해서 몇 시간 후에 치즈가 녹는지를 1 2 3 으로 표시할 수 있어야할 것 같다. 
치즈인 1의 입장에서 주변에 0이 있으면 곧 녹는 치즈 표시를 한다. ( -1 -> 1)
1로 표시(마지막 시간)으로 표시된 것들을 전부 0으로 갈아끼운다(녹았음)
그렇게 갈아끼워지는 치즈의 개수를 계속 store 하면 될 것 같은데.

for(2중) 
    만약 치즈면 상하좌우에 0이 있다면 이걸 -1로 바꾼다. 모든 치즈에 대해서..
    맵을 다 돌았다면 -1이 되어있는 치즈의 개수를 센다. 그리고 count를 1 늘린다
    
    
구멍 고려를 못했다...
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

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const CHEESE = 1;
const EMPTY = 0;
const MELTING = '.';
const VISITED = 2;

// 벽도 함께 세워준다.
const map = new Array(H).fill();
map.push(new Array(W + 2).fill(0));
for (let i = 0; i < H; i++) {
  const row = input[i + 1];
  map[i] = [0, ...row.split(' ').map(Number), 0];
}
map.push(new Array(W + 2).fill(0));

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

let time = 0;
let lastMeltingCheeses = 0;

function bfs([sy, sx]) {
  const queue = new Queue();
  queue.push([sy, sx]);
  map[sy][sx] = VISITED;

  while (queue.getSize()) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= H + 2 || nx < 0 || nx >= W + 2) continue;
      if (map[ny][nx] === EMPTY) {
        map[ny][nx] = VISITED;
        queue.push([ny, nx]);
      } else if (map[ny][nx] === CHEESE) map[ny][nx] = MELTING;
    }
  }
}

while (1) {
  let curMeltingCheeses = 0;

  bfs([0, 0]);

  for (let y = 0; y < H + 2; y++) {
    for (let x = 0; x < W + 2; x++) {
      if (map[y][x] === MELTING || map[y][x] === VISITED) {
        if (map[y][x] === MELTING) curMeltingCheeses += 1;
        map[y][x] = EMPTY;
      }
    }
  }

  if (curMeltingCheeses === 0) break;
  else lastMeltingCheeses = curMeltingCheeses;
  time += 1;
}

console.log(time);
console.log(lastMeltingCheeses);
