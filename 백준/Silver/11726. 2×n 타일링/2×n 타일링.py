
'''
f(n): 길이가n일 때의 방법의 수를 구해주는 함수
basecase,step자동 계산
basecase: 길이가 1일 경우 1, 길이가 2일 경우 2(가로, 세로)
step자동계산: 2를 뺐을 때는 + 2, 1을 뺐을 때는 1개의 방법
'''

import sys
input = sys.stdin.readline
sys.setrecursionlimit(1000*1000)
n = int(input())

dp = [0] * (n + 1)

def f(n):
    if n == 1:
        return 1
    elif n == 2:
        return 2
    elif n == 0:
        return 0
    
    if dp[n] != 0:
        return dp[n]
    
    dp[n] += f(n - 1) + f(n - 2)
    return dp[n]
    
print(f(n) % 10007)

