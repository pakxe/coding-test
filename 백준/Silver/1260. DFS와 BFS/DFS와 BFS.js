const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [nodeCount, lineCount, start] = input[0].split(' ').map(Number);
input.shift();

let graph = new Array(nodeCount + 1).fill().map(() => []);

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  graph[a].push(b);
  graph[b].push(a);
}

graph = graph.map((node) => node.sort((a, b) => a - b));

const bfs = (graph, start) => {
  const visited = [];
  const needVisit = []; // 큐

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();

    if (!visited.includes(node)) {
      visited.push(node); // 방문
      needVisit.push(...graph[node]);
    }
  }

  console.log(visited.join(' '));
};

const dfs = (graph, start) => {
  const visited = [];
  const needVisit = [];

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const node = needVisit.pop();

    if (!visited.includes(node)) {
      visited.push(node);

      // 원본배열 복사후 반전
      const reverseNodes = [...graph[node]].reverse();
      needVisit.push(...reverseNodes);
    }
  }

  console.log(visited.join(' '));
};

dfs(graph, start);
bfs(graph, start);
