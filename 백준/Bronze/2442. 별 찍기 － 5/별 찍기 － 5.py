import sys

input = sys.stdin.readline

n = int(input())

lists = []

for i in range(n - 1, -1, -1): # 2번째 파라미터의 + 1까지만 반복된다.
    emptys = ' ' * i;
    starCount = (n - i) * 2 - 1;
    stars = '*' * starCount
    
    line = emptys + stars
    lists.append(line)



print('\n'.join(lists))
