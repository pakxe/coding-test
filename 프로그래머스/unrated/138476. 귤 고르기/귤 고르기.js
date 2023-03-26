function solution(k, tangerine) {
    const set = new Set([...tangerine]);
    const arr = [...set]; // 해당 크기의 귤 개수
    console.log(arr);
    
    const sortArr = [];
    
    arr.forEach(n => sortArr.push(getCount(tangerine, n)));
    
    let tans = 0;
    let count = 0;
    
    sortArr.sort((a,b) => a-b);
    
    while(tans < k) {
        tans += sortArr[sortArr.length - 1];
        sortArr.pop();
        count++;
    }
    
    return count;
}


const getCount = (a, n) => {
    let count = 0;
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] === n) count++;
    }
    
    return count;
}