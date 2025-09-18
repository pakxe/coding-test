def solution(sizes):
    t_large_l = float('-inf')
    t_small_l = float('-inf')
    
    for i in range(len(sizes)):
        large = max(sizes[i])
        small = min(sizes[i])
        
        if large > t_large_l:
            t_large_l = large
            
        if small > t_small_l:
            t_small_l = small
            
    return t_large_l * t_small_l
        
        
