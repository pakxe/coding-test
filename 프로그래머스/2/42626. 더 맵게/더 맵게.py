import heapq
def solution(scoville, K):
    if K == 0:
        return 0
    
    q = []
    for i in range(len(scoville)):
        heapq.heappush(q, scoville[i])
    
    is_complete = False
    c = 0
    while(True):
        if len(q) == 1:
            if q[0] >= K:
                is_complete = True
                
            break
        
        if q[0] >= K:
            is_complete = True
            break
            
        first = heapq.heappop(q)
        second = heapq.heappop(q)
        
        new_scoville = first + (second * 2)
        
        heapq.heappush(q, new_scoville)
        c += 1
        
    if is_complete == False:
        return -1
    
    return c