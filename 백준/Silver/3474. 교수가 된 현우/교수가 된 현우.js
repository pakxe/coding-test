/*
진짜 계산을 해야할 것 같다.

다만 저렇게 큰 숫자면 Number로는 불가능할걳같은데 BigInt로도 가능할지는 모르겠다. -> 가능할 것 같다. 그냥 메모리를 쓰는걸 보면 문자열과 동일한 방식인 것 같다.

팩토리얼 함수를 만들어야 될 것 같다. 그냥 곱하면 되나? -> 누적합을 써서 매번 팩토리얼을 안하게 할 순 없을까?
어디까지 되어있는지 index를 저장하고 이 인덱스보다 작으면 있는 값을 쓰고, index보다 크면 그 index부터 팩토리얼 배열을 갱신한다. 라고하려고 했는데, 그러려면 저 10억 개의 배열이 있어야하는건데, 어차피 필요한가?

배열이 보통 한 칸에 8바이트고 10억개가 최대니까 이걸 저장하면 너무 커질 것 같다...
그냥 곱하는게 맞을 것 같다.

function factorial (n) {
    let num = Bigint(1);

    for(let i = 2; i <= n; i++) {
        num *= BigInt(i);
    }

    return num;
}

--- 1차 시도 실패 ---
factorial에서 시간이 오래 걸리는 것 같다.
1. 그래서 생각해 낸 방법은 제일 오른쪽에서 셀때 0이 아닌 숫자가 나오면 그 숫자만 저장 -> 이건 안되겠다. 왜냐면 2의 자리 수와 더해서 0이 더 늘어날 수도 있고 줄어들 수도 있기 때문에 틀린 답이 나와.

2. 그냥 0이 있으면 0을 제외하고 곱셈을 하는건 시간이 줄어들긴 하려나? -> 실패...

3. (해법을 들어버렸다..) 0은 10이 나와야 만들어진다. 그리고 10 = 2 * 5이다. 그리고 10의 개수에 따라서 0의 개수가 결정된다. 따라서 2 1개, 5 1개의 쌍이 몇개가 있는지 알 수 있다면 0의 개수를 간단하게 추측할 수 있다.
이떄 0을 제거하는건 시간이 더 오래걸리니 이것에 관한 코드는 제거하도록 하자.

1부터 시작해서 이 값이 2로 몇개로 나뉘어지는지, 5로 몇개로 나뉘어지는지 확인하고 개수를 추가한다.
n까지 이 행동을 반복해 인수로써 2, 5가 각각 몇개 존재하는지 계산한다. (어차피 곱셈으로 연결되므로)
그리고 이 중 최소인 값이 10의 개수(0의 개수)이므로 이 값을 반환한다.

4. (풀이를 봐버렸다..)3번의 방법이 시간초과가 발생
나눗셈 연산이 오래걸리는 것 같다. 

5. (풀이를 봐버렸다..) 2의 배수로 나누어 주고 나눠 떨어진다면 그것은 2가 들어가는 수..
*/


const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);

function getFiveCount(n) {
  let five = 0;

  for (let i = 5; i <= n; i *= 5) five += Math.trunc(n / i);

  return five;
}

const answers = [];

for (let i = 1; i <= T; i++) {
  const num = input[i]; // Number

  const fiveCount = getFiveCount(num);

  answers.push(fiveCount);
}

console.log(answers.join('\n'));
