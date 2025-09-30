prouns = ['aya', 'ye', 'woo', 'ma']

def is_in_and_start(word):
    for i in range(len(prouns)):
        p = prouns[i]
        
        try:
            index = word.index(p)
            if index == 0:
                return (len(p), i)
                            
        except:
            continue
            
    return (None, None)

def solution(babbling):
    c = 0
    for i in range(len(babbling)):
        word = babbling[i]
        
        temp = word
        prev = -1
        while(True):
            
            if len(temp) <= 0:
                c += 1
                break
                
            length, p_i = is_in_and_start(temp)
            if length is None:
                break
            
            else:
                if p_i == prev:
                    break
                else:
                    prev = p_i
                    temp = temp[length:]
                
    return c
    
