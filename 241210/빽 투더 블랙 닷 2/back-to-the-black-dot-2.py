'''
2개는 빨간색, 나머지는 검정색

1. RD1 -> RD2의 최소값을 구함
2. 모든 점 -> RD1 구하기
3. RD2 -> 모든 점 구하기

min(2, 3을 같은 점으로 매칭하여 합한 값) + 2 => 문제에서 구하는 값
'''
import heapq

n, e = map(int, input().split())
R1, R2 = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(e):
    a, b, cost = map(int, input().split())
    
    graph[a].append((cost, b))
    graph[b].append((cost, a))

def dijkstra(s):
    q = []
    heapq.heappush(q, (0, s))

    dist = [float('inf')] * (n + 1)
    dist[s] = 0

    while len(q) > 0:
        curCost, curNode = heapq.heappop(q)

        for node in graph[curNode]:
            nextCost, nextNode = node

            newCost = nextCost + curCost

            if newCost < dist[nextNode]:
                dist[nextNode] = newCost
                heapq.heappush(q, (newCost, nextNode))

    return dist

# 1. RD1 -> RD2의 최소값을 구함
# 2. 모든 점 -> RD1 구하기
R1_dist = dijkstra(R1)
R1_to_R2 = R1_dist[R2]

# 3. RD2 -> 모든 점 구하기
R2_dist = dijkstra(R2)

minCost = float('inf')
for i in range(1, n + 1):
    minCost = min(R1_dist[i] + R2_dist[i], minCost)

if minCost == float('inf'):
    print(-1)
else:
    print(minCost, R1_to_R2)
    print(minCost + R1_to_R2)