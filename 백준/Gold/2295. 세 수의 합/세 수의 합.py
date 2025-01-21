import sys

n = int(input())

lst = [int(input()) for i in range(n)]

lst.sort()

sumset = set()

for x in range(n):
    for y in range(x, n):
        sumset.add(lst[y] + lst[x])
        
for k in range(n - 1, -1, -1):
    for z in range(n):
        dif = lst[k] - lst[z]
        if dif in sumset:
            print(lst[k])
            sys.exit(0)
