'''
공차?를 주고 그걸 n개 순회하면서 더하는거
'''

def solution(x, n):
    arr = []
    temp = 0
    for i in range(n):
        temp = temp + x
        arr.append(temp)
        
    return arr
        
    