'''
가중치 그래프를 인접 리스트 형태로 구현한다. 

그리고 마지막 input에서 시작 정점을 구하고 다익스트라를 돌린다. 
출력은 
'''
import sys
import heapq

input = sys.stdin.readline

v, e = map(int, input().split())
pairs = [list(map(int, input().split())) for _ in range(e)]
start, end = map(int, input().split())

l = [[] for _ in range(v + 1)]
dist = [float('inf')] * (v + 1)

# 인접 리스트 구현
for pair in pairs:
    a, b, weight = pair

    l[a].append((b, weight))
    l[b].append((a, weight))

def dijkstra ():
    q = []
    heapq.heappush(q, (0, start))
    dist[start] = 0

    while len(q) > 0:
        weight, cur = heapq.heappop(q)

        for node in l[cur]:
            neighbor, neighborWeight = node
            cost = neighborWeight + weight

            if cost < dist[neighbor]:
                dist[neighbor] = cost
                heapq.heappush(q, (cost, neighbor))

dijkstra()

print(dist[end])


