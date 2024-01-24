const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const [min, max] = [Math.min(...nums), Math.max(...nums)];
console.log(min, max);
