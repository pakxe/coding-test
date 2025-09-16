def solution(s):
    nums = list(map(int, s.split()))
    
    min_v = float('inf')
    min_i = -1
    max_v = float('-inf')
    max_i = -1
    
    for i in range(len(nums)):
        n = nums[i]
        if min_v > n:
            min_v = n
            min_i = i
            
        if max_v < n:
            max_v = n
            max_i = i
            
    return f'{min_v} {max_v}'
        