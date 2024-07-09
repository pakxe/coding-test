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

/*
맵은 정사각형. 
빈칸, 벽으로 이루어져 있다. 
일부 빈칸은 바이러스를 놓을 수 있다. 
바이러스는 상하좌우로 한 칸씩 복제된다. 

0 빈칸
1 벽
2 바이러스

M개의 바이러스를 놓을 것이다. 2의 칸 개수보다는 M이 작거나 같은 자연수이다. 
모든 빈칸에 바이러스를 퍼뜨리는 최소 시간을 구해야한다.
*/

const [EMPTY, WALL, VIRUS] = [0, 1, 2];
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [size, virusCount] = input[0].split(' ').map(Number);
const map = new Array(size).fill();
for (let i = 1; i <= size; i++) {
  map[i - 1] = input[i].split(' ').map(Number);
}

/*
바이러스가 가능한 위치를 모두 조합으로 뽑고.
뽑힌 모든 개수에 대해 bfs를 돌려 최소 시간을 구한다.
*/

/*
바이러스 좌표를 [y, x]로 뽑아놓는다.
그렇게 바이러스 배열을 만들고
바이러스 배열의 몇 번째 인덱스의 바이러스 위치를 선택하는지 고른다.
*/

const validVirusLocations = [];
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if (map[y][x] === VIRUS) validVirusLocations.push([y, x]);
  }
}

const temp = [];
const combs = [];
const comb = (idx) => {
  if (temp.length === virusCount) {
    combs.push([...temp]);
    return;
  }

  for (let i = idx; i < validVirusLocations.length; i++) {
    temp.push(i);
    comb(i + 1);
    temp.pop();
  }
};

// 조합 생성
comb(0);

/*
바이러스의 가능한 한 위치에 대해서 bfs를 돌린다.
몇 초에 거기에 위치해있는지도 함께 넣어야 할 것 같다. [1, 1, 1] => 1, 1에 1초

전염되는 곳에는 현재의 초에서 1초 증가한 값으로 한다. 
이미 방문 되었는지 여부를 체크해야한다.
*/

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];
const bfs = (virusLocations) => {
  let maxSecond = 0;
  const queue = new Queue();
  const visited = new Array(size).fill().map(() => new Array(size).fill(false));

  virusLocations.forEach(([y, x]) => {
    queue.push([y, x, 0]);
    visited[y][x] = true;
  });

  while (queue.size) {
    const [y, x, second] = queue.shift();

    maxSecond = Math.max(second, maxSecond);

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [DY[i] + y, DX[i] + x];

      if (nx < 0 || nx >= size || ny < 0 || ny >= size) continue;
      if (map[ny][nx] === WALL || visited[ny][nx] === true) continue;

      queue.push([ny, nx, second + 1]);
      visited[ny][nx] = true;
    }
  }

  let isAllVisited = true;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (map[y][x] !== WALL && visited[y][x] === false) {
        isAllVisited = false;
        break;
      }
    }
  }

  return [maxSecond, isAllVisited];
};

/*
모든 빈칸에 퍼뜨리지 못하는 경우는 모든 조합이 불가능했을때..
*/

let minSecond = Infinity;
for (let i = 0; i < combs.length; i++) {
  const locations = combs[i].map((idx) => validVirusLocations[idx]);
  const [second, isAllVisited] = bfs(locations);

  if (isAllVisited) minSecond = Math.min(second, minSecond);
}

if (minSecond === Infinity) console.log(-1);
else console.log(minSecond);
