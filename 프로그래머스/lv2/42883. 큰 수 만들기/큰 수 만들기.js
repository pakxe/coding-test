function solution(number, k) {
    const stack = [];
    let deleteCount = 0;
    stack.push(number[0]);
    console.log(stack);
    
    for(let i = 1; i < number.length; i++) {
        while(deleteCount < k && stack[stack.length - 1] < number[i]) {
            if(stack.length === 0) break;
            
            deleteCount++;
            stack.pop();
        }
        stack.push(number[i]);
    }
    
    return stack.join('').slice(0, number.length - k);
}

/*
    k개의 수를 제거해서 만드는 것은 n - k 가 최종 자리수라는 뜻이다. 
    제거할 수 있는 수는 k 개까지.
    k개를 제거했다면 더이상 제거할 수 없으므로 return 한다. 
    최대수를 만드는 것은 현재와 다음 수를 비교해서 다음 수가 더 크면 현재수를 빼버리고 다음 수를 넣으면 된다. 
    빼는건 k까지 가능
*/