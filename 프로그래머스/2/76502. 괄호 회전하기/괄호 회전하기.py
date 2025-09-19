from collections import deque

def rotate(s):
    new_s = deque(list(s))
    
    left = new_s.popleft()
    new_s.append(left)
    
    return ''.join(new_s)
    
def is_valid(s):
    r = deque(list(s))
    l = []
    
    for i in range(len(s)):
        char = r[0]
        
        if i == 0:
            if char == '[' or char == '{' or char == '(':
                r.popleft()
                l.append(char)
            else:
                return False
            
        else:    
            if char == '[' or char == '{' or char == '(':
                r.popleft()
                l.append(char)
            
            else:
                if len(l) <= 0:
                    return False
                else:
                    lt = l[-1]
                    if lt == '[' and char == ']':
                        r.popleft()
                        l.pop()
                    elif lt == '{' and char == '}':
                        r.popleft()
                        l.pop()
                    elif lt == '(' and char == ')':
                        r.popleft()
                        l.pop()
                    else:
                        return False
                    
    if len(r) != 0 or len(l) != 0:
        return False

    return True
    
def solution(s):
    temp_s = s
    count = 0
    
    for i in range(len(s) - 1):
        if i == 0:
            if is_valid(temp_s):
                count += 1
        
        else:
            temp_s = rotate(temp_s)
        
            if is_valid(temp_s):
                count += 1
            
    return count
        
        
