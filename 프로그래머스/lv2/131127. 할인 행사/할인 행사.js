function solution(want, number, discount) {
    let result = 0;
    let wantList = {};
    
    for(let i = 0; i < want.length; i++){
        wantList[want[i]] = number[i];
    }
    
    for(let i = 0; i < discount.length; i++) {
        let wantCount = {};
        
        for(let k = 0; k < want.length; k++){
            wantCount[want[k]] = 0;
        }
        
        for(let j = i; j < i + 10; j++) {
            if(wantCount.hasOwnProperty(discount[j])) wantCount[discount[j]]++;
            else break;
        }
        
        
        if(compObject(wantList, wantCount)) result++;
    }
    
    return result;
}

const compObject = (obj1, obj2) => {
    for(let i in obj1) {
        if(obj1[i] !== obj2[i]) return false;
    }
    
    return true;
}
/* 제일 단순한 해결방법
want와 number를 객체로 만든다. 
discount를 쭉 읽는다. 
0으로 초기화된 want 객체를 만든다. 

discount를 i로 읽고. j로 10번 반복한다. 
해당하는 것이 있으면 객체 ++ . 
반복이 끝나면 j반복문 밖에서 만들어진 객체와 처음 만든 객체가 일치한지 확인. 일치하면 결과++
아니라면 다음으로 ㄱㄱ
*/