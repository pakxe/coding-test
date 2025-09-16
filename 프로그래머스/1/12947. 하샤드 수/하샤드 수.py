# 자릿수 합
def num_sum(n):
    str_n = str(n)
    
    s = 0
    for char in str_n:
        s += int(char)
        
    return s

def is_hashard_num(s, x):
    if x % s == 0:
        return True
    else:
        return False

def solution(x):
    s = num_sum(x)
    
    return is_hashard_num(s, x)