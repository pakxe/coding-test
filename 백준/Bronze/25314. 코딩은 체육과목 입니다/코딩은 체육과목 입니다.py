import sys
input = sys.stdin.readline
n = int(input())
longList = ['long'] * (n // 4)
print(' '.join(longList) + ' int')