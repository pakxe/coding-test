from collections import deque

def is_pang(sy, sx, b, target):
    for y in range(sy, sy + 2):
        for x in range(sx, sx + 2):
            if b[y][x] != target:
                return False
    
    return True
    
def gravity(b, visited):
    row = len(b)
    col = len(b[0])
    for x in range(col):
        q = deque()
        for y in range(row - 1, -1, -1):
            if visited[y][x] == False:
                q.append(b[y][x])
            
            b[y][x] = False
                
        for y in range(row - 1, -1, -1):
            if len(q) <= 0:
                break
            
            cur = q.popleft()
            b[y][x] = cur
    
def solution(m, n, board):
    row = m
    col = n
    
    b = [None for _ in range(row)]
    
    for y in range(row):
        line = list(board[y])
        b[y] = line
        
    blocks = 0
    while(True):
        c = 0
        visited = [[False for _ in range(col)] for _ in range(row)]
        
        for y in range(row - 1):
            for x in range(col - 1):
                # False는 빈 칸을 의미함
                if b[y][x] == False:
                    continue
                    
                if is_pang(y, x, b, b[y][x]):
                    c += 1
                    for i in range(y, y + 2):
                        for j in range(x, x + 2):
                            if visited[i][j] == False:
                                blocks += 1
                                    
                            visited[i][j] = True
                    
        if c == 0:
            break
            
        gravity(b, visited)
    
    return blocks
    
