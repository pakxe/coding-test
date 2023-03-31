function solution(M, N) {
    const [min, max] = [Math.min(M, N), Math.max(M, N)];
    
    const first = min - 1;
    const last = min*(max - 1);
    
    return first + last;
}