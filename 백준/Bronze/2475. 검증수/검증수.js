const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const nums = input[0].split(' ').map(Number);

const sqrtedNums = nums.map(num => num ** 2 );
console.log(sqrtedNums.reduce((sum, n) => sum + n, 0) % 10)
