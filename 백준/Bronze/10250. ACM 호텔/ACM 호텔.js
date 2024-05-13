const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input[0]);

for(let i = 1; i <= count; i++) {
    const [h, w, n] = input[i].split(' ').map(Number);
    
    // 아래에서부터 위로 쌓아지는 형태이다. 
    // 101 201 301.. h까지

    // 자연수인 경우..
    const x = Math.floor(n / h) === n / h ? n / h : Math.floor(n / h) + 1
    const y = n % h === 0 ? h : n % h

    console.log(`${y}${x.toString().padStart(2, '0')}`);
}
