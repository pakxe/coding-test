function solution(s) {
    let count = 0;
    let zeroCount = 0;
    let left = s;
    let right = '';
    
    while(left !== '1') {
        count++;
        
        right = left.replace(/0/g, '');
        zeroCount += left.length - right.length;
        
        left = right.length.toString(2);
    }
    return [count, zeroCount]
}

/*
0을 제거하는데 이건 split으로 수행한다. 
그 둘의 길이 차이를 저장한다. 
*/