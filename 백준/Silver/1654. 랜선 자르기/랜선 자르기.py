'''
이분 탐색
결정문제는: 그 수로 나누었을 때 원하는 길이이며 n개 이상의 조각으로 나오는가
tttttfffff
lo = 0부터 시작, hi = m
'''


k, n = map(int, input().split())
lst = [int(input()) for _ in range(k)]
maxV = max(lst)

def isOverN(size, lst):
    count = 0
    
    for v in lst:
        count += v // size
        
    return count >= n
    
def binarySearch():
    lo = 0
    hi = maxV + 1
    
    while lo + 1 < hi:
        m = (lo + hi) // 2
        if isOverN(m, lst):
            lo = m
        else:
            hi = m
        
        
    print(lo)


binarySearch()