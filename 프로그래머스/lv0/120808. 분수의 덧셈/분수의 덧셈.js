function solution(numer1, denom1, numer2, denom2) {
    // 최소공배수를 구하는게 좋을 것 같은데. 
    const l = 최소공배수(denom1, denom2);
    let [a, b] = [numer1 * (l / denom1) + numer2 * (l / denom2) ,최소공배수(denom1, denom2)];
    
    while(최대공약수(a, b) !== 1) { // 기약분수가 아닌 경우
        [a, b] = [a / 최대공약수(a, b), b / 최대공약수(a, b)];
    }    
    
    return [a, b];
}

const 최소공배수 = (a, b) => {
    return (a * b) / 최대공약수(a, b);
}

const 최대공약수 = (a, b) => {
    while(1) {
        if(a % b === 0) break;
        [a, b] = [b, a % b];
    }
    
    return b
}