n, k = map(int, input().split())
arr = list(map(int, input().split()))

import sys, math
input = sys.stdin.readline
saveCount = 0

def mergeSort(l, r):
    if (r - l) < 1:
        return
    m = math.trunc((r - l) / 2) + l

    # print(l, m , '/', m+1, r)
    # print(l, m, r)
    mergeSort(l, m)
    mergeSort(m + 1, r)
    merge(l, m, r)
    
def merge(l, m, r):
    # print('mg: ', l, m, r)
    global saveCount
    lc = l
    rc = m + 1
    tc = 0
    temp = [0] * (r - l + 1)

    while lc <= m and rc <= r:
        # print(lc, m, rc, r, 'sdfsdf')
        if arr[lc] < arr[rc]:
            temp[tc] = arr[lc]
            tc += 1
            lc += 1
        else:
            temp[tc] = arr[rc]
            tc += 1
            rc += 1

    # 여기까지 진행됐다면 둘 중 하나의 배열이 남아있는 상태
    # print('여기까지:', arr[l:r+1], temp, lc)
    while lc <= m:
        temp[tc] = arr[lc]
        tc += 1
        lc += 1
    
    while rc <= r:
        temp[tc] = arr[rc]
        tc += 1
        rc += 1

    for i in range(l, r + 1):
        arr[i] = temp[i - l]
        saveCount += 1
        # print(arr, arr[i])
        if saveCount == k:
            print(arr[i])
            sys.exit()
mergeSort(0, n - 1)
print(-1)