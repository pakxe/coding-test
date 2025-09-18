def solution(t, p):
    p_n = int(p)
    
    count = 0
    for i in range(len(t) - len(p) + 1):
        sliced = t[i:i+len(p)]
        sliced_n = int(sliced)
        
        if sliced_n <= p_n:
            count += 1
            
    return count
            
    