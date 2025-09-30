def solution(triangle):
    s = [0 for _ in range(len(triangle))]
    for i in range(1, len(triangle) + 1):
        s[i - 1] = [0 for _ in range(i)]
        
    for i in range(len(triangle[-1])):
        s[-1][i] = triangle[-1][i]
    
    for height in range(len(triangle) - 1, 0, -1):
        cur_row = s[height]
        
        for j in range(1, len(cur_row)):
            left = cur_row[j - 1]
            right = cur_row[j]
            
            s[height - 1][j - 1] = max(left, right) + triangle[height - 1][j - 1]
            
    return s[0][0]
                
            
        