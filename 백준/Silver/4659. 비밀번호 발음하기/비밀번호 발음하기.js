/*
반드시 하나는 let state 로 할 수 있을 것 같다
모음 배열을 두고 모음 count를 해야될 것 같다
*/

const [VALID, INVALID] = ['is acceptable.', 'is not acceptable.'];
const GATHER = ['a', 'e', 'i', 'o', 'u'];
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  const password = input[i];

  if (password === 'end') break;

  let isHaveGather = false;
  let isGatherSequence = true;
  let sequenceCount = 0;
  let pre = '';
  let state = true;

  for (let j = 0; j < password.length; j++) {
    const cur = password[j];

    if (pre === cur) {
      if (!((cur === 'e' || cur === 'o') && sequenceCount < 2)) {
        state = false;
        break;
      }
    }

    // 현재가 모음이면
    if (GATHER.includes(cur)) {
      isHaveGather = true;

      if (isGatherSequence) sequenceCount++;
      else sequenceCount = 1;

      if (sequenceCount >= 3) {
        state = false;
        break;
      }

      isGatherSequence = true;
    } else {
      if (!isGatherSequence) sequenceCount++;
      else sequenceCount = 1;

      if (sequenceCount >= 3) {
        state = false;
        break;
      }

      isGatherSequence = false;
    }

    pre = cur;
  }

  if (state && isHaveGather) console.log(`<${password}> ${VALID}`);
  else console.log(`<${password}> ${INVALID}`);
}
