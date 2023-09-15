const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const number = parseInt(input[0])

const SPECIAL_NUMBERS = [3, 6, 9];

// 숫자를 배열로 바꾸는 함수
const getNumToArr = (num) => num.toString().split('').map(Number);

// 숫자에 포함되어 있는 스페셜넘버(3, 6, 9)의 개수를 반환하는 함수
const getClapCount = (number) => {
	const numArr = getNumToArr(number);

	return numArr.filter((num) => SPECIAL_NUMBERS.includes(num)).length;
};


let clapCount = 0;

for (let i = 1; i <= number; i++) {
	clapCount += getClapCount(i);
}

console.log(clapCount);

