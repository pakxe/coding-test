const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//const input = fs.readFileSync('e.txt').toString().split('\n');
const testCaseCount = input[0];

/*
    뽑아야 하는 문서를 확인하기 위해 [중요도, 타겟문서]로 정리한다. 
    중요도가 큰 문서가 아직 있으면 shift하고 push한다. 
    만약 현재 0번이 제일 중요도가 크다면 그걸 pop한다. 그리고 출력 번호를 부여하고 ++한다. 
    만약 해당 문서가 타겟문서면 반복을 종료한다. 
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

	haveLargerPriority() {
		let [firstPriority, _] = this.#head.value; // 0번째 노드의 우선순위

		let before = this.#head;

		for (let i = 1; i < this.#size; i++) {
			const after = before.next;
			const [afterPriority] = after.value;

			if (afterPriority > firstPriority) {
				return true;
			}

			before = after;
		}

		return false;
	}
}

const getPriorityTargetArr = (count, targetIndex, priorityArr) => {
	const arr = new Array(count).fill(0).map(() => []);

	for (let i = 0; i < count; i++) {
		arr[i].push(priorityArr[i]);
		arr[i].push(i === targetIndex ? true : false);
	}

	return arr;
};

// [[1, false], [2, true], [3, false]] 형태로 정리된다.

const getTargetPrintedOrder = (priorityTargetArr) => {
	const queue = new Queue();

	// shift 빨리 하기 위해 만든 큐에 넣기
	priorityTargetArr.map(([priority, isTarget]) => {
		queue.push([priority, isTarget]);
	});

	let printedOrder = 0;

	while (1) {
		// 우선 순위가 높은 문서가 뒤에 있다면
		if (queue.haveLargerPriority()) {
			const first = queue.shift();
			queue.push(first);
		} else {
			// 우선순위가 지금 0번째가 제일 크거나 같음
			printedOrder++;
			const [_, isTarget] = queue.shift();
			if (isTarget) break;
		}
	}

	return printedOrder;
};

const resultArr = [];

for (let i = 0; i < testCaseCount; i++) {
	const [count, targetIndex] = input[i * 2 + 1].split(' ').map(Number);
	const priorityArr = input[i * 2 + 2].split(' ').map(Number);

	const priorityTargetArr = getPriorityTargetArr(
		count,
		targetIndex,
		priorityArr
	);

	resultArr.push(getTargetPrintedOrder(priorityTargetArr));
}

console.log(resultArr.join('\n'));
