def solution(arr, divisor):
    r = []
    for n in arr:
        if n % divisor == 0:
            r.append(n)
    
    if len(r) == 0:
        return [-1]
        
    sorted_r = sorted(r)
    return sorted_r
    
    
    