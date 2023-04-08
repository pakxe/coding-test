const solution = (number, k) => {
    const stack = [];
    
    for(let i = 0 ; i < number.length; i++) {
        const num = Number(number[i]);
        
        if(stack.length === 0) {
            stack.push(num);
            
            continue;
        }
        
        while(stack[stack.length - 1] < num) { // 현재 숫자보다 작은 숫자들 제거       
            if(k === 0) break; // 더이상 제거할 수 없거나
            if(stack.length === 0) break; // 스택이 비어있다면 중지
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    
    return stack.join('').substr(0, number.length - k);
}

/*
결국 큰 수를 스택에 남기는 방법이다. 이때 최대 
*/

