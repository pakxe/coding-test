const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const meetCount = parseInt(input[0]);

const ascendingEndTimeSort = (a, b) => {
	const [startA, endA] = a;
	const [startB, endB] = b;

	// 둘의 끝나는 시간이 다르다면
	if (endA !== endB) return endA - endB;
	// 둘의 끝나는 시간이 같다면, 그냥 아무거나 뱉어도 되긴 하지만..
	else return startA - startB;
};

// 회의 배열 만들기
const meetArr = [];

for (let i = 1; i < input.length; i++) {
	meetArr.push(input[i].split(' ').map(Number));
}

// 끝나는 시간 오름차순으로 정렬
meetArr.sort(ascendingEndTimeSort);

// 1개 이상 입력이 들어오므로 0번 회의는 자동으로 가능하다고 판단.
let maxMeetCount = 1;
let rightBeforeEndTime = meetArr[0][1];

for (let i = 1; i < meetArr.length; i++) {
	const [start, end] = meetArr[i];

	if (start >= rightBeforeEndTime) {
		maxMeetCount++; // 회의 추가
		rightBeforeEndTime = meetArr[i][1]; // 가능한 회의의 종료 시간 저장
	}
}
// }
// while (1) {
// 	// findIndex = 원하는 요소 찾자마자 종료
// 	const nowMeet = meetArr.findIndex((meet, i) => {
// 		if (i > searchIndex) {
// 			const [start, end] = meet;

// 			return start >= rightBeforeEndTime;
// 		}
// 	});

// 	// -1이면 결과가 없다는 의미
// 	if (nowMeet === -1) break;

// 	// 찾은 경우
// 	maxMeetCount++; // 회의 추가
// 	searchIndex = nowMeet; // 가능한 회의의 인덱스 저장
// 	rightBeforeEndTime = meetArr[nowMeet][1]; // 가능한 회의의 종료 시간 저장
// }

console.log(maxMeetCount);

/*
가장 먼저 끝나는 것부터 빼낸다. 

애초에 주어지는 정렬이 끝나는 시간의 오름차순으로 되어있음

시작하는 시간은 상관 없을 것 같다. 


풀이
끝나는 시간으로 오름차순 정렬한다. (정렬되어 넘겨지지 않을 수도 있으므로)
첫번째부터 결과 카운트 1 추가(개수만 필요하므로)
인덱스도 저장한다. 다음 회의를 찾기 시작할 시점을 저장해두기 위해
직전의 회의의 끝나는 시간과 겹치지 않는 회의를 찾아야 한다. 
그렇게 주어진 모든 회의를 다 돌았다면 끝

findIndex()를 사용해 조건을 충족하는 값을 찾자. 
매번 slice를 해서 찾을 배열을 넘겨줘야할 것 같다. 
*/
