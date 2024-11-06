import sys 
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

n = int(input())
podos = [int(input()) for _ in range(n)]

maxPodo = [float('-inf')] * (n + 1)

def p(s):
    if len(podos) - s <= 2: # 2개 남았을 경우 무조건 다 먹는게 이득이므로 다 먹는다.
        return sum(podos[s:])

    if maxPodo[s] != float('-inf'):
        return maxPodo[s]
    
    # 2잔 다 먹는 경우
    maxPodo[s] = sum(podos[s:s+2]) + p(s+3)
    
    # 1잔만 먹는 경우
    maxPodo[s] = max(sum(podos[s:s+1]) + p(s+2), maxPodo[s])
    
    # 먹지 않고 넘기는 경우
    maxPodo[s] = max(p(s+1), maxPodo[s])

    return maxPodo[s]

print(p(0))
    
    