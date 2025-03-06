'''
중력의 영향을 받는다.
뿌요는 bfs로 없애진다. 
없애지고 나서 다른 뿌요가 있다면 또 중력으로 떨어진다. 
그럼 또 터진다.
콤보 + 1
한 턴에 여러 그룹이 터져도 콤보는 + 1
'''

'''
뿌요 터뜨릴거면 빈거로 바꾸기. 

중력으로 내리기 함수
모든 칸에 대해 bfs를 돌리기
방문 처리는 그 턴에 대해서 bfs와 공용사용한다. 

'''
from collections import deque

ROW = 12
COL = 6

EMPTY = '.'

THRESHOLD = 4

m = [[] for _ in range(ROW)]

for i in range(ROW):
    row = input()
    
    for j in range(len(row)):
        m[i].append(row[j])
              
def getUp(col, row):
    for y in range(row - 1, -1, -1):
        cur = m[y][col]
        
        if m[y][col] != EMPTY:
            # 내려갈거니까 빼기
            m[y][col] = EMPTY

            return cur
        
    return None
        
def gravity():
    for x in range(COL):
        for y in range(ROW - 1, -1, -1):
            
            # 다음 윗 칸으로 이동
            if m[y][x] != EMPTY: 
                continue

            up = getUp(x, y)
            
            # 지금 비어있는데, 위에 뭐가 없다면 다음 컬럼으로 이동
            if up == None:
                break
                
            m[y][x] = up
    
DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]
def bfs(sy, sx, visited):
    target = m[sy][sx]
    
    q = deque()
    q.append((sy, sx))
    sames = [(sy, sx)]
    
    visited[sy][sx] = True
    
    while len(q) > 0:
        y, x = q.popleft()
        
        for i in range(len(DX)):
            ny, nx = DY[i] + y, DX[i] + x
            
            if ny >= ROW or ny < 0 or nx >= COL or nx < 0:
                continue
                
            if visited[ny][nx]:
                continue
                
            if target != m[ny][nx]:
                continue
                
            q.append((ny, nx))
            visited[ny][nx] = True
            sames.append((ny, nx))
            
    if len(sames) < THRESHOLD:
        return False
    
    for same in sames:
        y, x = same
        
        m[y][x] = EMPTY
        
    return True
                

# def p():
#     for y in range(ROW):
#         print(''.join(m[y]))

#     print()
    
combo = 0
while True:
    visited = [[False] * COL for _ in range(ROW)]
    
    isCombo = False
    
    for y in range(ROW):
        for x in range(COL):
            if m[y][x] == EMPTY:
                continue
                
            if visited[y][x]:
                continue

            res = bfs(y, x, visited)

            if res:
                isCombo = True
            
    if not isCombo:
        break
        
    combo += 1
    gravity()
    
print(combo)
            
                
                
    