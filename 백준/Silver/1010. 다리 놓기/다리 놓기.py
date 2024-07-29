"""
1. 팩토리얼로 Comb 구현
2. 그냥 comb사용
3. dp
"""

"""
1. 팩토리얼로 Comb 구현

mCn = m개 중에 n개 선택
큰 수가 앞에 온다.

m!
n!(m - n)!
"""

import sys
input = sys.stdin.readline


def factorial (i):
    res = 1
    for i in range(2, i + 1):
        res *= i
    return res


test_count = int(input())

for _ in range(test_count):
    n, m = list(map(int, input().split())) # m개 중에 n개 선택 

    res = factorial(m) // (factorial(n) * factorial(m - n))
    
    print(res)


    