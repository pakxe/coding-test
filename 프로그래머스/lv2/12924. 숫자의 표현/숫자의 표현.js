function solution(n) {
    let answer = 0;
    let N = 1;
    
    while( n > 0 ) {
        n = n - N;
        if(!(n % N)) answer++;
        N++;
    }
    
    return answer;
}

/*
    n이 자연수면 연속된 자연수의 합으로 표현이 가능하다는 의미
    1 부터 시작 -> 1 + 1n = 15, 1n = 14, n = 14
    2 -> 1 + 2 + 2n = 15, 2n = 12, n = 6
    3 -> 1 + 2 + 3 + 3n = 15, 3n = 9, n = 3
    ...
    
*/