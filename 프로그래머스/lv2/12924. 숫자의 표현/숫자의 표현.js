function solution(n) {
    let count = 0;
    const stack = [];
    let sum = 0;
    
    for(let i = 1; i <= n + 1; i++) {
        if(sum === n) count += 1;
        
        stack.push(i);
        sum += i;
        
        while(sum > n) {
            const deletedNum = stack.shift();
            sum -= deletedNum;
        }
    }
    
    return count;
}

