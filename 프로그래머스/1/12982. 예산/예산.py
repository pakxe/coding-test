def solution(d, budget):
    sorted_d = sorted(d)
    
    rest = budget
    count = 0
    
    for i in range(len(d)):
        price = sorted_d[i]
        
        if rest >= price:
            rest -= price
            count += 1
            
        else:
            return count
        
    return count