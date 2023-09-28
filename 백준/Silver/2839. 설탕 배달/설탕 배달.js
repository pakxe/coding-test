const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const need = parseInt(input.shift());

/**
 * 5로최대한 나누고 하나씩 빼가는 식으로 해야된다.
 */

let count = 0;

for (let i = Math.floor(need / 5); i >= 0; i--) {
	const restWeight = need - i * 5;
	if (restWeight % 3 === 0) {
		count = i + restWeight / 3;
		break;
	}
}

console.log(count === 0 ? -1 : count);
