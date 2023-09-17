const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const result = []

for(let i = 0; i < input[0]; i++) {
    result.push('*'.repeat(i + 1));
}

console.log(result.join('\n'))