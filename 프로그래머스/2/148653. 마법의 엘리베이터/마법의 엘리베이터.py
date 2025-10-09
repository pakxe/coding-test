
def solution(storey):
    nl = list(map(int, str(storey)))
    
    stack = [(len(nl) - 1, 0, False)]
    
    min_c = float('inf')
    while(True):
        if len(stack) <= 0:
            break
            
        i, s, has_up = stack.pop()
        
        if i < 0:
            if has_up:
                min_c = min(min_c, s + 1)
            else:
                min_c = min(min_c, s)
            continue
            
        # 오버플로
        if has_up:
            if nl[i] + 1 == 10:
                stack.append((i - 1, s, True))
                
            else:
                # 올림
                need_c = 10 - (nl[i] + 1)
                stack.append((i - 1, s + need_c, True))
                
                # 내림
                need_c = nl[i] + 1
                stack.append((i - 1, s + need_c, False))
        else:
            # 올림
            need_c = 10 - nl[i]
            stack.append((i - 1, s + need_c, True))
            
            # 내림
            need_c = nl[i]
            
            stack.append((i - 1, s + need_c, False))
            
    return min_c