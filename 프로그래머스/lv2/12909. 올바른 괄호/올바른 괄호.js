function solution(s){
    let stack = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') stack++;
        else {
            if(stack === 0) return false;
            stack--;
            // 빈 스택이면 return false, 아니라면 pop하고 넘어가기. 
        }
    }
    
    return !stack;
}