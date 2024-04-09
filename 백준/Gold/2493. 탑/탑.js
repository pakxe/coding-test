/*
송신: 신호 발사 

탑의 개수는 50만개
높이는 1억개

높이는 중복이 아닌가???;;

9 6 5 7 4

그냥 배열과 스택을 준비한다. 
스택의 0번째는 배열의 맨 오른쪽 값으로 초가화한다. 

while로 스택의 탑이 배열의 탑보다 클때까지 스택을 팝하면서 기록한다. 
만약 커지면
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const count = parseInt(input[0]);
let nums = input[1].split(' ').map(Number);
nums = nums.map((num, i) => [num, i]); // [값, 인덱스];
const stack = [nums.pop()];
const resultList = new Array(count).fill(0);

while (nums.length) {
  while (stack.length !== 0 && stack[stack.length - 1][0] < nums[nums.length - 1][0]) {
    const [_, index] = stack[stack.length - 1]; // 스택탑
    resultList[index] = nums[nums.length - 1][1] + 1; // 큰 값의 인덱스(1부터 시작)
    stack.pop();
  }

  stack.push(nums.pop()); // 수고한 큰 값을 스택에 넣음
}

console.log(resultList.join(' '));
