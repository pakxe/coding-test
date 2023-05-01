function solution(n) {
    console.log(최대공약수(n, 6))
    return n * 6 / 최대공약수(n, 6) / 6;
}

/*
1
30 최소 공배수.
12
6과 n의 최소공배수

최소 공배수는 두 수곱 / 최대공약수
*/

// 100 10 이라면
// 2 50

// 10 과 6조각. 최소공배수. 30 

const 최대공약수 = (x, y) => {
    while(1){
        if(x % y === 0 ) break;
        [x, y] = [y, x % y];
    }
    return y;
}