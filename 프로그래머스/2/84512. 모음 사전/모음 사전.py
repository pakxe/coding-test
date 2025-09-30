from itertools import product

def solution(word):
    cl = ['', 'A', 'E', 'I', 'O', 'U']
    l = list(product(cl, repeat=5))
    
    s = set()
    for w in l:
        s.add(''.join(w))
        
    sorted_l = sorted(list(s))
    
    for i in range(len(sorted_l)):
        cur = sorted_l[i]
        
        if cur == word:
            return i
    
        
    
    
    
