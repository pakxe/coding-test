def is_upper(c):
    ac = ord(c)
    
    if ac >= 0 + 65 and ac <= 25 + 65:
        return True
    
    return False

def is_lower(c):
    ac = ord(c)
    
    if ac >= 0 + 97 and ac <= 25 + 97:
        return True
    
    return False

def to_upper(c):
    return chr(ord(c) - 32)

def to_lower(c):
    return chr(ord(c) + 32)
    
def change_char(c, need_upper):
    if need_upper:
        if is_upper(c):
            return c
        else:
            return to_upper(c)
        
    else:
        if is_lower(c):
            return c
        else:
            return to_lower(c)
            

def solution(s):
    sl = list(s)
    
    need_upper = True
    for i in range(len(sl)):
        char = sl[i]
        
        if char == ' ':
            need_upper = True
            
        else:
            sl[i] = change_char(char, need_upper)
            need_upper = not need_upper
            
    return ''.join(sl)
                
