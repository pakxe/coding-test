function get1(arr) {
  const a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) a.push(i);
  }
  return a;
}

class Node {
  constructor() {
    this.left = this;
    this.right = this;
    this.up = this;
    this.down = this;
    this.column = this;
    this.rowName = this;
  }
}

class ColumnNode extends Node {
  constructor(name) {
    super();
    this.name = name;
    this.size = 0;
  }
}

class DLX {
  constructor() {
    this.header = new ColumnNode('header');
    this.rows = [];
    this.columns = [];
    this.row = 0;
  }

  addColumn(name) {
    const newColumn = new ColumnNode(name);

    newColumn.right = this.header;
    newColumn.left = this.header.left;
    newColumn.left.right = newColumn;
    this.header.left = newColumn;

    this.columns.push(newColumn);
    return newColumn;
  }

  addRow(rowData) {
    // rowName과 row 한 줄
    let firstNode = null;
    let prevNode = null;
    const { rowName, data } = rowData;

    /**
     * 만약 4개의 1 중에 하나라도 없는 col의 1이라면
     * 이 행은 추기하지 않는다. 어차피 불가능하므로.
     * d
     */
    // console.log(this.columns.map(({ name }) => name).join(' | '));
    const oneIndexList = get1(data); // 4개
    // console.log(oneIndexList);
    for (let i = 0; i < oneIndexList.length; i++) {
      if (!this.columns.find(({ name }) => name === `col ${oneIndexList[i]}번`)) {
        // console.log(`col ${oneIndexList[i]}번`);
        // console.log(oneIndexList[i]);
        return;
      }
    }

    data.forEach((data, index) => {
      if (data !== 0) {
        let column = this.columns.find(({ name }) => name === `col ${index}번`);
        // if (column === undefined) return;
        let newNode = new Node();
        newNode.rowName = rowName; // 마지막 row
        newNode.column = column;

        if (!firstNode) {
          firstNode = newNode;
        }

        if (prevNode) {
          newNode.left = prevNode;
          prevNode.right = newNode;
        }

        newNode.up = column.up;
        newNode.down = column;
        column.up.down = newNode;
        column.up = newNode;
        column.size++;

        prevNode = newNode;
      }
    });

    if (firstNode) {
      firstNode.left = prevNode;
      prevNode.right = firstNode;
      this.rows.push({ rowName, row: firstNode });
    }
  }

  cover(column) {
    column.right.left = column.left;
    column.left.right = column.right;

    for (let i = column.down; i !== column; i = i.down) {
      for (let j = i.right; j !== i; j = j.right) {
        j.down.up = j.up;
        j.up.down = j.down;
        j.column.size--;
      }
    }
  }

  uncover(column) {
    for (let i = column.up; i !== column; i = i.up) {
      for (let j = i.left; j !== i; j = j.left) {
        j.column.size++;
        j.down.up = j;
        j.up.down = j;
      }
    }
    column.right.left = column;
    column.left.right = column;
  }

  search(sol) {
    // console.log('hi');
    const a = [];
    for (let i = this.header.right; i !== this.header; i = i.right) {
      a.push(i.size);
    }
    // console.log(a.join(' | '));

    const b = [];
    for (let i = 0; i < this.rows.length; i++) {
      b.push(this.rows[i].rowName);
    }
    // console.log(b.join(' | '));

    if (this.header.right === this.header) return 1;
    /**
     * 제일 최소 콜을 선택한다.
     * 그 콜을 돌면서 하나씩 행을 지워본다.
     *
     * 종료 조건은 행이 하나 남고 그 행의 열들이 모두 1인 경우.
     */

    // 최소 콜 찾기
    let min = Infinity;
    let minCol = null;

    // console.log('hi');
    for (let i = this.header.right; i !== this.header; i = i.right) {
      // console.log(i.size, i.name);

      if (i.size < min) {
        if (i.size === 0) return 0; // 실패
        min = i.size;
        minCol = i;
      }
    }

    this.cover(minCol);

    for (let i = minCol.down; i !== minCol; i = i.down) {
      sol.push(i.rowName); // 행 번호 (선택된 것)

      for (let j = i.right; j !== i; j = j.right) {
        this.cover(j.column);
      }

      if (this.search(sol) === 1) return 1; // 성공s
      else {
        sol.pop();

        for (let j = i.left; j !== i; j = j.left) {
          this.uncover(j.column);
        }
      }
    }

    this.uncover(minCol);

    return 0;
  }

  deleteRow(rName) {
    // 이미 지워져서 없을 수 있음
    const searchRow = this.rows.find(({ rowName }) => rowName === rName);
    if (!searchRow) return;
    const { row } = searchRow;

    for (let i = row.right; i !== row; i = i.right) {
      i.up.down = i.down;
      i.down.up = i.up;
      i.column.size--;
    }

    row.up.down = row.down;
    row.down.up = row.up;
    row.column.size--;

    this.rows = this.rows.filter((r) => r !== searchRow);
  }

