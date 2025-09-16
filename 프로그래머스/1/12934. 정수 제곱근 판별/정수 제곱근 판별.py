import math

def solution(n):
    root = math.sqrt(n)
    floor_root = math.floor(root)
    
    if floor_root == root:
        return (floor_root + 1) ** 2
    
    else:
        return -1