let N = require('fs').readFileSync(0).toString().split('\n').map(Number);

let x = []; // 1에서 30까지 없는 숫자 넣기 위한 배열

for (let i = 1; i < 31; i++) {
    if (N.includes(i)) continue; // 1-30까지 숫자 있는지 확인 (있으면 continue로 다음 넘어가지 않고 반복)
    x.push(i); // 없다면 해당 인덱스 배열 x에 push
}

x.sort((a, b) => a - b); // 오름차순으로 정렬
console.log(`${x[0]}\n${x[1]}`); // 출력