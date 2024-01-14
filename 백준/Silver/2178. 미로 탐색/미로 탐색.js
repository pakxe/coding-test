const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const VISITED = -1;
const WALL = 0;
const INVALID_TILE = [VISITED, WALL];

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

const [row, col] = input.shift().split(' ').map(Number);
const map = new Array(row).fill();

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

for (let i = 0; i < row; i++) {
  const col = input[i].split('').map(Number);
  map[i] = col;
}

function bfs([x, y]) {
  const queue = new Queue();
  queue.push([x, y, 1]); // 그때까지 걸린 걸음은 0

  while (queue.getSize !== 0) {
    const [x, y, count] = queue.shift();

    if (y === row - 1 && x === col - 1) {
      // 탈출위치
      console.log(count);
      break;
    }

    for (let i = 0; i < 4; i++) {
      if (
        ![-1, row].includes(y + DY[i]) &&
        ![-1, col].includes(x + DX[i]) &&
        !INVALID_TILE.includes(map[y + DY[i]][x + DX[i]])
      ) {
        queue.push([x + DX[i], y + DY[i], count + 1]);
        map[y + DY[i]][x + DX[i]] = VISITED;
      }
    }
  }
}

bfs([0, 0]);

/*
최단 거리를 찾아야함.  -> bfs

bfs는 같은 레벨을 먼저 탐색해야함. -> 큐

function bfs(시작위치) {
    큐
    시작위치를 큐에 넣는다.
    
    while(큐 길이가 0이 아니면 계속) {
        맨앞 shift로 빼낸다.
        이 값의 상하좌우를 push 한다.
        
}

}
    
*/
