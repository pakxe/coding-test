import sys

input = sys.stdin.readline

n = int(input())

for i in range(n - 1, -1, -1):
    sideStars = '*' * i
    emptys = ' ' * (n - i - 1)
    
    print(emptys + sideStars + '*' + sideStars)
    