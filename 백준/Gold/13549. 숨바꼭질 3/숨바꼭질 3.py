'''
다익
가능한 경로 중 최소값을 찾는다. 
그 노드를 중심으로 최소 경로 값을 찾고 dist에 업데이트 한다. 
'''

'''
제곱이 존재하는 수라면 코스트 0으로 넣고, +-도 수행
존재하지 않는다면 +-1넣고, 코스트 += 1
'''

import heapq
import sys
import math


def is_perfect_square(n):
    if n < 0:
        return False  
    
    root = math.sqrt(n)
    return root == int(root)

start, target = map(int, input().split())

dist = [float('inf')] * 100001

def dijkstra():
    q = []
    heapq.heappush(q, (0, start)) #(위치, 코스트)
    
    while len(q) > 0:
        curCost, curLocation = heapq.heappop(q)
        dist[curLocation] = curCost
        
        if curLocation == target:
            print(curCost)
            sys.exit(0)
            

        if curLocation * 2 < 100001 and dist[curLocation * 2] > curCost:
            heapq.heappush(q, (curCost, curLocation * 2))
        if curLocation > 0 and dist[curLocation - 1] > curCost + 1:
            heapq.heappush(q, (curCost + 1, curLocation - 1))
        if curLocation < 100000 and dist[curLocation + 1] > curCost + 1:
            heapq.heappush(q, (curCost + 1, curLocation + 1))
            

dijkstra()
            
        
    
    
    