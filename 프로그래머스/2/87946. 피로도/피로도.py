'''
DFS였음. 
순열로 하면 됨. 
'''

import itertools

def solution(k, dungeons):
    lst = list(itertools.permutations(dungeons, len(dungeons)))
    
    max_c = float('-inf')
    for i in range(len(lst)):
        c = 0
        rest = k
        cur_comb = lst[i]
        for j in range(len(cur_comb)):
            min_cost, cost = cur_comb[j]
            
            if rest >= min_cost:
                rest -= cost
                c += 1
                
        max_c = max(max_c, c)
        
    return max_c
                
        
            
  