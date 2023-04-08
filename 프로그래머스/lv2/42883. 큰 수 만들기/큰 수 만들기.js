function solution(number, k) {
    let result = '';
    let cursor = 0;
    
    while(!(k === 0 || result.length === number.length - k)) {
        let max = 0;
        let relativeIndex = 0;
        
        console.log(cursor);
        
        for(let i = 0; i <= k; i++) {
            if(Number(number[cursor + i]) === 9) {
                relativeIndex = i;
                max = 9;
                break;
            }
            
            if(max < Number(number[cursor + i])) {
                max = Number(number[cursor + i])
                relativeIndex = i;
            }
        }
        
        cursor = cursor + relativeIndex + 1;
        result += max;
        k -= relativeIndex;
    }
    
    return result.length === number.length - k ? result : result += number.substring(cursor)
}