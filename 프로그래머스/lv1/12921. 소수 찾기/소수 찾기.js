function solution(n) {
    let count = 0;
    const arr = new Array(n+1).fill(1);
    
    for(let i = 2; i <= n; i++) {
        if(arr[i] === 0) continue;
        
        for(let j = i*2; j <= n; j+=i){
            arr[j] = 0;
        }
    }
    
    return arr.filter(a => a === 1).length -2;
}

const isPrime = num => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if( num % i === 0 && i !== num) return false;
    }
    return true;
}

/*
소수: 1
소수가 아닌 수: 0
*/