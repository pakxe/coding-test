function solution(priorities, location) {
    let count = 0;
    const papers = priorities.map((priority, i ) => [i, priority]); // 0번이 순서, 1번이 중요도
    
    while(1) {
        const now = papers[0][1]; // 큐 맨 앞 서류의 중요도
        const nowIndex = papers[0][0]; // 큐 맨 앞 서류의 인덱스
        const max = Math.max(...papers.map(([i, p]) => p));
        if(now < max) {
            const item = papers.shift();
            papers.push(item);
        }
        else {
            papers.shift();
            count++;
            if(nowIndex === location) break;
        }
    }
    return count;
    
}

/*
    맨앞 중요도를 읽는다
    이것보다 더 큰게 있다면 뒤로 보낸다
    아니라면 뺴내서 인쇄한다
*/