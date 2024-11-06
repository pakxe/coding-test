import sys
input = sys.stdin.readline

# bottom-up방식임

s1 = list(input().strip())
s2 = list(input().strip())

dp = [[0 for j in range(len(s1) + 1)] for i in range(len(s2) + 1)]

for i in range(1, len(s2) + 1): 
    for j in range(1, len(s1) + 1):
        if s1[j - 1] == s2[i - 1]:
            dp[i][j] = dp[i-1][j-1] + 1
        else:
            dp[i][j] = max(dp[i-1][j], dp[i][j-1])

     
print(dp[len(s2)][len(s1)])


