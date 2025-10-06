def recurse(sy, sx, size, m):
    if size <= 1:
        if m[sy][sx] == 0:
            return (0, 1, 0)
        else:
            return (1, 0, 1)
    
    unit_len = size // 2
    total_s = 0
    total_zero_c = 0
    total_one_c = 0
    for y in range(2):
        for x in range(2):
            s, zero_c, one_c = recurse(sy + (unit_len * y), sx + (unit_len * x), unit_len, m)
            
            total_s += s
            total_zero_c += zero_c
            total_one_c += one_c
            
    if total_s == size ** 2:
        return (total_s, 0, 1)
    elif total_s == 0:
        return (total_s, 1, 0)
    else:
        return (total_s, total_zero_c, total_one_c)

def solution(arr):
    s, zero_c, one_c = recurse(0, 0, len(arr), arr)
    
    return [zero_c, one_c]
        