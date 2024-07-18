const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);

let days = 0;
for(let i = 1; i < input.length; i++) {
    const day = Number(input[i].split('-')[1]);
    if(day <= 90) days += 1;
}

console.log(days)
