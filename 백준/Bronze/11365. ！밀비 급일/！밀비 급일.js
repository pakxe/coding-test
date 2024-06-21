const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const results = [];

for(let i = 0; i < input.length; i++) {
    const str = input[i];
    
    if(str === 'END') break;

    results.push(str.split('').reverse().join(''));
}

console.log(results.join('\n'))