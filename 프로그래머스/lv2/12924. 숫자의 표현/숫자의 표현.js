function solution(n) {
    let count = 0;
    const stack = [];
    let sum = 0;
    const until = Math.ceil(n/2) + 1;
    
    for(let i = 1; i <= until; i++) {
        if(sum === n) count += 1;
        
        stack.push(i);
        sum += i;
        
        while(sum > n) {
            const deletedNum = stack.shift();
            sum -= deletedNum;
        }
    }
    
    if(n!==1) count+=1;
    return count;
}

console.log(solution(1))
console.log(solution(3))
console.log(solution(2))

