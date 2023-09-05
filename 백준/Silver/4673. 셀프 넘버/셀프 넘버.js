const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const LINE_COUNT = parseInt(input.shift());

/**
 * [] 10000 번 반복을 돌려서 생성자가 있는 숫자는 제거한다.
 */

const LIMIT = 10000;

const getStrNumSum = (num) => {
	let sum = num;
	const strNum = num.toString();

	for (let i = 0; i < strNum.length; i++) {
		sum += parseInt(strNum[i]);
	}

	return sum;
};

const selfNumArr = new Array(LIMIT + 1).fill().map((_, i) => i);

for (let i = 1; i <= LIMIT; i++) {
	selfNumArr[getStrNumSum(i)] = false;
}

selfNumArr.shift();

console.log(selfNumArr.filter((selfNum) => selfNum !== false).join('\n'));
