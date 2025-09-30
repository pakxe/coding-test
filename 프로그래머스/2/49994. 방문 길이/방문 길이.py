U = (0, 1)
D = (0, -1)
R = (1, 0)
L = (-1, 0)
    
def solution(dirs):
    prev_x = 0
    prev_y = 0
    c = 0
    
    visited = set()
    
    for i in range(len(dirs)):
        command = dirs[i]
        
        cur_y = prev_y
        cur_x = prev_x
        if command == 'U':
            if prev_y + U[1] <= 5:
                cur_y += U[1]     
            else:
                continue
               
        elif command == 'D':
            if prev_y + D[1] >= -5:
                cur_y += D[1]
            else:
                continue
    
        elif command == 'R':
            if prev_x + R[0] <= 5:
                cur_x += R[0]
            else:
                continue

        else:
            if prev_x + L[0] >= -5:
                cur_x += L[0]
            else:
                continue


        if cur_y < prev_y:
            key = f"{cur_y},{cur_x}.{prev_y},{prev_x}"
            
        elif cur_y > prev_y:
            key = f"{prev_y},{prev_x}.{cur_y},{cur_x}"
            
        else:
            if cur_x < prev_x:
                key = f"{cur_y},{cur_x}.{prev_y},{prev_x}"
            
            else:
                key = f"{prev_y},{prev_x}.{cur_y},{cur_x}"
                
        if key not in visited:
            visited.add(key)
            c += 1

        prev_y = cur_y
        prev_x = cur_x
               
    return c
                
        
