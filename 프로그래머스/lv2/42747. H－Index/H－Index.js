function solution(citations) {
    const min = Math.min(...citations);
    const max = Math.max(...citations);
    
    for(let i = max; i >= 0; i--) {
        const h = citations.filter((cost) => cost >= i);

        if(h.length >= i) return i
    }
}

/**
내림차순 정렬
for를 도는데 0

*/
