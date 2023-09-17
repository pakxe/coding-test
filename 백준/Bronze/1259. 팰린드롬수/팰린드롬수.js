const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const res = [];

const getRes = (str) => {
	for (let j = 0; j < Math.floor(str.length / 2); j++) {
		if (str[j] !== str[str.length - 1 - j]) {
			return 'no';
		}
	}

	return 'yes';
};

for (let i = 0; i < input.length - 1; i++) {
	res.push(getRes(input[i].toString()));
}

console.log(res.join('\n'));
