def solution(a, b):
    r = 0
    for i in range(len(a)):
        ca = a[i]
        cb = b[i]
        
        r += ca * cb
        
    return r