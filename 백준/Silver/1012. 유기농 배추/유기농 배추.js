const bfs = (graph, start) => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const needVisit = [];

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const [y, x] = needVisit.shift();

    if (graph[y][x] !== 0) {
      graph[y][x] = 0;

      for (let i = 0; i < dx.length; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (ny >= 0 && nx >= 0 && ny <= graph.length - 1 && nx <= graph[0].length - 1 && graph[ny][nx] !== 0)
          needVisit.push([ny, nx]);
      }
    }
  }
};

const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const testCount = parseInt(input[0]); // 컴퓨터 개수
input.shift();

let safeCount = [];

const fields = new Array(testCount + 1).fill().map(() => []); // 테스트 밭 개수

let nowField = 0;

for (let i = 0; i < input.length; i++) {
  const command = input[i].split(' ').map(Number);

  if (command.length === 3) {
    nowField++; // 현재 배추 심을 밭 지정

    const [width, height, plantCount] = command;

    // 밭 생성
    fields[nowField] = new Array(height + 1).fill().map(() => new Array(width + 1).fill(0));
  } else {
    const [x, y] = command;
    fields[nowField][y][x] = 1;
  }
}
// 모든 밭에 배추를 다 심은 상황

fields.shift();

const result = fields.map((field) => {
  let bugs = 0;

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[0].length; j++) {
      if (field[i][j] !== 0) {
        bfs(field, [i, j]);
        bugs++;
      }
    }
  }

  return bugs;
});

console.log(result.join('\n'));
