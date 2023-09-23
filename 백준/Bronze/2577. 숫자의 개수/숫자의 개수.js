const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);;
// const input = fs
	
	

const mul = (input[0] * input[1] * input[2]).toString();

const count = new Array(10).fill(0);

for (let i = 0; i < mul.length; i++) {
	count[parseInt(mul[i])]++;
}

console.log(count.join('\n'));
