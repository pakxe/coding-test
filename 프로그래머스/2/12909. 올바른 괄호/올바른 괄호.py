from collections import deque

def solution(s):
    ls = []
    rs = deque(list(s))
    
    for i in range(len(s)):
        right_top = rs[0]
        
        if right_top == '(':
            ls.append(right_top)
            rs.popleft()
            
        elif right_top == ')':
            if len(ls) <= 0: 
                return False
            
            ls.pop()
            rs.popleft()
            
    if len(ls) == 0 and len(rs) == 0:
        return True
    
    return False
    
    
    
    