function solution(n){
    let count = 0;
    
    while(n !== 0) {
        if(n % 2 === 0) { // 짝수
            n = n/2;
        }
        else {  // 홀수
            n--;
            count++;
        }
    }
    return count;
    
}

/*
홀수면 -1 해서 짝수로 만들고 걸음수++
짝수면 /2 해서 순간이동. 
종착지는 0이 될 때 까지 반복한다.
*/