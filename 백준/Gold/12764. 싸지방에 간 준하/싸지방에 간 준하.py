'''
이용시각과 종료 시각이 주어진다. 겹치는 경우는 없다. 
모든 사람이 기다리지 않아도 되는 컴퓨터의 최소 개수 X
'''

'''
시간의 순서대로 가자. 그렇지 않으면 정확히  몇 대가 필요한지 알기 어려울 것 같다. 

시간 순서대로 정리하고, 집어넣는다. 

가장 빨리 끝나는 사람을 봤을 때 아직 사용중이라면, 컴퓨터 개수를 추가하여 진입시키고, 
가장 빨리 끝나는 사람을 봤을 때 그만 사용해도 된다면, 그 컴퓨터를 양도한다. 

기본 힙큐가 오름차순으로 토출되기 때문에 종료 시간을 0번 인자로 하는 튜플을 넣으면 된다.

진입과 진출 시간이 같진 않다. 

직전에 같은 시간에 진입이 들어왔다면 반드시 새 컴퓨터다
'''

import heapq

n = int(input())

users = []
for _ in range(n):
    _in, out = map(int, input().split())
    
    users.append((_in, out))
    
users.sort()
q = []
computers = [1]
heapq.heappush(q, (users[0][1], users[0][0], 0))

idles = []
vcl = []
prevIn = users[0][1] # 직전 사람의 진입 시간
for i in range(1, len(users)):
    _in, out = users[i]

    if prevIn == _in: 
        # print(_in, out, '1')
        heapq.heappush(q, (out, _in, len(computers)))
        computers.append(1)
        continue
        
    prevIn = _in

    po, pi, pci = q[0]
    
    if len(vcl) == 0 and po > _in: # 진입 불가 새컴퓨터 추가해야됨
        heapq.heappush(q, (out, _in, len(computers)))
        computers.append(1)
        continue

    while True:
        if len(q) <= 0:
            break;

        po, pi, pci = q[0]
        if po > _in:
            break
            
        heapq.heappop(q)
        heapq.heappush(vcl, pci)

    vc = heapq.heappop(vcl)
    heapq.heappush(q, (out, _in, vc))
    computers[vc] += 1
    
print(len(computers))
print(' '.join(map(str, computers)))