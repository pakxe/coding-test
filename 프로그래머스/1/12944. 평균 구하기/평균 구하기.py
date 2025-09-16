def solution(arr):
    sum = 0
    
    for element in arr:
        sum += element
        
    return sum / len(arr)