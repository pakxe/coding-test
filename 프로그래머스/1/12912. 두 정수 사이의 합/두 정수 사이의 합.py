def solution(a, b):
    if a == b:
        return a
    
    elif a < b:
        s = 0
        for i in range(a, b + 1):
            s += i
            
        return s
    
    else:
        s = 0
        for i in range(b, a + 1):
            s += i
            
        return s
    