from itertools import permutations

n, m = map(int, input().split())

lst = list(map(int, input().split()))

rst = list(permutations(lst, m))
rst.sort()

for v in rst:
    print(' '.join(map(str, v)))