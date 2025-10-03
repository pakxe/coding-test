def delete_(s, skill):
    sl = list(s)
    res = []
    for i in range(len(sl)):
        try:
            index = skill.index(sl[i])
            res.append(sl[i])
        except:
            continue
    return res

def solution(skill, skill_trees):
    skill_s = set()
    for i in range(1, len(skill) + 1):
        sub_ = skill[:i]
        skill_s.add(sub_)
        
    c = 0
    for i in range(len(skill_trees)):
        clean_skill_tree = ''.join(delete_(skill_trees[i], skill))
        
        if len(clean_skill_tree) == 0:
            c += 1
            
        elif clean_skill_tree in skill_s:
            c += 1
    
    return c
            
    
    
