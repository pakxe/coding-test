const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [height, width] = input[0].split(' ').map(Number); // 컴퓨터 개수
input.shift();

const graph = input.map((row) => row.split('').map(Number));


const bfs = (graph, start) => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const needVisit = [];

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const [y, x, stepCount] = needVisit.shift();

    if (y === graph.length - 1 && x === graph[0].length - 1) return stepCount;

    if (graph[y][x] !== 0) {
      graph[y][x] = 0;

      for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (ny >= 0 && nx >= 0 && ny <= graph.length - 1 && nx <= graph[0].length - 1 && graph[ny][nx] !== 0)
          needVisit.push([ny, nx, stepCount + 1]);
      }
    }
  }
};

console.log(bfs(graph, [0, 0, 1]));
