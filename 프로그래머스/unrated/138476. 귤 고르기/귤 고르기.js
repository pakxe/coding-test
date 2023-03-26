function solution(k, tangerine) {
    const set = new Set([...tangerine.sort((a, b) => a - b)]);
    const arr = []; // 해당 크기의 귤 개수
    set.forEach(n => arr.push(getCount(tangerine, n)));

    let tans = 0;
    let count = 0;
    
    while(tans < k) {
        tans += Math.max(...arr);
        count++;
    }
    
    return count;
}

/*
1,2,2,3,3,4,5,5 -> 1,4,
*/

const getCount = (a, n) => {
    let count = 0;
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] === n) count++;
    }
    
    return count;
}