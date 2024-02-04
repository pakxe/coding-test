/*
트리 노드 배열(포인터 배열)을 만든다. 
입력 값들을 한 줄 씩 읽고, 해당하는 노드를 찾고 좌 우에 그 노드를 찾아서 넣는다.

순회는 뭐.. 
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let order = [];

function preOrder(root) {
  order.push(root.value);

  if (root.left !== null) preOrder(root.left);
  if (root.right !== null) preOrder(root.right);
}

function inOrder(root) {
  if (root.left !== null) inOrder(root.left);

  order.push(root.value);

  if (root.right !== null) inOrder(root.right);
}

function postOrder(root) {
  if (root.left !== null) postOrder(root.left);
  if (root.right !== null) postOrder(root.right);

  order.push(root.value);
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const nodeCount = Number(input[0]);

const pointers = new Array(nodeCount)
  .fill()
  .map((_, i) => new TreeNode(String.fromCharCode(i + 65)));

for (let i = 0; i < nodeCount; i++) {
  const [parent, left, right] = input[i + 1].split(' ');

  if (left !== '.') pointers[parent.charCodeAt() - 65].left = pointers[left.charCodeAt() - 65];
  if (right !== '.') pointers[parent.charCodeAt() - 65].right = pointers[right.charCodeAt() - 65];
}

const answers = [];

preOrder(pointers[0]);
answers.push(order.join(''));

order = [];
inOrder(pointers[0]);
answers.push(order.join(''));

order = [];
postOrder(pointers[0]);
answers.push(order.join(''));

console.log(answers.join('\n'));
