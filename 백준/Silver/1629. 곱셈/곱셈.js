const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(BigInt);

/*
재귀형태로 분할 정복하는 함수를 만든다.
*/

const getCalc = (n) => {
    if(n === BigInt(1)) return a % c;
    
    if(n % BigInt(2) === BigInt(0)) { // 짝수
        const v = getCalc(n / BigInt(2));
        return BigInt((v % c * v % c) % c);
    } else {
        const v = getCalc((n - BigInt(1)) / BigInt(2));
        return BigInt((v % c * v % c * a % c) % c);
    }
}

console.log(getCalc(b).toString())

