/*
중복을 제거하는건 set으로 한다. 

*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const [N, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const set = new Set(input); // 중복 제거

function strSort(a, b) {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
}

console.log([...set].sort(strSort).join('\n'));
