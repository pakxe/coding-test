import math

def lcm(n, m):
    if n == m:
        return n
    
    if n < m:
        min_v = n
        max_v = m
    else:
        min_v = n
        max_v = m
        
    i = 1
    temp = 0
    while(True):
        temp = min_v * i
        
        if temp == max_v:
            return min_v
        
        elif temp < max_v:
            if max_v % temp == 0:
                return max_v
            
        else:
            if temp % max_v == 0:
                return temp
            
        i += 1
        
def solution(n, m):
    return [math.gcd(n, m), lcm(n, m)]

