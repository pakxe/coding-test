import math

def solution(progresses, speeds): 
    cursor = 0
    ans = []
    days = 0
    while(True):
        if cursor >= len(progresses):
            break
        if cursor + 1 == len(progresses):
            ans.append(1)
            break
            
        cur_progress = progresses[cursor] + (speeds[cursor] * days)
        
        days += math.ceil(((100 - cur_progress) / speeds[cursor]))
        
        c = 1
        
        start = cursor + 1
        for i in range(start, len(progresses)):
            cp = progresses[i]
            if cp + (speeds[i] * days) >= 100:
                c += 1
                cursor = i
            else:
                break
                
        cursor += 1
        ans.append(c)
        
    return ans
                
                
                