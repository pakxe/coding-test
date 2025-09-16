import math

def solution(s):
    if len(s) % 2 == 0:
        right_index = math.floor(len(s) / 2)
        
        return s[right_index - 1:right_index + 1]
    else:
        return s[math.floor(len(s) / 2)]