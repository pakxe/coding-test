const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [A, B, C] = input.shift().split(' ').map(Number);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log(A * B % C);
console.log(((A % C) * (B % C)) % C);