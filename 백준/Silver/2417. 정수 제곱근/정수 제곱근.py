'''
근데 왜 이 방법이 틀린거지?

math.sqrt는 실수 연산.
2^63은 64비트 실수가 커버할 수 있는 정밀도 범위를 벗어났기 때문에 틀린것

그럼 이걸 어떻게 할 수 있을까?
'''

'''
결정문제: 이 값의 제곱이 n보다 같거나 큰가?

0- -> 2^63 를 검토한다. 
m을 정한다. 
비교한다. 
만약 해당 수가 그 값자체만으로도 n을 오버한다면 hi = mid 를한다.
만약 n을 오버하지 않았지만 그 값의 제곱이 n을 오버한다면 hi = mid한다. 
만약 n을 오버하지 않았지만 그 값의 제곱이 n보다 작다면 lo = mid한다. 
F -> T로 바뀌는 순간인 hi를 찾는다.
'''
import math

def binarySearch (x):
    lo = -1
    hi = 2**63 + 1
    
    while lo + 1 < hi: 
        m = math.trunc((hi + lo) / 2)
        
        if m > x:
            hi = m
        elif m ** 2 >= x:
            hi = m
        else: 
            lo = m
    
    return hi

n = int(input())

print(binarySearch(n))
    