  deleteFilledOne(rName) {
    // 답 행을 선택한다
    // 이 행에 1이 있는 열들을 순회한다.
    // 이 열에서 1이 있는 행을 아예 삭제한다.

    // 얘는 없을 확률 없다. 그러니 바로 찾자
    const searchRow = this.rows.find(({ rowName }) => rowName === rName);
    // if (!searchRow) return;
    const { row } = searchRow;

    for (let i = row.right; i !== row; i = i.right) {
      const col = i.column;
      for (let j = col.down; j !== col; j = j.down) {
        for (let k = j.right; k !== j; k = k.right) {
          k.up.down = k.down;
          k.down.up = k.up;
          k.column.size--;
        }
        j.up.down = j.down;
        j.down.up = j.up;
        j.column.size--;

        this.rows = this.rows.filter(({ rowName }) => j.rowName !== rowName);
      }

      col.right.left = col.left;
      col.left.right = col.right;

      // console.log(this.columns.map(({ name }) => name).join(' / '));
      this.columns = this.columns.filter(({ name }) => name !== col.name);
    }

    const rowCol = row.column;
    this.columns = this.columns.filter(({ name }) => name !== rowCol.name);

    rowCol.right.left = rowCol.left;
    rowCol.left.right = rowCol.right;

    for (let i = rowCol.down; i !== rowCol; i = i.down) {
      for (let j = i.right; j !== i; j = j.right) {
        j.up.down = j.down;
        j.down.up = j.up;
        j.column.size--;
      }
      i.up.down = i.down;
      i.down.up = i.up;
      i.column.size--;

      this.rows = this.rows.filter(({ rowName }) => i.rowName !== rowName);
    }
  }
}

// Example usage
const dlx = new DLX();
const SIZE = 9;

/**
 * row 를 만드는게 필요하다.
 * 모든 경우의 수에 대해서 row를 채운다.
 *
 * 이미 채워진 값에 대해서는 어떻게 해야할까?
 * 이미 채워진 값을 제외하고 3개의 row를 제거한다.
 *
 * row를 어떻게 만들 수 있을까?
 */

function getSquareIndex(y, x) {
  const SECTION_SIZE = Math.sqrt(SIZE);

  return Math.floor(y / SECTION_SIZE) * SECTION_SIZE + Math.floor(x / SECTION_SIZE);
}

function makeRow(y, x, value) {
  const rowName = `${y} ${x} ${value}`;

  // 네모, 행, 열에 대해서 4 * 4 * 3

  const RowLine = new Array(SIZE ** 2).fill(0);
  const RowIndex = y * SIZE + (value - 1);
  RowLine[RowIndex] = 1;

  const ColLine = new Array(SIZE ** 2).fill(0);
  const ColIndex = x * SIZE + (value - 1);
  ColLine[ColIndex] = 1;

  // 네모에 대해서 16개의 열을 만들고 1을 채워야 한다.
  const squareLine = new Array(SIZE ** 2).fill(0);
  const SquareIndex = getSquareIndex(y, x) * SIZE + (value - 1);
  squareLine[SquareIndex] = 1;

  const locationLine = new Array(SIZE ** 2).fill(0);
  const locationIndex = y * SIZE + x;
  locationLine[locationIndex] = 1;

  return { rowName, data: [...RowLine, ...ColLine, ...squareLine, ...locationLine] };
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const map = new Array(SIZE).fill();

// 맵 채우기
for (let i = 0; i < SIZE; i++) {
  map[i] = input[i].trim().split(' ').map(Number);
}

const rowList = [];
const colList = new Array(SIZE ** 2 * 4).fill(true);

for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    for (let i = 1; i <= SIZE; i++) {
      if (map[y][x] === i) {
        const a = makeRow(y, x, i); // 한 줄
        // console.log(a.data.filter((a) => a === 1));
        const ones = get1(a.data);
        ones.forEach((l) => {
          colList[l] = false;
        });
      } else if (map[y][x] === 0) {
        const a = makeRow(y, x, i); // 한 줄

        rowList.push(a); // map[y][x] === 0
      }
    }
  }
}

// console.log(rowList.map(({ data }) => data.join('')).join('\n'));

// 열 헤더 추가
colList.forEach((val, i) => {
  if (val) {
    dlx.addColumn(`col ${i}번`);
  }
});

// console.log(dlx.columns.map(({ name }) => name).join(' | '));

// 행 추가
rowList.forEach((row) => {
  dlx.addRow(row);
});

// for (let y = 0; y < SIZE; y++) {
//   for (let x = 0; x < SIZE; x++) {
//     if (map[y][x] !== 0) {
//       /**
//        * 값이 있는 항이라면, 이 행과 열과 행을 제거한다.
//        * 값이 없는 항이면,
//        * 그 행의 바로 위 아래를 청소한다. 끝.
//        */
//       // dlx.deleteFilledOne(`${y} ${x} ${map[y][x]}`);

//       for (let i = 1; i <= SIZE; i++) {
//         if (map[y][x] === i) continue;
//         dlx.deleteRow(`${y} ${x} ${i}`);
//       }
//     }
//   }
// }

const sol = [];
dlx.search(sol);
// console.log(sol);

sol.forEach((value) => {
  // console.log(value);
  const [y, x, v] = value.split(' ').map(Number);

  map[y][x] = v;
});

console.log(map.map((v) => v.join(' ')).join('\n'));

/**
 * 이미 존재하는 값에 대해서는..
 * row를 추가하지 않는다. 그리고 이 row가 차지하는 3개의 col을 추가하지 않는다.
 */
