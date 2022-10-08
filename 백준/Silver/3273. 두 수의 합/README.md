## 문제
https://www.acmicpc.net/problem/3273
![](https://velog.velcdn.com/images/pakxe/post/036a99df-3563-4282-9b07-278f22b0d0d6/image.png)

## 알고리즘 분류
- 정렬
- 두 포인터

## 풀이
a+b=x 식을 바꾸면 a=x-b 이다. 
이렇게 되면 x-b인 a의 **값이 수열 안에 있는지 찾는 문제**가 된다. 
하지만 js기본 메서드를 사용해 배열안의 a를 찾으면 시간초과가 발생한다. 
따라서 시간이 적게 드는 배열 탐색 방법을 사용하면 되겠다.
나는 이분 탐색을 사용했다.

이 문제에서 주의해야할 점은 
x-b인 a를 찾았다는건 식을 바꿔보면 (x-b=a -> x-a=b) x-a인 b 또한 존재한다는 점이다. 둘을 구별해야한다면 쌍의 수는 2개가 추가되겠지만, 문제가 원하는 것은 **순서를 구분하지 않는 쌍**이다.

또한 a*2=x인 a가 있다면 위와 다르게 쌍의 수가 1개가 추가된다.

## 코드
```
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let x = Number(input[2]);
let arr1 = input[1].split(" ").map(Number);

let bs = function (arr, target, start, end) {
  let mid = 0;
  while (start <= end) {
    mid = Math.trunc((start + end) / 2);
    if (target === arr[mid]) return 1;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return 0;
};

arr1.sort((a, b) => a - b);

let count = 0;
for (let i = 0; i < n; i++) {
  count += bs(arr1, x - arr1[i], 0, n - 1);
}

console.log(Math.floor(count / 2));

```


