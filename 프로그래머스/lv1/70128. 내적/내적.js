function solution(a, b) {
    return a.reduce((sum, num, i) => sum += num*b[i], 0)
}