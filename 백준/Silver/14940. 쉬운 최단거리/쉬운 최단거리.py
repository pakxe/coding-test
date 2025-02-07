'''
BFS, 다익 둘 다 가능하다. 
시간복잡도는 모르겠다.  
'''

'''
from collections import deque
q = deque(배열)
'''

START = 2
FLOOR = 1
WALL = 0

from collections import deque

col, row = map(int, input().split())
mp = []
for _ in range(col):
    line = list(map(int, input().split()))
    mp.append(line)
    
# 시작 지점 찾기
start = None
isBreak = False;
for y in range(col):
    for x in range(row):
        if mp[y][x] == START:
            start = (y, x)
            isBreak = True
            break
    if isBreak:
        break;
        
DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]

visited = [([False] * row) for _ in range(col)] # 숫자는 방문 False는 미방문
visited[start[0]][start[1]] = 0

def bfs():
    q = deque()
    q.append((start[0], start[1], 0)) # y, x, 거리
        
    while len(q) > 0:
        y, x, c = q.popleft()
            
        for i in range(len(DX)):
            ny, nx = y + DY[i], x + DX[i]
            
            # 범위 이탈
            if ny < 0 or ny >= col or nx < 0 or nx >= row:
                continue;
            
            # 진입 불가
            if mp[ny][nx] != FLOOR:
                continue

            # 방문 기록 존재하며 그 기록이 현재보다 빠를 경우
            if visited[ny][nx] != False and c + 1 >= visited[ny][nx]:
                continue
                
            newCost = c + 1
            q.append((ny, nx, newCost))
            visited[ny][nx] = newCost

bfs();


for y in range(col):
    for x in range(row):
        if mp[y][x] == WALL: 
            visited[y][x] = 0
            continue;
        if mp[y][x] == FLOOR and visited[y][x] == False:
            visited[y][x] = -1
            


for y in range(col):
    print(' '.join(map(str, visited[y])))
    
    
    
    
    
    
        
