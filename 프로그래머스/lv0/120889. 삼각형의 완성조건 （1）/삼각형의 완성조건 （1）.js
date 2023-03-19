function solution(sides) {
    sides.sort((a, b) => a - b); // 오름차순
    [a, b, max] = sides;
    return max < a + b ? 1: 2;
}