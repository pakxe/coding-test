'''
`(` || `)`
현재 칸 == 이동칸 -> A시간
현재 칸 != 이동칸 -> B시간
'''

'''
인접 행렬 그래프 채우기
1 -> 2 ~ n
2 -> 3 ~ n
3 -> 4 ~ n
... 
n - 1 -> n

다익 시간 복잡도를 계산 못하겠어서 예측이 안된다. 하지만 n이 크지 않으므로 괜찮지 않을까..
'''
import heapq

DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]

n, a, b = map(int, input().split())
graph = [list(map(str, input())) for _ in range(n)]


def dijkstra(sy, sx): # (sy, nx)
    q = []
    dist = [([float('inf')] * n) for _ in range(n)]
    
    dist[sy][sx] = 0
    heapq.heappush(q , (0, (sy, sx)))

    while len(q) > 0:
        curCost, curLocation = heapq.heappop(q)
        cy, cx = curLocation
        curNode = graph[cy][cx]

        for i in range(len(DX)):
            ny, nx = cy + DY[i], cx + DX[i]

            if ny < 0 or nx < 0 or ny >= n or nx >= n:
                continue
            
            nextNode = graph[ny][nx]
        
            nextCost = (a if nextNode == curNode else b) + curCost

            if nextCost < dist[ny][nx]:
                dist[ny][nx] = nextCost
                heapq.heappush(q, (nextCost, (ny, nx)))

    flatDist = []
    for y in range(n):
        for x in range(n):
            flatDist.append(dist[y][x])

    return flatDist

maxTime = float('-inf')

for y in range(n):
    for x in range(n):
        curMaxTime = max(dijkstra(y, x))
        maxTime = max(maxTime, curMaxTime)

print(maxTime)