import sys
input = sys.stdin.readline

n = int(input())
ns = list(map(int, input().split()))

l = []

# l의 lower bound index를 이진탐색한다.
def binarySearch(x):
    global l
    
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
    
    # 엘 배열의 길이가 0이거나 엘 배열의 top이 현재 값보다 작다면, 
    if len(l) == 0 or l[len(l) - 1] < cur:
        l.append(cur)
    # lower bound index를 찾아 덮어 씌운다. 
    else: 
        idx = binarySearch(cur)
        l[idx] = cur

print(len(l))