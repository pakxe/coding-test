function solution(n) {
    const arr = new Array(n).fill(0).map((_, i) => i + 1);
    return arr.filter(a => a % 2 === 1)
}