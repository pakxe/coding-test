const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);

let index = 0;
const res = [];

while (1) {
	if (index.toString().includes('666')) res.push(index);

	if (res.length === num) {
		console.log(index);
		break;
	}

	index++;
}
