'''
str으로 바꾸고,
reverse for로 순회
하나씩 배열에 int로 append
return
'''

def solution(n):
    str_n = str(n)
    
    arr = []
    for i in range(len(str_n) - 1, -1, -1):
        arr.append(int(str_n[i]))
        
    return arr
        
        