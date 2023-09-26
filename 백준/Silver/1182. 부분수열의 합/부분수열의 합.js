const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');
const [n, s] = input.shift().split(' ').map(Number);

const numbers = input[0].split(' ').map(Number);
const sequence = [];
let count = 0;
const visited = new Array(numbers.length).fill(false);

const dfs = (index, max) => {
	if (sequence.length === max) {
		const sum = sequence.reduce((sum, cur) => sum + cur, 0);
		if (sum === s) count++;
	}

	for (let i = index; i < numbers.length; i++) {
		if (!visited[i]) {
			visited[i] = true;
			sequence.push(numbers[i]);
			dfs(i + 1, max);
			sequence.pop();
			visited[i] = false;
		}
	}
};

for (let i = 1; i <= numbers.length; i++) {
	dfs(0, i);
}

console.log(count);
