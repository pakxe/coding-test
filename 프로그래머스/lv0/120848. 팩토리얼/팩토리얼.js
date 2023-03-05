let factorial = [1];

function solution(n) {
    while(factorial[factorial.length - 1] < n) {
        factorial.push(factorial[factorial.length-1]*(factorial.length+1));
    }
    
    let answer = factorial.length;
    for(let i = 0; i < factorial.length; i++) {
        console.log(factorial[i]);
        if(factorial[i] > n){
            answer = i;
            break;
        }
    }
    return answer;
}