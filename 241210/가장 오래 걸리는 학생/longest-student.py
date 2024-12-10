'''
방향성이 없다. 

그냥 학교의 다익을 구하고 max를 구하면 되겠다. 
'''
import heapq

v, e = map(int, input().split())

graph = [[] for _ in range(v + 1)]

for _ in range(e):
    a, b, cost = map(int, input().split())

    graph[a].append((b, cost))
    graph[b].append((a, cost))

def dijkstra():
    q = []
    dist = [float('inf')] * (v + 1)

    heapq.heappush(q, (0, v))
    dist[v] = 0

    while len(q) > 0:
        curCost, curNode = heapq.heappop(q)

        for n in graph[curNode]:
            nextNode, nextCost = n

            newCost = nextCost + curCost

            if newCost < dist[nextNode]:
                dist[nextNode] = newCost
                heapq.heappush(q, (newCost, nextNode))

    return max(dist[1:])

print(dijkstra())
