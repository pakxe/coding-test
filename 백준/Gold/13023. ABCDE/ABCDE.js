const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [personCount, _] = input.shift().split(' ').map(Number);

const map = new Array(personCount).fill().map(() => []);

for (let i = 0; i < input.length; i++) {
	const [a, b] = input[i].split(' ').map(Number);

	map[a].push(b);
	map[b].push(a);
}

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

// const dfs = (start) => {
// 	const queue = [[start, 1]];
// 	const visited = new Array(personCount).fill(false);
// 	let max = 1;

// 	while (queue.length) {
// 		const [person, count] = queue.pop();
// 	}

// 	return max;
// };

let sequence = [];
let visited = new Array(personCount).fill(false);
let isComplete = false;
// [0]
const dfs = () => {
	// console.log(sequence);
	if (sequence.length >= 5) {
		// console.log(sequence);
		isComplete = true;
	}

	if (isComplete) return;
	const last = sequence[sequence.length - 1];
	for (const friend of map[last]) {
		if (!visited[friend]) {
			visited[friend] = true;
			sequence.push(friend);
			dfs();
			// console.log(sequence);
			sequence.pop();
			visited[friend] = false;
		}
	}
};

for (let i = 0; i < map.length; i++) {
	sequence = [];
	sequence.push(i);
	visited = new Array(personCount).fill(false);
	visited[i] = true;

	dfs();

	if (isComplete) {
		console.log(1);
		return;
	}
}

console.log(0);
