function solution(absolutes, signs) {
    return absolutes.reduce((sum, absolute, i) => sum += signs[i] ? absolute : -absolute, 0)
}