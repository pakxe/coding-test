
def solution(arr1, arr2):
    m = len(arr1)
    k = len(arr1[0])
    n = len(arr2[0])
    
    res = [[0 for _ in range(n)] for _ in range(m)]
    
    for x in range(m):
        for y in range(n):
            s = 0
            for z in range(k):
                s += arr1[x][z] * arr2[z][y]
                
            res[x][y] = s
            
    return res
            
                
