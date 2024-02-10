const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const mux = input.reduce((sum, cur) => sum * Number(cur), 1).toString();
const nums = new Array(10).fill(0);
mux.split('').forEach((a) => nums[a] += 1);

console.log(nums.join('\n'))
