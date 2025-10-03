'''
시작은 하나고 끝은 여러 개 일 수 있음. 그래서 시작부터 가는건 경우의 수가 곱으로 늘어나므로 안되지 않을까?
근데 이것도 곱이라서 경우의 수가 너무많음
아마 dp같음. 
n번째dp = n을 만드는 최소 연산 횟수 = 
1. -n에서 +1
2. n/2에서 + 1
3. n/3에서 + 1
1, 2, 3중 min으로 채운다. 
'''

def solution(x, y, n):
    dp = [float('inf') for _ in range(y + 1)]
    dp[x] = 0
    i = x
    
    if x == y:
        return 0
    
    while(True):
        if i >= len(dp):
            break
            
        if dp[i] == float('inf'):
            i += 1
            continue
            
        if i + n < len(dp):
            dp[i + n] = min(dp[i] + 1, dp[i + n])
        
        # 2
        if i * 2 < len(dp):
            dp[i * 2] = min(dp[i * 2], dp[i] + 1)
         
        # 3
        if i * 3 < len(dp):
            dp[i * 3] = min(dp[i * 3], dp[i] + 1)
            
        i += 1
            
    if dp[y] == float('inf'):
        return -1
    
    return dp[y]