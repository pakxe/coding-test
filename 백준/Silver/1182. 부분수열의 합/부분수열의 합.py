'''
개수는 20개

n, n*n, n*n*n
'''

from itertools import combinations 

n, target = map(int, input().split())
lst = list(map(int, input().split()))

count = 0
for i in range(1, n + 1):
    rst = list(combinations(lst, i))
    for v in rst:
        if sum(v) == target:
            count += 1

print(count)