const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const count = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

let total = 0;

function is (num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num / i === Math.floor(num / i)) {
            // 나누어 떨어지는 숫자라면
            return false;
        }
    }
    
    return true;
}

for(let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if(num === 1) continue;
    if(num === 2 || is(num)) total += 1;
}

console.log(total)
//검산
// const arr = new Array(1000).fill(0).map((_, i) => i + 1);

// arr.forEach(num => {
//     if(num === 2 || is(num)) console.log(num)
// })