'''
해당하는 수가 L배열의 어느 위치에 덮어 씌워지는지도 저장한다.
그리고 마지막에는 위에서 저장된 배열을 거꾸로 순회해 순차 감소하는 값들을 모아 출력한다.
'''

import sys
input = sys.stdin.readline

n = int(input())
ns = list(map(int, input().split()))

l = []
idxArr = []

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
        idxArr.append(len(l) - 1)
    else:
        idx = binarySearch(cur)
        l[idx] = cur
        idxArr.append(idx)
    
print(len(l))

'''
거꾸로 해서 제일 큰 인덱스를 찾고 
거기서부터 순차 증가하는 값들을 계속 빼온다.
'''

maxSwapValue = max(idxArr)
idxArr.reverse()
maxSwapValueIndex = idxArr.index(maxSwapValue)

lis = [ns[n - 1 - maxSwapValueIndex]]

cursor = maxSwapValue

for i in range(maxSwapValueIndex + 1, len(idxArr)):
    curSwapIndex = idxArr[i]

    if curSwapIndex + 1 == cursor:
        cursor -= 1
        lis.append(ns[n - 1 - i])

lis.reverse()
print(' '.join(map(str, lis)))
        
    

    


