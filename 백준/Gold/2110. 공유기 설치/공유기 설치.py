'''memo
c개의 공유기를 n개의 집에 설치한다.
대신 가장 가까운 공유기의 거리를 제일 크게 한다. 즉 최대한 멀리 퍼뜨리는 형태로 공유기를 설치하고 싶다는 뜻

집의 개수는 20만, 공유기의 개수도 20만
집의 좌표는 10억

값이 크기 때문에 아직 어떤 시간 복잡도의 알고리즘을 쓸 진 모르겠으나 시간 초과가 날 확률이 높은 문제다. 
'''

'''sol1
집의 개수와 공유기의 개수로 조합을 만든다. 
그리고 그 모든 조합을 for로 돌며 제일 멀게 설치된 좌표를 찾는다.

=> 순열 구하는거 시간복잡도가 O(n!)이라고 한다.
'''

'''sol2 (솔루션을 봤다...)
이게 왜 이분탐색인가..
결정문제로 바뀌나?

결정 문제: 가장 인접한 두 공유기 사이의 거리의 최댓값이 x가 되도록 공유기를 배치할 수 있는가? 
그럼 x의 값은 0부터 10억이 되겠다. 
그렇게 되면 TTTTTFFF 형태의 변화 배열이 만들어진다. 답은 lo

내가 어려운 건 공유기를 배치하는 경우의 수를 어덯게 구하는 것인지. 
-> 항상 왼쪽에 공유기를 둔 뒤 다음 공유기와의 거리가 x 이상이 아니면 공유기를 두지 않는다. 이런식으로 하면 공유기를 배치할 수 있는가?에 대해서 답을 할 수 잇음
이 로직의 경우 for하나로 되기 때문에 O(n)
'''

'''process
결정 문제: 공유기 사이의 최대 거리가 x이상이도록 공유기를 배치할 수 있는가? 

1. 이분 탐색을 구현한다. 배치할 수 있다! 라면 lo = mid, 할 수 없으면 hi = mid
2. 공유기 배치가능? 함수를 구현한다. for문을 돌며 배치한다.
'''

'''공유기 배치 가능? 함수
일단 시작 위치에 공유기를 두고 시작한다.

for문을 -1칸 만큼 돈다.
    만약 공유기 개수가 이미 초과됐다면 return True를 한다. (이미 다 설치했다는 뜻이기 때문)
    만약 현재 칸과 이전 공유기 거리가 x이상이라면 위치시킨다.그리고 공유기 개수도 늘린다.
    else:
        continue
    
    return False
'''
n, c = map(int, input().split())
ls = [int(input()) for _ in range(n)]
ls.sort()

def binarySearch():
    lo = 1
    hi = ls[len(ls) - 1] - ls[0] + 1 # 양 옆으로 두었을 때의 최댓 값 + lo가 답이어야 하므로 +1로 한칸 밀어줌
    
    while lo + 1 < hi:
        m = (lo + hi) // 2
        
        if canLocateWIFI(m):
            lo = m
        else:
            hi = m
        
    return lo

def canLocateWIFI(x):
    # 제일 왼쪽 집에 공유기를 두고 시작한다.
    count = 1 
    lastLocation = ls[0]
    
    for i in range(1, len(ls)):
        l = ls[i]
        if count >= c:

            return True

        if l - lastLocation >= x: # 현재 칸과 이전 공유기 거리가 x이상이라면 위치
            count += 1
            lastLocation = l
        else:
            continue

    return count >= c
        
    
    
print(binarySearch())
    
    
    

