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
const [PUSH, TOP, SIZE, POP, EMPTY] = ['push', 'top', 'size', 'pop', 'empty'];

const stack = [];
const answers = [];

for (let i = 1; i <= n; i++) {
  const command = input[i].split(' ');
  const order = command[0];

  if (command.length === 1) {
    if (order === TOP) answers.push(stack.length !== 0 ? stack[stack.length - 1] : -1);
    if (order === SIZE) answers.push(stack.length);
    if (order === EMPTY) answers.push(stack.length === 0 ? 1 : 0);
    if (order === POP) answers.push(stack.length === 0 ? -1 : stack.pop());
  } else {
    if (order === PUSH) stack.push(Number(command[1]));
  }
}

console.log(answers.join('\n'));
