'''
최소와 최대를 저장하는 방식인 L배열을 이용한다.

각 원소를 순회하며, lowerbound index에 값을 집어넣는 방법. 
L: 가능한 값중 가장 최소의 값을 집어넣어 가능성을 최대로 하는 배열
L[i]: i인덱스에서 가능한 값중 가장 최소값. 값이 덮어씌워졌다면 그 부분 수열도 포함한다고 보면 된다.
'''

import sys
input = sys.stdin.readline

n = int(input())
ns = list(map(int, input().split()))

l = []

def binarySearch(x):
    lo = -1
    hi = len(l)
    
    while lo + 1 < hi:
        m = (lo + hi) // 2
        
        if l[m] < x: 
            lo = m
        else: 
            hi = m

    return hi

for i in range(n):
    cur = ns[i]
    
    if len(l) == 0 or l[len(l) - 1] < cur:
        l.append(cur)
    else:
        idx = binarySearch(cur)
        l[idx] = cur

print(len(l))
