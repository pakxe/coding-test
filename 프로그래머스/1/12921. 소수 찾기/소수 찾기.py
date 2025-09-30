def solution(n):
    arr = [True for _ in range(n + 1)]
    arr[0] = False
    arr[1] = False
    
    prev = 2
    while(True):
        if arr[prev] == False:
            for i in range(prev + 1, len(arr)):
                if arr[i] == True:
                    prev = i
                    break
                    
        if prev ** 2 > n:
            break
            
        for i in range(prev * 2, len(arr), prev):
            arr[i] = False
            
        prev += 1
        
    s = set()
    for i in range(len(arr)):
        if arr[i] == True:
            s.add(i)
            
    return len(s)
            
        
    
        
    
    
