const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

/*
현재 자신의 길이와 같거나 작은 것들 중에서 가장 큰걸 먹음. 그 다음도 마찬가지.. 
*/

let [fruitsCount, size] = input[0].split(' ').map(Number);
let fruits = input[1]
  .split(' ')
  .map(Number)
  .map((f, i) => [f, i]);
const visited = new Array(fruitsCount).fill(false);

function eat(size) {
  const eatableFruits = fruits.filter(([f, i]) => {
    if (!visited[i] && f <= size) {
      visited[i] = true;
      return true;
    }
    return false;
  });

  // 못먹는다면 false
  if (eatableFruits.length === 0) return false;

  return size + eatableFruits.length;
}

while (true) {
  const isEat = eat(size);

  if (isEat === false) {
    console.log(size);
    break;
  }

  size = isEat;
}
