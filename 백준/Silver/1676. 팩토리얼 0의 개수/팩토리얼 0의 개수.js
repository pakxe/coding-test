const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map(Number);

const dp = new Array(input[0] + 1).fill(0);

dp[1] = BigInt(1);
for (let i = 2; i < input[0] + 1; i++) {
	dp[i] = BigInt(i) * dp[i - 1];
}

if (input[0] === 0) {
	console.log(0);
	return;
}
console.log(
	String(dp[input[0]])
		.split('')
		.reverse()
		.findIndex((v) => v !== '0')
);
