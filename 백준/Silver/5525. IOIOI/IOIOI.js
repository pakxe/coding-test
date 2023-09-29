const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input[0]);
// input[2]가 문자열

/**
 * 일단 연속된 그 문자열의 길이를 세는게 좋을 것 같은데,
 *
 * 3, 1
 * 4개
 *
 * 3, 1
 *
 */
// 3 1, 5 2, 7 3
let matchCount = 0;
// 매치가 짝수면 I를 만나야하고, 매치가 홀수면 O를 만나야 한다. 만나지못하면 매치 초기화.
// 만약 그떄의 매치가 홀수면 그떄까지의 개수 matchCount - 1 / 2를 저장, 짝수면 IOIOIO 니까 -1하고 matchCount - 2 / 2
// 각각의 매치카운트는 배열에 push하려 저장한다.
/**
 * 문자열을 다 돌았을 경우 마지막 쪽에 대해서도 따로 처리해줘야한다.
 *
 * 결과 배열을 돌면서 n과 같으면 + 1, n 보다 작으면 pass, n보다 크면 그 값 - 1
 */
const result = [];

for (let i = 0; i < input[2].length; i++) {
	if (matchCount % 2 === 0 && input[2][i] === 'I') matchCount++;
	else if (matchCount % 2 === 1 && input[2][i] === 'O') matchCount++;
	else if (input[2][i] === 'I') {
		result.push((matchCount - 1) / 2);
		matchCount = 1;
	} else {
		result.push((matchCount - 2) / 2);
		matchCount = 0;
	}
}
result.push(matchCount % 2 === 1 ? (matchCount - 1) / 2 : (matchCount - 2) / 2);
let count = 0;

for (let i = 0; i < result.length; i++) {
	if (result[i] > n) count += result[i] - n + 1;
	else if (result[i] === n) count++;
}

console.log(count);
