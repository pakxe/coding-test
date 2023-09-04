const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const LINE_COUNT = parseInt(input.shift());

const OPEN = ['(', '['];
const CLOSE = [')', ']'];

const SUCCESS = 'yes';
const FAIL = 'no';

const isValidPS = (str) => {
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		if (OPEN.includes(str[i])) stack.push(str[i]);
		if (CLOSE.includes(str[i])) {
			const stackTop = stack[stack.length - 1];

			if (stack.length === 0) return false;

			if (stackTop === OPEN[0] && str[i] === CLOSE[0]) stack.pop();
			else if (stackTop === OPEN[1] && str[i] === CLOSE[1]) stack.pop();
			else return false;
		}
	}

	return stack.length !== 0 ? false : true;
};

for (let i = 0; i < input.length; i++) {
	if (input[i] === '.') return;
	console.log(isValidPS(input[i]) ? SUCCESS : FAIL);
}
