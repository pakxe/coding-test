def solution(phone_book):
    d = {}
    s = set()
    for i in range(len(phone_book)):
        num_str = phone_book[i]
        s.add(len(num_str))
        d[num_str] = i
    
    for i in range(len(phone_book)):
        num_str = phone_book[i]
        
        for length in s:
            if length > len(num_str):
                continue
            
            sliced_num = num_str[:length]
            
            if sliced_num in d:
                if d[sliced_num] != i:
                    return False
            
    return True
            
            
        
