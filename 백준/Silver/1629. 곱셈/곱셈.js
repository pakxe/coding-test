const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const [A, B, C] = input.shift().split(' ').map(BigInt);
/*
짝수와 홀수인 경우를 생각해야한다.

짝수: A^B = A^(B/2) * A^(B/2)
A^B % C = (A^(B/2) * A^(B/2)) % C
        = (A^(B/2) % C * A^(B/2) % C) % C;
        = f(B/2)^2 % C

홀수: A ^ B = (A^(B/2) * A^(B/2) * A
A ^ B % C = (A^(B/2) * A^(B/2) * A) % C
          = ((A^(B/2) * A^(B/2)) % C * A % C) % C
          = (f(B/2)^2 % C * A % C) % C
          = f(B/2)^2 * A % C
*/

// 모든 인자는 BigInt
function modular(a, b, c) {
  if (b <= BigInt(1)) return a % c;

  // 짝수인 경우
  if (b % BigInt(2) === BigInt(0)) return modular(a, b / BigInt(2), c) ** BigInt(2) % c;
  else return (modular(a, (b - BigInt(1)) / BigInt(2), c) ** BigInt(2) * A) % c;
}

console.log(modular(A, B, C).toString());
