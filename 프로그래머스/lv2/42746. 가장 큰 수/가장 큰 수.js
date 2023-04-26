function solution(numbers) {
    const stack = [];
    const strNums = numbers.sort().reverse().map(n => n.toString());
    
    stack.push(strNums[0]);
    
    
    for(let i = 1; i < numbers.length; i++) {
        const temp = [];
        
        // stack이 비어있을 떄도 판단해야한다.
        while(parseInt(stack[stack.length - 1] + strNums[i]) < parseInt(strNums[i] + stack[stack.length - 1])){
            temp.push(stack.pop());
            if(stack.length === 0) break;
        }
        
        stack.push(strNums[i]);
        if(temp.length !== 0) {
            
            while(temp.length !== 0) {
                stack.push(temp.pop());
            }
        }
        
    }
    
    let result = stack.join('');
    return parseInt(result) === 0 ? '0' : result;
}


/*
for문으로 반복한다. 
while로 교환시 숫자가 클때 교환하고 임시저장배열에 팝된 수들을 차례로 저장한다. 

*/