const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [width, height] = input.shift().split(' ').map(Number); // 행, 열 사이즈
const map = input.map((location) => location.split('')); // 맵 정보

const [VISIT, BLUE, WHITE] = ['X', 'B', 'W'];

const bfs = (team, graph, start) => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let count = 0;

  const needVisit = [start];

  while (needVisit.length) {
    const [y, x] = needVisit.shift();

    if (graph[y][x] !== VISIT) {
      graph[y][x] = VISIT; // 방문
      count++;

      for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < graph[0].length && ny < graph.length && graph[ny][nx] === team) {
          needVisit.push([ny, nx]);
        }
      }
    }
  }

  return count;
};

let blueCost = 0;
let whiteCost = 0;

for (let y = 0; y < map.length; y++) {
  for (let x = 0; x < map[0].length; x++) {
    if (map[y][x] === WHITE) whiteCost += bfs(WHITE, map, [y, x]) ** 2;
    if (map[y][x] === BLUE) blueCost += bfs(BLUE, map, [y, x]) ** 2;
  }
}

console.log(whiteCost, blueCost);


