const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const FIND = 1;
const NOTFOUND = 0;

const arr = input[1]
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);

const result = [];

const binarySearch = (start, end, target) => {
	if (start > end) return NOTFOUND; // 못찾음

	let middle = Math.floor((end + start) / 2); // 중간 좌표

	if (target === arr[middle]) return FIND;
	if (target < arr[middle]) return binarySearch(start, middle - 1, target);
	if (target > arr[middle]) return binarySearch(middle + 1, end, target);
};

const needFindArr = input[3].split(' ').map(Number);

for (let i = 0; i < parseInt(input[2]); i++) {
	result.push(binarySearch(0, arr.length - 1, needFindArr[i]));
}

console.log(result.join('\n'));

/*
시간 초과가 관건인 문제같다. 

분할 서치가 필요할 것 같다. 중복은 명시가 안되어있으니 있다고 가정하자. 

입력받은 수를 배열에 추가하고. 찾아야하는 수로 순회한다. 

find함수 필요
*/
