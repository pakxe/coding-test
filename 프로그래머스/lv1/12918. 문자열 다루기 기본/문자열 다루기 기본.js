function solution(s) {
    return s.split('').map(Number).filter(c => Number.isInteger(c)).length === s.length && (s.length === 4 || s.length === 6)
}