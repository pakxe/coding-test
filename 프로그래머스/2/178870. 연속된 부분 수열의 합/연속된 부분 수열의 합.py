def solution(sequence, k):
    left = 0
    right = 0
    next_left = 0
    next_right = 0
    
    min_set = None
    s = sequence[left]
    
    while(True):
        # 부족한 경우 right로 이동되는데, 더이상 가능한게 없으므로 
        if next_right >= len(sequence):
            break
            
        if next_left >= len(sequence):
            break
        
        if right < next_right:
            right_v = sequence[next_right]
            s = s + right_v
        if left < next_left:
            left_v = sequence[left]
            s = s - left_v
        
        right = next_right
        left = next_left
            
        # 장답인 경우
        if s == k:
            # min_set이 없는 경우
            if min_set is None:
                min_set = [left, right]
                
            else:
                prev_dist = min_set[1] - min_set[0]
                # 길이가 더 작은 경우 갱신
                if prev_dist > (right - left):
                    min_set = [left, right]
        
            # 🔴 같아도 끝까지 봐야하기 때문여 연장이 필요하다.
            next_right = right + 1
            
        
        # k보다 합이 부족한 경우
        elif s < k:
            next_right = right + 1
        
        # k보다 합이 클 경우
        else:
            if left == right:
                # 오름차순이기 때문에 다음 턴에는 반드시 같거나 크므로 더이상 탐색할 필요 없음.
                break
                
            else:
                next_left = left + 1
            
    return min_set
            
