def solution(s):
    r = ''
    
    lower = [0 for _ in range(26)]
    upper = [0 for _ in range(26)]
    for char in s:
        ascii_char = ord(char)
        
        # upper
        if ascii_char < 97:
            ascii_char -= 65
            upper[ascii_char] += 1
            
        # lower
        else:
            ascii_char -= 97
            lower[ascii_char] += 1
            
    # reverse_lower
    for i in range(26 - 1, -1, -1):
        count = lower[i]
        char = chr(i + 97)
        
        r += char * count
        
    # reverse_upper
    for i in range(26 - 1, -1, -1):
        count = upper[i]
        char = chr(i + 65)
        
        r += char * count
        
    return r
    
            
            
        
        
