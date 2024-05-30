const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const str = input[0].split('');
const result = [];
const diff = 32;

for(let i = 0; i < str.length; i++) {
    const char = str[i];
    const ascii = char.charCodeAt();
    
    if(char.toLowerCase() === char) {
        result.push(String.fromCharCode(ascii - diff));
    } else {
        result.push(String.fromCharCode(ascii + diff))
    }
}

console.log(result.join(''))