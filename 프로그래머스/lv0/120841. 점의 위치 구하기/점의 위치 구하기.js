function solution(dot) {
    [x, y] = dot;
    if(x > 0) {
        if(y > 0) return 1;
        if(y < 0) return 4;
    }
    if(x < 0) {
        if(y > 0) return 2;
        if(y < 0) return 3;
    }
}