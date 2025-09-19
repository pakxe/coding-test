import math

def solution(n):
    temp = n
    battery = 0
    
    while(True):
        if temp <= 0:
            return battery
        
        d = temp / 2
        if d == math.floor(d):
            temp = math.floor(d)
            
        else:
            temp -= 1
            battery += 1
            
            