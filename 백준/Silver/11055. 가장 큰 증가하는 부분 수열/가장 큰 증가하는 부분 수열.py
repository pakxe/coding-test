n = int(input())
ns = list(map(int, input().split()))

dp = ns.copy()

for i in range(n):
    for j in range(i):
        if ns[j] < ns[i]:
            dp[i] = max(dp[i], dp[j] + ns[i])

print(max(dp))

