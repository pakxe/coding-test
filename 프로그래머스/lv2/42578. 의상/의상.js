function solution(clothes) {
     const hash = new Map();
    
    // 해시 만들기
    for(let i = 0; i < clothes.length; i++) {
        const [name, type] = clothes[i];
      
        hash.has(type) ? hash.set(type, [...hash.get(type), name]) : hash.set(type, [name])
    }
    
    // nC1 배열 만들기
    let pick1 = [];
    hash.forEach(a => pick1.push(a.length));
    
    let sum = 0;
    sum += pick1.reduce((s, n) => s += n, 0); // 예외
    
    let m = 1; 
    for(let i = 0; i < pick1.length; i++) {
        m *= (pick1[i] + 1);
    }
    
    return m - 1;
}

/*
function solution(clothes) {
    
    const hash = new Map();
    
    // 해시 만들기
    for(let i = 0; i < clothes.length; i++) {
        const [name, type] = clothes[i];
      
        hash.has(type) ? hash.set(type, [...hash.get(type), name]) : hash.set(type, [name])
    }
    
    // nC1 배열 만들기
    let pick1 = [];
    hash.forEach(a => pick1.push(a.length));
    
    let sum = 0;
    sum += pick1.reduce((s, n) => s += n, 0); // 예외
    
    if(hash.size === 1) return sum;
    
    for(let i = 2; i <= hash.size; i++) {
        const resultArr = [];
        const visit = new Array(hash.size).fill(0);
        
        combArr(visit, 0, 0, i, resultArr);
        
        for(let j = 0; j < resultArr.length; j++) {
            let mul = 1;
            for(let k = 0; k < i; k++) {
                mul *= pick1[resultArr[j][k]];
            }
            sum += mul;
            
        }
    }
    
    return sum;
}
*/
/*
    1개 뽑기: 각각에서 하나를 꺼내입는 수 (nC1 + nC1 + nC1)
    2개 뽑기: 종류를 하나씩 골라야함. 결국 종류마다의 nC1=보유 옷 개수를 갖고있어야한다. 
            이때 조합을 사용해서 어떤 종류를 고를지 선택하고 골라진 선택지의 보유 옷 개수를 곱해서 방법수 구함.

    종류를 키로하고 옷을 값으로하는 객체를 만든다. 
    그리고 이 객체를 배열로 바꾼다. (정수로 접근하기 위해서)
    
    조합 수를 저장할 변수 선언
    옷의 종류개수만큼 순회한다. 
        만약 1종류라면 그냥 현재 배열마다의 옷 종류 개수를 더한다. 
        
        배열 형태로 받은 조합을 순회한다. ([1, 2], [1, 3], [2, 3])
            let 종류 = 0;
            각 종류번호 순회
                종류 *= 종류[i].length;
            sum += 종류;
        
    return sum;
    
*/


// const visit = new Array(arr.length).fill(0); 방문은 1
// 현재 위치에서 이어서 판단하기 위한 index, 현재 개수를 판단하기 위한 total
const combArr = (visit, index, total, size, resultArr) => {
    // 종료 조건
   
    if(total === size) {
        const comb = [];
        
        for(let i = 0; i < visit.length; i++) {
            if(visit[i] === 1) comb.push(i);
        }
        
        resultArr.push(comb)
        return;
    }
    
    for(let i = index; i < visit.length; i++) {
        if(visit[i] === 1) continue;
        visit[i] = 1;
        combArr(visit, i + 1, total + 1, size, resultArr);
        visit[i] = 0;
    }
}

// 조합(순서없는 것)
/*
const comb = (size) => { 
    const dp = new Array(size+1).fill(null).map(() => new Array(size+1).fill(0));
    
    dp[1][0] = 1;
    dp[1][1] = 1;
    
    for(let n = 1; n <= size; n++) {
        for(let r = 0; r <= n; r++) {
            if(r === 0 || r === n) dp[n][r] = 1;
            else dp[n][r] = dp[n-1][r-1] + dp[n-1][r];
        }
    }
    
    console.log(dp);
}

*/

