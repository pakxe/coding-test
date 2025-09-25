import heapq

def solution(k, m, score):
    q = []
    for s in score:
        heapq.heappush(q, -s)
        
    s = 0
    for i in range(int(len(score) / m)):
        min_v = float('inf')
        for j in range(m):
            v = -heapq.heappop(q)
            
            if v < min_v:
                min_v = v
                
        s += min_v * m
    
    return s
            
        
        
    
    
