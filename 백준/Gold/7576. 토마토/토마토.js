const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [col, row] = input[0].split(' ').map(Number);
input.shift();

/*
토마토 하나에서 bfs로 사방으로 전파된다. 
for문으로 맵 전체를 돌아, 익은 토마토에 한에서 bfs를 돌린다. 이때 날짜도 함께 저장해 며칠이면 큐가 끝나는지 반환한다. (치킨거리처럼)
그리고 이렇게 반환된 맥스 배열은 저장해둔다. 마지막에 최대 일수 출력시 사용한다. 

그렇게 1을 다 돌았는데 0(익지않은 토마토)가 존재하는 경우 익지못하는 상황으로 판단. -1

처음에 맵을 도는데 0이 없으면 0출력(모든 토마토 익)

*/
const map = input;

const ADULT = 1;
const CHILD = 0;
const EMPTY = -1;

const ALL_ADULT = 0;
const ENABLE_ADULT = -1;

const DX = [0, 1, 0, -1];
const DY = [1, 0, -1, 0];

// function getRippingDays(start) {
// 	const queue = [];
// 	let needDays = 0;

// 	queue.push([...start, 0]); // 0일

// 	while (queue.length > 0) {
// 		const [y, x, days] = queue.shift();

// 		if (map[y][x] !== EMPTY) {
// 			map[y][x] = ADULT; // 익은 토마토로 바꾼다.
// 			needDays = days + 1; // 하루 추가한다.

// 			for (let i = 0; i < DX.length; i++) {
// 				if (
// 					![-1, col].includes(x + DX[i]) &&
// 					![-1, row].includes(y + DY[i]) &&
// 					map[y + DY[i]][x + DX[i]] === CHILD
// 				) {
// 					queue.push([y + DY[i], x + DX[i], days + 1]);
// 					map[y + DY[i]][x + DX[i]] = ADULT; // 익었당
// 				}
// 			}
// 		}
// 	}

// 	return needDays - 1;
// }

const days = new Array(row).fill().map(() => new Array(col).fill(0));
let next = [];

// start는 익은 토마토
function getRippingDays(start) {
	const [y, x] = start;

	for (let i = 0; i < DX.length; i++) {
		if (
			![-1, col].includes(x + DX[i]) &&
			![-1, row].includes(y + DY[i]) &&
			map[y + DY[i]][x + DX[i]] === CHILD
		) {
			next.push([y + DY[i], x + DX[i]]);
			map[y + DY[i]][x + DX[i]] = ADULT; // 익었당
			days[y + DY[i]][x + DX[i]] = days[y][x] + 1; // 하루걸린다
		}
	}
}

let needDays = [];

// 익은 토마토 위치 받아오기
function getAdultLocations() {
	const adultLocations = [];

	for (let y = 0; y < row; y++) {
		for (let x = 0; x < col; x++) {
			if (map[y][x] === ADULT) adultLocations.push([y, x]);
		}
	}

	return adultLocations;
}

// 맵으로 만들기
for (let i = 0; i < input.length; i++) {
	map[i] = input[i].split(' ').map(Number);
}

// 이미 모두 성숙한 경우
let state = true;

for (let y = 0; y < row; y++) {
	for (let x = 0; x < col; x++) {
		if (map[y][x] === CHILD) {
			state = false;
			break;
		}
	}
}

if (state) {
	console.log(ALL_ADULT);
	return;
}

let before = getAdultLocations().length; // 익은 토마토의 개수
let after = 0;

next = getAdultLocations(); // 처음 토마토 위치
let queueIndex = 0;

while (queueIndex < next.length) {
	for (let i = queueIndex; i < next.length; i++) {
		getRippingDays(next[i]);
		queueIndex++;
	}
}

for (let y = 0; y < row; y++) {
	for (let x = 0; x < col; x++) {
		if (map[y][x] === CHILD) {
			console.log(ENABLE_ADULT);
			return;
		}
	}
}
console.log(Math.max(...days.flat()));

/**
 * 변화가 없을 때까지 반복한다.
 * 현재 맵을 찰칵해서 익은 토마토의 좌표를 배열로 얻어낸다.
 * 모든 익은 토마토 좌표에 대해서 한칸씩 전파한다.
 *
 * 변화의 감지는 맵에서 익은 토마토의 개수로 하자
 */
