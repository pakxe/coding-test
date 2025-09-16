import math

def solution(n):
    arr = []
    
    if n == 0:
        return 0
    
    
    # single
    root = math.sqrt(n)
    floor_root = math.floor(root)
    if floor_root == root:
        arr.append(floor_root)
        
        for i in range(1, floor_root):
            b = n / i
            if math.floor(b) == b:
                arr.append(i)
                arr.append(b) 
                
        return sum(arr)
    
    # double
    for i in range(1, math.ceil(n / 2)):
        if len(arr) > 0 and arr[len(arr) - 1] == i:
            break;
            
        b = n / i
        if math.floor(b) == b:
            arr.append(i)
            arr.append(b) # 점점 작아지는 값
            
    return sum(arr)
            
        
    
    