const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [col, row] = input[0].split(' ').map(Number);
input.shift();

/**
visited를 만들지 않고 그냥 map에 덧씌우면 될 것 같다.

각 국의 병사들을 상수로 선언한다. 
2중 for문으로 맵을 순회한다. 
bfs는 군인 수를 반환한다. 
반환된 N^2를 sum 해둔다. 
아군일경우와 적군인 경우를 구분해서 더한다. 

*/

const OUR = 'W';
const ENEMY = 'B';
const VISITED = 'V'; // 이미 방문한 경우 이걸로 바꾼다.

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

const map = new Array(row).fill();

// 맵 만들기
for (let i = 0; i < row; i++) {
	map[i] = input[i].split('');
}

const getPersonCount = (start, type) => {
	const queue = [];
	let personCount = 0;

	queue.push(start);

	while (queue.length > 0) {
		const [y, x] = queue.shift();

		if (map[y][x] !== VISITED) {
			map[y][x] = VISITED;
			personCount++;

			for (let i = 0; i < DX.length; i++) {
				if (
					![-1, row].includes(y + DY[i]) &&
					![-1, col].includes(x + DX[i]) &&
					map[y + DY[i]][x + DX[i]] === type &&
					map[y + DY[i]][x + DX[i]] !== VISITED
				)
					queue.push([y + DY[i], x + DX[i]]);
			}
		}
	}
	return personCount;
};

let ourPower = 0;
let enemyPower = 0;

for (let y = 0; y < row; y++) {
	for (let x = 0; x < col; x++) {
		if (map[y][x] === OUR) ourPower += Math.pow(getPersonCount([y, x], OUR), 2);
		if (map[y][x] === ENEMY)
			enemyPower += Math.pow(getPersonCount([y, x], ENEMY), 2);
	}
}

console.log(ourPower, enemyPower);
