class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);

    if (this.size === 0) this.head = node;
    else this.tail.next = node;

    this.tail = node;

    this.size += 1;
  }

  shift() {
    if (this.size === 0) return -1;

    const value = this.head.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else this.head = this.head.next;

    this.size -= 1;

    return value;
  }
}

// const perms = [];

const DAMAGE = [9, 3, 1];
function permutation(n, r, depth, perms) {
  if (depth === r) {
    perms.push([...DAMAGE]);
    return;
  }

  for (let i = depth; i < n; i++) {
    [DAMAGE[i], DAMAGE[depth]] = [DAMAGE[depth], DAMAGE[i]];
    permutation(n, r, depth + 1, perms);
    [DAMAGE[i], DAMAGE[depth]] = [DAMAGE[depth], DAMAGE[i]];
  }
}

function bfs(hp) {
  const queue = new Queue();
  queue.push(hp);

  const visited = new Array(61)
    .fill()
    .map(() => new Array(61).fill().map(() => new Array(61).fill(0)));
  visited[hp[0]][hp[1]][hp[2]] = 1; // 이미 계산한 값이라는 뜻

  while (queue.size) {
    const hp = queue.shift();
    const aliveSCVCount = hp.filter((scv) => scv > 0).length;

    if (visited[0][0][0]) break;

    // 반복문 밖(while 직후)는 종료 조건을 판단한다. 반복문 안에서 visited가 찍혔으면 종료되는 구조
    // 반복문에서는 체력을 깎고 큐에 넣는 행동만 한다.

    for (let i = 0; i < damage[aliveSCVCount].length; i++) {
      let damageIdx = 0;
      const [na, nb, nc] = hp.map((scv) => {
        if (scv === 0) return 0;
        else return Math.max(0, scv - damage[aliveSCVCount][i][damageIdx++]);
      });

      if (visited[na][nb][nc]) continue; // 이거 안넣으면 왜 1이 더해지는거지?

      visited[na][nb][nc] = visited[hp[0]][hp[1]][hp[2]] + 1;
      queue.push([na, nb, nc]);
    }
  }

  return visited[0][0][0] - 1;
}

// --- start ---

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const hp = input[1].split(' ').map(Number);

if (n !== 3) {
  for (let i = 0; i < 3 - n; i++) {
    hp.push(0);
  }
}

const damage = new Array(n + 1).fill();

// 생존한 scv 개수에 맞는 데미지 배열 준비
for (let i = 1; i <= n; i++) {
  const curPerm = [];
  permutation(i, i, 0, curPerm);
  damage[i] = curPerm;
}

const a = bfs(hp);
console.log(a);
