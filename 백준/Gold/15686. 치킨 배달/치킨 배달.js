/*
치킨 거리: 집과 가장 가까운 치킨집 사이의 거리. 
따라서 각각의 집은 치킨 거리를 갖고 있음

이 도시의 치킨 거리 = 모든 집의 치킨 거리 

가장 수익을 많이 낼 수 있는 치킨집의 개수 = M개
최대 M개의 치킨집을 고르고, 나머지는 모두 폐업

=> 이렇게 해서 도시의 치킨 거리를 가장 작게 만들자.

아무리 커도 M개라는건 M개보다 작을 수도 있다는건가? -> 그렇지만 직관적으로 치킨집은 많을 수록 이득임.(조건이 특이함 최대 M개가 아닌 그냥 M개를 선택해도 답은 같을듯)

1. 치킨집 중에서 M개를 조합으로 선택한다.
2. 각 집에 대해서 이 치킨집조합i에 대해 거리 배열을 구하고 최소값을 누적한다.
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = new Array(N).fill();
const chicken = [];
const [EMPTY, HOUSE, CHICKEN] = [0, 1, 2];

// 조합 생성기
const combs = [];
const temp = [];
function comb(n, r, depth) {
  if (temp.length === r) {
    combs.push([...temp]);
    return;
  }

  for (let i = depth; i < n; i++) {
    temp.push(chicken[i]); // 치킨집 자체를 push
    comb(n, r, i + 1);
    temp.pop();
  }
}

function getDistance(a, b) {
  const [ay, ax] = a;
  const [by, bx] = b;

  return Math.abs(ay - by) + Math.abs(ax - bx);
}

// 맵 구성하기
for (let i = 0; i < N; i++) {
  const row = input[i + 1].split(' ').map(Number);
  map[i] = row;

  row.forEach((type, col) => {
    if (type === CHICKEN) chicken.push([i, col]); // 치킨집 좌표 저장
  });
}

comb(chicken.length, M, 0);

const minList = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    const cur = map[y][x];

    if (cur === HOUSE) {
      const curMinList = [];

      combs.forEach((location) => {
        let curMinChickenDistance = Infinity;

        location.forEach((l) => {
          const distance = getDistance(l, [y, x]);
          curMinChickenDistance = Math.min(curMinChickenDistance, distance);
        });

        curMinList.push(curMinChickenDistance);
      });

      minList.push(curMinList);
    }
  }
}

let min = Infinity;
for (let i = 0; i < minList[0].length; i++) {
  const curSum = minList.map((row) => row[i]).reduce((sum, cur) => sum + cur, 0);

  min = Math.min(min, curSum);
}

console.log(min);
