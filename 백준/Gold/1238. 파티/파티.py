'''
끝나고 가는 길은 x dij하면됨
오는 길은
'''

import sys
import heapq
input = sys.stdin.readline

n, m, x = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b, time = map(int, input().split())
    graph[a].append((time, b))
    
def dijkstra():
    visited = [False] * (n + 1)
    dist = [float('inf')] * (n + 1)
    q = []
    heapq.heappush(q, (0, x))
    dist[x] = 0
    
    while len(q):
        curTime, curNode = heapq.heappop(q)
        visited[curNode] = True
        
        for node in graph[curNode]:
            nextTime, nextNode = node
            
            if visited[nextNode]: # 이미 dist가 확정된 것에 대해서는 pass
                continue
                
            newTime = curTime + nextTime
            
            if newTime < dist[nextNode]:
                dist[nextNode] = newTime
                heapq.heappush(q, (newTime, nextNode))
                
    return dist

def dijkstra_limit(start):
    visited = [False] * (n + 1)
    dist = [float('inf')] * (n + 1)
    q = []
    heapq.heappush(q, (0, start))
    dist[start] = 0
    
    while len(q):
        curTime, curNode = heapq.heappop(q)
        visited[curNode] = True
        
        if x == curNode:
            return dist[x]
        
        for node in graph[curNode]:
            nextTime, nextNode = node
            
            if visited[nextNode]: # 이미 dist가 확정된 것에 대해서는 pass
                continue
                
            newTime = curTime + nextTime
            
            if newTime < dist[nextNode]:
                dist[nextNode] = newTime
                heapq.heappush(q, (newTime, nextNode))
                
times = [0] * (n + 1)

for i in range(1, n + 1):
    times[i] = dijkstra_limit(i)
    
dist = dijkstra()

maxTime = float('-inf')
for i in range(1, n + 1):
    curTime = times[i] + dist[i]
    maxTime = max(curTime, maxTime)
    
print(maxTime)
            
    



