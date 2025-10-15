import math

def solution(weights):
    m = {}
    for i in range(len(weights)):
        c = weights[i]
        
        if c in m:
            new_c = m[c] + 1
            m[c] = new_c
        else:
            m[c] = 1
    
    count = 0
    for key in m:
        c = m[key]
        
        # 1:1
        if c != 1:
            count += ((c - 1) * c) // 2
        
        # 1:2
        v = key * 2
        floor_v = math.floor(v)
        if v == floor_v and floor_v <= 1000 and floor_v in m:
            pair_c = m[floor_v]
            
            count += (pair_c * c)
            
        # 2:3
        v = key * (3/2)
        floor_v = math.floor(v)
        if v == floor_v and floor_v <= 1000 and floor_v in m:
            pair_c = m[floor_v]
            
            count += (pair_c * c)
        
        # 3:4
        v = key * (4/3)
        floor_v = math.floor(v)
        if v == floor_v and floor_v <= 1000 and floor_v in m:
            pair_c = m[floor_v]
            
            count += (pair_c * c)
            
            
    return count