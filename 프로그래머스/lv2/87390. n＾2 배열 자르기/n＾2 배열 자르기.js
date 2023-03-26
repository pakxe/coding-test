function solution(n, left, right) {
    return makeArr(n, left, right);
}

const makeArr = (n, left, right) => {
    const arr = [];
    
    const 시작행번호 = Math.floor(left/n); 
    const 끝행번호 = Math.floor(right/n); 
    
    for(let i = 시작행번호;  i <= 끝행번호; i++) {
        for(let j = 1; j <= n; j++) {
            if(j <= (i + 1)) arr.push(i + 1);
            else arr.push(j)
        }
    }
    
    return arr.slice(left%n, (끝행번호 - 시작행번호)*n + right % n + 1);
}
