const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const size = parseInt(input[0]); // 컴퓨터 개수
const lines = parseInt(input[1]); // 라인 개수
input.shift();
input.shift();

const bfs = (graph, start) => {
  let computerCount = 0;
  const needVisit = [];
  const visited = new Array(graph.length + 1).fill(0);

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const computer = needVisit.shift();

    // 아직 확인하지 않은 컴퓨터
    if (visited[computer] !== 1) {
      visited[computer] = 1;
      computerCount++;

      needVisit.push(...graph[computer]);
    }
  }

  return computerCount - 1;
};

const graph = new Array(size + 1).fill(0).map(() => []);

input.forEach((relation) => {
  const [a, b] = relation.split(' ').map(Number);

  graph[a].push(b);
  graph[b].push(a);
});

console.log(bfs(graph, 1));
