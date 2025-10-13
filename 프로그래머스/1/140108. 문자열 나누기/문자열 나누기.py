def solution(s):
    start = 0
    c = 0
    
    if len(s) <= 1:
        return 1
    
    while(True):
        print(start)
        if start >= len(s):
            break
            
        cur_c = s[start]
        same_c = 1
        other_c = 0

        for i in range(start + 1, len(s)):
            char = s[i]
            
            if cur_c == char:
                same_c += 1
            else:
                other_c += 1
            
            if same_c == other_c:
                
                start = i
                
                c += 1
                break
        else:
            c += 1 
            break
        
        start += 1
    return c
            