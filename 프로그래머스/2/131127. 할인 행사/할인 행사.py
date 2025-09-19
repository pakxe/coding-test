def solution(want, number, discount):
    N = 10
    ans = ''
    for i in range(len(number)):
        count = number[i]
        ans += hex(count)[2:]
        
    d = {}
    for i in range(len(want)):
        key = want[i]
        d[key] = 0
    
    res = 0
    for i in range(len(discount) - N + 1):
        if i == 0:
            for j in range(i, i + N):
                item = discount[j]
            
                if item in d:
                    d[item] += 1
                
            temp = []
            for key in d:
                count = d[key]
                temp.append(hex(count)[2:])
                
            if ''.join(temp) == ans:
                res += 1
        
        else:
            deleted_item = discount[i - 1]
            new_item = discount[i + N - 1]
            
            if deleted_item in d:
                d[deleted_item] -= 1
                
            if new_item in d:
                d[new_item] += 1
                
            temp = []
            for key in d:
                count = d[key]
                temp.append(hex(count)[2:])
                
            if ''.join(temp) == ans:
                res += 1
                
    return res

