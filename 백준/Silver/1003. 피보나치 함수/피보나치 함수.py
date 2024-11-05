'''
basecase 찾고, 다음 단계가 기계적으로 계산된다면 -> 증명 완료

f(n) = n을 1로 만드는데 드는 최소 연산 횟수
base: n = 1 -> 계산 필요 없으므로 0 
step: n = i -> i가 3의 배수라면 

이미 계산된 값일 경우 min으로 할당한다. 
'''
import sys
input = sys.stdin.readline
sys.setrecursionlimit(1000001)

t = int(input())

def fibo(n, dp):
    if not all(v == 0 for v in dp[n]):
        return dp[n]
    
    if n == 0:
        return [1, 0]
    elif n == 1:
        return [0, 1]
    else:
        f1 = fibo(n - 1, dp)
        f2 = fibo(n - 2, dp)
        
        dp[n] = [f1[0] + f2[0], f1[1] + f2[1]]
        return [f1[0] + f2[0], f1[1] + f2[1]]

for i in range(t):
    n = int(input())

    if n == 0:
        print(1, 0)
        continue

    elif n == 1:
        print(0, 1)
        continue
        
    
    dp = [[0, 0] for _ in range(n + 1)]
    fibo(n, dp)

    # print(dp)
    print(' '.join(map(str, dp[n])))
    
