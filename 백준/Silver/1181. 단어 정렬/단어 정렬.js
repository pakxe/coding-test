const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const wordCount = parseInt(input[0]);
input.shift();

const customSort = (a, b) => {
	if (a.length > b.length) return 1;
	if (a.length === b.length) {
		return a < b ? -1 : 1;
	}
	if (a.length < b.length) return -1;
};

console.log([...new Set(input.sort(customSort))].join('\n'));
