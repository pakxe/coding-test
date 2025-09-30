'''
섬의 개수 세기
BFS를 해야한다. 퍼져나가야 하니까. 
1번으로부터 퍼뜨리기 + visited 공용 체크. 
for.로 
'''
from collections import deque

def solution(n, computers):
    c = 0
    visited = [False for _ in range(n)]
    
    for i in range(n):
        if visited[i] == True:
            continue
            
        q = deque()
        q.append(i)
        visited[i] = True
        while(len(q) > 0):
            cur_computer = q.popleft()
            
            relation = computers[cur_computer]
            for j in range(len(relation)):
                if relation[j] == 1:
                    if visited[j] == False:
                        q.append(j)
                        visited[j] = True
                    
        c += 1
        
    return c
                    
            
            
            
        
            
        
        
