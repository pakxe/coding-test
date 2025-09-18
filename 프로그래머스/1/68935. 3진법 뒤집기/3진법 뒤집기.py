import math

def get_10(s):
    r = 0
    
    for i in range(len(s)):
        num = int(s[len(s) - i - 1])
        top = 3 ** i
        v = num * top
        r += v
        
    return r

def get_3_s_rev(n):
    r = []
    
    temp = n
    while(True):
        if temp < 3:
            r.append(str(temp))
            break
            
        rest = temp % 3
        r.append(str(rest))
        temp = math.floor(temp / 3)
        
    return ''.join(r)
        
def solution(n):
    s_rev_3 = get_3_s_rev(n)
    
    return get_10(s_rev_3)
    
    