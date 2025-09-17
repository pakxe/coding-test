def solution(A, B):
    sorted_a = sorted(A) # 오름차순
    sorted_b = sorted(B, reverse=True) # 내림차순
    
    res = 0
    
    for i in range(len(A)):
        va = sorted_a[i]
        vb = sorted_b[i]
        
        res += va * vb
        
    return res
        
