'''memo
배터리 용량과 가격은 비례한다. 
최대 K번 충전소에 방문한다.
0, L 위치, N개의 충전소

가장 싼 킥보드!를 구매하려고 한다.

배터리 용량의 최소 최대 범위 1, 200000 
logN

결정 문제: 배터리 용량 x일때 등교할 수 있는가?

등교 가능? 함수랑
이진 탐색 함수 
2개 있으면 되겠다

등교 가능 함수는 
주어진 배터리 용량으로 등교가 가능한지 확인해주는 함수다.
'''

'''problem
배터리 용량을 x라고 한다면 배터리 용량이 커짐에 따라 FFFFFFTTTTTT로 결정됨
현재 x용량으로 등교 ㄱㄴ? 으로 결정 문제이다.
'''

'''process
1. 이진 탐색 함수 구현
2. 등교 가능 확인 함수 구현
3. m잡고 그 값이 등교 가능이라면 hi = mid
    m잡고 그 값이 등교 불가능이면 lo = mid
4. 다 끝나면 hi가 답이 된다.(등교 ㄱㄴ 배터리 용량 중에서 가장 최소 값을 찾아야하기 때문이다.)
'''

'''등교 가능 확인 함수
배터리 용량을 인자로 넘길 때 최대 충전소 방문 횟수이내에 길의 끝까지 갈 수 있는지 확인해야한다.

충전 지점 + 종착 지점을 for문으로 순회돌기

현재 배터리 용량 < 다음 충전 지점 || 종착 지점 거리면
    이때 현재 배터리 충전 횟수가 남아있으며 충전 했을 때도 도달하지 못한다면 return False
    else:
        현재 배터리 충전 횟수 += 1
        현재 배터리 용량 -= 거리

return True
'''

'''등교 가능 확인 함수2
현재 위치, 다음 위치를 확인
curLocation = 0

for i in range(골까지 추가한 배열):
    diff = locations[i] - curLocation

    만약 거리 차이가 현재 배터리 용량보다 크다 -> 충전을 해야하는 상황
        만약 배터리를 충전해도 불가능하다 return False
        만약 배터리를 충전하면 가능하다.
    else:
        간다.
   
'''
import math

l, n, k = map(int, input().split())
cl = list(map(int, input().split()))
cl.append(l)

def canReachToGoal(originalBattery):
    curLocation = 0
    curBattery = originalBattery
    count = 0
    
    
    
    for i in range(len(cl)):
        diff = cl[i] - curLocation # 가야하는 거리
        # print(f'현재 배터리: {curBattery}, 현 위치: {curLocation}, 도달: {cl[i]}')
        if diff > curBattery: # 배터리가 모자라는 상황
            if count >= k: # 충전 횟수가 없다.
                return False
            elif diff > originalBattery: # 충전해도 못간다.
                return False
            else: # 충전하고 간다.
                # print('충전:', curLocation)

                curBattery = originalBattery - diff
                curLocation = cl[i]
                count += 1
        else: # 배터리가 충분한 상황
            curBattery -= diff
            curLocation = cl[i]
           
    return True
                
    
def binarySearch():
    lo = 0
    hi = l # 배터리의 최대 용량은 거리다. 한번도 충전 안하고 갈 수 있는 것
    
    while lo + 1 < hi:
        m = math.trunc((lo + hi) / 2)
        
        if canReachToGoal(m):
            hi = m
        else:
            lo = m
    
    return hi
      
# print(canReachToGoal(4))

print(binarySearch())

    