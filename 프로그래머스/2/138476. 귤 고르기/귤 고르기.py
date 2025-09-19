def solution(k, tangerine):
    d = {}
    
    for i in range(len(tangerine)):
        s = tangerine[i]
        
        if s in d:
            prev = d[s]
            d[s] = prev + 1
        else:
            d[s] = 1
            
    counts = []
    for key in d:
        count = d[key]
        
        counts.append(count)

    sorted_counts = sorted(counts)
    temp = k
    res = 0
    while True:
        if len(sorted_counts) == 0:
            return res
        
        if temp <= 0:
            return res
        
        count = sorted_counts[-1]
        temp -= count
        res += 1
        sorted_counts.pop()
        
        
        
