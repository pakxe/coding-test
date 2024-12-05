'''
일단 인접 행렬로 구해보고 인접 리스트로 계산해본다.
'''

V = 1001

start, end, busCount = map(int, input().split())

visited = [False] * V
dist = [(float('inf'), 0)] * V
graph = [[(float('inf'), 0)] * V for _ in range(V)]

for i in range (1, V):
    graph[i][i] = (0, 0)

for busNum in range(busCount):
    fee, stopCount = map(int, input().split())
    stops = list(map(int, input().split()))

    for i in range(stopCount):
        for j in range(i + 1, stopCount):
            graph[stops[i]][stops[j]] = min((fee, j - i), graph[stops[i]][stops[j]]) 

dist[start] = (0, 0)

for _ in range(V):
    # 최소 뽑기
    minIndex = -1

    for i in range(1, V):
        if visited[i]:
            continue

        if minIndex == -1 or dist[i] < dist[minIndex]:
            minIndex = i

    visited[minIndex] = True
    fee, length = dist[minIndex]

    # 그 최소의 인접 방문
    for i in range(1, V):
        nextFee, nextLength = graph[minIndex][i] # 인접 노드

        # 인접을 dist에 업데이트 한다. 
        dist[i] = min(dist[i], (fee + nextFee, length + nextLength))

if dist[end] == (float('inf'), 0):
    print(-1, -1)
else: 
    print(' '.join(map(str, dist[end])))



