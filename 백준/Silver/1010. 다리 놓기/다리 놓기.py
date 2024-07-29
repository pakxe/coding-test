import sys
import math

input = sys.stdin.readline

# def comb(si):
#     global temp, siteCount, n, m
    
#     if len(temp) == n:
#         siteCount += 1
#         return
    
#     for i in range(si, m):
#         temp.append(i)
#         comb(i + 1)
#         temp.pop()

testCount = int(input().strip())

for _ in range(testCount):
    temp = []
    siteCount = 0
    n, m = map(int, input().strip().split())
    print(math.comb(m, n))
