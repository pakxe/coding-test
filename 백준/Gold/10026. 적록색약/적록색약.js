const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const row = parseInt(input.shift());

const map = new Array(row).fill();

for (let i = 0; i < row; i++) {
	map[i] = input[i].split('');
}

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

const bfs = (start, visited) => {
	const color = map[start[0]][start[1]];
	const queue = [];

	queue.push(start);

	while (queue.length) {
		const [y, x] = queue.shift();

		for (let i = 0; i < DX.length; i++) {
			const [ny, nx] = [y + DY[i], x + DX[i]];

			if (
				![-1, row].includes(ny) &&
				![-1, row].includes(nx) &&
				map[ny][nx] === color &&
				!visited[ny][nx]
			) {
				visited[ny][nx] = true;
				queue.push([ny, nx]);
			}
		}
	}
};

const specialBfs = (start, visited) => {
	const color = map[start[0]][start[1]] === 'B' ? 'B' : 'RG';
	const queue = [];

	queue.push(start);

	while (queue.length) {
		const [y, x] = queue.shift();

		for (let i = 0; i < DX.length; i++) {
			const [ny, nx] = [y + DY[i], x + DX[i]];

			if (
				![-1, row].includes(ny) &&
				![-1, row].includes(nx) &&
				color.includes(map[ny][nx]) &&
				!visited[ny][nx]
			) {
				visited[ny][nx] = true;
				queue.push([ny, nx]);
			}
		}
	}
};

let result = [0, 0];
for (let i = 0; i < 2; i++) {
	let visited = new Array(row).fill().map(() => new Array(row).fill(false));

	for (let y = 0; y < row; y++) {
		for (let x = 0; x < row; x++) {
			if (!visited[y][x]) {
				visited[y][x] = true;
				if (i === 1) specialBfs([y, x], visited);
				else bfs([y, x], visited);

				result[i]++;
			}
		}
	}
}

console.log(result.join(' '));
