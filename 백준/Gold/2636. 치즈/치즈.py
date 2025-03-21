from collections import deque 
import sys

EMPTY = 0
CHEESE = 1
MELTING = 2

row, col = map(int, input().split())

m = []

for _ in range(row):
    line = list(map(int, input().split()))
    m.append(line)


DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]
def melt():
    q = deque([])
    q.append((0, 0))
    
    visited = [[False] * col for _ in range(row)]

    while len(q) > 0:
        y, x = q.popleft()
                    
        for i in range(len(DX)):
            ny, nx = DY[i] + y, DX[i] + x
            
            if ny >= row or nx >= col or ny < 0 or nx < 0:
                continue
            
            if visited[ny][nx]:
                continue
                
            if m[ny][nx] == CHEESE:
                m[ny][nx] = MELTING
                continue

            if m[ny][nx] == EMPTY:
                q.append((ny, nx))
                visited[ny][nx] = True

def deleteMelting():
    c = 0
    
    for y in range(row):
        for x in range(col):
            if m[y][x] == MELTING:
                m[y][x] = EMPTY
                c += 1

    return c
                
def calcCount():
    count = 0
    for y in range(row):
        for x in range(col):
            if m[y][x] == CHEESE:
                count += 1
            
    return count

count = 0
prev = calcCount()

if prev == 0:
    print(0)
    print(0)
    sys.exit(0)
        
while True:
    melt()
    dc = deleteMelting()

    cur = calcCount()
    
    if cur == 0:
        print(count + 1)
        print(prev)
        break

    prev = calcCount()
    count += 1
    
        