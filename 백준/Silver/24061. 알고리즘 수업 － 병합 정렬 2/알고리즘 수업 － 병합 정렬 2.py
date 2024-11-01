'''
병합 정렬

반띵씩 나눠서 정복한다. 따라서 절반씩 감소기가 있으므로 NlogN
중간 인덱스로 반띵한다. 
그리고 그렇게 나누고 나서 
merge과정을 거친다. 

merge에서는 반띵되어있는 두 개의 배열을 앞부터 읽으며
작은 값부터 temp배열에 담는다. 
그렇게 다 끝나면 while로 나머디 값들을 전부 집어넣은 후, arr에 반영한다. 
'''
import sys, math
input = sys.stdin.readline

n, k = map(int, input().split())
arr = list(map(int, input().split()))
saveCount = 0

def mergeSort(l, r):
    if r - l < 1: # 부분 배열의 길이가 1이면 정렬할 거리가 없으므로 작업하지 않는다.
        return
    
    m = math.trunc((r - l) / 2) + l
    
    mergeSort(l, m)
    mergeSort(m + 1, r)
    merge(l, m, r)
    
def merge(l, m, r):
    global saveCount
    lc = l # l <= lc <= m
    rc = m + 1 # m + 1 <= rc <= r
    tc = 0
    
    temp = [0] * (r - l + 1) # 합쳐진 배열의 길이만큼 빈배열을 준비한다.
    
    # 어느 하나의 부분 배열이 모두 temp배열에 들어갈 때까지 진행한다.
    while lc <= m and rc <= r:
        if arr[lc] < arr[rc]:
            temp[tc] = arr[lc]
            tc += 1
            lc += 1
        else:
            temp[tc] = arr[rc]
            tc += 1
            rc += 1

    # 둘 중 하나의 배열에 여분이 남아있는 상황이다.
    while lc <= m:
        temp[tc] = arr[lc]
        tc += 1
        lc += 1
    while rc <= r:
        temp[tc] = arr[rc]
        tc += 1
        rc += 1
    
    # 원본 배열의 정렬 결과를 반영한다.
    for i in range(l, r + 1):
        arr[i] = temp[i - l]
        
        saveCount += 1
        if saveCount == k:
            print(' '.join(map(str, arr)))
            sys.exit()
            
    
mergeSort(0, n - 1)
print(-1)