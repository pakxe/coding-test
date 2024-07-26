import sys

input = sys.stdin.readline

nums = list(map(int, input().split()))

checkNum = sum(list(map(lambda x: x ** 2, nums))) % 10

print(checkNum)
