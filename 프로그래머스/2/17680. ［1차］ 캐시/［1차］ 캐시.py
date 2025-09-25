def find_min_key(d):
    min_v = float('inf')
    min_k = None
    
    for key in d:
        if d[key] < min_v:
            min_v = d[key]
            min_k = key
            
    return min_k

def solution(cacheSize, cities):
    if cacheSize == 0:
        return len(cities) * 5
    
    d = {}
    
    t = 0
    for i in range(len(cities)):
        city = cities[i].lower()
        
        if city in d:
            d[city] = i # 갱신
            t += 1
            
        else:
            if len(d) != 0 and len(d) >= cacheSize:
                min_key = find_min_key(d)
                del d[min_key]
                
            d[city] = i
            t += 5
            
    return t
                