def solution(m, n, puddles):
    col = m
    row = n
    walk_map = [[0 for _ in range(col + 1)] for _ in range(row + 1)]
    walk_map[1][1] = 1
    
    trap_s = set()
    for i in range(len(puddles)):
        x, y = puddles[i]
        trap_s.add(f"{y} {x}")
    
    for y in range(1, row + 1):
        for x in range(1, col + 1):
            if y == 1 and x == 1:
                continue
                    
            s_key = f"{y} {x}"
            if s_key in trap_s:
                walk_map[y][x] = 0
                continue
                
            walk_map[y][x] = (walk_map[y-1][x] + walk_map[y][x-1]) % 1000000007
            
    return walk_map[row][col]

    