'''
주어진 시작점에서 다른 모든 정점으로의 최단 코스트 출력
시작점은 0
존재하지 않는 경우는 INF
'''
import sys
import heapq

input = sys.stdin.readline

v, e = map(int, input().split())
sn = int(input())

graph = [[] for _ in range(v + 1)]

for _ in range(e):
    start, end, cost = map(int, input().split())
    graph[start].append((cost, end))
    
visited = [False] * (v + 1)
dist = [float('inf')] * (v + 1)
dist[sn] = 0

def getMinCostInGraph ():
    minCost = float('inf')
    minNode = None
    
    for i in range(1, v + 1):
        if visited[i]: 
            continue
        
        if dist[i] < minCost:
            minCost = dist[i]
            minNode = i

    return (minCost, minNode)
    
def dijkstra():
    q = []
    heapq.heappush(q, (0, sn))
    
    while len(q) > 0:
        curCost, curNode = heapq.heappop(q)
        visited[curNode] = True
        
        for n in graph[curNode]:
            nextCost, nextNode = n
            newCost = curCost + nextCost
            
            if newCost < dist[nextNode]:
                dist[nextNode] = newCost
                heapq.heappush(q, (newCost, nextNode))
                
dijkstra()

for i in range(1, v + 1):
    if dist[i] != float('inf'):
        print(dist[i])
    else:
        print('INF')
        