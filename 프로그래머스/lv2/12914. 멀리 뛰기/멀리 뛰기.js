function solution(n) {
    return jump(n);
}

const jump = n => {
    const dp = new Array(n).fill(0);
    
    dp[1] = 1; // 1칸
    dp[2] = 2; // 1칸1칸, 2칸
    
    for(let i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    
    return dp[n];
}