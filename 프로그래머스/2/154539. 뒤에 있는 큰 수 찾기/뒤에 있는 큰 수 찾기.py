def solution(numbers):
    ans = [-1 for i in range(len(numbers))]
    
    s = []
    for i in range(len(numbers)):
        num = numbers[i]
        
        if len(s) <= 0:
            s.append((num, i)) # v, index
            
        else:
            while(True):
                if len(s) <= 0:
                    s.append((num, i))
                    break
                    
                top_v, top_i = s[-1]
                
                if num > top_v:
                    s.pop()
                    ans[top_i] = num
                    
                else:
                    s.append((num, i))
                    break
                    
    return ans
