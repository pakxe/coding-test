'''
range가 겹치는 경우를 생각하지 못했다. 

이전 end보다 start가 

'''

import math

def solution(n, stations, w):
    r = []
    
    prev_end = -1
    is_end = False
    
    for i in range(len(stations)):
        station = stations[i] - 1
        start = max(0, station - w)
        end = min(n, station + w + 1)
        
        # 안 겹침
        if prev_end < start:
            r.append((max(prev_end, 0), start))
            prev_end = end
                
        # 겹침
        else:
            prev_end = end
            
        if end == n:
            is_end = True
            
    if is_end == False:
        r.append((prev_end, n))
        
    ranges = []
    for i in range(len(r)):
        start, end = r[i]
        
        if start < 0 or end > n:
            continue
        
        if end - start <= 0:
            continue
            
        ranges.append(r[i])
        
    # 100% coverage
    if len(ranges) <= 0:
        return 0

    c = 0
    for i in range(len(ranges)):
        start, end = ranges[i]
        
        if end - start <= w:
            c += 1
        else:
            cover_len = w * 2 + 1
            d = (end - start) / cover_len
            floor_d = math.floor(d)
            # 나눠 떨어지는 경우
            if floor_d == d:
                c += floor_d
            # 나눠 떨어지지 않는 경우
            else:
                need_count = math.ceil((end - start) / cover_len)
                c += need_count
       
    return c
