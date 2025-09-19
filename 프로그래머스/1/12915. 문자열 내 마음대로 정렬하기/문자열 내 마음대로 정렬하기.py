def solution(strings, n):
    orders = [] # (char, term)
    
    for i in range(len(strings)):
        term = strings[i]
        orders.append((term[n], term))
        
    sorted_orders = sorted(orders)
    
    ans = []
    for i in range(len(sorted_orders)):
        _, term = sorted_orders[i]
        
        ans.append(term)
        
    return ans
        
        
    
    
    
