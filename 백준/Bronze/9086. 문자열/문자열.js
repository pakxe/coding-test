const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input[0]);

const results =[];
for(let i = 1; i <= count; i++) {
    const str = input[i];
    
    results.push(`${str[0]}${str[str.length - 1]}`);
}

console.log(results.join('\n'))