const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const count = Number(input.shift());
const pattern = input.shift();
const files = input;

const [MATCH, NON_MATCH] = ['DA', 'NE'];
const answers = [];

const [start, end] = pattern.split('*');

function isMatch(str, pattern) {
  return str.includes(pattern);
}

function getLocationOfPatternInStart(str, pattern) {
  return str.indexOf(pattern);
}

function getLocationOfPatternInEnd(str, pattern) {
  return str.lastIndexOf(pattern);
}

files.forEach((file) => {
  if (!isMatch(file, start) || !isMatch(file, end)) {
    answers.push(NON_MATCH);
    return;
  }

  const startIndex = getLocationOfPatternInStart(file, start);
  const remainedFileName = file.slice(start.length);
  let endIndex = getLocationOfPatternInEnd(remainedFileName, end);

  if (endIndex === -1) {
    answers.push(NON_MATCH);
    return;
  }
  endIndex = endIndex - remainedFileName.length + end.length;

  if (startIndex === 0 && endIndex === 0) answers.push(MATCH);
  else answers.push(NON_MATCH);
});

console.log(answers.join('\n'));

/**
패턴: 별표 1개 + 알파벳 소문자(이건 몇개일지 모름)
가능한 패턴: ab*c 뭐 이런.. 별은 패턴 양 끝에는 존재할 수 없음

별표의 앞 문자와 일치하는 인덱스 < 별표의 끝 문자와 일치하는 인덱스 라면 패턴일치
다만 이 인덱스 체크를 함수로 해서 -1을 반환하지 않도록 해야할 것 같음. 


*/
