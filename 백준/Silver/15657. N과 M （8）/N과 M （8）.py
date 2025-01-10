from itertools import combinations_with_replacement

n, m = map(int, input().split())
lst = list(map(int, input().split()))

lst.sort()

rst = list(combinations_with_replacement(lst, m))

for v in rst:
    print(' '.join(map(str, v)))

