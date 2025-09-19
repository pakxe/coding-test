import math

def solution(n, left, right):
    start_turn = math.floor(left / n)
    end_turn = math.floor(right / n)
    
    s = []
    for i in range(start_turn, end_turn + 1):
        for j in range(n):
            if j <= i:
                s.append(i + 1)
            else:
                s.append(j + 1)
    
    res = s[left % n:(end_turn - start_turn) * n + (right % n) + 1]
    
    return res