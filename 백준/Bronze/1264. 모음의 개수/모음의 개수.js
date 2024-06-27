const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const 모음 = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

const results = [];
for(let i = 0; i < input.length; i++) {
    const str = input[i];
    
    if(str === '#') break;

    let count = 0;
    for(let j = 0; j < str.length; j++) {
        const char = str[j];
        
        if(모음.includes(char)) {
            count++;
        }
    }
    
    results.push(count);
}

console.log(results.join('\n'))