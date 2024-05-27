const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);

const gcd = (a, b) => {
    const rest = a % b;
    
    if(rest === 0) return b;
    
    else return gcd(b, rest);
}

const gcdValue = gcd(a, b);

console.log(gcdValue);
console.log(a * b / gcdValue)