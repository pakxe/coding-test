'''
벽부수기..
벽부수는걸 가중치로 보나? 그럴거같다. 

인접행렬로 그래프를 만들고,
'''
import sys
import heapq
from collections import deque

input = sys.stdin.readline

DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]

n = int(input())
m = int(input())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b, cost = map(int, input().split())

    graph[a].append((cost, b))

start, end = map(int, input().split())
dist = [(float('inf'), None)] * (n + 1) # 가중치와 이전 노드
visited = [False] * (n + 1)
next = [[] for _ in range(n + 1)]

def dijkstra():
    q = []
    heapq.heappush(q, (0, start)) # 코스트, 좌표
    dist[start] = (0, 0)
    
    while len(q) > 0:
        curCost, curNode = heapq.heappop(q)

        visited[curNode] = True
        
        for n in graph[curNode]:
            nextCost, nextNode = n
            
            if visited[nextNode] == True:
                if nextNode == end:
                    return
                continue
            
            newCost = curCost + nextCost

            if newCost < dist[nextNode][0]:
                dist[nextNode] = (newCost, curNode)
                heapq.heappush(q, (newCost, nextNode))

def findRoute():
    idx = end
    route = [end]
    
    while dist[idx][1] != 0:
        prevNode = dist[idx][1]
        
        route.append(prevNode)
        idx = prevNode
        
    route.reverse()
    print(len(route))
    print(' '.join(map(str, route)))

    
dijkstra()
print(dist[end][0])
findRoute()



