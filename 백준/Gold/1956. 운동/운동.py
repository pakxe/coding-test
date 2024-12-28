'''
어떤 마을에서 출발해서 다시 돌아오는 사이클의 최소값을 구하기 

모든지점에서 모든 지점으로 가는 값을 구한 후
1 -> 2 + 2 -> 1, 1 -> 3 + 3 -> 1 의 모든 값을 구하고 최소를 찾는다.
'''

import sys
input = sys.stdin.readline


v, e = map(int, input().split())
graph = [([float('inf')] * (v + 1)) for _ in range(v + 1)]
for _ in range(e):
    a, b, c = map(int, input().split())
    graph[a][b] = c
    
for i in range(1, v + 1):
    graph[i][i] = 0

def floyd ():
    for k in range(1, v + 1): 
        for i in range(1, v + 1):
            for j in range(1, v + 1):
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

floyd()

minCost = float('inf')

for i in range(1, v + 1):
    for j in range(1, v + 1):
        if i == j:
            continue;
        curCost = graph[i][j] + graph[j][i]
        if curCost == float('inf'):
            continue;
            
        minCost = min(minCost, curCost)

if minCost == float('inf'):
    print(-1)
else:
    print(minCost)

    