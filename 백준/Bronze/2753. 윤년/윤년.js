function calc(a, b, operator) {
    if(operator === '+') return a + b;
    if(operator === '-') return a - b;
    if(operator === '*') return a * b;
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const year = parseInt(input[0]);
const 윤년여부 = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

console.log(윤년여부 ? 1 : 0)