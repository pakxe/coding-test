function solution(array) {
    const set = new Set([...array]);
    
    // 숫자 종류 배열
    const arr = [...set];

    // 개수 배열
    const countArr = arr.map(n => array.filter(a => a === n).length);
    
    const max = Math.max(...countArr);
    if(countArr.filter(n => n === max).length > 1) return -1;
    else {
        return arr[countArr.indexOf(max)];
    }
}