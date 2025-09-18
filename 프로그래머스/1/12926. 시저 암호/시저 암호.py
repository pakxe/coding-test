def change(c, dist):
    ac = ord(c)
    
    # upper
    if ac >= 0 + 65 and ac <= 25 + 65:
        s = ac - 65 + dist
        
        if s > 25:
            s = s % 26
            
        return chr(s + 65)
    
    # lower
    else:
        s = ac - 97 + dist
        
        if s > 25:
            s = s % 26
            
        return chr(s + 97)

def solution(s, n):
    sl = list(s)
    
    for i in range(len(sl)):
        char = sl[i]
        
        if char == ' ':
            continue
        
        sl[i] = change(char, n)
        
    return ''.join(sl)