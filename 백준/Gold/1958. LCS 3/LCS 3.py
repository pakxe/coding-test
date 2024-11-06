import sys
input = sys.stdin.readline

strs = [list(input().strip()) for _ in range(3)]
s1, s2, s3 = strs

# 0으로 초기화된 3차원 배열
dp = [[[0 for _ in range(len(s1) + 1)] for _ in range(len(s2) + 1)] for _ in range(len(s3) + 1)]

for z in range(1, len(s3) + 1):
    for y in range(1, len(s2) + 1):
        for x in range(1, len(s1) + 1):
            c1 = s1[x - 1]
            c2 = s2[y - 1]
            c3 = s3[z - 1]
            
            if c1 == c2 and c2 == c3:
                dp[z][y][x] = dp[z - 1][y - 1][x - 1] + 1
            else:
                dp[z][y][x] = max(dp[z - 1][y][x], dp[z][y - 1][x], dp[z][y][x - 1])
        
print(dp[len(s3)][len(s2)][len(s1)])