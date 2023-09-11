const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const comCount = parseInt(input[0]);
const duoCount = parseInt(input[1]);

const map = new Array(comCount + 1).fill().map(() => []);

for (let i = 0; i < duoCount; i++) {
	const [a, b] = input[i + 2].split(' ').map(Number);

	map[a].push(b);
	map[b].push(a);
}

const bfs = () => {
	const visited = new Array(comCount + 1).fill(false);
	const queue = [];
	let count = 0;

	queue.push(1);

	while (queue.length > 0) {
		const node = queue.shift();

		if (!visited[node]) {
			visited[node] = true;
			count++;
			queue.push(...map[node].filter((n) => !visited[n]));
		}
	}

	return count - 1;
};

console.log(bfs());
