def solution(arr):
    res = []
    for i in range(len(arr)):
        n = arr[i]
        
        if i == 0:
            res.append(n)
            continue
            
        if n == arr[i - 1]:
            continue
            
        else:
            res.append(n)
            
    return res
            