def solution(n, m, section):
    if len(section) == 1:
        return 1
    
    c = 1
    r = m - 1
    for i in range(1, len(section)):
        prev_section = section[i - 1]
        cur_section = section[i]
        
        if r != 0:
            section_length = cur_section - prev_section
            if r < section_length:
                c += 1
                r = m - 1
            else:
                r -= section_length
        else:
            c += 1
            r = m - 1
            
    return c
                
        