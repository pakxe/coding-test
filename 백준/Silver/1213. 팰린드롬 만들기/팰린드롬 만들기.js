const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

/*
아 순서만 바꿔서 펠린드롬을 하는거군...
그러면 이름의 아스키를 읽어서 인덱스 배열을 만들고 이 배열 중 1이 딱 1개만 있으면 될 것 같은데. 
내가 순서도 바꿔야하네... 정답이 여러개일 경우 사전순으로 앞서는 것을 출력해야한다는 것은

일단 2 0 4 2 0 1 이런식이면은 앞부터 소모해라 이거아냐?

for 이름 길이
    배열[이름아스키]++;
    
(이렇게 인덱스 배열이 완성된다);

function 이거 펠린드롬 가능 (인덱스 배열) {
    돌면서 1의 카운트를 세서 1이 2개 이상이면 false반환
}

const start = '';
let middle = '';

for 인덱스 배열 길이
    if(1이라면) {
        middle = 지금 문자
        continue;
    }
    0이 아니라면 answerName += (이 인덱스 아스키 -> 문자).repeat(현재 요소 값 / 2);
    
const end = start.split('').reverse().join('');
console.log(answerName + middle + end);
*/
const FAIL_CHANGE = "I'm Sorry Hansoo";

const name = input.shift();
const indexArr = new Array(26).fill(0);

// 이 글이 펠린드롬이 될 수 있는지 확인
function itCanBePalindrome(indexArr) {
  let singleCount = 0;

  indexArr.forEach((count) => {
    // 홀수는 하나만 있어야한다.
    if (count % 2 === 1) singleCount += 1;
  });

  return singleCount <= 1;
}

for (let i = 0; i < name.length; i++) {
  const ascii = name[i].charCodeAt() - 65;
  indexArr[ascii] += 1;
}

let start = '';
let middle = '';

if (!itCanBePalindrome(indexArr) || name === '') {
  console.log(FAIL_CHANGE);
  return;
}

for (let i = 0; i < indexArr.length; i++) {
  const char = String.fromCharCode(i + 65);
  // 홀수라면 1개만 빼두고 start에 push하면 된다.
  if (indexArr[i] % 2 === 1) {
    start += char.repeat(Math.floor(indexArr[i] / 2));
    middle = char;
  } else if (indexArr[i] !== 0) {
    // 짝수라면 그대로 push
    start += char.repeat(indexArr[i] / 2);
  }
}

const end = start.split('').reverse().join('');

console.log(start + middle + end);
