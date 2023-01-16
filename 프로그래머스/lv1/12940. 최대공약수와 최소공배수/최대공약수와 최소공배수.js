function solution(x, y) {
    return [최대공약수(x, y), 최소공배수(x, y)];
}

const 최대공약수 = (x, y) => {
    while(1){
        if(x % y === 0 ) break;
        [x, y] = [y, x % y];
    }
    return y;
}

const 최소공배수 = (x, y) => {
    return x*y / 최대공약수(x, y);
}