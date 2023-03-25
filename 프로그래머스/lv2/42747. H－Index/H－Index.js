function solution(citations) {
    let i = 0; // i 이상인 논문의 개수
    
    for(i = citations.length; i >= 0; i--) {
        const h = citations.filter(c => c >= i).length;
        if(h >= i) break;
    }
    
    return i;
}

