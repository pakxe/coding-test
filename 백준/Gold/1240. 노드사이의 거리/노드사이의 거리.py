'''
양방향 그래프 최단거리
음수 거리는 없으므로 다익스트라를 사용한다.
'''

import heapq

n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(n - 1):
    a, b, c = map(int, input().split())

    graph[a].append((b, c))
    graph[b].append((a, c))


def dijk(start, end):
    dist = [float('inf')] * (n + 1)
    visited = [False] * (n + 1)

    dist[start] = 0
    
    q = []
    heapq.heappush(q, (0, start))

    while len(q) > 0:
        (curcost, node) = heapq.heappop(q)
        visited[node] = True
        
        for v in graph[node]:
            nextNode, cost = v
            
            if visited[nextNode]:
                continue
                
            if dist[nextNode] > dist[node] + cost:
                dist[nextNode] = dist[node] + cost
                
                heapq.heappush(q, (dist[node] + cost, nextNode))

    return dist[end]
        
    
for _ in range(m):
    start, end = map(int, input().split())
    rst = dijk(start, end)
    print(rst)
    
