n = int(input())
m = int(input())

graph = [[float('inf')] * (n + 1) for _ in range(n + 1)]

for i in range(1, n + 1):
    graph[i][i] = 0
    
for _ in range(m):
    a, b, cost = map(int, input().split())
    graph[a][b] = min(graph[a][b], cost)
    
def floyd():
    for k in range(1, n + 1):
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

floyd()

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if graph[i][j] == float('inf'):
            graph[i][j] = 0
            
for i in range(1, n + 1):
    print(' '.join(map(str, graph[i][1:])))