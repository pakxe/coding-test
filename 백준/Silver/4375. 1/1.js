const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const nums = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

/*
각 단계에서 11 % n에 대한 결과를 구하게 된다. 
이 값을 이용해서 다음 단계의 값을 구한다. 


래*/

const answers = [];

for (let i = 0; i < nums.length; i++) {
  const cur = nums[i];
  let num = 1; // 이 변수에 이전에 구한 값이 담기게 되는 것
  let length = 1;

  while (1) {
    if (num % cur === 0) {
      answers.push(length);
      break;
    } else {
      num = (num * 10 + 1) % cur; // 점화식
      length += 1; // 1을 한자리 더 추가함
    }
  }
}

console.log(answers.join('\n'));
