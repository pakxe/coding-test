function solution(numbers) {
    const stack = [];
    const strNums = numbers.sort().reverse().map(n => n.toString());
    
    stack.push(strNums[0]); // 초기값
    
    for(let i = 1; i < numbers.length; i++) {
        const temp = []; // 임시로 저장할 변수
        
        // 교환한 수가 더 크다면 교환
        while(parseInt(stack[stack.length - 1] + strNums[i]) < parseInt(strNums[i] + stack[stack.length - 1])){
            temp.push(stack.pop()); // 임시로 저장할 변수에 교환된 수를 넣는다.
            if(stack.length === 0) break; // 스택 길이가 0이면 더이상 pop할 수 없으므로 break
        }
        
        stack.push(strNums[i]); // 스택에 현재 수를 push
        if(temp.length !== 0) { 
            while(temp.length !== 0) { // 임시로 저장한 변수의 내부가 빌 때까지 반복
                stack.push(temp.pop()); // 스택의 끝에 pop했던 수들을 넣는다.
            }
        }
        
    }
    
    let result = stack.join(''); 
    return parseInt(result) === 0 ? '0' : result; // '0000' = '0' 이므로 예외처리
}


/*
for문으로 반복한다. 
while로 교환시 숫자가 클때 교환하고 임시저장배열에 팝된 수들을 차례로 저장한다. 

*/