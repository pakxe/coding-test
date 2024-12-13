'''
왼쪽, 오른쪽, 직진 각 가중치를 1, 1, 0으로 하여 다익스트라를 돌린다. 

현재 빛의 방향을 저장한다. 
0, 1, 2, 3 -> 위 오른 아래 왼

0이고 왼쪽이면 0 + 4 - 1 % 4
0이고 오른쪽이면 0 + 1 % 4
0이고 직진이면 그대로 0DXDY더하기


'''
import heapq

col, row = map(int, input().split())

m = []

DX = [0, 1, 0, -1]
DY = [-1, 0, 1, 0]

for _ in range(row):
    line = input()
    m.append([char for char in line])
    
targets = []
for y in range(row):
    for x in range(col):
        if m[y][x] == 'C':
            targets.append((y, x))
            
dist = [([float('inf')] * (col + 1)) for _ in range(row + 1)]
visited = [[False] * (col + 1) for _ in range(row + 1)]

def dijkstra():
    sy, sx = targets[0]
    q = []
    for i in range(len(DX)):
        ny, nx = DY[i] + sy, DX[i] + sx
        if ny < 0 or nx < 0 or ny >= row or nx >= col or m[ny][nx] == '*':
                continue
        heapq.heappush(q, (0, (ny, nx), i))
        dist[ny][nx] = 0

        
    dist[sy][sx] = 0
    # print(q)
    
    while len(q) > 0:
        curCount, curLocation, dir = heapq.heappop(q)
        cy, cx = curLocation

        visited[cy][cx] = True
        
        for i in range(-1, 2):
            nd = (dir + len(DX) + i) % 4
            ny, nx = DY[nd] + cy, DX[nd] + cx
            
            if ny < 0 or nx < 0 or ny >= row or nx >= col or m[ny][nx] == '*':
                continue
                
            nextCount = 0 if i == 0 else 1
            newCount = curCount + nextCount


            if nextCount == 0:
                y, x = ny, nx
                while True:
                    if y < 0 or x < 0 or y >= row or x >= col or m[y][x] == '*':
                        break
                    if visited[y][x] == True:
                        break
                    if dist[y][x] < newCount:
                        break
                        
                    dist[y][x] = newCount
                    visited[y][x] = True

                    heapq.heappush(q, (newCount, (y, x), nd))
                    
                    y, x = DY[nd] + y, DX[nd] + x
            else:
            # print(cy, cx, ny, nx, dir, nd, newCount)
                # if dist[ny][nx] > newCount and history[ny][nx][nd] == False:
                if dist[ny][nx] > newCount and visited[ny][nx] == False:
                    dist[ny][nx] = newCount
                    heapq.heappush(q, (newCount, (ny, nx), nd)) # 새로 이동하게 될 방향도 전달
                


dijkstra()
        

print(dist[targets[1][0]][targets[1][1]])  
                
    
                   
    
    
    