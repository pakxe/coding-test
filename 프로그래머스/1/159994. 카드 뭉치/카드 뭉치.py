'''
카드 스택
O(n+n)
두 개의 top을 보면 됨. 만들 수 있는 지만 찾으면 되기 때문에 스택에 남은게 있어도 됨. 
'''
from collections import deque
def solution(cards1, cards2, goal):
    left = deque(cards1)
    right = deque(cards2)
    goal = deque(goal)
    
    res = 0
    
    while (True):
        if len(goal) == 0:
            return 'Yes'
        
        ltop = None
        if len(left) > 0:
            ltop = left[0]
            
        rtop = None
        if len(right) > 0:
            rtop = right[0]
            
        if ltop == goal[0]:
            left.popleft()
            goal.popleft()
            continue
        
        elif rtop == goal[0]:
            right.popleft()
            goal.popleft()
            continue
        
        return 'No'
            
        
        
            
        
