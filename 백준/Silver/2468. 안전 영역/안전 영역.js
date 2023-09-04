const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const rowCount = parseInt(input.shift());

for (let i = 0; i < rowCount; i++) {
	input[i] = input[i].split(' ').map(Number);
}

const bfs = (map, start, rain, visited) => {
	const queue = [];

	let count = 0;

	queue.push(start);

	while (queue.length !== 0) {
		const [ny, nx] = queue.shift(); // 앞에서 빼내기

		if (visited[ny][nx] === false) {
			visited[ny][nx] = true;

			const around = [
				[ny - 1, nx],
				[ny, nx + 1],
				[ny + 1, nx],
				[ny, nx - 1],
			];

			for (let i = 0; i < 4; i++) {
				const [y, x] = [around[i][0], around[i][1]];

				if (!around[i].includes(-1) && !around[i].includes(rowCount)) {
					if (!visited[y][x] && map[y][x] > rain) queue.push(around[i]);
				}
			}
		}
	}
};

let count = 0;
let max = 0;
for (let rain = 0; rain <= 100; rain++) {
	const visited = new Array(rowCount)
		.fill()
		.map(() => new Array(rowCount).fill(false));
	for (let i = 0; i < rowCount; i++) {
		for (let j = 0; j < rowCount; j++) {
			if (input[i][j] > rain && !visited[i][j]) {
				bfs(input, [i, j], rain, visited);
				count++;
			}
		}
	}

	max = count > max ? count : max;
	count = 0;
}

console.log(max);
