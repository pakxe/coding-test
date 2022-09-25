const fs = require("fs");
const [n, ...points] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

points.sort(function (a, b) {
  let na = a.split(" ").map(Number);
  let nb = b.split(" ").map(Number);
  if (na[0] < nb[0]) return -1;
  if (na[0] < nb[0]) return 1;
  if (na[0] === nb[0]) {
    if (na[1] < nb[1]) return -1;
    else return 1;
  }
});

let str = "";
points.forEach((e) => {
  str += e;
  str += "\n";
});

console.log(str);

//이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬하고,
// 이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.
// 만약 0을 리턴하면, a와 b의 순서를 변경하지 않습니다.
