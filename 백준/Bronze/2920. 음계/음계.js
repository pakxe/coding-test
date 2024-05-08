const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = input[0].split(' ').map(Number);

const ascendingArr = [...nums].sort((a, b) => a - b);
const descendingArr = [...ascendingArr].reverse();


if(ascendingArr.join(' ') === nums.join(' ')) console.log('ascending');
else if(descendingArr.join(' ') === nums.join(' ')) console.log('descending');
else console.log('mixed')
//ascending, descending, mixed 