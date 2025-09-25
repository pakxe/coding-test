from collections import deque

DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]
def solution(maps):
    row = len(maps)
    col = len(maps[0])
    
    visited = [[False for _ in range(col)] for _ in range(row)]
    q = deque()
    res = [[None for _ in range(col)] for _ in range(row)]
    
    visited[0][0] = True
    q.append((0, 0))
    res[0][0] = 1
    
    while(True):
        if len(q) <= 0:
            break
            
        cur_y, cur_x = q.popleft()
        
        # 목적지 
        if cur_y == (row - 1) and cur_x == (col - 1):
            break
        
        cur_v = res[cur_y][cur_x]
        for i in range(len(DX)):
            y = cur_y + DY[i] 
            x = cur_x + DX[i]
            
            if y >= 0 and y < row and x >= 0 and x < col and maps[y][x] == 1 and visited[y][x] is False and (res[y][x] is None or res[y][x] > (cur_v + 1)):
                visited[y][x] = True
                q.append((y, x))
                
                res[y][x] = cur_v + 1
        
    
    if res[row - 1][col - 1] is None:
        return - 1
    else:
        return res[row - 1][col - 1]
