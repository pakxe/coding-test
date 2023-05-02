function solution(x, y, n) {
    const dp = new Array(y+1).fill(1000000);
    
    dp[x] = 0;
    
    let now = x; 
    
    for(let i = x; i <= y; i++) {
        if(i + n <= y) dp[i + n] = Math.min(dp[i] + 1, dp[i + n]);
        if(i * 2 <= y) dp[i * 2] = Math.min(dp[i] + 1, dp[i * 2]);
        if(i * 3 <= y) dp[i * 3] = Math.min(dp[i] + 1, dp[i * 3]);
    }
    
    console.log(dp)
    return dp[y] !== 1000000 ? dp[y] : -1
}