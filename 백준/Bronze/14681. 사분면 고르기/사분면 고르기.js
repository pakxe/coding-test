const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const x = input[0];
const y = input[1];

if(x < 0 && y < 0) console.log(3);
else if(x < 0 && y > 0) console.log(2);
else if(x > 0 && y < 0) console.log(4);
else console.log(1);