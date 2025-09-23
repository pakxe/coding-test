import math

def func(n):
    if n == 1:
        return 1
    if n == 2:
        return 2
        
    else:
        c = 0
        for i in range(1, int(math.sqrt(n)) + 1):
            d = n / i
            f_d = math.floor(d)
            if d == f_d:
                if i < f_d:
                    c += 2
                else:
                    c += 1
        return c
   
def solution(number, limit, power):
    s = 0
    for i in range(1, number + 1):
        d = func(i)
        
        if d > limit:
            s += power
        else:
            s += d
    return s

