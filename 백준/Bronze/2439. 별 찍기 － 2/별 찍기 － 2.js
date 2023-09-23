const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('e.txt').toString().trim().split('\n');
const n = parseInt(input[0]);

const result = [];

for (let i = 1; i <= n; i++) {
	const empty = ' '.repeat(n - i);
	const star = '*'.repeat(i);

	result.push(empty + star);
}

console.log(result.join('\n'));
