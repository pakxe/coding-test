def has_alphabet(s):
    for char in s:
        ascii = ord(char)
        
        if ascii >= 0 + 97 and ascii <= 25 + 97:
            return True
        
        if ascii >= 0 + 65 and ascii <= 25 + 65:
            return True
        
    return False

def solution(s):
    if len(s) != 4 and len(s) != 6:
        return False
    
    if has_alphabet(s):
        return False
    
    return True
    