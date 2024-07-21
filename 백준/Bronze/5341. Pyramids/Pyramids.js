const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];
for(let i = 0; i < input.length - 1; i++) {
    const cur = input[i];
    
    let sum = 0;
    for(let j = 1; j <= cur; j++) {
        sum += j
    }
    
    result.push(sum);
}

console.log(result.join('\n'))