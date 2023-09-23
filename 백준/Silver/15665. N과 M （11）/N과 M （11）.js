const fs = require('fs');
// const input = fs.readFileSync('e.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1]
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);

// 중복 x 순서 상관 있음. M 길이의 수열
// 사전 순으로 증가해야한다는 것은 순서가 상관 없다는 의미다.

/*
이어서 읽어야할 인덱스를 준다. 그리고 현재 길이
*/
const getSequence = (arr, lest) => {
	// 길이를 넘으면 멈춘다.
	if (lest === 1) return [...new Set(arr)].map((el) => [el]);

	const result = [];

	[...new Set(arr)].forEach((cur, index) => {
		const findIndex = arr.indexOf(cur);
		const rest = arr;

		const sequence = getSequence(rest, lest - 1);
		result.push(...sequence.map((el) => [cur, ...el]));
	});

	return result;
};

// const arr = new Array(N).fill().map((_, i) => i + 1);

console.log(
	getSequence(arr, M)
		.map((arr) => arr.join(' '))
		.join('\n')
);
