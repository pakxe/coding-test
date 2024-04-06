/*
(행, 열) 인덱스는 1부터 시작한다. 
각 칸은 빈칸 || 벽

으로 밀기만 가능 →, ↘, ↓ 방향
회전 각도는 한번에 45도만 가능

처음 파이프의 방향은 가로로 (1, 1), (1, 2)

왼쪽 끝에서 오른쪽 끝으로 이동시키는 방법의 개수를 구한다. 


이거 백트래킹인가?

현재 위치에서 가능한 방법으로 이동시킨다

꼬리, 머리 = (ty, tx) (hy, hx)
오른쪽 = (ty, tx + 1) (hy, hx + 1)
대각선 아래 = (hy, hx) (hy + 1, hx + 1)
아래 = (ty + 1, tx) (hy + 1, hx)

3가지 중 이동할 수 있는 방법은 45도각을 지키면서, 밖으로 탈출하지 않으면서, 벽이 아니면 된다. 

1. 45도각을 지키는 방법 현재 각 상태를 0(가로), 1(대각), 2(세로) 로 지정하고 이 각 인덱스 이상이면서 2개 렝스까지만 가능하도록 한다. 
2. 밖으로 탈출은 헤드의 좌표로 구분한다. 
3. 테일의 좌표는 이전 헤드가 벽이 아니라면 빈칸임이 보증되므로, 헤드만 벽이 아니면 된다. 

좌표 변환은?
그냥 하드하게 하자. 

헤드와 테일의 좌표를 둘 다 사용해야하느냐?
아니다. 헤드를 갖고 각도 상태를 갖고 있는다면 테일의 좌표를 갖고있을 필요는 없다. 
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const SIZE = parseInt(input[0]);

const map = new Array(SIZE).fill().map((_, i) => input[i + 1].split(' ').map(Number));

const MOVE_WITH_ANGLE = [
  [0, 1],
  [1, 1],
  [1, 0],
]; // 각이 0도 45도 90도일 때의 헤드 좌표 가산량
const INVALID_FOR_WALL = [
  [
    [-1, 0],
    [1, 0],
  ],
  [
    [0, -1],
    [-1, 0],
  ],
  [
    [0, -1],
    [0, 1],
  ],
];

const location = [0, 1];
let count = 0;

function bt(angle) {
  const [y, x] = location;

  if (y === SIZE - 1 && x === SIZE - 1) {
    count += 1;
    return;
  }

  // 현재 앵글과 차이가 1 이내면 가능 (0,1);
  for (let i = 0; i < MOVE_WITH_ANGLE.length; i++) {
    if (Math.abs(angle - i) > 1) continue; // 45이내 각이 아니라면 넘기기

    const [ny, nx] = [y + MOVE_WITH_ANGLE[i][0], x + MOVE_WITH_ANGLE[i][1]];

    if (ny >= SIZE || nx >= SIZE) continue; // 방 밖으로 나가는 경우
    if (map[ny][nx] === 1) continue; // 벽인 경우

    if (i === 1) {
      // 벽을 긁는 경우
      const [invalidY1, invalidX1] = [ny + INVALID_FOR_WALL[i][0][0], nx + INVALID_FOR_WALL[i][0][1]];
      const [invalidY2, invalidX2] = [ny + INVALID_FOR_WALL[i][1][0], nx + INVALID_FOR_WALL[i][1][1]];

      // console.log(invalidY1, invalidX1, invalidY2, invalidX2);
      if (invalidY1 < SIZE && invalidY1 >= 0 && invalidX1 < SIZE && invalidX1 >= 0) {
        if (map[invalidY1][invalidX1] === 1) continue;
      }

      if (invalidY2 < SIZE && invalidY2 >= 0 && invalidX2 < SIZE && invalidX2 >= 0) {
        if (map[invalidY2][invalidX2] === 1) continue;
      }
    }

    location[0] += MOVE_WITH_ANGLE[i][0];
    location[1] += MOVE_WITH_ANGLE[i][1];
    bt(i);
    location[0] -= MOVE_WITH_ANGLE[i][0];
    location[1] -= MOVE_WITH_ANGLE[i][1];
  }
}

bt(0);

console.log(count);
