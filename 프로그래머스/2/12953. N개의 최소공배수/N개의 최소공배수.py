def is_valid(temp, arr):
    for i in range(1, len(arr)):
        cur = arr[i]
        
        if cur == temp:
            continue
            
        elif temp < cur:
            return False
        
        else:
            if temp % cur == 0:
                continue
            else:
                return False
            
    return True
                

def solution(arr):
    if len(arr) == 1:
        return arr[0]
    
    temp = arr[0]
    i = 1
    while(True):
        if is_valid(temp, arr):
            return temp
        else:
            i += 1
            temp = arr[0] * i
            
            
        