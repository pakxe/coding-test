const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const count = parseInt(input[0]);

for(let i = 1; i <= count; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(`Case #${i}: ${a + b}`)
}