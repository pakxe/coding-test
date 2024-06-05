/**
n*n인 문제.

정렬해서 이분탐색하는 방법으로 풀 수 있을 것 같다.

해시맵은 잘 모르겠는데 그럼 메모리 터지지 않나? => 이 방법은 찾아보는게 좋을
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const nNums = input[1].split(' ').map(Number);
const m = parseInt(input[2]);;
const mNums = input[3].split(' ').map(Number);

const set = new Set(nNums);

const resultList = [];

mNums.forEach(num => {
    if(set.has(num)) resultList.push(1);
    else resultList.push(0);
})

console.log(resultList.join('\n'))
