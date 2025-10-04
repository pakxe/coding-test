import math

def solution(n, s):
    if s < n:
        return [-1]
    
    d = s/n
    floor_d = math.floor(d)
    
    # 나눠 떨어지는 경우
    if d == floor_d:
        return [floor_d for _ in range(n)]
    
    # 안나눠지는 경우
    res = [floor_d for _ in range(n)]
    
    rest = s - (floor_d * n)
    for i in range(rest):
        res[i] = res[i] + 1
        
    res.reverse()
    return res
    
