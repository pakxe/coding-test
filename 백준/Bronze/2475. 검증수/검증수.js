const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');
const arr = input.shift().split(' ').map(Number);

const sum = arr.reduce((sum, cur) => sum + Math.pow(cur, 2), 0);
console.log(sum % 10);
