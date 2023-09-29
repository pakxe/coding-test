const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

input.shift();

console.log(
	Math.min(...input[0].split(' ').map(Number)),
	Math.max(...input[0].split(' ').map(Number))
);
