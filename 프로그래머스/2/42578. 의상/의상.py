def solution(clothes):
    d = {}
    
    for i in range(len(clothes)):
        name, category = clothes[i]
        
        if category in d:
            d[category] = d[category] + 1
        else:
            d[category] = 1
        
    s = 1
    for key in d:
        c = d[key]
        
        s = s * (c + 1)
    
    return s - 1
