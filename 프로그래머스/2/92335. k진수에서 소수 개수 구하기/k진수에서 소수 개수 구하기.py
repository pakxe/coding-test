def transform_n(n, origin):
    rest = origin
    ans = []
    while(True):
        if rest < n: 
            ans.append(rest)
            break
            
        d = int(rest / n)
        r = rest - (d * n)
        
        ans.append(r)
        rest = d
    
    ans.reverse()
    
    return ''.join(map(str, ans))

def solution(n, k):
    str_n = transform_n(k, n)
    
    temp = []
    c = 0
    for i in range(len(str_n)):
        cur = str_n[i]
        
        if cur == '0':
            if len(temp) == 0:
                continue
            else:
                is_prime = True
                real_n = int(''.join(temp))
                
                if real_n != 1:
                    for i in range(2, int(real_n ** 0.5) + 1):
                        if real_n % i == 0:
                            is_prime = False
                            break
                
                    if is_prime == True:
                        c += 1
                    
                temp = [] # 비우기
        else:
            temp.append(cur)
            
    if len(temp) > 0:
        is_prime = True
        real_n = int(''.join(temp))
        
        if real_n != 1:            
            for i in range(2, int(real_n ** 0.5) + 1):
                if real_n % i == 0:
                    is_prime = False
                    break
                
            if is_prime == True:
                c += 1
            
    return c
    