from collections import deque

def solution(people, limit):
    sorted_people = sorted(people)
    q = deque(sorted_people) # 오름차순
    count = 0
    
    while (True):
        if len(q) <= 0:
            return count
        
        if len(q) == 1:
            count += 1
            return count
        
        min_w = q[0]
        max_w = q[-1]
        
        if max_w + min_w <= limit:
            q.pop()
            q.popleft()
        else:
            q.pop()
            
        count += 1
        
        
    