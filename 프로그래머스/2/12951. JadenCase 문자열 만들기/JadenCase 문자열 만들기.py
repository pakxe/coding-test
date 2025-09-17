def is_upper(c):
    ascii_ = ord(c)

    if ascii_ >= 0 + 65 and ascii_ <= 25 + 65:
        return True
    
    return False

def is_lower(c):
    ascii_ = ord(c)

    if ascii_ >= 0 + 97 and ascii_ <= 25 + 97:
        return True
    
    return False

def get_upper(c):
    return chr(ord(c) - 32)

def get_lower(c):
    return chr(ord(c) + 32)
    
def solution(s):
    sl = list(s)
    
    for i in range(len(sl)):
        char = sl[i]
        
        if char == ' ':
            continue
            
        else:
            # 첫 단어 또는 단어 시작
            if i == 0 or (char != ' ' and sl[i - 1] == ' '):
                if is_lower(char):
                    sl[i] = get_upper(char)
                
            else:
                if is_upper(char):
                    sl[i] = get_lower(char)
                    
    return ''.join(sl)
                
                
    
    
    