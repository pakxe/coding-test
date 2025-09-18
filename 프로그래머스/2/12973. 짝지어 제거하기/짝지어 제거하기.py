'''
괄호랑 똑같다. 
길이가 영이면 왼스
길이가 있는데, 
    왼스탑과 오스0이 다르면, 넘긴다.
    같으면
'''
from collections import deque

def solution(s):
    if len(s) == 1:
        return 0
    
    ls = []
    rs = deque(list(s))
    
    for i in range(len(s)):
        char = s[i]
        
        if i == 0:
            ls.append(char)
            rs.popleft()
            continue
            
        if len(ls) == 0:
            ls.append(char)
            rs.popleft()
            
        elif char != ls[len(ls) - 1]:
            ls.append(char)
            rs.popleft()
            
        else:
            rs.popleft()
            ls.pop()
            
    if len(ls) != 0 or len(rs) != 0:
        return 0
    
    return 1

    
            
        