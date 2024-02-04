const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const nodeCount = Number(input[0]);

class TreeNode {
  constructor(value) {
    this.value = value;
    this.childList = [];
  }
}

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

  shift() {
    if (this.size === 0) return -1;

    const value = this.#head.value;

    if (this.size === 1) {
      this.#head = null;
      this.#tail = null;
    } else this.#head = this.#head.next;

    this.size -= 1;

    return value;
  }
}

function bfs(start) {
  let leafCount = 0;

  const queue = new Queue();
  queue.push(start);
  const visited = new Array(nodeCount).fill(0);

  while (queue.size) {
    const node = queue.shift();
    if (node.childList.length === 0) leafCount += 1;

    node.childList.forEach((child) => {
      visited[child.value] = 1;
      queue.push(child);
    });
  }

  return leafCount;
}

const parentList = input[1].split(' ').map(Number);
let rootIndex;

// 0번이 루트노드(-1)이라는 보장이 없다.
const pointers = new Array(nodeCount).fill().map((_, i) => new TreeNode(i));

for (let i = 0; i < parentList.length; i++) {
  const parentIndex = parentList[i];

  if (parentIndex === -1) {
    rootIndex = i;
    continue;
  }
  const child = pointers[i];

  pointers[parentIndex].childList.push(child);
}

const deleteNode = Number(input[2]);

if (deleteNode === rootIndex) { 
  console.log(0);
  return;
}

pointers.forEach((node) => {
  const deleteNodeIndex = node.childList.findIndex((el) => el.value === deleteNode); // [좌표], []

  if (deleteNodeIndex !== -1) node.childList.splice(deleteNodeIndex, 1);
});

// pointers.forEach((node) => console.log(node)); // 트리 출력

const leafCount = bfs(pointers[rootIndex]);

console.log(leafCount);
