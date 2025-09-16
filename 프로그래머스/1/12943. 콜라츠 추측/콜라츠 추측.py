def solution(n):
    if n == 1:
        return 0
    
    try_count = 0
    temp = n
    while(True):
        try_count += 1
        if try_count > 500: 
            return -1
        
        # 짝수
        if temp % 2 == 0:
            temp /= 2
        else:
            temp = temp * 3 + 1
            
        if temp == 1:
            return try_count