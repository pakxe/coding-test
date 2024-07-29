"""
1. 팩토리얼로 Comb 구현
2. 그냥 comb사용
3. dp
"""

"""
1. 팩토리얼로 Comb 구현

for로 2부터 목표로 하는 수까지 fact배열을 채운다. 

"""

import sys
input = sys.stdin.readline

n = int(input())

def factorial (i):
    res = 1
    for i in range(2, i + 1):
        res *= i
    return res

print(factorial(n))
    