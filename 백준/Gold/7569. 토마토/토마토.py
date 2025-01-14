

'''
1 매추어
0 아매추어
-1 없음 

값이 이미 모두 익었다면 0

며칠 지나면 익는다면 며칠 
모두 익지 못한다면 -1

1. 입력
2. 이미 익었는지 확인
3. 익힌다
4. 모두 익었는지 확인한다. 
5. 익었다면 며칠, 안익은거 있다면 -1
'''
from collections import deque
import sys

row, col, height = map(int, input().split())

graph = [[None] * col for _ in range(height)]
visited = [[[False] * row for _ in range(col)] for _ in range(height)]

for i in range(col * height):
    line = list(map(int, input().split()))
    
    z = i // col
    y = i % col

    graph[z][y] = line
    
DX = [0, 1, 0, -1, 0, 0]
DY = [1, 0, -1, 0, 0, 0]
DZ = [0, 0, 0, 0, 1, -1]

(MATURE, AMATURE, EMPTY) = (1, 0, -1)

isAllMature = True
for z in range(height):
    for y in range(col):
        for x in range(row):
            if graph[z][y][x] == AMATURE:
                isAllMature = False
                break;

        if not isAllMature:
           break
    if not isAllMature:
        break;
           
if isAllMature:
    print(0)
    sys.exit(0)
           
temp = []
for z in range(height):
    for y in range(col):
        for x in range(row):
            if graph[z][y][x] == MATURE:
                temp.append((z, y, x))
                visited[z][y][x] = 0
           
def go():
    maxDay = 0
    q = deque(temp) # 시작 토마토  
    while len(q) > 0:
        (z, y, x) = q.popleft()

        for i in range(len(DX)):
            (nz, ny, nx) = (z + DZ[i], y + DY[i], x + DX[i])

            if nz >= height or nz < 0 or ny >= col or ny < 0 or nx >= row or nx < 0 or graph[nz][ny][nx] != AMATURE:
                continue

            if visited[nz][ny][nx] == False or visited[nz][ny][nx] > visited[z][y][x] + 1:
                    
                visited[nz][ny][nx] = visited[z][y][x] + 1
                maxDay = max(visited[nz][ny][nx], maxDay)
                graph[nz][ny][nx] = MATURE
                q.append((nz, ny, nx))


            
    return maxDay

day = go()

for z in range(height):
    for y in range(col):
        for x in range(row):
            if graph[z][y][x] == AMATURE:
                print(-1);
                sys.exit(0)

print(day)
            
        