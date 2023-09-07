const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [min, max] = input[0].split(' ').map(Number);

/**
 * 소수: 1과 자기자신 외에 약수를 가지지 않는 1 초과 자연수
 * 약수를 구해야한다. 
 * 
자신의 제곱근보다 작은 약수를 구하면 약수를 다 구하는 것과 마찬가지이다. 
제곱근이 있으면 약수가 아님

 */

function isPrimeNumber(num) {
	if (num === 1) return false;

	for (let i = 2; i <= Math.sqrt(num); i++) {
		// 나눠진다.
		if (num % i === 0) return false;
	}
	return true;
}

const primeNumberArr = [];

for (let i = min; i <= max; i++) {
	if (isPrimeNumber(i)) primeNumberArr.push(i);
}

console.log(primeNumberArr.join('\n'));
