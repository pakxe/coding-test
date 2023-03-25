const openBracket = ['(', '{', '['];

function solution(s) {
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        // 문자열 자르는 코드 필요
        const str = s.substr(1, s.length-1);
        s = str+s[0];
        if(isValid(s)) count++;
    }
    return count;
}

// 괄호쌍이 맞는다면 
const isValid = str => {
    const stack = [];
    
    for(let i = 0; i < str.length; i++) {
        // 열린 괄호
        
        if(openBracket.includes(str[i])) stack.push(str[i]);
        else {
            if(stack.length === 0) return false;
            else if(stack[stack.length - 1] === '{' && str[i] === '}') stack.pop();  
            else if(stack[stack.length - 1] === '[' && str[i] === ']') stack.pop();  
            else if(stack[stack.length - 1] === '(' && str[i] === ')') stack.pop();  
        }
    }
    return stack.length === 0;
}
/*
주어진 문자열을 문자열 길이만큼 회전시키는 반복을 한다. 
올바른 괄호임을 판별하는 함수가 필요하다.
*/

