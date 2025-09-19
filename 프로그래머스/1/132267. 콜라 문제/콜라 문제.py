import math

def solution(a, b, n):
    temp = n
    rest = 0
    count = 0
    
    while(True):
        if temp < a:
            return count
        
        cur_count = math.floor(temp / a) * b
        count += cur_count
        
        rest = temp % a
        temp = cur_count + rest
        
        
            
        
        
