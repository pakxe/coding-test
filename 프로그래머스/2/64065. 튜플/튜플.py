def solution(s):
    cursor = 0
    d = {}
    while(True):
        if cursor >= len(s):
            break
            
        cur = s[cursor]
        
        try:
            num = int(cur)
            
            nums = [num]
            i = 0
            for i in range(cursor + 1, len(s)):
                next_char = s[i]
                try:
                    next_num = int(next_char)
                    nums.append(next_num)
                except:
                    cursor = i + 1
                    break
                    
            real_num = int(''.join(map(str, nums)))
            
            if real_num in d:
                d[real_num] = d[real_num] + 1
            else:
                d[real_num] = 1
                    
        except:
            cursor += 1
            
    res = [None for _ in range(len(d))]
    
    for key in d:
        index = len(res) - d[key]
        res[index] = int(key)
    
    return res
