const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const length = parseInt(input[0]);

const coordinates = [];

for (let i = 1; i < input.length; i++) {
	coordinates.push(input[i].split(' ').map(Number));
}

const customSort = (a, b) => {
	const [ax, ay] = a;
	const [bx, by] = b;

	if (ax === bx) return ay - by;
	else return ax - bx;
};

console.log(
	coordinates
		.sort(customSort)
		.map((coordinate) => coordinate.join(' '))
		.join('\n')
);
