const bfs = (graph, start) => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const needVisit = [];

  let houseCount = 0;

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const node = needVisit.shift(); // 0, 1

    // 방문하지 않은 노드라면
    if (graph[node[0]][node[1]] !== 0) {
      houseCount++;
      graph[node[0]][node[1]] = 0; // 방문

      for (let i = 0; i < dx.length; i++) {
        const ny = node[0] + dy[i];
        const nx = node[1] + dx[i];

        if (nx >= 0 && ny >= 0 && nx <= graph[0].length - 1 && ny <= graph.length - 1 && graph[ny][nx] !== 0) {
          needVisit.push([ny, nx]);
        }
      }
    }
  }

  return houseCount;
};

const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const size = parseInt(input[0]);
input.shift();

const map = input.map((m) => m.split('').map(Number));

const houseCount = [];

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (map[i][j] !== 0) {
      houseCount.push(bfs(map, [i, j]));
    }
  }
}

houseCount.sort((a, b) => a - b)
console.log(houseCount.length);
console.log(houseCount.reduce((total, count) => total + count + '\n', ''));
