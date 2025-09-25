'''
우큐는 priorities를 모두 넣는다. 중복포함
'''
from collections import deque
import heapq

def solution(priorities, location):
    dq = deque()
    q = []
    
    for i in range(len(priorities)):
        heapq.heappush(q, -priorities[i])
        dq.append((priorities[i], i))
        
    pop_count = 0
    while(True):
        if len(dq) <= 0:
            break
            
        target = -(q[0])
        top_v, top_i = dq[0]
        
        if top_v == target:
            heapq.heappop(q)
            dq.popleft()
            pop_count += 1
            if top_i == location:
                return pop_count
        
        else:
            dq.popleft()
            dq.append((top_v, top_i))
        
