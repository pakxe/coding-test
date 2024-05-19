const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [YES, NO] = ['yes', 'no'];

function isPel (num) {
    for(let i = 0; i < Math.floor(num / 2); i++) {
        if(num[i] !== num[num.length - 1 - i]) return false;
    }
    
    return true;
}

const resultList = [];
for(let i = 0; i < input.length; i++) {
    const num = input[i];
    
    if(num === '0') break;
    
    if(isPel(num)) resultList.push(YES);
    else resultList.push(NO);
}

console.log(resultList.join('\n'))