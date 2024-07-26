import sys

input = sys.stdin.readline

n = int(input())
for i in range(n - 1, -1, -1):
    emptys = ' ' * i
    stars = '*' * (n - i)
    print(emptys + stars)