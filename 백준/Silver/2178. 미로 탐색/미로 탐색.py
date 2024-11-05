from collections import deque

n, m = map(int, input().split())

maze = [None] * n
visited = [[False] * m for _ in range(n)] * n
dx, dy = [1, 0, -1, 0], [0, -1, 0, 1]
for i in range(n):
    line = list(input())
    maze[i] = list(map(int, line))
    
def escape(sx, sy):
    q = deque([[sy, sx, 1]])
    
    while len(q) >= 1:
        y, x, c = q.popleft()
            
        if y == n - 1 and x == m - 1:
            print(c)
            return
        
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            if ny < 0 or nx < 0 or ny >= n or nx >= m or maze[ny][nx] == 0:

                continue
            if visited[ny][nx]:
                continue

            q.append([ny, nx, c + 1])
            visited[ny][nx] = True

            
escape(0, 0)