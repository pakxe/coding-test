/*
원래 구름이 있던 곳은 0
아예 구름이 없을 예정인 곳은 -1
구름이 오긴 하는 경우 언제오는지 숫자로

새로운 배열은 만들지 않아도 될 것 같고
배열을 행으로 순차적으로 읽는데, 처음 구름 상태는 -1로 시작
구름인c를 발견하면 0으로 변경, 그리고 해당 위치를 0으로 수정
다음으로 넘어가고 c가 아니라면 구름 +1한 값으로 수정, 그리고 state도 1추가함
이렇게 매행을 계속 하기 

*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);

const map = new Array(H).fill();

for (let i = 1; i <= H; i++) {
  const horizon = input[i].split('');
  map[i - 1] = horizon;
}

for (let i = 0; i < H; i++) {
  let cloudState = -1;

  for (let j = 0; j < W; j++) {
    if (map[i][j] === '.' && cloudState !== -1) {
      // 언젠간 구름이 오는 경우
      cloudState += 1;
    } else if (map[i][j] === 'c') {
      // 구름인 경우
      cloudState = 0;
    }

    map[i][j] = cloudState;
  }
}

const answers = [];

for (let i = 0; i < H; i++) {
  answers.push(map[i].join(' '));
}

console.log(answers.join('\n'));
