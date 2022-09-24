let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const n = Number(input[0]);

let numbers = "";
for (let i = 1; i <= n; i++) {
    numbers = numbers + i + '\n';
}

console.log(numbers);