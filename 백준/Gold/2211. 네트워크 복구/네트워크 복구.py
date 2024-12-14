'''
다익을 사용하되 
이어지는 회선들을 모두 저장한다. dist에... 
'''
import heapq

n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b, cost = map(int, input().split())
    graph[a].append((cost, b))
    graph[b].append((cost, a))
    
dist = [(float('inf'), None)] * (n + 1)

def dijkstra():
    q = []
    heapq.heappush(q, (0, 1)) # cost, number
    dist[1] = (0, 0) # cost, prev

    while len(q) > 0:
        curCost, curNode = heapq.heappop(q)
        
        for node in graph[curNode]:
            nextCost, nextNode = node
            newCost = curCost + nextCost
            
            if newCost < dist[nextNode][0]:
                dist[nextNode] = (newCost, curNode)
                heapq.heappush(q, (newCost, nextNode))
                
dijkstra()

print(len(dist) - 2)
for i in range(2, n + 1):
    prev = dist[i][1]
    print(i, prev)
 
