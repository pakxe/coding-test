function solution(s) {
    let [match, noMatch] = [0, 0];
    let sliceCount = 0;
    
    let c = s[0];
    
    for(let i = 0; i < s.length - 1; i++) {
        if(c === s[i]) match++;
        else noMatch++;
        if(match === noMatch) {
            match = 0;
            noMatch = 0;
            c = s[i+1];
            sliceCount++;
        }
    }
    
    return sliceCount + 1;
}

/*
    초기값으로 문자열의 0번 설정한다. 
    길이만큼 반복한다. 
    만약 c와 현재 값이 일치하다면 match ++;
    아니라면 noMatch++;
    그 바로 다음에 if match === noMatch 라면 둘을 초기화하고, slicecount ++ 한다. 그리고 다음으로 넘어간다. 
*/


/*
banana
b a - n a - n a

aaabbaccccabba

aaabbacc - ccab - ba
*/