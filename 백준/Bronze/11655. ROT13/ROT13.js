const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const str = input[0];
const [UPPER, LOWER] = [65, 97];
const ALPHABET_COUNT = 26;
const encryptionStr = [];

function isUpperCase(ascii) {
  return ascii >= UPPER && ascii <= UPPER + ALPHABET_COUNT - 1;
}

function isAlphabet(char) {
  const ascii = char.charCodeAt();

  if (isUpperCase(ascii)) return true;
  if (ascii >= LOWER && ascii <= LOWER + ALPHABET_COUNT - 1) return true;

  return false;
}

function ROT13(char) {
  const ascii = char.charCodeAt();
  if (isUpperCase(ascii)) {
    return String.fromCharCode(((ascii - UPPER + 13) % 26) + UPPER);
  } else {
    return String.fromCharCode(((ascii - LOWER + 13) % 26) + LOWER);
  }
}

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  let encryptionAlphabet = '';

  if (isAlphabet(char)) encryptionAlphabet = ROT13(char);
  encryptionStr.push(encryptionAlphabet === '' ? char : encryptionAlphabet);
}

console.log(encryptionStr.join(''));
/*
const 암호화된 문자열 = [];

for 문자열
    만약 문자면
        13자씩 미는 함수를 수행해 값을 받아온다. 
        이 문자를 암호화된 문자열에 push한다. 
        
    문자가 아니면
        그냥 암호회돤 문자열에 push한다.
    
    
function 13자씩 미는 함수
    인자로 들어온 문자을 아스키로 변환 
    만약 대문자면 
        65를 빼고 + 13을 하고 % 26을 한다. 
        이 문자를 반환한다. 
    만약 소문자면
        96을 뺴고 + 13을 하고 % 26을 한다. 
        이 문자를 반환한다. 
        
        
function isUpperCase(대문`자인지 판단하는 함수) 
    아스키를 받아 이 값이 65 ~ 65 + 26 - 1 사이의 값인지 반환한다. 
*/
