const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const size = Number(input[0]);

const calcZeroCount = (start, end) => {
    let zeroCount = 0;
    
    for(let i = start; i <= end; i++) {
        zeroCount += i.toString().split('').filter((char) => char === '0').length;
    }
    
    return zeroCount;
}

const results = [];
for(let i = 1; i <= size; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    
    results.push(calcZeroCount(start, end));
}

console.log(results.join('\n'))