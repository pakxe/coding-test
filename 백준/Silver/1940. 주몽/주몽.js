const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

/*   
그냥 인덱스 배열로 할 수 있을 것 같다. 
셋으로 만드는게 15000짜리 배열보단 나을 것 같다.

-----테케-----
재료는 3인데 M이 6같은 꼴도 생각해야한다.
*/

const N = Number(input.shift());
const M = Number(input.shift());
const ingredients = input.shift().split(' ').map(Number);
const set = new Set();

for (let i = 0; i < N; i++) {
  set.add(ingredients[i]);
}

let count = 0;
for (let i = 0; i < N; i++) {
  const curIngredient = ingredients[i];

  if (set.has(M - curIngredient)) {
    if (curIngredient === M / 2) continue;

    count += 1;
    set.delete(curIngredient);
    set.delete(M - curIngredient);
  }
}

console.log(count);
