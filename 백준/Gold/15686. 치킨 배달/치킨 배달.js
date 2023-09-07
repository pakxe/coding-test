const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [rowCount, maxChickenShopCount] = input[0].split(' ').map(Number);
input.shift();

const getCombinations = (arr, num) => {
	const results = [];

	// nC1 이며, 1이면 의미 없기때문에 바로 반환한다.
	if (num === 1) return arr.map((v) => [v]);

	arr.forEach((fixed, index, origin) => {
		// 조합에서는 값 순서에 상관없이 중복이 되면 안되기 때문에 현재값 이후의 배열들만 추출한다.
		const rest = origin.slice(index + 1);

		// 나머지 배열을 기준으로 다시 조합을 실시한다.
		// 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
		const combinations = getCombinations(rest, num - 1);

		// 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
		const attached = combinations.map((v) => [fixed, ...v]);

		// 붙인 값을 결과 값에 넣어준다.
		results.push(...attached);
	});

	return results;
};

/*
13개의 모든 치킨집에 대해서 거리를 구해놓는다. 
그리고 M개를 선택하는 치킨집의 조합을 구한다. 
그렇게 구한 치킨집 번호들만으로 구해놨던 배열의 값들을 꺼내 해당 집의 치킨거리를 구한다. 
그리고 모든 집의 치킨 거리를 구해 선택된 치킨 집에서의 최소값을 구한다. 

그렇게 모든 조합의 최소 치킨거리를 구해 min을 출력한다.
*/

const CHICKEN = 2;
const HOUSE = 1;
const EMPTY = 0;

const chickenShops = [];
const map = [];

const DY = [1, 0, -1, 0];
const DX = [0, 1, 0, -1];

// 맵만들기
for (let i = 0; i < rowCount; i++) {
	map.push(input[i].split(' ').map(Number));
}

// 치킨집 표시하기
for (let y = 0; y < rowCount; y++) {
	for (let x = 0; x < rowCount; x++) {
		if (map[y][x] === CHICKEN) chickenShops.push([y, x]);
	}
}

// 가능한 치킨집의 조합 구하기
// getCombinations(chickenShops, maxChichenShopCount);
let chickenLengthArr = new Array(rowCount)
	.fill()
	.map(() => new Array(rowCount).fill().map(() => []));

const getChickenDistance = (map, start) => {
	const queue = [];
	const visited = new Array(rowCount)
		.fill()
		.map(() => new Array(rowCount).fill(false));

	queue.push([...start, 0]); // [y좌표, x좌표, 집까지의 거리]

	while (queue.length > 0) {
		const [ny, nx, distance] = queue.shift(); // 현재 위치와 치킨집까지의 거리

		if (!visited[ny][nx]) {
			visited[ny][nx] = true; // 방문 표시

			// 집 찾음
			if (map[ny][nx] === HOUSE) {
				chickenLengthArr[ny][nx].push(distance); // 현재 위치해있는 집과 치킨집의 거리
			}

			// 동서남북의 장소를 큐에 푸시한다.
			for (let i = 0; i < DX.length; i++) {
				// 맵을 벗어나는 좌표는 큐에 추가하지 않는다.
				if (
					![-1, rowCount].includes(ny + DY[i]) &&
					![-1, rowCount].includes(nx + DX[i]) &&
					!visited[ny + DY[i]][nx + DX[i]]
				) {
					queue.push([ny + DY[i], nx + DX[i], distance + 1]);
				}
			}
		}
	}
};

// 하나의 치킨집에서 모든 집에 대해서 거리를 구하는게 더 효율적일 것 같다.

/**
 * 치킨집 위치를 다 구한다.
 * 각 치킨집 위치에서 BFS를 돌린다.
 * 만약 집(1)이 감지되면 해당 거리를 집번호[치킨번호[치킨거리]] 에 인덱스로 저장한다.
 * 큐가 빌 때까지 모든 치킨집에 대해서 bfs를 돌린다.
 */

// 치킨집의 위치 목록을 반환하는 함수
const getChickenLocations = (map) => {
	const chickenLocations = [];

	for (let y = 0; y < rowCount; y++) {
		for (let x = 0; x < rowCount; x++) {
			if (map[y][x] === CHICKEN) chickenLocations.push([y, x]);
		}
	}

	return chickenLocations;
};

const getHouseCount = (map) => {
	let houseCount = 0;

	for (let y = 0; y < rowCount; y++) {
		for (let x = 0; x < rowCount; x++) {
			if (map[y][x] === HOUSE) houseCount++;
		}
	}

	return houseCount;
};

// 모든 치킨집 위치에서 BFS를 돌려 모든 집의 치킨집 위치에 대한 치킨 거리를 구한다.
const chickenLocations = getChickenLocations(map);

// 모든 치킨집에 대해 치킨거리 구하기
for (let i = 0; i < chickenLocations.length; i++) {
	getChickenDistance(map, chickenLocations[i]);
}

// 치킨거리 있는 집만 남게 정리
chickenLengthArr = chickenLengthArr.flat().filter((item) => item.length !== 0);

// 최대 개수에서 가능한 치킨집의 조합
const ChickenCombs = getCombinations(
	new Array(chickenLocations.length).fill().map((_, i) => i),
	maxChickenShopCount
);

const minChickenLengthArr = new Array(ChickenCombs.length).fill(0);

for (let i = 0; i < ChickenCombs.length; i++) {
	// [0, 1, 3]
	const 각_집에서_구한_최소값 = [];

	// 하우스들을 돌기
	for (let j = 0; j < chickenLengthArr.length; j++) {
		const house = chickenLengthArr[j];
		let lengths = []; // 선택된 치킨집의 거리들

		// 선택된 치킨집의 최소 거리 구하기
		for (let k = 0; k < house.length; k++) {
			if (ChickenCombs[i].includes(k)) lengths.push(house[k]);
		}

		각_집에서_구한_최소값.push(Math.min(...lengths));
	}

	minChickenLengthArr[i] = 각_집에서_구한_최소값.reduce(
		(sum, item) => (sum += item),
		0
	);
}

console.log(Math.min(...minChickenLengthArr));
/*
각 집에서 모든 치킨집에 대한 치킨거리를 갖고 있어야 한다. 그래야 조합으로 최소 거리를 알 수 있기 때문

빈 맵을 만들고 그 안에 치킨거리를 하나씩 푸시하는 걸로 하자. 
그리고 채워진 맵에서 [] 인 항은 filter로 제거해서 집들의 치킨 거리만 있는 배열로 정리한다. 
그리고 M개의 치킨집 조합을 for로 돈다. 
그 안의 for문으로 m1, m2...mn 번째 치킨 거리 배열에서 최소값을 구한다. 
그렇게 구한 치킨 거리의 합(1포문 안에변수선언)을 조합길이만큼의 배열에 저장해둔다. 
마지막으로 그 배열의 최소값을 콘솔로 찍으면 끝
*/
