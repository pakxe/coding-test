'''
벽부수기..
벽부수는걸 가중치로 보나? 그럴거같다. 

인접행렬로 그래프를 만들고,
'''
import sys
import heapq

input = sys.stdin.readline

n, m, r = map(int, input().split())
itemCounts = list(map(int, input().split()))
graph = [[] for _ in range(n + 1)]

for _ in range(r):
    a, b, cost = map(int, input().split())
    graph[a].append((cost, b))
    graph[b].append((cost, a))


def dijkstra(start):
    global n
    dist = [float('inf')] * (n + 1) # 가중치와 이전 노드
    visited = [False] * (n + 1)
        
    q = []
    heapq.heappush(q, (0, start)) # 코스트, 좌표
    dist[start] = 0
    
    while len(q) > 0:
        curCost, curNode = heapq.heappop(q)
        
        visited[curNode] = True
        
        for node in graph[curNode]:
            nextCost, nextNode = node
            
            if visited[nextNode] == True:
                continue
            
            newCost = curCost + nextCost

            if newCost < dist[nextNode] and newCost <= m:
                dist[nextNode] = newCost
                heapq.heappush(q, (newCost, nextNode))

    return dist

maxCount = float('-inf')
for start in range(1, n + 1):
    dist = dijkstra(start)
    sum = 0
    for i in range(1, len(dist)):
        if dist[i] != float('inf'):
            sum += itemCounts[i - 1]
            
    maxCount = max(sum, maxCount)
    
print(maxCount)
        


