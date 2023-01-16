function solution(arr) {
    const a = Math.min(...arr);
    return arr.length === 1? [-1] : arr.filter(num => num!==a);
}