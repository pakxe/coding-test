const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

if (input[0] === ' ' || input[0] === '') console.log(0);
else console.log(input[0].split(' ').length);
