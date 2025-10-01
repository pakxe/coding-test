# n진법으로 number를 표현하는 배열에 담는다.
def transform_number(n, number):
    nl = [] # reverse해야함.
    rest = number
    while(True):
        if rest < n:
            nl.append(rest)
            break
            
        else:
            d = int(rest / n)
            r = rest - (n * d)
            rest = d
            nl.append(r)
    
    nl.reverse()

    for i in range(len(nl)):
        cur = nl[i]
        
        if cur > 9:
            char = chr((cur - 10) + 65)
            nl[i] = char
            
    return nl
        
def solution(n, t, m, p):
    nums = []
    i = 0
    while(True):
        if len(nums) > t * m:
            break
            
        trans_num = transform_number(n, i)
        nums = [*nums, *trans_num]
        i += 1
        
    ans = []
    
    cursor = p - 1
    while(True):
        if len(ans) >= t:
            break
            
        else:
            ans.append(nums[cursor])
            cursor += m
    
    return ''.join(map(str, ans))
            
    
    