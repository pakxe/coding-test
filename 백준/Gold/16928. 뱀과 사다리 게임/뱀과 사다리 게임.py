'''
왼쪽아래부터 시작하여 왼쪽위에서 종료된다.
사다리를 타면 올라간다.
뱀을 타면 내려간다.


1~6 사이에서 사다리가 있으면 그 중 가장 멀리가는 것을 탄다. 
만약 뱀이 있다면 그 칸을 피하는 최대 숫자로 선택한다.
만약 빈 값만 있다면 6을 선택한다.

13에 50, 14에 99로 가는 사다리가 있다면?

BFS로 구한다면 모든 길이 EMPTY일 모든 길을 간다. 
뱀이 있는 길이라면 뱀으로 갔을 때의 길이 isVisited가 아닌 경우만 갈 수 있다. 만약 갔던 길이라면 그 길을 제외하고 최대 길을 찾는다. 
사다리가 있다면 사다리를 타는 경우와 안타는 경우 가장 빠른 길을  -> 2개 선택한다. 

'''
from collections import deque
ledderCount, snakeCount = map(int, input().split())

mp = [0] * 101
snakeMap = {}
ledderMap = {}
for _ in range(ledderCount + snakeCount): 
    start, end = map(int, input().split())
    
    mp[start] = end;
    
history = [float('inf')] * 101 # False || (주사위 카운트)

minCount = float('inf')

def bfs():
    global minCount
    q = deque()
    
    q.append((1, 0)) # 위치, 주사위 카운트
    
    while len(q) > 0:
        (curLocation, curCount) = q.popleft()
        for i in range(1, 7):
            newCount = curCount + 1
            if i + curLocation >= 100: # 100번째 칸 도달
                minCount = min(minCount, newCount)
                break;
            if mp[curLocation + i] == 0 and history[curLocation + i] > curCount + 1: # EMPTY
                q.append((curLocation + i, newCount))
                history[curLocation + i] = newCount
            elif mp[curLocation + i] != 0 and history[mp[curLocation + i]] > curCount + 1: # snake or ledder
                q.append((mp[curLocation + i], newCount))
                history[mp[curLocation + i]] = newCount

    print(minCount)
                         
bfs()
                        
            
            
          