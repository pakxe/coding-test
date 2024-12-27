'''
가장 점수가 낮은 == 가장 많이 가까운

모든 사람에 대한 거리코스트를 구하고 각 사람에 대한 거리 코스트 평균을 내어 min을 구하면 된다.
'''

import sys
input = sys.stdin.readline

n = int(input())

graph = [([float('inf')] * (n + 1)) for _ in range(n + 1)]

for i in range(1, n + 1):
    graph[i][i] = 0
    
while True:
    a, b = map(int, input().split())
    
    if a == -1 and b == -1:
        break
        
    graph[a][b] = 1
    graph[b][a] = 1



def floyd ():
    for k in range(1, n + 1): 
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

floyd()

def maximum (arr):
    maxx = float('-inf')

    for v in arr:
        if v == float('inf'):
            continue
        maxx = max(v, maxx)

    return maxx


minCost = float('inf')
for i in range(1, n + 1):
    minCost = min(maximum(graph[i][1:]), minCost)
        
count = 0
persons = []

for i in range(1, n + 1):
    if maximum(graph[i][1:]) == minCost:
        count += 1
        persons.append(i)
        
print(minCost, count)
print(' '.join(map(str, persons)))

    
