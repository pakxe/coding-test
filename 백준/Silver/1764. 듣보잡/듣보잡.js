const fs = require('fs');
//let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [hear, see] = input[0].split(' ').map(Number);

const set = new Set();

let i;
for (i = 1; i <= hear; i++) {
	set.add(input[i]);
}

const notHearAndSeePeople = [];

for (let j = i; j < i + see; j++) {
	if (set.has(input[j])) notHearAndSeePeople.push(input[j]);
}

const customSort = (a, b) => {
	if (a > b) return 1;
	if (a === b) return a - b;
	if (a < b) return -1;
};

console.log(notHearAndSeePeople.length);
console.log(notHearAndSeePeople.sort(customSort).join('\n'));

/**
 * 듣지못한 사람, 보지못한 사람 이렇게 나눠서 입력이 들어온다.
 * 이 중에 둘 다에 포함되어있는 사람을 출력하는 것
 */
