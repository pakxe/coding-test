def solution(numbers):
    range_map = []
    for i in range(1, len(numbers)):
        cur = numbers[i]
        prev = numbers[i - 1]
        
        # 상승
        if cur > prev:
            range_map.append((i - 1, cur)) # limit_index, v
    
    map_cursor = 0
    ans = []
    for i in range(len(numbers)):
        if map_cursor >= len(range_map):
            ans.append(-1)
            continue
            
        limit_index, v = range_map[map_cursor]
        
        cur = numbers[i]
        if v > cur:
            ans.append(v)
        else:
            ans.append(-1)
        
        if limit_index == i:
            map_cursor += 1
            
    return ans
        
            
        
