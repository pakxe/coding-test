const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const results = [];

for(let i = 0; i < n; i++) {
    if(nums[i] < x) results.push(nums[i])
}

console.log(results.join(' '))