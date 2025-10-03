def gen_dict():
    d = {}
    for i in range(26):
        key = chr(i + 65)
        d[key] = i + 1
    
    return d

def solution(msg):
    cursor = 0
    d = gen_dict()
    dict_cursor = 27
    
    ans = []
    while(True):
        if cursor >= len(msg):
            break
            
        is_add = False
        for i in range(cursor + 1, len(msg) + 1):
            word = msg[cursor:i]
            
            if word in d:
                # 갱신
                if len(ans) <= 0:
                    ans.append(d[word])
                    is_add = True
                
                if is_add:
                    ans[-1] = d[word]
                else:
                    ans.append(d[word])
                    is_add = True
                    
                # 끝인데 일치인 경우
                if i == len(msg):
                    cursor = i
                    
            else:
                d[word] = dict_cursor
                dict_cursor += 1
                
                cursor = i - 1
                break
                
    return ans
        
    
                
