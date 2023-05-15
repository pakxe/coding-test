const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number); // [정점의 개수, 간선의 개수]
const arr = input.map((v) => v.split(' ').map(Number));
let visited = Array(N + 1).fill(false);
let graph = [...Array(N + 1)].map(() => []);
let answer = 0;

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  let queue = [start];
  while (queue.length) {
    const cur = queue.shift();
    for (const vertax of graph[cur]) {
      if (!visited[vertax]) {
        visited[vertax] = true;
        queue.push(vertax);
      }
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    answer++;
  }
}
console.log(answer);
