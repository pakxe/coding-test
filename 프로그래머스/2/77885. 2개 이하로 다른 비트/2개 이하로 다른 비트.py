from collections import deque

def solution(numbers):
    res = []
    for i in range(len(numbers)):
        n = numbers[i]
        
        if n == 0:
            res.append(1)
            continue
        
        bin_n = bin(n)[2:]
        
        # 짝수
        if bin_n[-1] == '0':
            res_l = list(bin_n)            
            res_l[-1] = '1'
            res.append(int(''.join(res_l), 2))
            
        # 홀수
        else:
            res_l = ['0', *list(bin_n)]
            
            diff_c = 0
            # 처음 만나는 0을 1로 바꾸기
            for j in range(len(res_l) -1, -1, -1):
                if res_l[j] == '0':
                    res_l[j] = '1'
                    diff_c += 1
                    # 그 뒤의 1들을 다 0으로 바꾸기
                    for k in range(j + 1, len(res_l)):
                        res_l[k] = '0'
                        diff_c += 1
                        
                    break
                
            if diff_c > 2:
                change_c = diff_c - 2
                for j in range(change_c):
                    index = len(res_l) - 1 - j
                    res_l[index] = '1'
                
                res.append(int(''.join(res_l), 2))
            else:
                res.append(int(''.join(res_l), 2))
    
    return res
            
