def solution(food):
    for i in range(1, len(food)):
        f = food[i]
        
        if f % 2 != 0:
            food[i] = f - 1
        
    left_side = ''
    
    for i in range(1, len(food)):
        print(food[i])
        f_c = int(food[i] / 2)
        cur = str(i) * f_c
        
        left_side += cur
        
    if len(left_side) == 0:
        return "0"
    
    left_side = list(left_side)
    right_side = left_side[::-1]
    
    return ''.join([*left_side, '0', *right_side])
        