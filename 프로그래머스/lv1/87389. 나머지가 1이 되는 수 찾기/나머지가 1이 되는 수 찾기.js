function solution(n) {
    const arr = [];
    for(let i = 1; i < n; i++) {
        if(n % i === 1) arr.push(i);
    }
    return arr.sort((a, b) => a-b)[0];
}