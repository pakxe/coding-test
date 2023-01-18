function solution(t, p) {
    let count = 0;
    for(let i = 0; i < t.length - p.length + 1; i++) {
        const subStr = +t.slice(i, i+p.length);
        if(subStr <= Number(p)) count++;
    }
    return count;
}