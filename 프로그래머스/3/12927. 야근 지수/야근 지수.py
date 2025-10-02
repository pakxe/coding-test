def solution(n, works):
    # sum이 n 보다 작거나 같으면 return 0
    works_s = sum(works)
    
    if works_s <= n:
        return 0
    
    counts = [0 for _ in range(1000001)]
    
    for i in range(len(works)):
        work = works[i]
        
        counts[work] += 1
    
    rest = n
    for i in range(len(counts) - 1, 0, -1):
        cur_count = counts[i]
        
        if cur_count == 0:
            continue
            
        next_turn = rest - cur_count
        
        if next_turn < 0:
            counts[i - 1] = counts[i - 1] + rest
            counts[i] = -(next_turn)
            break
        
        else:
            counts[i] = 0
            counts[i - 1] = counts[i - 1] + cur_count
            rest = next_turn
        
    s = 0
    for i in range(len(counts)):
        if counts[i] == 0: 
            continue
            
        s += (i ** 2) * counts[i]
        
    return s
        
            