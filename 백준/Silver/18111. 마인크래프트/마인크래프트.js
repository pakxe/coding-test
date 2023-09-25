const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [row, col, blocks] = input[0].split(' ').map(Number);

const map = [];
let minHeight = Infinity;
let maxHeight = -Infinity;

// 맵 만들기
for (let i = 1; i <= row; i++) {
	const floors = input[i].split(' ').map(Number);

	const min = Math.min(...floors);
	const max = Math.max(...floors);

	if (min < minHeight) minHeight = min;
	if (max > maxHeight) maxHeight = max;

	map.push(...floors);
}

map.sort((a, b) => b - a);

let minTime = Infinity;
let maxFloor = -Infinity;

for (let i = minHeight; i <= maxHeight; i++) {
	let blockCount = blocks; // 블록 개수 초기화
	let time = 0;
	let flag = false;

	for (let j = 0; j < map.length; j++) {
		// 전체 맵을 돈다.
		const needBlockCount = i - map[j]; // 필요한 블럭

		if (needBlockCount < 0) {
			// 기준 수평보다 높은 지대
			time += Math.abs(needBlockCount) * 2; // 빼는데 걸리는 시간 계산
			blockCount += Math.abs(needBlockCount); // 뺀 블록은 인벤토리에 넣기
		}
		if (needBlockCount > 0) {
			// 기준 수평보다 낮은 지대
			if (needBlockCount > blockCount) {
				flag = true;
				break; // 중단
			}
			time += needBlockCount;
			blockCount -= needBlockCount;
		}
	}
	if (flag) continue;

	if (time <= minTime) {
		minTime = time;
		maxFloor = i;
	}
}

console.log(minTime + ' ' + maxFloor);
/*
25000 * 256 시간이 걸리지만..

이 맵의 최소부터, 최대까지를 돈다. 왜냐면 어차피 위로 더쌓거나 한 층을 더 뺄 이유는 없으니까
2차원 배열로 만들 이유가 없을 것 같다. 빠른 개수 파악을 위해. 

빼는 경우와 추가하는 경우를 나눠서 생각한다.
i높이에 맞추기
    i보다 크면 차이 * 2를 구한다(뺄 블럭) -> 블럭 수에 추가한다.
    i보다 작으면 차이 * 1 을 구한다.(필요한 블럭) 그런데 필요한 블럭이 이에 못미치면 중단한다.
    그렇게 구한 i와 시간을 최대 최소로 계속 갱신한다.
*/
