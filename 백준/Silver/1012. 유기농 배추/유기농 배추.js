/*
테스트 케이스의 개수만큼 반복하는데, 가로 세로 배추 개수를 그 다음줄에 입력받는다.
그리고 배추의 위치에 해당하는 대로 맵에 기록한다. 

맵에 기록 후 bfs를 돌려 배추흰지렁이가 필요한 개수를 구한다.

let 테스트 인덱스 = 0;
const answers = [];

for 테스트 개수
    const 가로 세로 배추개수
    const map = 0으로 초기화된 맵
    let j = 테스트 인덱스
    // 맵에 쓰기
    for(;j < 배추 개수; j++) {
        const 배추 위치
        map[배추 위치] = 배추;
    }
    
    테스트 인덱스 = j;
    const bugCount = getBugCount(map, start);
    answers.push(bugCount);
}

let bugCount = 0;

for 맵 가로
    for 맵 세로
        bfs로 돌면서 선택된건 NONE으로 바꾼다. 큐가 비면 그때 끝
        bugCount++;
        
return bugCount;
*/
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

const [HAVE, NONE] = [1, 0];
const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

function bfs(map, [x, y]) {
  const [row, col] = [map.length, map[0].length];
  const queue = new Queue();
  queue.push([x, y]);
  map[y][x] = NONE;

  while (queue.getSize() !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      if (
        ![-1, col].includes(x + DX[i]) &&
        ![-1, row].includes(y + DY[i]) &&
        map[y + DY[i]][x + DX[i]] !== NONE
      ) {
        queue.push([x + DX[i], y + DY[i]]);
        map[y + DY[i]][x + DX[i]] = NONE;
      }
    }
  }
}

function getBugCount(map) {
  let bugCount = 0;

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      if (map[y][x] === HAVE) {
        bfs(map, [x, y]);
        bugCount++;
      }
    }
  }

  return bugCount;
}

let testCount = Number(input.shift());
let testIndex = 0;
const answers = [];

for (let i = 0; i < testCount; i++) {
  const [col, row, count] = input[testIndex].split(' ').map(Number);
  const map = new Array(row).fill().map(() => new Array(col).fill(NONE));

  let j;
  for (j = 0; j < count; j++) {
    const [x, y] = input[j + testIndex + 1].split(' ').map(Number);
    map[y][x] = HAVE;
  }

  testIndex = testIndex + j + 1;
  const bugCount = getBugCount(map);
  answers.push(bugCount);
}

console.log(answers.join('\n'));
