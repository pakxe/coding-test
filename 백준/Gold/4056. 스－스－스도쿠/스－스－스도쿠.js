const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const tryCount = parseInt(input[0]);
const INVALID_SUDOKU = 'Could not complete this grid.';

const SIZE = 9;

const map = new Array(SIZE).fill();

function getNeedFill() {
  const needFill = [];

  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (map[y][x] === 0) needFill.push([y, x]);
    }
  }

  return needFill;
}

function isFineAll(y, x, value) {
  return !hasValueInRow(y, value) && !hasValueInCol(x, value) && !hasValueInSquare(y, x, value);
}

function hasValueInRow(y, value) {
  for (let x = 0; x < SIZE; x++) {
    if (map[y][x] === value) return true;
  }

  return false;
}

function hasValueInCol(x, value) {
  for (let y = 0; y < SIZE; y++) {
    if (map[y][x] === value) return true;
  }

  return false;
}

function hasValueInSquare(yy, xx, value) {
  const [ny, nx] = [Math.floor(yy / 3) * 3, Math.floor(xx / 3) * 3];

  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if (map[y + ny][x + nx] === value) return true;
    }
  }

  return false;
}

function checkRow() {
  for (let y = 0; y < SIZE; y++) {
    const set = new Set();

    for (let x = 0; x < SIZE; x++) {
      const cur = map[y][x];

      if (set.has(cur)) return false;
      else set.add(cur);
    }

    if (set.size !== SIZE) return false;
  }

  return true;
}

function checkCol() {
  for (let x = 0; x < SIZE; x++) {
    const set = new Set();

    for (let y = 0; y < SIZE; y++) {
      const cur = map[y][x];

      if (set.has(cur)) return false;
      else set.add(cur);
    }

    if (set.size !== SIZE) return false;
  }

  return true;
}

function checkSquare() {
  const squares = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6],
  ];

  for (let i = 0; i < squares.length; i++) {
    const [ny, nx] = squares[i];
    const set = new Set();

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        const cur = map[y + ny][x + nx];

        if (set.has(cur)) return false;
        else set.add(cur);
      }
    }

    if (set.size !== SIZE) return false;
  }

  return true;
}

function checkIsAnswer() {
  // 가로 세로 네모 전부 생각해야한다.

  return checkSquare() && checkCol() && checkRow();
}

let needFill;
let isClear = false;
const resultList = [];

function bt(curIdx) {
  if (curIdx === needFill.length) {
    if (checkIsAnswer()) {
      isClear = true;
      resultList.push(map.map((v) => v.join('')).join('\n'));
    }

    return;
  }

  for (let i = 1; i <= SIZE; i++) {
    const [y, x] = needFill[curIdx];
    if (!isFineAll(y, x, i)) continue;

    map[y][x] = i;
    bt(curIdx + 1);
    map[y][x] = 0;
  }
}

let idx = 1;

for (let i = 0; i < tryCount; i++) {
  isClear = false;

  for (let j = 0; j < SIZE; j++) {
    map[j] = input[idx++].split('').map(Number);
  }

  needFill = getNeedFill();
  bt(0);

  if (!isClear) resultList.push(INVALID_SUDOKU);
}

console.log(resultList.join('\n\n'));
