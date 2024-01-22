/*
2333 인 경우 3의 빈도가 더 많으므로
3332 여야함
그리고 동일하게 나온 경우 먼저 나온 것을 우선으로 한다. 

10억까지. 개수는 1000개라서 시간 초과는 신경쓰지 않아도 될 것 같다. 

인덱스 배열을 사용하면 될 것 같은데, 10억까지니까 이건 좀 애매하긴하다. map을 사용하는게 나을듯. 
for를 한번 돌면서 빈도를 저장해야될 것 같다. 

먼저 나온 것에 대해선 어떻게 처리할 수 있을까?
-> 정렬(sort)을 해야할 것 같다. 만약 빈도가 같으면 순서 배열에서 보고 사용하는 걸로
js의 sort는 양수를 return하면 순서를 바꾸고, 음수면 순서를 유지한다
 

const sequenceSet = 배열을 그대로 넣어서 new Set을 만든다.
const map = new Map();

for 입력받은 수열 {
    const 현재 값
    
    if(map에 없다면) 새로 1로 추가
    else 값을 받아와서 1더한 값으로 set
}

function customSort(a, b) => {
    const [num1, count1] = a;
    const [num2, count2] = b;
    
    
}

[...map].sort(customSort)
*/

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [messageLength, c] = input[0].split(' ').map(Number);
const numArr = input[1].split(' ').map(Number);
const sequenceSet = [...new Set(numArr)];

const map = new Map();

for (let i = 0; i < messageLength; i++) {
  const curNum = numArr[i];

  if (map.has(curNum)) map.set(curNum, map.get(curNum) + 1);
  else map.set(curNum, 1);
}

function customSort(a, b) {
  const [num1, count1] = a;
  const [num2, count2] = b;

  if (count1 > count2) return -1; // 그대로 유지
  else if (count1 < count2) return 1; // 교환
  else if (count1 === count2) {
    const count1Seq = sequenceSet.indexOf(num1);
    const count2Seq = sequenceSet.indexOf(num2);

    if (count1Seq < count2Seq) return -1;
    else return 1;
  }
}

const sortedMap = [...map].sort(customSort);

let answers = [];

for (let i = 0; i < sortedMap.length; i++) {
  const [num, count] = sortedMap[i];

  for (let j = 0; j < count; j++) answers.push(num);
}

console.log(answers.join(' '));
