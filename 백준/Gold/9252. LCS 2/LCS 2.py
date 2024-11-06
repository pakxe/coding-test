import sys
input = sys.stdin.readline

s1 = list(input().strip())
s2 = list(input().strip())

# 0으로 초기화된 2차원 배열
dp = [[0 for _ in range(len(s1) + 1)] for _ in range(len(s2) + 1)]
dpStr = [['' for _ in range(len(s1) + 1)] for _ in range(len(s2) + 1)]

for y in range(1, len(s2) + 1):
    for x in range(1, len(s1) + 1):
        c1 = s1[x - 1]
        c2 = s2[y - 1]
        
        if c1 == c2:
            dp[y][x] = dp[y - 1][x - 1] + 1
            dpStr[y][x] = dpStr[y - 1][x - 1] + c1
        else:
            if dp[y][x - 1] > dp[y - 1][x]:
                dp[y][x] = dp[y][x - 1]
                dpStr[y][x] = dpStr[y][x - 1]
            else:
                dp[y][x] = dp[y - 1][x]
                dpStr[y][x] = dpStr[y - 1][x]

print(dp[len(s2)][len(s1)])

matchedStr = dpStr[len(s2)][len(s1)]
if len(matchedStr) != 0:
    print(matchedStr)
