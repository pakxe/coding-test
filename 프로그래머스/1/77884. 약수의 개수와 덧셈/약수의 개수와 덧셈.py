import math

def calc_count(n):
    if n == 0:
        return 0
    
    if n == 1:
        return 1
    
    root = math.sqrt(n)
    floor_root = math.floor(root)
    
    ans = []
    # single
    if floor_root == root:
        ans.append(floor_root)
        
        for i in range(1, floor_root):
            if len(ans) > 0 and ans[len(ans) - 1] == i:
                break
                
            b = n / i
            floor_b = math.floor(b)
            if floor_b == b:
                ans.append(i)
                ans.append(b)
            
        return len(ans)
    
    # double
    for i in range(1, math.ceil(n/2)):
        if len(ans) > 0 and ans[len(ans) - 1] == i:
            break
            
        b = n / i
        floor_b = math.floor(b)
        if floor_b == b:
            ans.append(i)
            ans.append(b)
    
    return len(ans)


def solution(left, right):
    s = 0
    for i in range(left, right + 1):
        count = calc_count(i)
        
        bin_count = bin(count)
        last = bin_count[len(bin_count) - 1]
        
        # even
        if last == '0':
            s += i
        else:
            s -= i
            
    return s
            
            
    