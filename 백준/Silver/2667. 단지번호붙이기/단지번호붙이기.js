const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const row = parseInt(input.shift());

input = input.map((row) => row.split('').map(Number));

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
		let node = new Node(value);

		if (this.#size === 0) this.#head = node;
		else this.#tail.next = node;

		this.#tail = node;

		this.#size++;
	}

	getSize() {
		return this.#size;
	}

	shift() {
		if (this.#size === 0) return null;

		const value = this.#head.value;

		if (this.#size === 1) {
			this.#head = null;
			this.#tail = null;
		} else this.#head = this.#head.next;

		this.#size--;

		return value;
	}
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

// 방문 여부는 기존 지도에 0으로 표시
const bfs = (start) => {
	const queue = new Queue();
	let count = 0;

	queue.push(start);

	while (queue.getSize() > 0) {
		const [y, x] = queue.shift();

		if (input[y][x] !== 0) {
			input[y][x] = 0; // 방문 표시
			count++; // 집 수 추기

			for (let i = 0; i < 4; i++) {
				const [ny, nx] = [y + dy[i], x + dx[i]];

				if (
					![-1, row].includes(ny) &&
					![-1, row].includes(nx) &&
					input[ny][nx] !== 0
				)
					queue.push([ny, nx]);
			}
		}
	}

	return count;
};

const result = [];

for (let y = 0; y < row; y++) {
	for (let x = 0; x < row; x++) {
		if (input[y][x] !== 0) result.push(bfs([y, x]));
	}
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));
