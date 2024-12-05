'''
[10m]
버스 탑승 정보를 저장해두어야 한다.

버스는 한 개씩만 탈 수 있으므로 배열로 저장한다.

인접 그래프에서도 어떤 버스의 경로와 가중치인지 두 가지 정보를 저장한다.

🔴 겹치는 노선은 없는 것 같다.. 문제에 안써있어서 확실하지는 않다.

'''

'''
인접 리스트 n -> [[이동위치, 가중치, 버스번호], [이동위치, 가중치, 버스번호]]

def dijk() 
    최소값 우선순위큐 INF로 초기화 (0, 시작 노드, 현재 버스) # 튜플


    while 큐가 빌 떄까지 (모든 노드에 대한 최소 값이 구해졌을 대 까지)
        최소값을 뽑는다. 

        그 최소값의 주변 노드를 순회한다. 
            현재 타고 있는 버스가 있고 그 버스와 가려는 곳이 일치한다면 가중치는 + 0이다. 

            현재 타고 있는 버스가 있지만 가려는 곳의 버스 번호와 일치하지 않는다면 비용을 더한다.

            버스가 없다면 그냥 더한다.
'''

import heapq

start, end, busCount = map(int, input().split())

STOP_LENGTH = 1001

m = [[] for _ in range(STOP_LENGTH)]
dist = [(float('inf'), None) for _ in range(STOP_LENGTH)]

# 인접 리스트 제작
for i in range(busCount):
    fee, busStopCount = map(int, input().split())

    stops = list(map(int, input().split()))

    for j in range(len(stops) - 1):
        curStop = stops[j]
        nextStop = stops[j + 1]

        m[curStop].append((fee, nextStop, i + 1)) # (요금, 이번역, 버스 번호)

def dijkstra():
    q = []
    heapq.heappush(q, (0, start, None, 0)) 
    dist[start] = (0, 0)

    while q:
        # 여기서 curFee는 누적 최소값이다.
        curFee, curStop, curBusNum, length = heapq.heappop(q)

        for nextFee, nextStop, nextBusNum in m[curStop]:
            fee = (0 if curBusNum == nextBusNum else nextFee) + curFee

            if fee >= dist[nextStop][0]:
                continue;
            
            heapq.heappush(q, (fee, nextStop, nextBusNum, length + 1))
            dist[nextStop] = (fee, length + 1)

dijkstra()

if dist[end][0] == float('inf'):
    print('-1 -1')
else:
    print(' '.join(map(str, dist[end])))


