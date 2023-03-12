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