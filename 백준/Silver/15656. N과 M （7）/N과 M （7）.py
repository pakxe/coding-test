from itertools import  product

n, m = map(int, input().split())
lst = list(map(int, input().split()))

rst = list(product(lst, repeat = m))
rst.sort()

for v in rst:
    print(' '.join(map(str, v)))
