const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, size] = input[0].split(' ').map(Number);
if(count === 1) {
    console.log(0);
    return;
}
const tracks = input[1].split(' ').map(Number);

/*
중복이 있으면 안되는 오름차순으로 트랙을 만들 수 있어야 한다.

1번째부터 시작한다. 
1번째가 0번째보다 같거나 작으면 + k한다.
그렇게 만든 결과가 0번째 수보다 같거나 작다면 실패한다.
크다면 다음으로 넘어간다.
*/

let isInvalid = false;
let tryCount = 0;


for(let i = 1; i < count; i++) {
    const prev = tracks[i - 1];
    const cur = tracks[i];
    
    if(prev >= cur + size) {
        isInvalid = true;
        break;
    }
    
    if(prev >= cur) {
        tryCount++;
        tracks[i] = cur + size;
    }
}

console.log(isInvalid ? -1 : tryCount);