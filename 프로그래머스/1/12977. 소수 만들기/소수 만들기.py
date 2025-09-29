from itertools import combinations

# 솟수 구하기
def f(n):
    arr = [True for _ in range(n + 1)]
    arr[0] = False
    arr[1] = False
    
    prev = 2
    while(True):
        if arr[prev] is False:
            for i in range(prev, len(arr)):
                if arr[i] == True:
                    prev = i
                    break
                    
        cur = prev
        prev += 1
        
        if cur * cur > n: 
            break
            
        for i in range(cur * 2, n + 1, cur):
            arr[i] = False
            
        
    s = set()
    for i in range(len(arr)):
        if arr[i] == True:
            s.add(i)
            
    return s
        
def solution(nums):
    combs = list(combinations(nums, 3))
    s = f(sum(sorted(nums)[-3:]))
    c = 0
    for i in range(len(combs)):
        comb = combs[i]
        
        comb_s = sum(comb)
        
        if comb_s in s:
            c += 1

    return c
            
