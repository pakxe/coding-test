const size = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

/*
*****
 ****
  ***
   **
    *
*/
const results = [];
for(let i = 0; i < size; i++) {
    const empty = ' '.repeat(i);
    const stars = '*'.repeat(size - i);
    results.push(empty + stars);
}

console.log(results.join('\n'))