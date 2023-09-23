const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numCount = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);
const operatorCount = input[2].split(' ').map(Number);

const operatorArr = [];
const OPERATORS = ['+', '-', '*', '/'];

// index로 연산자 구분
operatorCount.forEach((count, index) => {
	operatorArr.push(...new Array(count).fill(OPERATORS[index]));
});

// 이 순열은 순서가 상관 있고 중복이 안되는 순열이다.

const getSequence = (arr, lest) => {
	if (lest === 1) return [...new Set(arr)].map((el) => [el]);

	const result = [];
	[...new Set(arr)].forEach((cur) => {
		const getIndex = arr.indexOf(cur);
		const rest = [...arr.slice(0, getIndex), ...arr.slice(getIndex + 1)];
		const sequence = getSequence(rest, lest - 1);
		result.push(...sequence.map((el) => [cur, ...el]));
	});

	return result;
};

let [max, min] = [null, null];

const sequence = getSequence(operatorArr, operatorArr.length);

for (let i = 0; i < sequence.length; i++) {
	let calRes = nums[0];
	for (let j = 1; j < nums.length; j++) {
		if (sequence[i][j - 1] === OPERATORS[0]) calRes = calRes + nums[j];
		if (sequence[i][j - 1] === OPERATORS[1]) calRes = calRes - nums[j];
		if (sequence[i][j - 1] === OPERATORS[2]) calRes = calRes * nums[j];
		if (sequence[i][j - 1] === OPERATORS[3]) {
			calRes = Math.trunc(calRes / nums[j]);
			if (calRes === -0) calRes = 0;
		}
		// calRes = Math.trunc(eval(calRes + sequence[i][j - 1] + nums[j]));
	}

	if (max === null || calRes > max) max = calRes;
	if (min === null || calRes < min) min = calRes;
}

console.log(max);
console.log(min);
