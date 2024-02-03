const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  solution();
});

function solution() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Number(input[i]) % 42);
  }

  console.log(new Set([...arr]).size);
}
