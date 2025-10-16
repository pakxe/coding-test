def solution(participant, completion):
    d = {}
    
    for p in completion:
        if p in d:
            new_c = d[p] + 1
            d[p] = new_c
        else:
            d[p] = 1
        
    for p in participant:
        if p in d:
            new_c = d[p] - 1
            if new_c <= 0:
                del d[p]
        
            else:
                d[p] = new_c
        else:
            return p
        