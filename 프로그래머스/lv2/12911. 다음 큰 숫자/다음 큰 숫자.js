function solution(n) {
    const oneCount = n.toString(2).replace(/0/g, '').length;
    for(let i = n+1; i <= 10000000; i++) {
        const num = i.toString(2).replace(/0/g, '').length;
        if(num === oneCount) return i;
    }
}