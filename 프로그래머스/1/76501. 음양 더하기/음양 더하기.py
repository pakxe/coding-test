def solution(absolutes, signs):
    s = 0
    for i in range(len(absolutes)):
        abs_ = absolutes[i]
        sign = signs[i]
        
        if sign is True:
            s += abs_
        else:
            s -= abs_
        
    return s