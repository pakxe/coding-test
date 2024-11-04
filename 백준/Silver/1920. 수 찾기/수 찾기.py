'''
범위가 2^32임. 즉 O(n)으로 하면 시간 초과가 반드시 발생한다. 
O(logN)인 알고리즘으로 탐색해야한다. 

이분 탐색을 사용하기 위해 일단 정렬을 조진다. 

lo는 x보단 확실히 작은 값,
hi는 x보단 확실히 큰 값 이다. 
그리고 그 값 사이에 x를 의미하는 mid를 위치시킨다. 

배열 A를 정렬하고, b의 원소들을 이분탐색으로 찾는다. 
따라서 시간복잡도는 nlogn + m*logn 
'''

'''
이 문제는
- 정렬
- 이분 탐색 구현
- m배열의 모든 수를 이분 탐색으로 찾는다.
의 프로세스로 진행된다.

원소가 존재하는지 찾는 방법은 찾는 값을 인자로 넣고 찾으면 된다. 
while문을 돌며 mid로 logn씩 진행한다. 

결정문제는 "현재 값이 x보다 같거나 큰값인가?" FFFFFFFFTTTTT에서 처음 T를 찾으면 된다. 
따라서 hi를 return하는데
만약 FFFFFFFFFFF이고, hi의 인덱스가 N이라면? 찾을 수 없는 것
만약 TTTTTTTTTTT이고, hi의 인덱스가 0이라면? 
만약 FTTTTTTTTTT라면? hi인덱스가 1이다. 즉 답이 있다. 

결국 마지막에 현재 hi인덳의 값이 x와 동일한지 확인하고 return해야한다. 
'''

'''
병합 정렬
1길이 배열까지 자르고 나서 merge과정에서 정렬되는 것

왼쪽 배열, 오른쪽 배열을 모두 정렬되었다고 가정하고 merge를 진행한다. 따라서 mergeSort라는 재귀 함수는 그 범위에 대하여 정렬을 완료한다! 가 보장되어야 한다. 

merge과정에서는 temp배열을 만들고 거기에 왼쪽 커서, 오른쪽 커서를 만들고 +1하면서 temp배열을 채운다. 이때 커서가 오버플로나지않도록 조건문을 지정한다. 
이렇게 되면 어느 하나의 커서가 오버되면 while문이 끝난다. 
따라서 아직 temp에 넣어지지 않은 특정 방향의 배열을 위해 while을 다시 수행해주는 것이 필요하다. 
'''
import math

n = int(input())
ns = list(map(int, input().split()))
m = int(input())
ms = list(map(int, input().split()))

def mergeSort(l, r):
    if r - l < 1:
        return

    mid = math.trunc((l + r) / 2)
    
    mergeSort(l, mid)
    mergeSort(mid + 1, r)
    merge(l, mid, r)
    
    
def merge(l, m, r):
    lc = l
    rc = m + 1
    tc = 0
    temp = [None] * (r - l + 1)
    
    while lc <= m and rc <= r: 
        if ns[lc] < ns[rc]:
            temp[tc] = ns[lc]
            tc += 1
            lc += 1
        else:
            temp[tc] = ns[rc]
            tc += 1
            rc += 1
            
    while lc <= m:
        temp[tc] = ns[lc]
        tc += 1
        lc += 1
    
    while rc <= r:
        temp[tc] = ns[rc]
        tc += 1
        rc += 1
    
    for i in range(l, r + 1):
        ns[i] = temp[i - l]    
        
    
def hasValue(x): 
    lo = -1
    hi = n
    
    while lo + 1 < hi: # 사이에 칸이 없어지게 되면, lo와 hi가 닿게되면 멈춘다.
        mid = math.trunc((lo + hi) / 2)
        if ns[mid] < x: 
            lo = mid
        else:
            hi = mid
    

    if hi == n: 
        return 0
    return 1 if ns[hi] == x else 0

mergeSort(0, n - 1) # 정렬

for i in range(m):
    print(hasValue(ms[i]))
