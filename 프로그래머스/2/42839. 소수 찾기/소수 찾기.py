from itertools import permutations

def gen_che():
    n = 10000000
    che = [True for _ in range(n)]
    che[0] = False
    che[1] = False
    
    for i in range(2, len(che)):
        if che[i] == False:
            continue
        
        for j in range(i * 2, len(che), i):
            che[j] = False
    
    res = []
    for i in range(len(che)):
        if che[i] == True:
            res.append(i)
    
    return set(res)

def solution(numbers):
    numbers = list(numbers)
    che = gen_che()
    
    s = set()
    for i in range(1, len(numbers) + 1):
        nl = list(permutations(numbers, i))
        for j in range(len(nl)):
            n = int(''.join(nl[j]))
            s.add(n)
            
    c = 0
    nl = list(s)
    for i in range(len(nl)):
        n = nl[i]
        
        if n in che:
            c += 1
    
    return c
            
    
    
        