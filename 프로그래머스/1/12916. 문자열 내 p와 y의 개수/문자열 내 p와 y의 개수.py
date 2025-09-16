def solution(s):
    p_count = 0
    y_count = 0
    for char in s:
        if char == 'p' or char == 'P':
            p_count += 1
        elif char == 'y' or char == 'Y':
            y_count += 1
            
    if p_count == y_count:
        return True
    else:
        return False