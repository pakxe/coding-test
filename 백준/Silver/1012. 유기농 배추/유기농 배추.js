const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const testCaseCount = parseInt(input[0]);

const EMPTY = 0;
const PLANT = 1;

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

const bfs = (start) => {
	const queue = [];

	queue.push(start);

	while (queue.length > 0) {
		const [y, x] = queue.shift();

		if (map[y][x] !== EMPTY) {
			map[y][x] = EMPTY; // 방문

			for (let i = 0; i < DX.length; i++) {
				if (
					![-1, col].includes(x + DX[i]) &&
					![-1, row].includes(y + DY[i]) &&
					map[y + DY[i]][x + DX[i]] !== EMPTY
				)
					queue.push([y + DY[i], x + DX[i]]);
			}
		}
	}
};

let bugCount = new Array(testCaseCount).fill(0);
let index = 1; // 밭크기
let col, row, count;
let map;

for (let t = 0; t < testCaseCount; t++) {
	[col, row, count] = input[index].split(' ').map(Number);
	index++; // 테스트로 이동

	map = new Array(row).fill().map(() => new Array(col).fill(EMPTY));

	let i;
	for (i = index; i < index + count; i++) {
		const [x, y] = input[i].split(' ').map(Number);

		map[y][x] = PLANT; // 배추 심기
	}
	index = i; // 다음 밭크기

	// 맵돌기
	for (let y = 0; y < row; y++) {
		for (let x = 0; x < col; x++) {
			if (map[y][x] === PLANT) {
				bfs([y, x]);
				bugCount[t]++;
			}
		}
	}
}

console.log(bugCount.join('\n'));
