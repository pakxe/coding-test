/*
0   0    0 구조에서 가운데는 발판이 어디에 위치하던 상관없음. 제일 왼쪽과 제일 오른쪽만 최적화해주면 됨. 어차피 왼쪽-> 중간 + 중간 -> 오른쪽의 이동량은 같기 때문
그런데 어차피 항상 최선의 움직임으로 수행한다면 상관없음. 

숫자가 작으므로 시간 초과는 없을 것 같다. 

for는 1부터 시작한다. (0은 미리 변수에 담아놓기)
그리고 이전 값과 지금 값의 차이를 구한다(절대값으로) -> |1 - 5| = 4 
이 값에 1을 더하고 발판 크기를 빼준다.

3, 5 - 3 => 2 + 1 - 2 => 1 => 4

근데 뭐가 최적인지 모르겠

지금 발판의 시작 위치와 끝 위치를 기록해둔다.
뒤좌표가 더 크다면 발판의 끝 위치를 기준으로 이동한다. 
뒤좌표가 더 작자면 발판의 앞 위치를 기준으로 이동한다. 
각 이동시 이동량을 갱신한다. 
발판의 시작 위치와 끝 위치를 갱신한다. (이동량 만큼)
발판이 커버할 수 있는 영역 안에 현재 사과가 떨어진다면 움직이지 않아도 된다.

*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [floorSize, basketSize] = input[0].split(' ').map(Number);
const appleCount = Number(input[1]);

let preLocation = 0;
let [start, end] = [0, basketSize - 1]; // index를 0으로 통일하기 위함
let sum = 0;

// console.log('-'.repeat(basketSize) + '*'.repeat(floorSize - basketSize));
for (let i = 2; i < appleCount + 2; i++) {
  const curLocation = Number(input[i]) - 1; // index를 0으로 통일하기 위함

  let move = 0;

  if (start <= curLocation && end >= curLocation) {
    move = 0;
  } else if (preLocation < curLocation) {
    // 지금 위치가 더 오른쪽으로 이동해야하는 경우
    move = curLocation - end;
    [start, end] = [start, end].map((el) => el + move);
  } else {
    move = start - curLocation;
    [start, end] = [start, end].map((el) => el - move);
  }

  // const vis = new Array(floorSize).fill().map((_, i) => {
  //   if (i >= start && i <= end) return '-'; // 발판
  //   else return '*';
  // });

  // console.log(vis.join(''));
  sum += move;

  preLocation = curLocation;
}

console.log(sum);
