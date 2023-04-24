function solution(numbers) {
    const indexNumbers = [];
    const result = new Array(numbers.length).fill(0);
    
    for(let i = 0; i < numbers.length; i++) {
        indexNumbers.push([i, numbers[i]]);
    }
    
    const stack = [];
    stack.push(indexNumbers[0]);
    
    for(let i = 1; i < numbers.length; i++) {
        if(stack.length === 0 || stack[stack.length - 1][1] > indexNumbers[i][1]) stack.push(indexNumbers[i]); 
        else { 
            while(stack[stack.length - 1][1] < indexNumbers[i][1]) {
                
                const [topIndex, _] = stack[stack.length - 1];
                result[topIndex] = indexNumbers[i][1];
                stack.pop();
                
                if(stack.length === 0) break;
            }
            stack.push(indexNumbers[i])
        }
    }
    
    for(let i = 0; i < stack.length; i++) {
        result[stack[i][0]] = -1;
    }
    
    return result;
}

/*

9 1 5 3 6 2
9 1 
스택을 써서 풀어보자.. 왜 스택을 써야하는지도 알면 좋을텐데

그러니까 스택을 쓰는데 현재 수를 계속 인식하면서 큰 수를 찾으면 바로 팝하는거임. 

인덱스를 포함하게 숫자 배열을 바꾼다. 
*/