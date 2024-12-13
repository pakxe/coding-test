'''
벽부수기..
벽부수는걸 가중치로 보나? 그럴거같다. 

인접행렬로 그래프를 만들고,
'''
import sys
import heapq

input = sys.stdin.readline

col, row = map(int, input().split())

graph = []
for _ in range(row):
    line = [int(char) for char in input().strip()]
    
    graph.append(line)

visited = [([False] * col) for _ in range(row)]

DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]

dist = [([float('inf')] * col) for _ in range(row)]

def dijkstra():
    q = []
    heapq.heappush(q, (0, (0, 0))) # 코스트, 좌표
    dist[0][0] = 0
    
    while len(q) > 0:
        curCost, curLocation = heapq.heappop(q)
        cy, cx = curLocation
        
        visited[cy][cx] = True
        
        for i in range(len(DX)):
            ny, nx = DY[i] + cy, DX[i] + cx
            
            if ny < 0 or nx < 0 or ny >= row or nx >= col: # 맵 탈출함
                continue
            if visited[ny][nx]:
                continue
            
            newCost = curCost + graph[ny][nx]
            if dist[ny][nx] > newCost:
                dist[ny][nx] = newCost
                heapq.heappush(q, (newCost, (ny, nx)))
            
dijkstra()
print(dist[row-1][col-1])
        
        