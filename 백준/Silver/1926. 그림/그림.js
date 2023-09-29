const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [row, col] = input.shift().split(' ').map(Number);

const map = new Array(row).fill();

for (let i = 0; i < row; i++) {
	map[i] = input[i].split(' ').map(Number);
}

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

const bfs = (start) => {
	const queue = [start];
	map[start[0]][start[1]] = 0;
	let area = 1;

	while (queue.length) {
		const [y, x] = queue.shift();

		for (let i = 0; i < DX.length; i++) {
			const [ny, nx] = [y + DY[i], x + DX[i]];

			if (
				![-1, row].includes(ny) &&
				![-1, col].includes(nx) &&
				map[ny][nx] === 1
			) {
				map[ny][nx] = 0;
				queue.push([ny, nx]);
				area++;
			}
		}
	}

	return area;
};

const result = [];

for (let y = 0; y < row; y++) {
	for (let x = 0; x < col; x++) {
		if (map[y][x] === 1) {
			result.push(bfs([y, x]));
		}
	}
}

console.log(result.length);
console.log(result.length === 0 ? 0 : Math.max(...result));
