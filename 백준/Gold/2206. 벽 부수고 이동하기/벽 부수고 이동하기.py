'''
10

재귀 dfs로 그래프를 업데이트하고 회귀하며 전달한다.
'''

'''
visited를 복제해서 쓰는게 좋겠음. 

'''

from collections import deque
import sys
sys.setrecursionlimit(10**6)

EMPTY = 0
WALL = 1
VISITED = -1

row, col = map(int, input().split())
graph = [[] for _ in range(row)]

for i in range(row):
    line = input()

    for j in range(col):
        graph[i].append(int(line[j]))

def isGoal(y, x):
    return y == row - 1 and x == col - 1

def isOutOfRange(y, x):
    return y >= row or y < 0 or x >= col or x < 0

def printGraph(grpah):
    for y in range(row):
        print(' '.join(map(str, graph[y])))

def printVisited(g):
    for y in range(row):
        r = []
        for x in range(col):
            if g[y][x] == float('inf'):
                r.append('0')
            else:
                r.append(g[y][x])

        print(' '.join(map(str, r)))
        
minDist = float('inf')
        
DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]

def copy(g):
    a = []
    for y in range(len(g)):
        r = []
        for x in range(len(g[0])):
            r.append(g[y][x])
        a.append(r)

    return a

def bfsMove(graph):
    global minDist
    
    q = deque()
    dist = [[[float('inf')] * col for _ in range(row)] for _ in range(2)] # inf면 낫비짓
    dist[0][0][0] = 1
    dist[1][0][0] = 1
    
    q.append((0, 0, False)) # y, x, 부수기 위치

    while len(q) > 0:
        y, x, isPunch = q.popleft()

        if isGoal(y, x):
            minDist = min(minDist, dist[0][y][x], dist[1][y][x])
            continue

        for i in range(len(DX)):
            ny, nx = y + DY[i], x + DX[i]
            
            if isOutOfRange(ny, nx):
                continue

            if not isPunch and dist[0][ny][nx] != float('inf'):
                continue

            if isPunch and dist[1][ny][nx] != float('inf'):
                continue

            # 이미 펀치 했는데 또 벽만날 경우 pass
            if isPunch and graph[ny][nx] == WALL:
                continue

            if not isPunch and graph[ny][nx] == WALL:
                dist[1][ny][nx] = dist[1][y][x] + 1
                q.append((ny, nx, True))
            else:
                if isPunch:
                    dist[1][ny][nx] = dist[1][y][x] + 1
                    q.append((ny, nx, isPunch))
                else:
                    dist[0][ny][nx] = dist[0][y][x] + 1
                    dist[1][ny][nx] = dist[1][y][x] + 1
                    
                    q.append((ny, nx, isPunch))


graph[0][0] = VISITED
if row == 1 and col == 1:
    print(1)
    sys.exit(0)
    
bfsMove(graph)

print(minDist if minDist != float('inf') else -1)

    

