function solution(n) {
    return String(n).split('').map(Number).reduce((sum, n) => sum += n, 0);
}