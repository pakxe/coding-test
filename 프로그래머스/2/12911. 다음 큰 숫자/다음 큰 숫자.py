def get_count_1(s):
    count = 0
    
    for i in range(len(s)):
        char = s[i]
        
        if char == '1':
            count += 1
    
    return count

def solution(n):
    i = n
    answer = get_count_1(bin(n)[2:])
    
    while(True):
        i += 1
        bin_i = bin(i)[2:]
        count_1 = get_count_1(bin_i)
        
        if count_1 == answer:
            return i
        
