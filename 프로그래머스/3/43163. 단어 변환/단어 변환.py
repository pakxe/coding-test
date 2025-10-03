'''
최단거리를 찾는 것과 같다. 
어느 단어를 선택하는 것이 최단일지 모른다 == 모든걸 해봐야 한다.
그런데 라인마다의 visited는 공유되어선 안된다. 다 독립적이다.
DFS로 하고 min을 갱신
스택방식이 아니라 재귀를 써야할 것 같음.
'''
def is_diff_1(a, b):
    is_diff = False
    for i in range(len(a)):
        if a[i] != b[i]:
            if is_diff == True:
                return False
            else:
                is_diff = True
                
    return is_diff

c = float('inf')
def recurse(visited, target, cur, step):
    global c
    
    # 종료 조건 1 - 모두 방문했을 경우
    is_all_visited = True
    for key in visited:
        if visited[key] == False:
            is_all_visited = False
            break
            
    if is_all_visited == True:
        return
    
    # 종료 조건 2 - 아직 False가 있는데 모두 거리가 1 초과인 경우
    need_stop = True
    for key in visited:
        if visited[key] == False:
            if is_diff_1(key, cur) == True:
                need_stop = False
                break
                
    if need_stop == True:
        return
    
    for key in visited:
        if visited[key] == False:
            if is_diff_1(key, cur):
                if key == target:
                    c = min(c, step + 1)
                    continue
                    
                visited[key] = True
                recurse(visited, target, key, step + 1)
                visited[key] = False
    
def solution(begin, target, words):
    global c
    visited = {}
    for i in range(len(words)):
        visited[words[i]] = False
    
    # 사전에 없으면 바로 return
    if target not in visited:
        return 0
    
    recurse(visited, target, begin, 0)
        
    return c
    