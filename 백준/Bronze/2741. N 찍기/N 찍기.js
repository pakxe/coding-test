const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);
for(let i = 0; i < num; i++) {
    console.log(i + 1);
}