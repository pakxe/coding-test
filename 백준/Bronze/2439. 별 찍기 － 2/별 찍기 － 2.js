const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0]);

const answers = [];

for(let i = 1; i <= n; i++) {
    let curEmpty = ' '.repeat(n - i);
    let curStar = '*'.repeat(i);
    answers.push(curEmpty+curStar);
}

console.log(answers.join('\n'))