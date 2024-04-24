const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const count = parseInt(input[0]);

for(let i = 1; i <= count; i++) {
    let sum = 0;    
    let cur = 0;
    const str = input[i].split('');
    
    for(let j = 0; j < str.length; j++) {
        if(str[j] === 'O') cur++;
        if(str[j] === 'X') cur=0;
        
        sum += cur;
    }
    
    console.log(sum)

}