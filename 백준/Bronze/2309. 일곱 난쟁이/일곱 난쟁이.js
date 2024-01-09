const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const heightList = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

/*
조합을 구해서 해야겠다.
*/

const temp = [];
const combArr = [];

function comb(n, r, depth) {
  if (temp.length === r) {
    combArr.push([...temp]);
    return;
  }

  for (let i = depth; i < n; i++) {
    temp.push(i);
    comb(n, r, i + 1);
    temp.pop();
  }
}

comb(9, 2, 0);

let answer = [];
for (let i = 0; i < combArr.length; i++) {
  const pickedHeights = heightList.filter((cur, idx) => !combArr[i].includes(idx));
  const sum = pickedHeights.reduce((sum, cur) => sum + cur, 0);
  if (sum === 100) {
    answer = pickedHeights.sort((a, b) => a - b);
    break;
  }
}

console.log(answer.join('\n'));
