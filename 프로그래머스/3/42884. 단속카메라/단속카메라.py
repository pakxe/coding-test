def solution(routes):
    arr = []
    for i in range(len(routes)):
        start, end = routes[i]
        arr.append((end, start))
        
    sorted_routes = sorted(arr)
    
    camera_loc = -30001
    c = 0
    for i in range(len(sorted_routes)):
        end, start = sorted_routes[i]
        if camera_loc < start:
            camera_loc = end
            c += 1
    
    return c
    
