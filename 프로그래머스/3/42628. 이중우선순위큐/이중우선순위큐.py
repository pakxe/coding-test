import heapq

I = 'I'
D = 'D'
DEL_MAX = '1'
DEL_MIN = '-1'

def solution(operations):
    min_q = []
    max_q = []
    heap_len = 0
    
    for i in range(len(operations)):
        operation, v = operations[i].split()
        
        if operation == I:
            flag = {}
            flag['is_deleted'] = False
            
            heapq.heappush(min_q, (int(v), i, flag))
            heapq.heappush(max_q, (-int(v), i, flag))
            heap_len += 1
            
        else:
            if heap_len <= 0:
                continue
                
            if v == DEL_MAX:
                while(True):
                    if len(max_q) <= 0:
                        break
                        
                    _, __, flag = heapq.heappop(max_q)
                    if flag['is_deleted'] == False:
                        flag['is_deleted'] = True
                        break
                        
            else:
                while(True):
                    if len(min_q) <= 0:
                        break
                    
                    _, __, flag = heapq.heappop(min_q)
                    if flag['is_deleted'] == False:
                        flag['is_deleted'] = True
                        break
                        
            heap_len -= 1
            
    if heap_len <= 0:
        return [0, 0]

    max_v = None
    while(True):
        if len(max_q) <= 0:
            break
            
        m_v, _, flag = heapq.heappop(max_q)
        if flag['is_deleted'] == False:
            max_v = -m_v
            break
            
    if heap_len == 1:
        return [max_v, max_v]
    
    min_v = None
    while(True):
        if len(min_q) <= 0:
            break
            
        v, _, flag = heapq.heappop(min_q)
        if flag['is_deleted'] == False:
            min_v = v
            break
    
    return [max_v, min_v]
            
