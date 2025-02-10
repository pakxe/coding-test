'''
4*n과 다르게 이전 블럭을 상속하는 친구와 독립적인 친구 2개로 조작해야한다.

점화식 = 시그마i= 0 -> n(dp[n - i - 1]*독립[i])
'''

t = int(input())
lst = [int(input()) for _ in range(t)]

maxV = max(lst)

dp = [0] * (maxV + 1)
prime = [0] * (maxV + 1)

dp[0] = 1
dp[1] = 1

prime[0] = 1
prime[1] = 4


for i in range(2, len(prime)):
    # 독립적인 친구는 짝수일땐 2개 소수일땐 3개이다.
    prime[i] = 2 if i % 2 == 0 else 3

for i in range(2, maxV + 1):
    for j in range(0, i):
        dp[i] += dp[i - j - 1] * prime[j]

for v in lst:
    if v == 0:
        print(0)
        continue
        
    print(dp[v])
