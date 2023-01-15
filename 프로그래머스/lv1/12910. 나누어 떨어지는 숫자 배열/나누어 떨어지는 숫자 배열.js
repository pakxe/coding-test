function solution(arr, divisor) {
    const result = arr.filter(num => {
        if(num % divisor === 0) return num;
    })
    return result.length===0? [-1] : result.sort((a, b) => a-b)
}