const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const SIZE = parseInt(input[0]);
const [TEACHER, STUDENT, BARRIER, EMPTY] = ['T', 'S', 'O', 'X'];
const [CAN_HIDE, CANT_HIDE] = ['YES', 'NO'];

const map = new Array(SIZE).fill();

for (let i = 0; i < SIZE; i++) {
  map[i] = input[i + 1].split(' ');
}

function detectStudent(y, x) {
  for (let ny = y; ny >= 0; ny--) {
    if (map[ny][x] === BARRIER) break;
    if (map[ny][x] === STUDENT) return true;
  }

  for (let nx = x; nx < SIZE; nx++) {
    if (map[y][nx] === BARRIER) break;
    if (map[y][nx] === STUDENT) return true;
  }

  for (let ny = y; ny < SIZE; ny++) {
    if (map[ny][x] === BARRIER) break;
    if (map[ny][x] === STUDENT) return true;
  }

  for (let nx = x; nx >= 0; nx--) {
    if (map[y][nx] === BARRIER) break;
    if (map[y][nx] === STUDENT) return true;
  }

  return false;
}

function isAllHide() {
  //선생님들 위치에서 상하좌우를 봐야한다.
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (map[y][x] === TEACHER) {
        // 상하좌우
        const isDetectStudent = detectStudent(y, x);
        if (isDetectStudent) return false;
      }
    }
  }

  return true;
}

const emptyList = [];
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    if (map[y][x] === EMPTY) emptyList.push([y, x]);
  }
}

// 3개의 좌표를 뽑아서 만들어야한다.

const temp = [];
const combList = [];
function comb(idx) {
  if (temp.length === 3) {
    combList.push([...temp]);
    return;
  }

  for (let i = idx; i < emptyList.length; i++) {
    temp.push(emptyList[i]);
    comb(i + 1);
    temp.pop();
  }
}
comb(0);

let canAllHide = false;
for (let i = 0; i < combList.length; i++) {
  if (canAllHide) break;

  const comb = combList[i];
  comb.forEach(([y, x]) => (map[y][x] = BARRIER));

  if (isAllHide()) canAllHide = true;

  comb.forEach(([y, x]) => (map[y][x] = EMPTY));
}

console.log(canAllHide ? CAN_HIDE : CANT_HIDE);
