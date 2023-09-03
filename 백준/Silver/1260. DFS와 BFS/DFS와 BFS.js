const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().split('\n');

// let input = fs.readFileSync('e.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [nodeCount, lineCount, start] = input[0].split(' ').map(Number);
input.shift();

let graph = new Array(nodeCount + 1).fill().map(() => []);

for (let i = 0; i < input.length; i++) {
	const [a, b] = input[i].split(' ').map(Number);

	graph[a].push(b);
	graph[b].push(a); // 쌍방 연결이니까 서로에게 추가해줘야한다.
}

graph = graph.map((node) => node.sort((a, b) => b - a)); // 내림차순 정렬

const dfs = (graph, start) => {
	const stack = [];
	const visited = new Array(nodeCount + 1).fill().map(() => false);
	const result = [];

	stack.push(start);

	while (stack.length !== 0) {
		const node = stack.pop();

		if (visited[node] !== true) {
			visited[node] = true; // 방문했다고 표시

			stack.push(...graph[node]);

			result.push(node); // 방문 !
		}
	}

	console.log(result.join(' '));
};

const bfs = (graph, start) => {
	const queue = [];
	const visited = new Array(nodeCount + 1).fill().map(() => false);
	const result = []; // 이걸 visited랑 합쳐도될 것 같긴한데 시간을 봐야할듯

	queue.push(start);

	while (queue.length !== 0) {
		const node = queue.shift();

		if (visited[node] !== true) {
			visited[node] = true; // 방문했다고 표시

			queue.push(...graph[node].reverse());

			result.push(node); // 방문 !
		}
	}

	console.log(result.join(' '));
};

dfs(graph, start);
bfs(graph, start);
