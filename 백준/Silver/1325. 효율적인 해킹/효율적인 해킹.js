const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [COM_COUNT, RELATION_COUNT] = input[0].split(' ').map(Number);

const graph = new Array(COM_COUNT + 1).fill().map(() => []);
for (let i = 0; i < RELATION_COUNT; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  graph[b].push(a);
}

let max = -Infinity;
let maxArr = [];

function dfs(start) {
  const stack = [start];
  const visited = new Array(COM_COUNT + 1).fill(0).map(() => false);

  let count = 0;

  while (stack.length) {
    const curCom = stack.pop();
    visited[start] = true;

    for (let i = 0; i < graph[curCom].length; i++) {
      const friend = graph[curCom][i];

      if (visited[friend]) continue;

      count += 1;

      stack.push(friend);
      visited[friend] = true;
    }
  }

  // 여기까지 끝내면 최대 해킹 수를 구할 수 있다.

  if (count > max) {
    max = count;
    maxArr = [start];
  } else if (count === max) maxArr.push(start);
}

for (let i = 1; i <= COM_COUNT; i++) {
  dfs(i);
}

console.log(maxArr.join(' '));
