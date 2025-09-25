def solution(topping):
    if len(topping) == 1:
        return 0
    if len(topping) == 2:
        return 1
    
    brother_d = {}
    sister_d = {}
    for i in range(len(topping)):
        cur = topping[i]
        
        if cur in sister_d:
            sister_d[cur] = sister_d[cur] + 1
        else:
            sister_d[cur] = 1
    
    c = 0
    # i에 있는걸 sister에서 뽑아서 brother주기
    for i in range(len(topping)):
        cur = topping[i]
        
        if cur in brother_d:
            brother_d[cur] = brother_d[cur] + 1
        else:
            brother_d[cur] = 1
            
        if cur in sister_d:
            if sister_d[cur] == 1:
                del sister_d[cur]
            else:
                sister_d[cur] = sister_d[cur] - 1
                
        b_c = len(brother_d)
        s_c = len(sister_d)
        
        if b_c == s_c:
            c += 1
            
    return c
        
