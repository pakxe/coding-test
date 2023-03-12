const fibo = n => {
    const arr = new Array(100001).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        arr[i] = (arr[i-1] % 1234567) + (arr[i-2] % 1234567)
    }
    
    return arr[n] %1234567
}

function solution(n) {
    return fibo(n);
}
