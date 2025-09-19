numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

def calc_number(c):
    for i in range(len(numbers)):
        name = numbers[i]
        part = c[:len(name)]
        
        if part == name:
            return [str(i), len(name)]
    
def solution(s):
    try:
        ans = int(s)
    
        return ans
    
    except:
        i = 0
        
        ans = []
        
        while(True):
            if i >= len(s):
                return int(''.join(ans))
                
            char = s[i]
            
            try:
                a = int(char)
                
                ans.append(char)
                i += 1
                
            except:
                sn, new_i = calc_number(s[i:])
                
                ans.append(sn)
                i += new_i
                
                
    
