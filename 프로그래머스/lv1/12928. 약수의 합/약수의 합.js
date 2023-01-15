function solution(n) {
    return divider(n).reduce((sum, num) => sum+= num
    , 0)
}

const divider = num => {
    const dividers = [];
    for(let i = 1; i <= Math.sqrt(num); i++) {
        if(num%i === 0) {
            dividers.push(i);
            if(num/i !== i) dividers.push(num/i);
        }
    }
    return dividers;
}