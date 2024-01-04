const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [days, pickDays] = input.shift().split(' ').map(Number);
const tempList = input.shift().split(' ').map(Number);

/*
100000 * 100000 이 될 수 있어서 시간초과 가능성 존재

일단 브루트포스로 해보자..
이걸 어떻게 단축시킬지 아이디어 생각이 안나

----

사실 누적합으로 푸는거래

*/

const psum = new Array(days + 1).fill(0);

for (let i = 0; i < days; i++) {
  psum[i + 1] = psum[i] + tempList[i];
}

let max = -Infinity;

for (let i = 0; i < days - pickDays + 1; i++) {
  max = Math.max(max, psum[i + pickDays] - psum[i]);
}

console.log(max);
