function solution(n, t, m, p) {
    let need = p; // 필요 칸 수 본인포함
    const result = [];
    let leftCount = 0;
    
    for(let i = 0; i < t * m; i++) {
        let number = i.toString(n);
        while(1) {
            if(leftCount===t) break;
            if(number.length < need) {
                need -= number.length;
                break;
            }
            if(number.length >= need) {
                result.push(number[need-1]);
                leftCount++;
                
                if(need === number.length) {
                    need = m;
                    break;
                }
                else {
                    number = number.slice(need);
                    need = m;
                }
            }
        }
        
    }
    
    return result.join('').toUpperCase();
}

/*
    숫자 외치기
    남은 카운트 ++
    jump 갱신하기
    만약 제일 끝 출력했다면, continue
    아니라면 다음부터 배열 끊고 jump그대로
    
*/