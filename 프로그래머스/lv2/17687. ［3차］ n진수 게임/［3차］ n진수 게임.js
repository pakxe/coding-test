function solution(n, t, m, p) {
    let subNum = '';
    let i = 0;
    let result = '';
    
    while(result.length < t) {
        if(subNum.length < m) {
            subNum += i.toString(n);
            i++;
        }
        else {
            // 추가할 수 있음
            result += subNum[p-1];
            subNum = subNum.slice(m);
        }
    }
    
    return result.toUpperCase()
}