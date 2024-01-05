const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

/*
괄호쌍과 유사한 문제
그럼 괄호쌍은 어케 풀었던가..?
스택에 푸시해놓고 일치하는게 있으면 .. pop하는 구조였다. 이떄 일치하는 지 여부를 보면 된다.

모든 글자가 매치되어야 하는 것 같다. 

const stack = [];
let count = 0;

for 이름 개수 
    만약 현재 이름 길이가 홀수면 continue
    
    let isGoodWord = true;
    for 현재 이름 길이 0
        if(스택 길이 !== 0 && 스택 탑 === 현재 글자) stack.pop();
        else if(스택 길이 < 2 && 스택 탑 !== 현재 글자) stack.push(현재 글자);
        else if(스택 길이 >= 2 && 스택 탑 !== 현재 글자) { // 이건 안된다는 거임
            isGoodWord = false;
            break;
        }

    if(isGoodWord) coun+=1;
    
*/

const count = Number(input.shift());
const words = input;

let totalCount = 0;

for (let i = 0; i < count; i++) {
  const stack = [];
  const word = words[i];

  if (word.length % 2 === 1) continue;

  let isGoodWord = true;

  for (let j = 0; j < word.length; j++) {
    if (stack.length === 0) {
      stack.push(word[j]);
      continue;
    }

    if (stack[stack.length - 1] === word[j]) stack.pop();
    else if (stack[stack.length - 1] !== word[j]) stack.push(word[j]);
    else {
      isGoodWord = false;
      break;
    }
  }

  if (isGoodWord && stack.length === 0) totalCount += 1;
}

console.log(totalCount);
