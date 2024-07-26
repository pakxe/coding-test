import sys

input = sys.stdin.readline

a, b = list(map(int, input().split()))

if a < b:
    print('<')
elif a > b:
    print('>')
elif a == b:
    print('==')