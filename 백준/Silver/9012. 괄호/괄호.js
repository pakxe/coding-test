const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const LINE_COUNT = parseInt(input.shift());

const OPEN = '(';
const CLOSE = ')';

const SUCCESS = 'YES';
const FAIL = 'NO';

const isValidPS = (str) => {
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === OPEN) stack.push(str[i]);
		if (str[i] === CLOSE) {
			if (stack.length === 0) return false;
			else stack.pop();
		}
	}

	return stack.length !== 0 ? false : true;
};

for (let i = 0; i < LINE_COUNT; i++)
	console.log(isValidPS(input[i]) ? SUCCESS : FAIL);
