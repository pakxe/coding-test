import copy

def solution(sticker):
    if len(sticker) == 1:
        return sticker[0]

    if len(sticker) <= 3:
        return max(sticker)
    
    
    # 1. 0을 선택하는 경우 (0:-1까지)
    dp1 = copy.deepcopy(sticker)
    dp1[1] = max(dp1[0], dp1[1])
    for i in range(2, len(sticker) - 1):
        dp1[i] = max(dp1[i] + dp1[i - 2], dp1[i - 1])
    dp1.pop()
    
    # 2. 1을 선택하는 경우 (1:까지)
    dp2 = copy.deepcopy(sticker)
    dp2[0] = 0
    dp2[2] = max(dp2[1], dp2[2])
    for i in range(3, len(sticker)):
        dp2[i] = max(dp2[i] + dp2[i - 2], dp2[i - 1])
        
    return max(dp1[-1], dp2[-1])
    
