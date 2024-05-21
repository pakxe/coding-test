const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [YES, NO] = ['right', 'wrong'];

const resultList = [];
for(let i = 0; i < input.length; i++) {
    const lengthList = input[i].split(' ').map(Number).sort((a, b) => a - b);
    if(lengthList.every(length => length === 0)) break;
    
    const a = lengthList[0] ** 2 + lengthList[1] ** 2;
    const b = lengthList[2] ** 2;
    
    if(a === b) resultList.push(YES);
    else resultList.push(NO);
}

console.log(resultList.join('\n'))