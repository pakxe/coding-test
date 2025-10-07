def solution(number, k):
    s = []
    
    for num in number:
        if not s:
            s.append(num)
            continue
        
        if k > 0:
            while s[-1] < num:
                s.pop()
                k -=1
                if not s or k <= 0:
                    break
        s.append(num)
    
    s = s[:-k] if k > 0 else s
    return ''.join(s)