function solution(elements) {
    let arr = new Set();
    
    for(let i = 0; i < elements.length; i++){ // 길이가 i인 연속 부분 수열
        for(let j = 0; j < elements.length; j++) { 
            let sum = 0;
            for(let k = j; k < j + i + 1; k++) {
                if(k >= elements.length) {
                    sum += elements[k - elements.length];
                }
                else sum += elements[k];
            } 
            
            arr.add(sum);
        }
    }    
    
    return arr.size
}