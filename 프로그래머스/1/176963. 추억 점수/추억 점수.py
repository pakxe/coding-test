'''
dict로 namekey, yearning value
photo 2차원 순회하면서 점수 썸. 안찾아지면 pass
'''

def solution(name, yearning, photo):
    d = {}
    for i in range(len(name)):
        n = name[i]
        y = yearning[i]
        d[n] = y
        
    res = []
    for i in range(len(photo)):
        p = photo[i]
        s = 0
        for j in range(len(p)):
            person = p[j]
            
            if person in d:
                s += d[person]
        
        res.append(s)
            
    return res