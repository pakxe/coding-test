function solution(number, k) {
    const stack = [];
    let deleteCount = 0;
    let count = 0;
    
    stack.push(number[0]);
    
    for(let i = 1; i < number.length; i++) {
        if(deleteCount === k) {
                count = i;
                break;
            }
        while(stack.length !== 0 && stack[stack.length - 1] < number[i]) {
            if(deleteCount === k) {
                count = i;
                break;
            }
            
            stack.pop();
            deleteCount++;
        }
        
        stack.push(number[i]);
    }
    
    if(stack.length !== number.length - k) {
        for(let i = count; i < number.length; i++){
            stack.push(number[i]);
        }
    }
    
    
    return stack.join('').substr(0, number.length - k);
}

/*
숫자를 읽으면서 더 제거할 수 있으면 제거한다. 
while을 돌면서 현재보다 더 작은 수들을 꺼낸다. 

다 꺼냈으면 현재 수를 집어넣는다. 

만약 현재가 더 작은 수라면 그냥 push한다. 어차피 제거될테니까.
*/

