const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
const flowers = input[1].split(' ').map(Number);

// 조합 로직
let temp = [];
const combList = []
const comb = (idx) => {
    if(temp.length === 3) {
        combList.push([...temp]);
        return;
    }
    
    for(let i = idx; i < count ; i++) {
        temp.push(i);
        comb(i + 1);
        temp.pop();
    }
}

comb(1);

let max = -Infinity;


for(let i = 0; i < combList.length; i++) {
    // 하나의 조합
    combList[i].push(count);
    const curComb = combList[i];
    
    const curMuxList = [];
    
    let prevIdx = 0;
    for(let j = 0; j < curComb.length; j++) { // [1, 2, 3. 7] 마지막 인덱스가 포함된다...
        let mux = 1;
        // 1
        for(let k = prevIdx; k < curComb[j]; k++) {
            mux *= flowers[k];
        }
        prevIdx = curComb[j];
        curMuxList.push(mux);
    }
    
    const sum = curMuxList.reduce((sum, cur) => sum + cur, 0);
    max = Math.max(max, sum);
}

console.log(max);