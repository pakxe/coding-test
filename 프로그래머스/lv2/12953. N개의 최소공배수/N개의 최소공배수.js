function solution(arr) {
    return findLeastCommonMultiple(arr);
}


const findLeastCommonMultiple = (arr) => {
    let i = 1;
    
    while(1) {
        const count = arr.filter(a => i % a === 0).length;
        if(count === arr.length) break;
        else i++;
    }
    
    return i;
}

/**/