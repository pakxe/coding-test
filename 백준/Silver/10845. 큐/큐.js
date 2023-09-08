const fs = require('fs');
//let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const lineCount = parseInt(input[0]);
input.shift();

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	#size;

	constructor() {
		this.head = null;
		this.tail = null;
		this.#size = 0;
	}

	push(value) {
		let node = new Node(value);

		if (this.#size === 0) this.head = node;
		else this.tail.next = node; // 테일이 가리키는 노드의 next를 새로 들어온 노드로 한다.

		this.tail = node;
		this.#size++;
	}

	getSize() {
		return this.#size;
	}

	// shift
	pop() {
		if (this.#size === 0) return -1;

		const value = this.head.value; // shift할 노드의 값 반환하기 위해 저장해주기

		this.#size--;
		if (this.#size === 0) {
			this.head = null;
			this.tail = null;
		} else this.head = this.head.next;

		return value;
	}

	empty() {
		return this.#size === 0 ? 1 : 0;
	}

	front() {
		if (this.#size === 0) return -1;
		return this.head.value;
	}

	back() {
		if (this.#size === 0) return -1;
		return this.tail.value;
	}
}

const queue = new Queue();
const result = [];

const [PUSH, FRONT, BACK, SIZE, EMPTY, POP] = [
	'push',
	'front',
	'back',
	'size',
	'empty',
	'pop',
];

for (let i = 0; i < lineCount; i++) {
	const command = input[i].split(' ');

	if (command[0] === PUSH) {
		queue.push(command[1]);
	}
	if (command[0] === FRONT) result.push(queue.front());
	if (command[0] === BACK) result.push(queue.back());
	if (command[0] === SIZE) result.push(queue.getSize());
	if (command[0] === POP) result.push(queue.pop());
	if (command[0] === EMPTY) result.push(queue.empty());
}

console.log(result.join('\n'));
