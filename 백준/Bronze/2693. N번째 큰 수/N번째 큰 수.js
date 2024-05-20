const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const count = parseInt(input[0]);

for(let i = 1; i <= count; i++) {
    const nums = input[i].split(' ').map(Number);
    
    nums.sort((a, b) => b - a);
     
    console.log(nums[2]);
}