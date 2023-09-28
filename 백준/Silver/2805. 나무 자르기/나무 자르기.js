const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [treeCount, need] = input.shift().split(' ').map(Number);

input = input[0].split(' ').map(Number);
/*
나무의 길이가 20억 이상이므로 시간초과에 조심해야한다.

원래라면 0부터 max나무길이까지를 반복으로 돌아서 구해야한다.
이런 반복을 이분 탐색으로 할 수 있다.
*/

let maxLen = -Infinity;

const binarySearch = (start, end) => {
	const mid = Math.floor((start + end) / 2);
	if (start > end) return;

	const treeLength = input.reduce((sum, cur) => {
		if (cur - mid > 0) return sum + (cur - mid);
		else return sum;
	}, 0);

	if (treeLength >= need) {
		if (maxLen < mid) maxLen = mid;
		binarySearch(mid + 1, end);
	}
	if (treeLength < need) {
		binarySearch(start, mid - 1);
	}
};

binarySearch(0, Math.max(...input));

console.log(maxLen);
