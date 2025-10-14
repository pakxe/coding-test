def solution(keymap, targets):
    s = set()
    for i in range(len(keymap)):
        for j in range(len(keymap[i])):
            c = keymap[i][j]
            s.add(c)
            
    keym = {}
    for i in range(len(keymap)):
        for j in range(len(keymap[i])):
            c = keymap[i][j]
            
            if c in keym:
                keym[c] = min(keym[c], j + 1)
            else:
                keym[c] = j + 1

    res = []
    for i in range(len(targets)):
        is_able = True
        count = 0
        for j in range(len(targets[i])):
            c = targets[i][j]
            
            if c not in s:
                res.append(-1)
                break
            
            count += keym[c]
            
        else:
            res.append(count)
            
    return res
   