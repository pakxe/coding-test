def is_alphabet(char):
    ascii_c = ord(char)
    
    if ascii_c >= (0 + 97) and ascii_c < (26 + 97):
        return True
    
    return False

def solution(str1, str2):
    d1 = {}
    d2 = {}
    
    for i in range(1, len(str1)):
        first = str1[i - 1].lower()
        second = str1[i].lower()
        
        if is_alphabet(first) and is_alphabet(second):
            token = f"{first}{second}"
            if token in d1:
                d1[token] = d1[token] + 1
            else:
                d1[token] = 1
                
    for i in range(1, len(str2)):
        first = str2[i - 1].lower()
        second = str2[i].lower()
        
        if is_alphabet(first) and is_alphabet(second):
            token = f"{first}{second}"
            if token in d2:
                d2[token] = d2[token] + 1
            else:
                d2[token] = 1
                
    # 교 개수
    in_ = 0
    for key in d1:
        if key in d2:
            d1_c = d1[key]
            d2_c = d2[key]
            
            in_ += min(d1_c, d2_c)
            
    # 합 개수
    out_ = 0
    for key in d1:
        if key in d2:
            d1_c = d1[key]
            d2_c = d2[key]
            
            out_ += max(d1_c, d2_c)
            d2[key] = 0        
        else:
            out_ += d1[key]
            
    for key in d2:
        out_ += d2[key]
        
    if in_ == 0 and out_ == 0:
        return 65536
    
    if in_ == 0 and out_ != 0:
        return 0
    
    return int((in_ / out_) * 65536)
    
    
