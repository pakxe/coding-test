const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const length = parseInt(input[0]);
let coordinates = input[1].split(' ').map(Number);

/*
시간 넘길거같은데 일단 해보자. 
중복은 허용하지 않음 -> set으로 복제해서 갖고있는다. 
그리고 이것보다 해당 값보다 미만으로 작은 값이 몇개나 있는지 확인한다. 
정렬을 해야할 것 같다. 

set으로 중복을 없애고, 배열로 만든다. 그리고 오름차순 정렬을 한다. index로 얘보다 작은 값의 개수를 파악한다.

작은 값 개수 세기는 비교하려는 값의 인덱스를 찾으면 된다. 1번이면 1개가 작은거니까

아 그냥 map을 만들어서 {1: 앞의 개수} 를 넣으면 될 것 같다. 

*/

const notDuplicated = new Set(coordinates); // 중복 제거
const sortedCoordinates = [...notDuplicated].sort((a, b) => a - b); // 오름차순

const map = new Map();

sortedCoordinates.forEach((value, i) => {
	map.set(value, i);
});

console.log(coordinates.map((coordinate) => map.get(coordinate)).join(' '));
