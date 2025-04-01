'''
visited여부는 함께 들고갈 26배열로 할 수 있겠다. 
bfs
'''

'''
매 턴마다 visited를 딥카피해서 가져간다. 
긴거 max 갱신
'''
from collections import deque
import sys

row, col = map(int, input().split())

m = []
for _ in range(row):
    line = input()
    
    lineArr = []
    for i in range(col):
        lineArr.append(line[i])
        
    m.append(lineArr)
    
DX = [0, 1, 0, -1]
DY = [1, 0, -1, 0]

def asciiIdx(char):
    return ord(char) - 65


maxCount = 0
def dfs(y, x, count, visited):
    global maxCount 

    # 종료 조건
    # if visited[asciiIdx(m[y][x])]:
    #     maxCount = max(maxCount, count - 1)
    #     return 

    for i in range(len(DX)):
        ny, nx = y + DY[i], x + DX[i]

        if ny >= row or ny < 0 or nx >= col or nx < 0:
            continue

        if visited[asciiIdx(m[ny][nx])]:
            maxCount = max(maxCount, count)
            continue

        visited[asciiIdx(m[ny][nx])] = True
        dfs(ny, nx, count + 1, visited)
        visited[asciiIdx(m[ny][nx])] = False

visited = [False] * 26
visited[asciiIdx(m[0][0])] = True

if row == 1 and col == 1:
    print(1)
    sys.exit(0)
    
dfs(0, 0, 1, visited)
print(maxCount)
        