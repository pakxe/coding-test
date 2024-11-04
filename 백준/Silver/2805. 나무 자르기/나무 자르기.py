'''
하나의 변수 x에 대해서 문제의 답이 FFFFFFTTTT처럼 변화가 존재하는 경우 이진 탐색으로 풀 수 있다.

여기선 톱의 톱이 h에 대해서 문제의 답이 FFFFFFTTT처럼 변한다.

근데 이건 TTTTTTFF가 된다. 따라서 첫 T를 찾으려면 lo를 출력해야한다. 

이때의 결정 문제: getTreeHeight(m) >= x인가?

그럼 이 경우 시간복잡도는 어떻게 되는가? logN * n이다
이때의 n은 1,000,000,000
'''
import math

n, m = map(int, input().split())
trees = list(map(int, input().split()))

def getTreeHeight(h):
    sum = 0
    
    for i in range(n):
        sum += 0 if trees[i] - h <= 0 else trees[i] - h
    
    return sum
    
def binarySearch(x):
    lo = -1
    hi = 1000000001
    
    while lo + 1 < hi: # 사이에 한 칸도 여유가 없을 때 종료된다. 
        m = math.trunc((hi + lo) / 2)
        if getTreeHeight(m) < x: # 더 많이 잘라야 해
            hi = m
        else:
            lo = m
        
    return lo # TTTTTFFF로 변하는 문제이기 때문에 lo를 출력해야한다.

print(binarySearch(m))


