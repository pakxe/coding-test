'''
하니씩 버리면 된다.
'''

from collections import deque

n = int(input())
q = deque()
for i in range(1, n + 1):
    q.append(i)

while len(q) > 1:
    q.popleft()

    first = q.popleft()
    q.append(first)

print(q.popleft())
    
    
    