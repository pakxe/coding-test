const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const count = Number(input.shift());
const players = input;

const CANT = 'PREDAJA';

const asciiArr = new Array(26).fill(0);

for (let i = 0; i < players.length; i++) {
  const startAscii = players[i][0].charCodeAt() - 97; // 첫 글자

  asciiArr[startAscii] += 1;
}

const answer = [];

for (let i = 0; i < 26; i++) {
  if (asciiArr[i] >= 5) answer.push(i); // 아스키로 추가
}

if (answer.length === 0) {
  console.log(CANT);
} else {
  answer.sort((a, b) => a - b);

  console.log(answer.map((ascii) => String.fromCharCode(ascii + 97)).join(''));
}

/**
문자를 앞과 뒤에서부터 보면 될 것 같은데

94%에서 틀린다. => ab를 넣으면 1이 뜸 왜냐면 for 안에 들어가지
*/
