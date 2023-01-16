function solution(d, budget) {
    let sum = 0;
    return d.sort((a, b) => a - b).filter((a) => {
        if(sum + a <= budget) {
            sum+=a;
            return a;
        }
    }).length
}