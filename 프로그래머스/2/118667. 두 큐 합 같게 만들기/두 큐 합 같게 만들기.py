'''
투포인터 또는 그리디
'''
from collections import deque

def solution(queue1, queue2):
    c = 0
    
    q1 = deque(queue1)
    q2 = deque(queue2)
    
    s1 = sum(q1)
    s2 = sum(q2)
    if (s1 + s2) % 2 != 0:
        return -1
    
    target_v = (s1 + s2) // 2
    
    while(True):
        if 2 * (len(q1) + len(q2)) < c:
            return -1
            break
            
        if s1 == s2:
            break
        
        if s1 > s2:
            s1_left = q1.popleft()
            q2.append(s1_left)
            c += 1
            s1 = s1 - s1_left
            s2 = s2 + s1_left
        else:
            s2_left = q2.popleft()
            q1.append(s2_left)
            c += 1
            s1 = s1 + s2_left
            s2 = s2 - s2_left
        
    return c
        
    
    