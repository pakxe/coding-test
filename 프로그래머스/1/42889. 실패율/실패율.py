def solution(N, stages):
    person_counts = [0 for _ in range(N + 2)]
    
    # stage별 stop 인원 구하기
    for i in range(len(stages)):
        stage = stages[i]
        person_counts[stage] += 1
        
    # stage 도달 수
    s = 0
    total_counts = [0 for _ in range(N + 2)]
    for stage_index in range(N + 1, 0, -1):
        cur_count = person_counts[stage_index]
        s += cur_count
        total_counts[stage_index] = s
    
    # 비 구하기
    ans = []
    for i in range(1, N + 1):
        stop_count = person_counts[i]
        total_count = total_counts[i]
        
        if total_count == 0:
            ans.append((0, i))
        else:
            ans.append((-(stop_count / total_count), i))
        
    sorted_ans = sorted(ans)
    
    finals = []
    for i in range(len(sorted_ans)):
        _, stage = sorted_ans[i]
        
        finals.append(stage)
        
    return finals
        
    
        