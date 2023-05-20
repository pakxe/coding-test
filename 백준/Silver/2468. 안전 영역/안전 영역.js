const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const size = parseInt(input.shift()); // 맵 사이즈
const map = input.map((location) => location.split(' ').map(Number)); // 맵 정보

// 맵에서 최소, 최댓값을 반환하는 함수
const getMinMax = (map) => [Math.min(...map.flat()), Math.max(...map.flat())];

// const a = JSON.parse(JSON.stringify(map));
const [VISITED, NEED_VISIT] = [0, 1];

const bfs = (graph, start) => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const needVisit = [start];

  while (needVisit.length) {
    const [y, x] = needVisit.shift();

    if (graph[y][x] === NEED_VISIT) {
      graph[y][x] = VISITED; // 방문

      for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < graph[0].length && ny < graph.length && graph[ny][nx] === NEED_VISIT) {
          needVisit.push([ny, nx]);
        }
      }
    }
  }
};

const makeRainyMap = (map, height) => {
  const rainyMap = Array(map.length)
    .fill()
    .map(() => Array(map[0].length).fill(0));

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      if (map[y][x] <= height) rainyMap[y][x] = 0; // 잠긴다.
      else rainyMap[y][x] = 1; // 살아남는다.
    }
  }

  return rainyMap;
};

const getMaxAreaCount = (map) => {
  // const [min, max] = getMinMax(map);
  const countArr = [];

  for (let height = 0; height <= 100; height++) {
    let count = 0;
    const rainyMap = makeRainyMap(map, height);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (rainyMap[y][x] === NEED_VISIT) {
          bfs(rainyMap, [y, x]);
          count++;
        }
      }
    }

    countArr.push(count);
  }

  if (countArr.length === 0) return 0;
  return Math.max(...countArr);
};

console.log(getMaxAreaCount(map));
/**
 * 비가 아예 안내리는 경우도 있나본데 땅이아니라 비의 높이가 height인거지
 * 땅이 다 1이고 물의 높이가 0이면 그냥 그게 1이되서 나올텐데?
 */
