'''
최종 승점을 가장 높이는 방법으로 순서를 정해야한다. 

가장 적은 코스트로 상대를 이기는 것이 손해가 적은걸까? 
또는 버릴 건 버리고 가는것?

여러 가짓 수가 있는데, 일단 가장 직관적인건 diff가 적을 수록 인 것 같음. 
하나를 버리고 다른 걸 취한다 자체가 안되는게, 어차피 승점이 똑같기 떄문. 그리고 split해서 여러 개를 승리할 수 없음. 
'''

'''
diff를 적게 뽑는 방법. 
A sort, B sort 또는 우큐
stack으로 뽑자.
'''
from collections import deque
def solution(A, B):
    sorted_a = deque(sorted(A))
    sorted_b = deque(sorted(B))
    
    ans = [0 for _ in range(len(A))]
    c = 0
    is_end = False
    
    for i in range(len(sorted_a)):
        if is_end == True:
            break
            
        a = sorted_a[i]
        
        while(True):
            if len(sorted_b) <= 0:
                is_end = True
                break
                
            if a < sorted_b[0]:
                ans[i] = sorted_b[0]
                sorted_b.popleft()
                c += 1
                break
            else:
                sorted_b.popleft()
                
    return c
        
        
    
