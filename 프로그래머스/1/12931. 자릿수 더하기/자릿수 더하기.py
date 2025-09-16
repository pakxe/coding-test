'''
문자열로 바꾸고
한 자리씩 for문 돌면서 누적하고
그걸 return
'''

def solution(n):
    str_n = str(n)
    
    sum = 0
    for i in range(len(str_n)):
        sum += int(str_n[i])
        
    return sum