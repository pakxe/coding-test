'''
벽부수기..
벽부수는걸 가중치로 보나? 그럴거같다. 

인접행렬로 그래프를 만들고,
'''
import sys
import heapq

input = sys.stdin.readline

DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]

def dijkstra(size):
    visited = [([False] * size) for _ in range(size)]
    dist = [([float('inf')] * size) for _ in range(size)]
    
    graph = []
    
    for _ in range(size):
        graph.append(list(map(int, input().split())))

    q = []
    heapq.heappush(q, (graph[0][0], (0, 0))) # 코스트, 좌표
    dist[0][0] = graph[0][0]
    
    while len(q) > 0:
        curCost, curLocation = heapq.heappop(q)
        cy, cx = curLocation
        
        visited[cy][cx] = True
        
        for i in range(len(DX)):
            ny, nx = DY[i] + cy, DX[i] + cx
            
            if ny < 0 or nx < 0 or ny >= size or nx >= size: # 맵 탈출함
                continue
            if visited[ny][nx]:
                continue
            
            newCost = curCost + graph[ny][nx]
            if dist[ny][nx] > newCost:
                dist[ny][nx] = newCost
                heapq.heappush(q, (newCost, (ny, nx)))

    return dist[size-1][size-1]

count = 1

while True:
    command = int(input())

    if command == 0:
        break
    
    print(f'Problem {count}: {dijkstra(command)}')
    count += 1
        
        
        
        