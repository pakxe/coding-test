def solution(n):
    s = ''
    for i in range(n):
        bin_i = bin(i)
        
        if bin_i[-1:][0] == '0':
            s += '수'
        else:
            s += '박'
            
    return s