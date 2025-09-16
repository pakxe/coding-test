import math

def solution(n):
    arr = []
    
    for i in range(n - 1, 1, -1):
        a = (n - 1) / i
        
        if a == math.floor(a):
            arr.append(i)
            
    if len(arr) == 0:
        return n - 1
    
    return arr[len(arr) - 1]
        