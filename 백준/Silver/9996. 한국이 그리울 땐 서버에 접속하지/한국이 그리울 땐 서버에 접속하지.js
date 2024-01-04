const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [MATCH, NON_MATCH] = ['DA', 'NE'];

const count = Number(input.shift());

/*
패턴은 앞과 뒤로 나뉜다. 
이 앞과 뒤가 주어지는 파일 명에 모두 포함되어야 한다. 
다만 주의할 점은 앞, 뒤가 일치하는 경우 하나만 있어도 패턴으로 인정될 수 있다는 것이다. 

매치를 앞, 뒤로 나눠서 해야할 것 같다. 

앞 매치 확인
    문자열.indexOf로 판단함
    if(인덱스 -1 또는 0이 아니라면) 낫매치 출력하고 종료
    
뒤 매치 확인
    indexOf로 얻은 인덱스 + 앞 매치 문자 길이 부터 slice한 문자 만들기
    슬라이스한 문자열을 하나씩 잘라 뒤집고 다시 이어붙인다.
    슬라이스 문자열.indexOf로 존재 판단.
    if(인덱스 -1 또는 0이 아니라면) 낫매치 출력하고 종료
*/

const [start, end] = input.shift().split('*');
const answers = [];

for (let i = 0; i < count; i++) {
  const str = input[i];

  const startMatchIndex = str.indexOf(start);
  if (startMatchIndex !== 0) {
    answers.push(NON_MATCH);
    continue;
  }

  const remainedStr = str.slice(start.length);
  const endMatchIndex = remainedStr.lastIndexOf(end);
  if (endMatchIndex + start.length !== str.length - end.length) {
    answers.push(NON_MATCH);
    continue;
  }

  answers.push(MATCH);
}

console.log(answers.join('\n'));
