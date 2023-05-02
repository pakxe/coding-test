function solution(n, k) {
    const arr = new Array(n).fill(0).map((_, i) => i+1);
    return getPermK(arr, k - 1);
}

const getPermK = (arr, k) => {    
    if(arr.length === 1) return [arr[0]];
    
    const fac = factorial(arr.length - 1); // 6
    const index = Math.floor(k / fac); // 1
    const pick = arr[index]; // 2
    const restNumArr = [...arr.slice(0, index), ... arr.slice(index+1)]; // 1, 3, 4
    const next = getPermK(restNumArr, k % fac); //
    
    return [pick, ...next];
}

const factorial = n => {
    let mul = 1;
    
    for(let i = 2; i <= n; i++) {
        mul *= i;
    }
    
    return mul;
}
// const getPerm = (arr, n) => {
//     if(n === 1) return arr.map(num => [num]);
    
//     const result = [];
    
//     arr.forEach((cur, index, origin) => {
//         const deleteCurArr = [...origin.slice(0, index), ...origin.slice(index+1)];
        
//         const restPerm = getPerm(deleteCurArr, n - 1);
        
//         const nowPerm = restPerm.map(num => [cur, ...num]);
        
//         result.push(...nowPerm);
//     })
    
//     return result;
// }

