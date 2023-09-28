const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [count, need] = input.shift().split(' ').map(Number);
input = input.map(Number).sort((a, b) => a - b); // 이분 탐색을 위한 정렬

const max = input[input.length - 1];

let maxLen = -Infinity;

const binarySearch = (start, end) => {
	const mid = Math.floor((end + start) / 2);

	const maxCount = input.reduce((sum, cur) => sum + Math.floor(cur / mid), 0); // 현재 길이로 나눌 수 있는 최대
	if (start > end) return;
	if (maxCount < need) {
		binarySearch(start, mid - 1);
	}
	if (maxCount >= need) {
		if (maxLen < mid) maxLen = mid;
		binarySearch(mid + 1, end);
	}
};

binarySearch(0, max);
console.log(maxLen);
/**
 * 잘린 개수가 목표보다 작으면 길이가 너무 길다는 뜻이므로, 길이를 줄인다.
 */
