const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const nodeCount = parseInt(input.shift());

// console.log(input);

let graph = new Array(nodeCount + 1).fill().map(() => []);

for (let i = 0; i < input.length; i++) {
	const [a, b] = input[i].split(' ').map(Number);

	graph[a].push(b);
	graph[b].push(a); // 쌍방 연결이니까 서로에게 추가해줘야한다.
}

const counter = new Array(nodeCount + 1).fill(0);

const dfs = (graph, start) => {
	const stack = [];
	const visited = new Array(nodeCount + 1).fill(false);

	stack.push(start);

	while (stack.length !== 0) {
		const node = stack.pop();

		if (!visited[node]) {
			visited[node] = true;

			const leafs = graph[node];
			leafs.map((leaf) => {
				if (counter[leaf] === 0) counter[leaf] = node;
			});

			stack.push(...graph[node]);
		}
	}
};

dfs(graph, 1);

const res = [];
for (let i = 2; i < counter.length; i++) {
	res.push(counter[i]);
}

console.log(res.join('\n'));
