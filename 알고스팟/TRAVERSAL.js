// https://algospot.com/judge/problem/read/TRAVERSAL

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let rootIndex = 0;

// start, root, end 좌표를 넘겨줘야 할 것 같다.
function makeTree(start, end) {
  const rootValue = preOrder[rootIndex];
  const rootIndexInOrder = inOrder.indexOf(rootValue);
  const rootNode = new TreeNode(rootValue);

  if (start < rootIndexInOrder) {
    rootIndex++;
    const leftSubTree = makeTree(start, rootIndexInOrder - 1);
    rootNode.left = leftSubTree;
  }
  if (rootIndexInOrder < end) {
    rootIndex++;
    const rightSubTree = makeTree(rootIndexInOrder + 1, end);
    rootNode.right = rightSubTree;
  }

  return rootNode;
}

/*
만약 왼쪽이 있으면 왼쪽으로 간다. 더이상 뭐가 없다면 출력
*/
let ansArr;

function postOrder(root) {
  if (root.left === null && root.right === null) {
    // 리프노드인 경우
    ansArr.push(root.value);
    return;
  }

  if (root.left !== null) postOrder(root.left);
  if (root.right !== null) postOrder(root.right);

  ansArr.push(root.value);

  return;
}

const input = [];
let TEST_COUNT;

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const answers = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  TEST_COUNT = Number(input[0]);

  solution();

  console.log(answers.join('\n'));
});

let nodeCount;
let preOrder;
let inOrder;

function solution() {
  for (let i = 0; i < TEST_COUNT; i++) {
    const startIndex = i * 3 + 1;
    nodeCount = Number(input[startIndex]);

    preOrder = input[startIndex + 1].split(' ').map(Number);
    inOrder = input[startIndex + 2].split(' ').map(Number);

    rootIndex = 0;
    const root = makeTree(0, nodeCount - 1);

    ansArr = [];
    postOrder(root);
    answers.push(ansArr.join(' '));
  }
}
