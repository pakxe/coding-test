const fs = require('fs');
//let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [row, col] = input[0].split(' ').map(Number);
input.shift();

const WAY = 1;
const WALL = 0;
const VISITED = 2;

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

const map = new Array(row).fill();

for (let i = 0; i < input.length; i++) {
	map[i] = input[i].split('').map(Number);
}

const bfs = () => {
	const queue = [];
	queue.push([0, 0, 1]);

	while (queue.length > 0) {
		const [y, x, walkCount] = queue.shift();

		if (map[y][x] !== VISITED) {
			if (y === row - 1 && x === col - 1) return walkCount;

			map[y][x] = VISITED;
			for (let i = 0; i < DX.length; i++) {
				if (
					![-1, row].includes(y + DY[i]) &&
					![-1, col].includes(x + DX[i]) &&
					map[y + DY[i]][x + DX[i]] === WAY
				)
					queue.push([y + DY[i], x + DX[i], walkCount + 1]);
			}
		}
	}
};

console.log(bfs());
