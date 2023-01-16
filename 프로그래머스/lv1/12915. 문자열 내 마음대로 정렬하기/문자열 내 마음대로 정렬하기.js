function solution(strings, n) {
    const keywordAndIndex = strings.map((string, i) => `${string[n]} ${i}`);
    
    const customSort = keywordAndIndex.sort((a, b) => {
        const [char1,index1] = a.split(' ');
        const [char2,index2] = b.split(' ');
    
        if(char1 < char2) return -1;
        if(char1 > char2) return 1;
        if(char1 === char2) {
            if(strings[index1] <= strings[index2]) return -1;
            return 1;
        }
    })
    
    return customSort.map((data) => {
        const [_,i] = data.split(' ');
        return strings[i];
    })
                         
}
// aaa 
// 사전 오름차순

/*
문자열을 돈다. 돌면서 n 위치의 문자를 뽑는다. 그리고 이 문자열의 번호도 저장한다.
    'c i'형태로 저장
str[0] 기준으로 이상하게 저장한 저거 정렬한다. 
    만약 0번이 같으면 해당 2번에 저장한 번호로 문자열 불러와서 그냥 단순 비교한다.
2번만 뽑아와서 스트링스 정렬해 반환한다.
*/

// u 0, e 1, a 2
// -1,0유지, 1 교체