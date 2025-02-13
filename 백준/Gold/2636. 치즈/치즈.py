'''
구멍이 있을 수 있다.

x가 공기. x가 맞닿아있는 곳이 공기칸이 된다. (x를 포함해서 입력이 주어진다.)

공기와 맞닿으면 1턴 이후 제거
'''

'''
1. 한 점의 x(0,0)부터 시작해서 bfs로 공기 식별(모든 공기를 찾는다.)
    다음 칸이 공기면 별도 처리 없이 append
2. 현재 칸이 공기 and 다음 칸이 치즈면 플래그 꽂기(곧죽는애)
3. 모두 끝난 후 치즈를 공기칸으로 수정
4. 모두 공기칸이 될 때까지 반복한다. 그리고 이전 치즈 개수를 저장하며 갱신한다.

이때 bfs는 한 턴씩 수행한다. 
한 번에 하려면 구멍인지 어렵다.
'''
import sys
from collections import deque

def getCheeseCount(graph):
    row, col = len(graph), len(graph[0])
    count = 0
    
    for y in range(row):
        for x in range(col):
            if graph[y][x] == CHEESE:
                count += 1
    
    return count

def outOfRange(y, x, row, col):
    return y >= row or y < 0 or x >= col or x < 0
    
def deleteMeltingCheese(graph):
    row, col = len(graph), len(graph[0])
    
    for y in range(row):
        for x in range(col):
            if graph[y][x] == MELTING_CHEESE:
                graph[y][x] = AIR
                

DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]
def meltCheese(graph):
    row, col = len(graph), len(graph[0])
    
    q = deque()
    
    # 시작 위치
    q.append(AIR_POS) # 이거 문법 맞는지 확인

    visited = [[False] * col for _ in range(row)]
    
    while len(q) > 0:
        y, x = q.popleft() # 공기 좌표만 들어온다.
        
        for i in range(len(DX)):
            ny, nx = y + DY[i], x + DX[i]
            
            if outOfRange(ny, nx, row, col):
                continue
                
            if graph[ny][nx] == CHEESE:
                graph[ny][nx] = MELTING_CHEESE
                continue
            
            if graph[ny][nx] != AIR:
                continue

            if visited[ny][nx]:
                continue
                
            q.append((ny, nx))
            visited[ny][nx] = True
    
    
    deleteMeltingCheese(graph)
        
    
# start
CHEESE = 1
AIR = 0
MELTING_CHEESE = 2
AIR_POS = (0, 0)

row, col = map(int, input().split())
graph = [None] * row

for i in range(row):
    graph[i] = list(map(int, input().split()))
    

prevCheeseCount = getCheeseCount(graph)
turn = 0
# 0일 때 여기서도 처리를 해줘야 한다.

if prevCheeseCount == 0:
    print(turn)
    print(prevCheeseCount)
    sys.exit(0)
    
while prevCheeseCount != 0:
    turn += 1
    
    meltCheese(graph)
    leftCheeseCount = getCheeseCount(graph)
    
    # 리펙
    if leftCheeseCount == 0:
        print(turn)
        print(prevCheeseCount)
    
    prevCheeseCount = leftCheeseCount
    
