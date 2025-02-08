'''
1이면 경우의 수가 없다. 0 또는 1중 하나임

2: 2 + 1 = 3 가지
4: 2 가지 
'''
import sys

n = int(input())

dp = [0] * (n + 3)
dp[1] = 0
dp[2] = 3
dp[3] = 2

if n % 2 != 0:
    print(0)
    sys.exit(0)

if n <= 3:
    print(dp[n])
    sys.exit(0)

for i in range(4, n + 1):
    # 홀수
    if i % 2 != 0:
        dp[i] = dp[i - 3] * 2 + dp[i - 2] 
        
    # 짝수
    else:
        dp[i] = dp[i - 2] * 3 + dp[i - 1]
        
print(dp[n])
