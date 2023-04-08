function solution(n, m, section) {
    let count = 0;
    
    while(section.length !== 0) {
        const last = section[section.length - 1];
        const painted = last - m + 1;
        
        section.pop();
        count++;
        
        if(section.length === 0) break;
        
        while(section[section.length - 1] >= painted) section.pop();
    }
    
    return count;
}

/*
롤러의 왼쪽이 빈 벽이어야 한다.  또는 반대 

롤러의 길이만큼

섹션이 비어있지 않으면 while
이때 반복은 섹션의 끝 부터 읽자. 섹션의 끝의 값에서 롤러길이 - 1을 뺀 값을 저장한다. 
페인트 칠했으니 팝한다. 이때 카운트도 센다.
이제 while을 한다. 만약 현재 꼭대기값이 앞에서 구한 값보다 크거나 같으면 칠해진 것이므로 팝한다. 
*/