/*

s: 4: 18 -> 48 정지 51 시작 -> 

L <= 인구 차이 <= R이라면 하루동안 연다.
모든 나라에 대해 이 국경선이 모두 열렸다면 인구 이동 시작.
=> 인구이동이 진행되는 곳 = 연합

연합의 각 칸의 인구수는 연합의 인구수/연합 칸의 개수. 소수점은  floor로 제거

연합 해체= 국경선 닫닫

각 나라의 인구수가 주어졌을 때, 인구 이동이 며칠 동안 발생하는지...

0일차
1. 차이를 확인하고 벽세우기
2. 공유 가능한 애들끼리 연합 평균 구해서 인구수 맵을 갱신한다 => 1일차

Q) 벽을 어떻게 세울 것인가? -> 각 칸에 대해 상하좌우로 갈 수 있는지 여부를 저장한다. 
Q) 공유할 수 있는 영역은 어떻게 탐색할 것인가? -> 유효 좌표 확인 + visited 확인 + 상하좌우(벽) 확인 
Q) 하루하루 반복은 어떻게 할 것인가? -> 모든 벽이 세워지면 끝임.(벽이 세워진다 === 인간공유 불가)
벽을 세우는 프로세스가 모든 벽이 세워졌는지 여부를 반환하게 하고 while 조건 안에 넣으면 될 것 같다. 

[ 수도 코드 ]
 
const map
const wallMap 2차원 // [[1, 0, 1, 0 또는 '1010'], ...] // 북쪽부터 시계방향으로 1이면 벽, 0이면 벽이 아님

function 벽세우기 {
    let 하나라도 안세워진 벽이 있나요 = false;
    
    모든 칸에 대해 {
        상하좌우의 값이 이상이하가 맞다면 벽을 세운다(1로 교환)
        벽을 안세운다면 { 하나라도 안세워진 = true};
    }
    
    return 하나라도 안세워진 벽이 있나요
}

while(벽세우기) {
    for(모든 칸에 대해) {
        bfs
        bfs에서 얻어온 연합location과 총 sum으로 각 칸의 인구수 갱신
    }
}
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

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];
function getIsAllWallAndBuildWall() {
  let isAllWall = true;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      for (let i = 0; i < DX.length; i++) {
        const [ny, nx] = [y + DY[i], x + DX[i]];

        if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;

        const diff = Math.abs(map[y][x] - map[ny][nx]);
        if (diff < min || diff > max) {
          wallMap[y][x][i] = 1;
          wallMap[ny][nx][i <= 1 ? i + 2 : i - 2] = 1;
        } else if (isAllWall) isAllWall = false;
      }
    }
  }

  return isAllWall;
}

// locationList와 평균(각 칸 인구수)을 반환할 예정
function bfs([sy, sx]) {
  const unionList = [];
  unionList.push([sy, sx]);
  let sum = 0;

  const queue = new Queue();
  queue.push([sy, sx]);
  sum += map[sy][sx];

  const visited = new Array(n).fill().map(() => new Array(n).fill(0));
  visited[sy][sx] = 1;

  while (queue.size) {
    const [y, x] = queue.shift();

    for (let i = 0; i < DX.length; i++) {
      const [ny, nx] = [y + DY[i], x + DX[i]];

      if (ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx]) continue;

      if (wallMap[y][x][i] === 0) {
        // 벽이 없다면
        queue.push([ny, nx]);
        sum += map[ny][nx];
        visited[ny][nx] = 1;
        unionList.push([ny, nx]);
      }
    }
  }

  return [unionList, Math.floor(sum / unionList.length)];
}

// -- 시작 --
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, min, max] = input[0].split(' ').map(Number);
const map = new Array(n).fill();
let wallMap = new Array(n).fill().map(() => new Array(n).fill().map(() => new Array(4).fill(0))); // 3차원의 벽 배열

// 맵 생성
for (let i = 0; i < n; i++) {
  const row = input[i + 1].split(' ').map(Number);
  map[i] = row;
}

let days = 0;

let prevUnion = new Array(n).fill().map(() => new Array(n).fill(0));
while (!getIsAllWallAndBuildWall()) {
  days += 1;
  let now = new Array(n).fill().map(() => new Array(n).fill(0));

  const alreadyCheck = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (days !== 1 && prevUnion[y][x] === 0) continue; // 이전에 변경된 영역에서만 탐색

      if (alreadyCheck[y][x] === 0) {
        const [unionList, eachCount] = bfs([y, x]);

        unionList.forEach(([y, x]) => {
          alreadyCheck[y][x] = 1;
          map[y][x] = eachCount;
        });

        if (unionList.length >= 2) {
          unionList.forEach(([y, x]) => (now[y][x] = 1)); // 변경된 부분
        }
      }
    }
  }

  prevUnion = now;
  wallMap = new Array(n).fill().map(() => new Array(n).fill().map(() => new Array(4).fill(0)));
}

console.log(days);
