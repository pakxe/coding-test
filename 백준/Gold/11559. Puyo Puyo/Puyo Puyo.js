const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const HEIGHT = 12;
let map = new Array(HEIGHT).fill();

for (let i = 0; i < HEIGHT; i++) {
  map[i] = input[i].split('');
}

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
    this.#head = null;
    this.#tail = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.#head = node;
    } else {
      this.#tail.next = node;
    }
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
}

function applyGravity(map) {
  /*
    모든 열을 순회
        이때 제일 바닥(row) 부터 시작한다. 
        거기서부터 while위에 뭐가 걸릴 때까지 또는 천장에 닿을 때까지 탐색한다. 
        걸렸다면, 탈출하고 그 값을 시작한 위치로 옮긴다. 
        안걸렸다면 이 반복문을 탈출하고 다음 열로 이동한다.
    */

  for (let x = 0; x < map[0].length; x++) {
    for (let y = map.length - 1; y >= 0; y--) {
      if (map[y][x] !== '.') continue;

      let changeIdx = null;
      let count = 1;
      while (1) {
        if (y - count < 0) break;

        if (map[y - count][x] !== '.') {
          changeIdx = y - count;
          break;
        }

        count += 1;
      }

      if (changeIdx === null) break;

      // swap
      map[y][x] = map[changeIdx][x];
      map[changeIdx][x] = '.';
    }
  }
}

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];
function isCombo(sy, sx, visited, map) {
  const queue = new Queue();
  const targetPuyo = map[sy][sx];
  const targetPuyoLocations = [[sy, sx]];

  queue.push([sy, sx]);
  visited[sy][sx] = true;
  let totalPuyoCount = 1;

  while (queue.size) {
    const [y, x] = queue.shift();

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];
      if (ny >= map.length || ny < 0 || nx >= map[0].length || nx < 0) continue;
      if (visited[ny][nx] || map[ny][nx] !== targetPuyo) continue;

      queue.push([ny, nx]);
      visited[ny][nx] = true;
      totalPuyoCount += 1;
      targetPuyoLocations.push([ny, nx]);
    }
  }

  if (totalPuyoCount >= 4) {
    targetPuyoLocations.forEach(([y, x]) => {
      map[y][x] = '.';
    });

    return true;
  } else return false;
}

// 이전 스냅샷과 똑같다면 break;

function isSamePrevRound(prevMap, curMap) {
  for (let y = 0; y < prevMap.length; y++) {
    for (let x = 0; x < prevMap[0].length; x++) {
      if (prevMap[y][x] !== curMap[y][x]) return false;
    }
  }
  return true;
}

function copyArr(arr) {
  const newArr = new Array(arr.length).fill().map(() => new Array(arr[0].length));

  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[0].length; x++) {
      newArr[y][x] = arr[y][x];
    }
  }

  return newArr;
}

let comboCount = 0;

while (1) {
  const curMap = copyArr(map);

  let isCurCombo = false;
  const visited = new Array(HEIGHT).fill().map(() => new Array(map[0].length).fill(false));
  for (let y = 0; y < curMap.length; y++) {
    for (let x = 0; x < curMap[0].length; x++) {
      if (visited[y][x] || curMap[y][x] === '.') continue;
      const combo = isCombo(y, x, visited, curMap);
      isCurCombo = isCurCombo || combo;
    }
  }
  // console.log(curMap.map((v) => v.join('')).join('\n'));
  applyGravity(curMap);

  comboCount += isCurCombo ? 1 : 0;
  if (isSamePrevRound(map, curMap)) break;

  map = curMap;
}

console.log(comboCount);
