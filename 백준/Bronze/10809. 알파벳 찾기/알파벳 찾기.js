const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const str = input[0].split('');

const arr = new Array(26).fill(-1);

str.forEach((char, i) => {
    const charIndex = char.charCodeAt(0) - 97;
    
    arr[charIndex] = arr[charIndex] === -1 ? i : arr[charIndex];
})

console.log(arr.join(' '))