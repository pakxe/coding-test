const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');
const [row, col] = input.shift().split(' ').map(Number);

const [WALL, GO, GOAL] = [0, 1, 2];
const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

const stepMap = new Array(row).fill().map(() => new Array(col).fill(Infinity));
const map = new Array(row).fill();

for (let i = 0; i < row; i++) {
	map[i] = input[i].split(' ').map(Number);
}

const bfs = (start) => {
	const queue = [];

	stepMap[start[0]][start[1]] = 0;
	queue.push([...start, 0]);

	while (queue.length) {
		const [y, x, steps] = queue.shift();

		for (let i = 0; i < DX.length; i++) {
			const [ny, nx] = [y + DY[i], x + DX[i]];

			// 모서리 아니고, 길 맞고, 이 경로가 더 짧게 도달하는 경우
			// if (ny === 14 && nx === 14) console.log(map[ny][nx] === GO);
			if (
				![-1, row].includes(ny) &&
				![-1, col].includes(nx) &&
				map[ny][nx] === GO &&
				stepMap[ny][nx] > steps + 1
			) {
				stepMap[ny][nx] = steps + 1;
				queue.push([ny, nx, steps + 1]);
			}
		}
	}
};
// 종착지는 0으로 해야한다.

for (let y = 0; y < row; y++) {
	for (let x = 0; x < col; x++) {
		if (map[y][x] === GOAL) {
			bfs([y, x]);
			break;
		}
	}
}

for (let y = 0; y < row; y++) {
	for (let x = 0; x < col; x++) {
		if (map[y][x] === WALL) stepMap[y][x] = 0;
		if (stepMap[y][x] === Infinity) stepMap[y][x] = -1;
	}
}

console.log(stepMap.map((v) => v.join(' ')).join('\n'));
