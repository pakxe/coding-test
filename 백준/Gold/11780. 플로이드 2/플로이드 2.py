'''
n개 
i -> j의 최소 비용, 못가는 경우 0

i에서 j로 가는 최소 비용에 포함되어있는 도시의 개수k와 경로를 공백으로 구분해 출력한다. 
이때 도시 i와 j도 출력해야한다. (시작 경로.. 끝)
갈 수 없는 경우는 0을 출력한다.
'''

'''
모든 도시에서 모든 도시로 가는 최소 경로를 구해야하기 때문에 플로이드를 사용한다. 
이때 경로를 dist또는 다른 배열에 업데이트한다. 

a - b 에서 a - k - b가 더 빠르다면
[a - k 정류장] + [k] + [k - b 정류장] 을  a - b에 저장한다.
'''
import sys
input = sys.stdin.readline

n = int(input())
m = int(input())

graph = [[float('inf')] * (n + 1) for _ in range(n + 1)]
         
for i in range(1, n + 1):
    graph[i][i] = 0
         
for _ in range(m):
    a, b, cost = map(int, input().split())
    graph[a][b] = min(cost, graph[a][b])
         
routes = [[[] for _ in range(n + 1)] for _ in range(n + 1)]
def floyd():
    for k in range(1, n + 1):
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                newCost = graph[i][k] + graph[k][j]
                
                if newCost < graph[i][j]:    
                    graph[i][j] = newCost
                    routes[i][j] = [*routes[i][k], k, *routes[k][j]]
                   

floyd()

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if graph[i][j] == float('inf'):
            graph[i][j] = 0
            
for i in range(1, n + 1):
    print(' '.join(map(str, graph[i][1:])))

for i in range(1, n + 1):
    for j in range(1, n + 1):
        curRoute = routes[i][j]
        
        if graph[i][j] == float('inf') or graph[i][j] == 0:
            print(0)
            continue
        count = 2 + len(curRoute)
        route = " ".join(map(str, curRoute))

        if len(route) <= 0:
            print(f'{count} {i} {j}')
        else:
            print(f'{count} {i} {route} {j}')
