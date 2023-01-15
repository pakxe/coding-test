function solution(x, n) {
    return new Array(n).fill(0).map((_, i) => (i+1)*x);
}