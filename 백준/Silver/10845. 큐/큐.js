class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  #head;
  #tail;

  constructor() {
    this.size = 0;
    this.#head = null;
    this.#tail = null;
  }

  push(value) {
    const node = new Node(value);

    if (this.size === 0) this.#head = node;
    else this.#tail.next = node;

    this.#tail = node;

    this.size += 1;
  }

  pop() {
    if (this.size === 0) return -1;

    const value = this.#head.value;

    if (this.size === 1) {
      this.#head = null;
      this.#tail = null;
    } else this.#head = this.#head.next;

    this.size -= 1;

    return value;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  front() {
    if (this.size === 0) return -1;

    return this.#head.value;
  }

  back() {
    if (this.size === 0) return -1;

    return this.#tail.value;
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const [PUSH, FRONT, SIZE, BACK, POP, EMPTY] = ['push', 'front', 'size', 'back', 'pop', 'empty'];

const queue = new Queue();
const answers = [];

for (let i = 1; i <= n; i++) {
  const command = input[i].split(' ');
  const order = command[0];

  if (command.length === 1) {
    if (order === FRONT) answers.push(queue.front());
    if (order === BACK) answers.push(queue.back());
    if (order === SIZE) answers.push(queue.size);
    if (order === EMPTY) answers.push(queue.isEmpty());
    if (order === POP) answers.push(queue.pop());
  } else {
    if (order === PUSH) queue.push(Number(command[1]));
  }
}

console.log(answers.join('\n'));
