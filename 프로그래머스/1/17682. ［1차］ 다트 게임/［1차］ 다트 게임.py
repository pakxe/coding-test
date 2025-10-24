from collections import deque

def find_next(a, si): # -> (bool, int): (has_next, index)
    start_i = si + 1
    try:
        int(a[si + 1])
        start_i += 1
    except:
        pass
    
    for i in range(start_i, len(a)):
        c = a[i]
        
        try:
            n = int(c)    
            return (True, i)
        
        except: 
            continue
            
    return (False, len(a))

def calc_turn(dr, s, e):
    cur_turn = deque(dr[s:e])
    
    for i in range(len(cur_turn)):
        try: 
            int(cur_turn[i])
            continue
            
        except:
            score = []
            for j in range(i):
                score.append(cur_turn.popleft())
                
            score = int(''.join(score))
            bonus = cur_turn.popleft()
            
            option = cur_turn
            
            return (score, bonus, option)
                
def solution(dartResult):
    arr = []
    i = 0
    while(True):
        has_next, next_i = find_next(dartResult, i)
        score, bonus, option = calc_turn(dartResult, i, next_i)
        t = (score, bonus, {'is_minus': False, 'double_count': 0})
        
        if len(option) >= 1:
            if option[0] == '#':
                t[2]['is_minus'] = True
            elif option[0] == '*':
                t[2]['double_count'] = 1
        
        arr.append(t)
        
        if has_next:
            i = next_i
        else:
            break
            
    # double_count 계산. 
    for i in range(len(arr)):
        c = arr[i]
        
        if c[2]['double_count'] == 1:
            if i == 0:
                continue
            else:
                arr[i-1][2]['double_count'] = arr[i-1][2]['double_count'] + 1
            
    s = 0
    for i in range(len(arr)):
        c = arr[i]
        option = c[2]
        
        score = int(c[0])
        bonus = c[1]
        d_c = option['double_count']
        is_minus = option['is_minus']
        
        if bonus == 'D':
            score = score ** 2
        elif bonus == 'T':
            score = score ** 3
            
        if d_c != 0:
            score = 2 * d_c * score
        
        if is_minus: 
            score = -score
        
        s += score
        
    return s
