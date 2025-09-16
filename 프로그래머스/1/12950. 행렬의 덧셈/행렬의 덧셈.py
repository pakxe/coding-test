def solution(arr1, arr2):
    col = len(arr1[0])
    row = len(arr1)
    
    sum_res = [[0 for _ in range(col)] for _ in range(row)]
    
    for y in range(row):
        for x in range(col):
            sum_res[y][x] = arr1[y][x] + arr2[y][x]
            
    return sum_res