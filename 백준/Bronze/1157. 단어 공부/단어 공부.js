const fs = require('fs');
// let input = fs.readFileSync('e.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a, b] = input[0].split(' ').map(Number);

const alphabetArr = new Array(26).fill(0);

const strArr = input[0].toUpperCase();

for (let i = 0; i < strArr.length; i++) {
	alphabetArr[strArr[i].charCodeAt() - 65]++;
}

const max = Math.max(...alphabetArr);

const index = alphabetArr.indexOf(max);
if (index !== alphabetArr.lastIndexOf(max)) console.log('?');
else console.log(String.fromCharCode(index + 65));
