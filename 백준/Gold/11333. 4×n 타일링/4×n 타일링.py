tCount = int(input())
lst = [int(input()) for _ in range(tCount)]

maxV = max(lst)

dp = [0] * (maxV + 1)
dp[0] = 1
dp[1] = 2
dp[2] = 2

for i in range(3, maxV + 1):
    if i % 3 == 0:
        dp[i] = dp[i - 1] + dp[i - 3]
    elif i % 3 == 1:
        dp[i] = dp[i - 3] + dp[i - 1] * 2
    else:
        dp[i] = dp[i - 1] + dp[i - 3]
    

for v in lst:
    if v % 3 != 0:
        print(0)
        continue

    print(dp[v] % 1000000007)
    