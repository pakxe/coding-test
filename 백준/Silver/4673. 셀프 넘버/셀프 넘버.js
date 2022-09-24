const num = 10001;
let arr = new Array(num);
arr.fill(0); //0으로 초기화

let sum = 0;
let str = "";

for (let i = 0; i < num; i++) {
  sum = i;

  str = i.toString(); //숫자를 문자로 바꾼 것
  for (let j = 0; j < str.length; j++) {
    sum += Number(str[j]);
  }
  if (sum > 10000) continue;
  arr[sum]++;
}

for (let i = 0; i < num; i++) {
  if (arr[i] === 0) console.log(i);
}
