const { CONNREFUSED } = require('dns');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const word = input[0];

const alphabet = new Array(26).fill(0);

function getCharCode(cur) {
  const ascii = cur.charCodeAt();

  return ascii >= 97 ? ascii - 97 : ascii - 65;
}

for (let i = 0; i < word.length; i++) {
  const cur = word[i];
  const ascii = getCharCode(cur);
  alphabet[ascii] += 1;
}

const max = Math.max(...alphabet);
const maxIndex = alphabet.indexOf(max);
const sameCount = alphabet.filter((a) => a === max).length;

if (sameCount > 1) console.log('?');
else console.log(String.fromCharCode(maxIndex + 65));
