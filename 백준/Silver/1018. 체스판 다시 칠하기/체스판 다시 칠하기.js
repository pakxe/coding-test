/*
시간이 넉넉하고 그렇게 50 - 8 => 42 * 42 가 최대라서 브루트 포스로 해도 될 것 같다.
모든 경우에 대해서 자른 후 이 경우의 체스판을 다시 칠해야하는 개수를 구해 최소를 갱신한다.
이때 왼쪽 위를 흰색으로 칠할지 검은색으로 칠할지도 구해야한다. (2번 계산해야한다는 뜻)
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const [H_MAX, W_MAX] = [8, 8];
const [WHITE, BLACK] = ['W', 'B'];

const map = new Array(H).fill();

// 맵 초기화
for (let i = 0; i < H; i++) {
  const row = input[i + 1].split('');
  map[i] = row;
}

// 번갈아가며 다시 칠하는 색의 개수
// 거리가 홀수, 짝수임에 따라서 번갈아서 칠할 수 있을 것 같다.
// 만약 시작 컬러가 white라면 짝수거리의 칸은 모두 white여야한다. 다르다면 개수 ++
function getRepaintCount(startColor, sy, sx) {
  let repaintCount = 0;

  for (let y = sy; y < sy + 8; y++) {
    for (let x = sx; x < sx + 8; x++) {
      const distance = y - sy + (x - sx);
      const curColor = map[y][x];

      if ((distance & 1) === 1) {
        // 홀수인 경우
        if (startColor === WHITE && curColor === WHITE) repaintCount += 1;
        if (startColor === BLACK && curColor === BLACK) repaintCount += 1;
      } else {
        // 짝수인 경우
        if (startColor === WHITE && curColor === BLACK) repaintCount += 1;
        if (startColor === BLACK && curColor === WHITE) repaintCount += 1;
      }
    }
  }

  return repaintCount;
}

let min = Infinity;

for (let y = 0; y <= H - H_MAX; y++) {
  for (let x = 0; x <= W - W_MAX; x++) {
    const repaintCountWithBlack = getRepaintCount(BLACK, y, x);
    const repaintCountWithWhite = getRepaintCount(WHITE, y, x);

    min = Math.min(min, repaintCountWithBlack, repaintCountWithWhite);
  }
}

console.log(min);
