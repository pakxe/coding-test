const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
let input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map(Number);
const testCount = parseInt(input.shift());

/**
 * 일단 피보나치를 돌아보자.
 */

const dp = new Array(41).fill().map(() => []);
dp[0] = [1, 0];
dp[1] = [0, 1];
for (let i = 2; i <= 40; i++) {
	const [z1, o1] = dp[i - 1];
	const [z2, o2] = dp[i - 2];

	dp[i] = [z1 + z2, o1 + o2];
}

const result = [];
for (let i = 0; i < testCount; i++) {
	result.push(dp[input[i]]);
}

console.log(result.map((el) => el.join(' ')).join('\n'));
