function solution(n) {
  return Number(진수3(n.toString(3).split('').reverse()));
}

const 진수3 = (numArr) => {
  let sum = BigInt(0);
  return numArr
    .reverse()
    .reduce((s, n, i) => (s += BigInt(3 ** i * Number(n))), sum);
};