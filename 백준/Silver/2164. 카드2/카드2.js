const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const count = parseInt(input[0]);

/*
    큐를 사용해 위에있는 걸 버리고 그 다음에 있는걸 shift(), push()한다.
*/

class Node {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.#head = null;
		this.#tail = null;
		this.#size = 0;
	}

	push(value) {
		let node = new Node(value);

		if (this.#size === 0) this.#head = node;
		else this.#tail.next = node;

		this.#tail = node;
		this.#size++;
	}

	size() {
		return this.#size;
	}

	shift() {
		// 뽑을게 하나도 없을 때
		if (this.#size === 0) return -1;

		const value = this.#head.value;
		this.#size--;

		// 뽑았는데 0개 됐을 때
		if (this.#size === 0) {
			this.#head = null;
			this.#tail = null;
		} // 뽑았는데 1개 이상 남아있을 때
		else {
			this.#head = this.#head.next;
		}

		return value;
	}
}

const queue = new Queue();

// 큐 만들기
for (let i = 1; i <= count; i++) {
	queue.push(i);
}

while (1) {
	// 한장 남았다면 마지막에 남게 되는 카드를 출력하고 끝낸다.
	if (queue.size() === 1) {
		console.log(queue.shift());
		break;
	}

	queue.shift();

	const nextNode = queue.shift();
	queue.push(nextNode);
}
