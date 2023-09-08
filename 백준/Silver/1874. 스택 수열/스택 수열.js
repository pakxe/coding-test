/*
while로 반복한다. 
2중 while로 만약 템프탑과 답안 탑이 같지 않으면 push
2중 while로 만약 템프탑과 답안 탑이 같다면 pop() 
이때 답안 탑을 가리키는 인덱스를 둔다.
템프로 인덱스를 따로 빼야할 것 같다, 

만약 더이상 푸시할 게 없는데(템프 인덱스 끝) 템프탑과 인덱스 탑이 다르다면 불가능이다. 
*/

const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const max = parseInt(input[0]);

const answerStack = [];

for (let i = 1; i < input.length; i++) {
	answerStack.push(parseInt(input[i])); // 정답 스택 저장하기
}

const IMPOSSIBLE = 'NO';

const PUSH = '+';
const POP = '-';

const stack = [];
let needPush = 1;

let answerTopIdx = 0;
// let answerTop = answerStack[answerTopIdx];

let isImpossible = false;

const result = [];

while (1) {
	if (needPush > max && answerTopIdx >= max) {
		break;
	}

	if (needPush > max && stack[stack.length - 1] !== answerStack[answerTopIdx]) {
		isImpossible = true;
		break;
	}

	// 탑이 일치하지 않는 경우
	if (
		stack.length === 0 ||
		stack[stack.length - 1] !== answerStack[answerTopIdx]
	) {
		stack.push(needPush);
		needPush++;
		result.push(PUSH);
	}

	// 탑이 일치하는 경우
	else if (stack[stack.length - 1] === answerStack[answerTopIdx]) {
		stack.pop();
		answerTopIdx++;
		result.push(POP);
	}
}

if (isImpossible) console.log(IMPOSSIBLE);
else console.log(result.join('\n'));

/*
    스택에 푸시할 수.
    
    스택의 탑과 정답의 탑을 비교하여 다르면 push, 같으면 pop 한다. 
    만약 더이상 push할게 없는데 스택의 탑과 정답의 탑이 다르면 중단하고 실패 출력
*/
