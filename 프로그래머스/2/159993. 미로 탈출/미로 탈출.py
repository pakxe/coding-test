'''
1. 레버 먼저 bfs로 도달하고
2. 출구를 다음 bfs로 도달하면 됨

다만 못나가는 경우는 1번이 안되거나 2번이 안될 경우
'''
from collections import deque

DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]

def bfs(sy, sx, m, ty, tx):
    q = deque()
    row = len(m)
    col = len(m[0])
    visited = [[False for _ in range(col)] for _ in range(row)]
    
    q.append((sy, sx, 0)) 
    visited[sy][sx] = True
    min_steps = float('inf')
    is_end = False
    
    while(True):
        if len(q) <= 0:
            break
            
        y, x, s = q.popleft()
        
        for i in range(len(DX)):
            ny = y + DY[i]
            nx = x + DX[i]
            
            if ny < 0 or ny >= row or nx < 0 or nx >= col or visited[ny][nx] == True:
                continue
            
            if m[ny][nx] == 'X':
                continue
            
            if ny == ty and nx == tx:
                is_end = True
                min_steps = min(s + 1, min_steps)
                continue
                
            else:
                q.append((ny, nx, s + 1))
                visited[ny][nx] = True
    
    if is_end:
        return min_steps
    else:
        return -1
            
def solution(maps):
    sy = 0
    sx = 0
    for y in range(len(maps)):
        for x in range(len(maps[0])):
            if maps[y][x] == 'S':
                sy = y
                sx = x
                break
                
    ly = 0
    lx = 0
    for y in range(len(maps)):
        for x in range(len(maps[0])):
            if maps[y][x] == 'L':
                ly = y
                lx = x
                break
                
    ey = 0
    ex = 0
    for y in range(len(maps)):
        for x in range(len(maps[0])):
            if maps[y][x] == 'E':
                ey = y
                ex = x
                break
    
    min_steps_to_l = bfs(sy, sx, maps, ly, lx)
    
    if min_steps_to_l == -1:
        return -1
    
    min_steps_to_e = bfs(ly, lx, maps, ey, ex)
    
    if min_steps_to_e == -1:
        return -1
    
    return min_steps_to_e + min_steps_to_l
