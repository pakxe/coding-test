const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

function power(a, n) {
  if (n === BigInt(0)) return BigInt(1);

  let x = power(a, BigInt(parseInt(n / BigInt(2))));

  if (n % BigInt(2) === BigInt(0)) return ((x % c) * (x % c)) % c;
  else return ((x % c) * ((x * a) % c)) % c;
}

console.log(power(a, b).toString());
