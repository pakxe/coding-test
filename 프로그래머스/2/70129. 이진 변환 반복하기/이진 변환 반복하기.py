'''
1. 모든 0 제거
2. "1"이 될 때까지 한무이진변환
'''
def delete_zero(s):
    zero_count = 0
    
    for i in range(len(s)):
        char = s[i]
        
        if char == '0':
            zero_count += 1
            
    length_1 = len(s) - zero_count
    
    return [length_1, zero_count] # [res, count]
    
def is_1(s):
    if len(s) == 1 and s[0] == '1':
        return True
    
    return False

def solution(s):
    total_zeros = 0
    trans_count = 0
    
    temp = s
    while(True):
        if is_1(temp):
            return [trans_count, total_zeros]

        res = delete_zero(temp)
        length_1, zero_count = res
        
        trans_count += 1
        total_zeros += zero_count
        temp = bin(length_1)[2:]
        
