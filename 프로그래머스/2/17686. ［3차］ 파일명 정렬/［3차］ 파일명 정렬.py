def is_number(c):
    try:
        _ = int(c)
        
        return True

    except:
        return False

def solution(files):
    arr = []
    for i in range(len(files)):
        name = files[i]
        
        head = []
        number = []
        is_head_turn = True
        for j in range(len(name)):
            c = name[j]
            
            # head
            if is_head_turn:
                if not is_number(c):
                    head.append(c)
                else:
                    number.append(c)
                    is_head_turn = False
                    continue
            
            # number
            else:
                if is_number(c):
                    number.append(c)
                else:
                    if len(number) > 0:
                        break
                    else:
                        continue
        
        head = ''.join(head).upper()
        number = int(''.join(number))
        
        arr.append((head, number, i))
                        
    sorted_arr = sorted(arr)
    
    res = []
    for i in range(len(sorted_arr)):
        _, __, i = sorted_arr[i]
        res.append(files[i])
    
    return res
        
                    