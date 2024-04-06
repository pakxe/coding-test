/*
크로스 해칭
1. 1 ~ 9 중 숫자를 하나 고른다.
2. 고른 숫자가 포함되지 않는 스퀘어를 고른다.
3. 고른 스퀘어에서 수직, 수평 스퀘어중 고른 숫자를 포함한 스퀘어에서 고른 스퀘어를 향해 수직, 수평 선을 긋는다.
4. 만약 선이 겹친다면 중단하고 ERROR를 출력한다.
3. 3*3에 빈칸이 하나만 남는다면(이미 숫자가 채워진 칸 제외) 그 칸을 채운다. 

1. 1 ~ 9 중 숫자를 하나 고른다.
    -> 맵을 돌면서 현재 채워진 숫자들을 모은다.그리고 그렇게 모은 숫자들로만 for를 돈다.
2. 고른 숫자가 포함되지 않는 스퀘어를 고른다.
    -> 9개의 스퀘어를 돌면서 고른 숫자가 없는 스퀘어 선택
3. 고른 스퀘어에서 수직, 수평 스퀘어중 고른 숫자를 포함한 스퀘어에서 고른 스퀘어를 향해 수직, 수평 선을 긋는다.
    -> 스퀘어의 칸 중 비어있는 칸을 선택한다.
    -> 그리고 가로 세로 칸을 확인한다. 만약 숫자가 있다면 그 칸은 continue
4. 만약 선이 겹친다면 중단하고 ERROR를 출력한다.
    -> 만약 1개 이상이라면 ERROR
3. 3*3에 빈칸이 하나만 남는다면(이미 숫자가 채워진 칸 제외) 그 칸을 채운다. 
    -> 
    
(위에는 제외) 

스퀘어를 선택하고 빈칸을 찾을 때 스퀘어의 행3개, 열3개에 그 숫자가 몇개나 있는지 확인한다.
1개 초과면 ERROR
1개면 그 칸 사용 불가
0개면 사용 가능

1. 스퀘어에 값을 채우는 함수 
    -> 3*3 visited를 만든다. 
    -> 3개의 행, 3개의 열을 확인하고 visited를 채운다. 
    -> 6개를 모두 방문한 후, visited의 빈칸이 하나라면 값을 채운다. 
2. 1을 위해 행, 열에 값이 1개 초과면 ERROR, 1개면 불가, 0개면 가능을 반환하는 함수






0 3 6
이 중 2개를 순서 생각해 조합하는 결과

00 03 06
30 33 36
60 63 66

*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const SIZE = 9;

const map = new Array(SIZE).fill().map((_, i) =>
  input[i].split('').map((v) => {
    if (isNaN(v)) return v;
    else return parseInt(v);
  }),
);

const singleLocations = new Array(SIZE)
  .fill(0)
  .map((_, i) => i)
  .filter((_, i) => i % 3 === 0);
const temp = [];

function isSame(arr1, arr2) {
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (arr1[y][x] !== arr2[y][x]) return false;
    }
  }
  return true;
}

// 사각형 왼쪽 상단 좌표 찾는 로직
const squareLocations = [];
function makePermutationBT() {
  if (temp.length === 2) {
    squareLocations.push([...temp]);
    return;
  }

  for (let i = 0; i < singleLocations.length; i++) {
    temp.push(singleLocations[i]);
    makePermutationBT();
    temp.pop();
  }
}
makePermutationBT();

// 현재 맵에서 채워진 숫자들 반환하는 로직
function findNumbers() {
  let set = new Set();

  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (map[y][x] !== '.') set.add(map[y][x]);
    }
  }

  return [...set];
}

// 주어진 좌표(꼭 왼쪽 상단이어야)의 스퀘어에서 인자 값이 존재하는지 확인하는 함수
function haveNumberInSquare(yy, xx, value) {
  for (let y = 0; y < SIZE / 3; y++) {
    for (let x = 0; x < SIZE / 3; x++) {
      if (map[yy + y][xx + x] === value) return true;
    }
  }
  return false;
}

function countNumberRow(y, value) {
  let count = 0;
  for (let x = 0; x < SIZE; x++) {
    if (map[y][x] === value) count += 1;
  }
  return count;
}

function countNumberCol(x, value) {
  let count = 0;
  for (let y = 0; y < SIZE; y++) {
    if (map[y][x] === value) count += 1;
  }
  return count;
}

const ERROR = 'ERROR';

function fillSquare(yy, xx, value) {
  // 3 * 3
  const isFilled = new Array(SIZE / 3).fill().map(() => new Array(SIZE / 3).fill(false));

  for (let y = 0; y < SIZE / 3; y++) {
    for (let x = 0; x < SIZE / 3; x++) {
      if (map[y + yy][x + xx] !== '.') isFilled[y][x] = true;
    }
  }

  let isError = false;

  // 가로 확인
  for (let y = 0; y < SIZE / 3; y++) {
    const rowValueCount = countNumberRow(y + yy, value);
    if (rowValueCount > 1) {
      isError = true;
      break;
    } else if (rowValueCount === 1) {
      isFilled[y].forEach((_, i) => {
        isFilled[y][i] = true; // row 채우기
      });
    }
  }

  if (isError) return ERROR;

  for (let x = 0; x < SIZE / 3; x++) {
    const rowValueCount = countNumberCol(x + xx, value);

    if (rowValueCount > 1) {
      isError = true;
      break;
    } else if (rowValueCount === 1) {
      isFilled.forEach((_, i) => {
        isFilled[i][x] = true;
      }); // col 채우기
    }
  }

  if (isError) return ERROR;

  let emptyCount = 0;

  for (let y = 0; y < SIZE / 3; y++) {
    for (let x = 0; x < SIZE / 3; x++) {
      if (isFilled[y][x] === false) emptyCount += 1;
    }
  }

  if (emptyCount === 0) return ERROR;
  else if (emptyCount === 1) {
    let [emptyY, emptyX] = [0, 0];
    // 빈 곳 찾기
    square: for (let y = 0; y < SIZE / 3; y++) {
      for (let x = 0; x < SIZE / 3; x++) {
        if (isFilled[y][x] === false) {
          emptyY = y;
          emptyX = x;
          break square;
        }
      }
    }

    map[emptyY + yy][emptyX + xx] = value;
  }
}

const alreadyFilledNumbers = findNumbers();

let isError = false;

let beforeMap = new Array(SIZE).fill().map(() => new Array(SIZE).fill(0));

while (true) {
  mainFor: for (let i = 1; i <= 9; i++) {
    const validSquareList = squareLocations.filter(([y, x]) => {
      if (haveNumberInSquare(y, x, i)) return false;
      return true;
    });

    for (let j = 0; j < validSquareList.length; j++) {
      const [y, x] = validSquareList[j];
      const result = fillSquare(y, x, i);

      // 에러 반환시 중단
      if (result === ERROR) {
        isError = true;
        break mainFor;
      }
    }
  }

  if (isSame(beforeMap, map)) break;
  beforeMap = new Array(SIZE).fill().map((_, i) => [...map[i]]);
}

if (isError) console.log(ERROR);
else console.log(map.map((v) => v.join('')).join('\n'));
