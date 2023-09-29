const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map(Number);

const set = new Set();

input.forEach((n) => set.add(n % 42));

console.log(set.size);
