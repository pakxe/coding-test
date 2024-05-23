const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [up, down, height] = input[0].split(' ').map(Number);

const day = up - down
let days = Math.ceil((height - up) / day);

console.log(days + 1);

