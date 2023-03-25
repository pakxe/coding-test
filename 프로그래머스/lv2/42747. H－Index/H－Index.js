function solution(citations) {
    let i = 0; // i 이상인 논문의 개수
    
    for(i = citations.length; i >= 0; i--) {
        const i이상인논문의개수 = citations.filter(c => c >= i).length;
        if(i이상인논문의개수 >= i) break;
    }
    
    return i;
}

/*
i이상인 논문의 개수를 센다. 이 개수는 
*/

