const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'e.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const nums = input[1].split('').map(Number);

console.log(nums.reduce((sum, cur) => sum + cur, 0));
