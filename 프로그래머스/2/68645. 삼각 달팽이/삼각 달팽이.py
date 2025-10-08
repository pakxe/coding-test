import math

arr = None
def fill_triangle(start_n, width, level):
    global arr
    if width <= 0: 
        return
    
    # 1일 경우 처리 필요
    if width == 1:
        x = level
        y = level * 2
        arr[y][x] = start_n
        return
    
    # 왼쪽
    x = level
    for y in range(level * 2, level * 2 + width):
        arr[y][x] = start_n
        start_n += 1
    
    # 아래쪽
    y = len(arr) - 1 - level
    for x in range(level, level + width):
        if x == level:
            continue
            
        arr[y][x] = start_n
        start_n += 1
    
    # 오른쪽
    x = 0 - 1 - level
    start_row = len(arr) - 1 - level
    for y in range(level, level + width - 1):
        y_ = len(arr) - 1 - y
        
        if y_ == start_row:
            continue
        
        arr[y_][x] = start_n
        start_n += 1

    next_width = width - 3
    
    if next_width <= 0:
        return
    else:
        fill_triangle(start_n, next_width, level + 1)
    
def solution(n):
    global arr
    # 삼각 배열 만들기
    arr = [None for _ in range(n)]
    for i in range(1, n + 1):
        arr[i - 1] = [0 for _ in range(i)]
        
    fill_triangle(1, n, 0)
    
    res = []
    for y in range(len(arr)):
        res = [*res, *arr[y]]
        
    return res
        
    
    
        
    