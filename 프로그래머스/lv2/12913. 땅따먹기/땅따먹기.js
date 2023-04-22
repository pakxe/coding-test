function solution(land) {
    return maxSum(land);
}

const maxSum = land => {
    const [row, col] = [land.length, land[0].length];
    
    const dp = Array.from(Array(row), () => Array(col).fill(0));
        dp[0][0] = land[0][0];
        dp[0][1] = land[0][1];
        dp[0][2] = land[0][2];
        dp[0][3] = land[0][3];
    
    // // 첫줄 채우기
    // for(let i = 0; i < col; i++) {
    //     dp[0][i] = land[0][i];
    // }
    
    for(let i = 1; i < row; i++) {
        
        for(let j = 0; j < col; j++) {
            const rowArr = [];
            
            for(let k = 0; k < col; k++) {
                if(k !== j) rowArr.push(dp[i-1][k]);
            }
            
            dp[i][j] = Math.max(...rowArr) + land[i][j];
        }
    }
    
    return Math.max(...dp[row-1]);
}

/*
2차원 배열을 선언해야한다. 배열의 행과 열은 land와 똑같이 한다. 
for를 두번 반복해서 각 칸에서의 최대 max를 구한다. 
마지막 행에서 최대값을 반환한다. 
*/