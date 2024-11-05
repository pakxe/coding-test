'''
basecase 찾고, 다음 단계가 기계적으로 계산된다면 -> 증명 완료

f(n) = n을 1로 만드는데 드는 최소 연산 횟수
base: n = 1 -> 계산 필요 없으므로 0 
step: n = i -> i가 3의 배수라면 

이미 계산된 값일 경우 min으로 할당한다. 
'''
import sys
input = sys.stdin.readline
sys.setrecursionlimit(1000001)

n = int(input())
visited = [float('inf')] * (n + 1)

def makeOne(x):

    if x == 1: 
        return 0

    val = visited[x]
    
    if val != float('inf'):
        return val

    if x % 3 != 0 and x % 2 != 0: # 1밖에 방법이 없는 경우
        val = makeOne(x - 1) + 1
    elif x % 3 != 0: # 3만 안되는 경우
        val = min(makeOne(x - 1) + 1, makeOne(x // 2) + 1)
    elif x % 2 != 0: # 2만 안되는 경우 
        val = min(makeOne(x - 1) + 1, makeOne(x // 3) + 1)
    else: # 1만 안되는 경우
        val = min(makeOne(x // 2) + 1, makeOne(x // 3) + 1)


    visited[x] = val
    return val
        
print(makeOne(n))
        
