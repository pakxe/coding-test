const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const r = 31;
const m = 1234567891

const strLength = parseInt(input[0]);
const str = input[1];

let sum = BigInt(0);
for(let i = 0; i < str.length; i++) {
    const ascii = str[i].charCodeAt() - 96;

    // console.log(ascii, r, i)
    const hash = BigInt(ascii * (r ** i));
    
    sum += hash;
}

const answer = sum % BigInt(m);
console.log(answer.toString())

/*
아스키 * 31^(현재 인덱스)
*/