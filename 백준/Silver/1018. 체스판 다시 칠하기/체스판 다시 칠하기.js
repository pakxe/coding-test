const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [row, col] = input[0].split(' ').map(Number);
input.shift();
/**
 * 시작 위치와 같은 색의 판은 거리가 짝수
 * 다른 판은 거리가 홀수이다.
 *
 * 거리가 홀수인 경우. W, B,,,
 * 흰색결정, -> 거리가 홀수인데 W인 경우 1, B인경우 0
 * 검은색 결정, -> 거리가 홀수인데 W인 경우 0, B인경우 1
 */

const set = new Set();

for (let sr = 0; sr < row - 8 + 1; sr++) {
	for (let sc = 0; sc < col - 8 + 1; sc++) {
		let [whiteStart, blackStart] = [0, 0];

		for (let y = sr; y < sr + 8; y++) {
			for (let x = sc; x < sc + 8; x++) {
				const floor = input[y][x]; // 현재 발판
				const distance = y - sr + (x - sc); // 거리
				// console.log(y, x);
				// console.log(y - sr + (x - sc));
				// console.log(distance);

				// 흰색스타트인데 현재 발판이 짝수에 블랙이라면 칠
				// 흰색스타트인데 현재 발판이 홀수에 화이트라면 칠
				if (
					(distance % 2 === 0 && floor === 'B') ||
					(distance % 2 === 1 && floor === 'W')
				)
					whiteStart++;
				if (
					(distance % 2 === 0 && floor === 'W') ||
					(distance % 2 === 1 && floor === 'B')
				)
					blackStart++;
			}
		}
		set.add(blackStart);
		set.add(whiteStart);
	}
}
console.log(Math.min(...set));
