import math

def solution(n,a,b):
    round_ = 1
    
    while(True):
        if ((max(a, b) - min(a, b)) == 1) and min(a, b) % 2 == 1:
            return round_

        a = math.ceil(a / 2)
        b = math.ceil(b / 2)
        round_ += 1