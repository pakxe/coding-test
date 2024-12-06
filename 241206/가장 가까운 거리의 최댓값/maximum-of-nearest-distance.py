'''
특정 정점과 a, b, c 중 가장 가까운 정점 까지의 거리가 가장 최대가 되도록 한다..
abc에게서 도망치고싶어하는 특정 정점을 구하고 그 거리를 구하자!

a, b, c를 제외한 모든 정점에서의 다익스트라를 구하고, 최대값을 찾아 출력하면 되는 것 
특정 정점 1 = [a와의 거리, b와의 거리, c와의 거리] = [1, 2, 3]
특정 정점 2 = [a와의 거리, b와의 거리, c와의 거리] = [4, 5, 6]
이렇다면 각 특정 정점에서 a, b, c와의 거리를 구하고 min을 구한 후 최종 min(출력물)에 계속 업데이트 해나가면 될 것 같다. 
'''

'''
위 방법은 100퍼 시간초과였다.
생각해보니 특정 노드에서 다익을 모두 펼치면, 특정 노드에서 다른 특정 노드로 가는게 더 많고 정작 a, b, c는 극히 일부 시간만 차지않다. 불필요한 시간이 낭비된다는 뜻
그래서 a, b, c에서 각각 다익스트라를 펼치면 정보 가용성이 100%가 된다. 
그리고 for문을 돌려 특정 노드에서 a, b, c까지의 거리를 구한 후 min을 잡고 max를 갱신하면 되겠다.
'''


import heapq

v, e = map(int, input().split())

# 인접 리스트를 사용하자
graph = [[] for _ in range(v + 1)]

targets = list(map(int, input().split()))


for _ in range(e):
    n, m, cost = map(int, input().split())
    graph[n].append((m, cost))
    graph[m].append((n, cost))

def dijkstra(start): 
    q = []
    heapq.heappush(q, (0, start))
    dist = [float('inf')] * (v + 1)
    dist[start] = 0

    while len(q) > 0:
        cost, node = heapq.heappop(q)
        
        for n in graph[node]:
            nextNode, nextCost = n
            newCost = dist[node] + nextCost

            if newCost < dist[nextNode]:
                heapq.heappush(q, (newCost, nextNode))
                dist[nextNode] = newCost

    return dist

dists = [dijkstra(target) for target in targets]

maxDist = float('-inf')

for i in range(1, v + 1):
    if i in targets:
        continue

    curMinDist = min([dist[i] for dist in dists])
    maxDist = max(curMinDist, maxDist)

print(maxDist)