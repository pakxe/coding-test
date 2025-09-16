def solution(arr):
    if len(arr) == 1:
        return [-1]
    
    min_num = float('inf')
    min_num_index = -1
    
    for i in range(len(arr)):
        n = arr[i]
        if min_num > n:
            min_num = n
            min_num_index = i
            
    if min_num_index == 0:
        return arr[1:]
    elif min_num_index == len(arr) - 1:
        return arr[:len(arr) - 1]
    else:
        left_arr = arr[:min_num_index]
        right_arr = arr[min_num_index + 1:]
        return [*left_arr, *right_arr]
            
    
    
