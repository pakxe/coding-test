const fs = require('fs');
//let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const testCount = parseInt(input[0]);
input.shift();

const result = [];

for (let i = 0; i < input.length; i++) {
	const [h, w, n] = input[i].split(' ').map(Number);
	const ho = Math.ceil(n / h); // 호수
	const floor = n % h === 0 ? h : n % h;

	result.push(
		`${floor}${
			w.toString().length === 2 && ho.toString().length === 2 ? ho : '0' + ho
		}`
	);
}

console.log(result.join('\n'));
