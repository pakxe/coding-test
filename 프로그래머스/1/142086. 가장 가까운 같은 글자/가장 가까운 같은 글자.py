def solution(s):
    res = []
    for i in range(len(s)):
        char = s[i]
        
        if i == 0:
            res.append(-1)
            continue
            
        is_found = False
        for j in range(i - 1, -1, -1):
            prev = s[j]
            
            if char == prev:
                res.append(i - j)
                is_found = True
                break
                
        if not is_found:
            res.append(-1)
                
    return res
