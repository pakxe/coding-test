from collections import deque
def solution(bridge_length, weight, truck_weights):
    i = 1
    q = deque()
    tl = deque(truck_weights)
    s = 0
    while(True):
        # 뽑을 친구가 있다면 뽑는다.
        if len(q) > 0:
            w, append_time = q[0]
            
            if (i - append_time) == bridge_length:
                q.popleft()
                s -= w
        
         # 종료 조건
        if len(tl) <= 0 and len(q) <= 0:
            break
            
        if len(tl) <= 0:
            i += 1
            continue
            
        # 길이가 없는 경우
        if len(tl) <= 0:
            w = tl.popleft()
            q.append((w, i))
            s += w
                
        # 길이가 남는 경우
        else:
            # 용량도 남는 경우
            w = tl[0]
            if s + w <= weight:
                w = tl.popleft()
                q.append((w, i))
                s += w
                
        
        i += 1
        
    return i
        