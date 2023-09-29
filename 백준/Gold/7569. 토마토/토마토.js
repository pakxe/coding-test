const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');
const [X, Y, Z] = input.shift().split(' ').map(Number);

/*
1. 이미 모든 토마토가 익은 상태를 판단해야한다. -> 처음 배열만들 때 판단.
2. 토마토가 모두 익지 못하는 상태를 판단해야한다. -> bfs다 돌리고 마지막에 0판단.
3. 그 외는 bfs로 토마토 퍼뜨리기

*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	#size;
	#head;
	#tail;

	constructor() {
		this.#size = 0;
		this.#head = null;
		this.#tail = null;
	}

	push(value) {
		const node = new Node(value);

		if (this.#size === 0) this.#head = node;
		else this.#tail.next = node;

		this.#tail = node;

		this.#size++;
	}

	shift() {
		if (this.#size === 0) return -1;

		const value = this.#head.value; // shift할 노드의 값 반환하기 위해 저장해주기

		this.#size--;
		if (this.#size === 0) {
			this.#head = null;
			this.#tail = null;
		} else this.#head = this.#head.next;

		return value;
	}

	getSize() {
		return this.#size;
	}
}

const 덜익 = 0;
const 익 = 1;
const 없 = -1;

const map = new Array(Z).fill().map(() => new Array(Y).fill()); // y 에 push

let isAlreadyComplete = true;

for (let z = 0; z < Z; z++) {
	for (let y = 0; y < Y; y++) {
		map[z][y] = input[z * Y + y].split(' ').map(Number);

		if (map[z][y].includes(덜익)) isAlreadyComplete = false;
	}
}

// 이미 완료
if (isAlreadyComplete) {
	console.log(0);
	return;
}

const DX = [0, 1, 0, -1, 0, 0];
const DY = [1, 0, -1, 0, 0, 0];
const DZ = [0, 0, 0, 0, 1, -1];

const bfs = (starts) => {
	const queue = new Queue();
	let days = 0;

	starts.forEach((el) => {
		queue.push([...el, 0]);
	});

	while (queue.getSize()) {
		const [z, y, x, nodeDays] = queue.shift();

		for (let i = 0; i < DX.length; i++) {
			// 덜익은 토마토여야 전파될 수 있다. 그리고 모서리가 아니어야 한다.
			const [nz, ny, nx] = [z + DZ[i], y + DY[i], x + DX[i]];

			if (
				![-1, Z].includes(nz) &&
				![-1, Y].includes(ny) &&
				![-1, X].includes(nx) &&
				map[nz][ny][nx] === 덜익
			) {
				map[nz][ny][nx] = 익; // 방문 표시
				queue.push([nz, ny, nx, nodeDays + 1]); // 큐에 넣기
				days = Math.max(nodeDays + 1, days);
			}
		}
	}

	return days;
};

const 익은토마토좌표 = [];

for (let z = 0; z < Z; z++) {
	for (let y = 0; y < Y; y++) {
		for (let x = 0; x < X; x++) {
			if (map[z][y][x] === 익) 익은토마토좌표.push([z, y, x]);
		}
	}
}

const minDays = bfs(익은토마토좌표);

let 덜익토마토있니 = false;
for (let z = 0; z < Z; z++) {
	for (let y = 0; y < Y; y++) {
		for (let x = 0; x < X; x++) {
			if (map[z][y][x] === 덜익) {
				덜익토마토있니 = true;
				break;
			}
		}
	}
}

if (덜익토마토있니) console.log(-1);
else console.log(minDays);
