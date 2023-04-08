function solution(arr1, arr2) {
    // 0으로 초기화된 2차원 배열 선언
    const result = new Array(arr1.length).fill(0).map(() => new Array(arr2[0].length).fill(0));
    
    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result[0].length; j++) {
            let sum = 0;
            
            for(let k = 0 ; k < arr2.length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            
            result[i][j] = sum;
        }
    }
    
    return result;
} 
    
