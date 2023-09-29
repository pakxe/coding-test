const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const nodes = input[1].split(' ').map(Number);

const tree = new Array(parseInt(input[0])).fill().map(() => []);

for (let i = 0; i < nodes.length; i++) {
	if (nodes[i] === -1) continue;
	tree[nodes[i]].push(i);
}

const bfs = (start) => {
	const queue = [start];
	const visited = new Array(parseInt(input[0])).fill(false);
	visited[start] = true;

	while (queue.length) {
		const node = queue.shift();

		for (const child of tree[node]) {
			if (!visited[child]) {
				visited[child] = true;
				queue.push(child);
			}
		}
	}

	return visited;
};

let count = 0;
const deletedNode = parseInt(input[2]);
for (let i = 0; i < parseInt(input[0]); i++) {
	if (bfs(deletedNode)[i]) continue;
	if (tree[i].includes(parseInt(input[2]))) {
		if (tree[i].length - 1 === 0) count++;
	} else if (tree[i].length === 0) {
		// 빈 배열 즉, 리프 노드라면
		count++;
	}
}

console.log(count);
