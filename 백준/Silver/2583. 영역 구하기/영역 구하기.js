const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [row, col, k] = input.shift().split(' ').map(Number);

const map = new Array(row).fill().map(() => new Array(col).fill(0));

for (let i = 0; i < input.length; i++) {
	const [xs, ys, xe, ye] = input[i].split(' ').map(Number);

	for (let y = ys; y < ye; y++) {
		for (let x = xs; x < xe; x++) map[y][x] = 1;
	}
}

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

const bfs = (start) => {
	const queue = [start];
	map[start[0]][start[1]] = 1;
	let area = 1;

	while (queue.length) {
		const [y, x] = queue.shift();

		for (let i = 0; i < DX.length; i++) {
			const [ny, nx] = [y + DY[i], x + DX[i]];

			if (
				![-1, row].includes(ny) &&
				![-1, col].includes(nx) &&
				map[ny][nx] === 0
			) {
				map[ny][nx] = 1;
				queue.push([ny, nx]);
				area++;
			}
		}
	}

	return area;
};

let count = 0;
const areas = [];

for (let y = 0; y < row; y++) {
	for (let x = 0; x < col; x++) {
		if (map[y][x] === 0) {
			count++;
			areas.push(bfs([y, x]));
		}
	}
}

console.log(count);
console.log(areas.sort((a, b) => a - b).join(' '));
