function solution(r1, r2) {
    const edgeCount = r2 - r1 + 1;
    let count = 0;
    
    for(let x = 1;  x < r2; x++) {
        const y2 = Math.sqrt(r2**2 - x**2);
        const y1 = x < r1 ? Math.sqrt(r1**2 - x**2) : false;
        
        if(!y1) count += Math.floor(y2);
        else {
            count += Math.floor(y2) - Math.ceil(y1);
            count++;
        }
    }
    
    return count * 4 + edgeCount * 4;
}