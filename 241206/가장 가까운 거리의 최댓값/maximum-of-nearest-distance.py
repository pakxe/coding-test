'''
특정 정점과 a, b, c 중 가장 가까운 정점 까지의 거리가 가장 최대가 되도록 한다..
abc에게서 도망치고싶어하는 특정 정점을 구하고 그 거리를 구하자!

a, b, c를 제외한 모든 정점에서의 다익스트라를 구하고, 최대값을 찾아 출력하면 되는 것 
특정 정점 1 = [a와의 거리, b와의 거리, c와의 거리] = [1, 2, 3]
특정 정점 2 = [a와의 거리, b와의 거리, c와의 거리] = [4, 5, 6]
이렇다면 각 특정 정점에서 a, b, c와의 거리를 구하고 min을 구한 후 최종 min(출력물)에 계속 업데이트 해나가면 될 것 같다. 
'''

'''
시간복잡도는 어떻게 될까?
모든 정점 * 한 번의 다익스트라 시간 복잡도

모든 정점 = n
한 번의 다익스트라 시간 복잡도(인접행렬) = 최소 구하기(n) * 최소의 인접 노드 구하기(n) = n^2

최종 시간 복잡도 = n^3 
1초에 1억 연산(10^8)을 할 수 있다고 한다면 (10^5)^3 => 10^15 이므로 초과함. 

따라서 인접 행렬이 아닌 최소힙을 사용해야할듯. 
한 번의 다익스트라 시간 복잡도(최소힙) = 최소 구하기(logn) * 최소의 인접 노드 구하기(n) = nlogn

최종 시간 복잡도 = n^2logn => 10^

이거 되나?
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

    a, b, c = targets
    minDist = min(dist[a], dist[b], dist[c])
    return minDist

minDist = float('-inf')

for i in range(1, v + 1):
    if i in targets:
        continue
        
    minDist = max(minDist, dijkstra(i))

print(minDist)
            
