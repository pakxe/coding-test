'''
거리를 구하는 것과 동일하다.
이전 문제는 bfs로 구해봤으니 다익으로 구해보자.. 
'''
import heapq

n = int(input())
to, frm = map(int, input().split())

graph = [[] for _ in range(n + 1)]

linkCount = int(input())
for _ in range(linkCount):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)


# 매번 최선인 최단거리 저장할 배열
dist = [float('inf')] * (n + 1)
def dijk():
    h = []
    heapq.heappush(h, (0, to)) 
    dist[to] = 0
    while len(h) > 0:

        # 힙에서 가장 최소 값을 뺀다
        cost, node = heapq.heappop(h)

        # 이미 dist가 있으면서 그 dist값이 현재 뽑힌 값보다 더 빠른 값일경우 갱신하지 않고 pass
        if dist[node] < cost:
            print('여기')

            continue;
            
        # 인접 노드 방문하여 heappush
        newCost = dist[node] + 1
        for nextNode in graph[node]:
            if newCost < dist[nextNode]:
                dist[nextNode] = newCost
                heapq.heappush(h, (newCost, nextNode))
                
dijk()

if dist[frm] == float('inf'):
    print(-1)
else:
    print(dist[frm])
        
    