from itertools import combinations

n, m = map(int, input().split())

arr = []
for i in range(1, n + 1):
    arr.append(i)

res = list(combinations(arr, m))
for v in res:
    print(' '.join(map(str, v)))