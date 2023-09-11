function solution(citations) {
    let i = 0; // i 이상인 논문의 개수
    
    for(i = citations.length; i >= 0; i--) {
        const overI = citations.filter(c => c >= i).length;
        if(overI >= i) break;
    }
    
    return i;
}

/*
i이상인 논문의 개수를 센다. 이 개수는 overI라고 한다. 
이 overI가 i 보다 크면 멈춘다. 그게 조건이니까

*/

