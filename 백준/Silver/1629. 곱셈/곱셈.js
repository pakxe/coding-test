const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [A, B, C] = input[0].split(' ').map(BigInt);

/*
 수의 overflow가 일어낳 가능성이 크다.

 2^31 = 문제에서 제공한 수의 범위
*/

const f = (a, b, c) => {
	if (b === BigInt(1)) return a % c;

	if (b % BigInt(2) === BigInt(0)) {
		// b가 짝수인 경우
		return f(a, b / BigInt(2), c) ** BigInt(2) % c;
	} else {
		return (f(a, (b - BigInt(1)) / BigInt(2), c) ** BigInt(2) * a) % c;
	}
};

const answer = f(A, B, C).toString();

console.log(answer);
