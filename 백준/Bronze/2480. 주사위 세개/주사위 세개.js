const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const dice = input[0].split(' ').map(Number);

function maxSameCount(dice) {
    const arr = new Array(6).fill(0);
    
    dice.forEach(v => arr[v - 1]++);
    
    const max = Math.max(...arr);
    const target = arr.lastIndexOf(max) + 1;
    
    return [max, target];
}


const [sameCount, target] = maxSameCount(dice);

if(sameCount === 3) console.log(10000 + (target * 1000));
else if(sameCount === 2) console.log(1000 + (target * 100));
else console.log(target * 100)
