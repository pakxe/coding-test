const filePath = process.platform === 'linux' ? '/dev/stdin' : 'e.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
input.shift();

input.sort((a, b) => {
  const [ax, ay] = a.split(' ').map(Number);
  const [bx, by] = b.split(' ').map(Number);

  if (ax > bx) return 1;
  else if (ax < bx) return -1;
  else if (ax === bx) {
    if (ay > by) return 1;
    else return -1;
  }
});

console.log(input.join('\n'));
