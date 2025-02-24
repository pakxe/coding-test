'''
길이: n
높이: h

길이만큼 장애물이 등장한다.
첫번째는 항상 석순(바닥)
그리고 번갈아서 등장한다.

개똥벌레는 장애물을 부수면서 간다. 

x.5미터의 높이로 날아간다. 

이때 파괴 장애물의 최솟값과 그런 구간의 총 개수를 구한다. 

쩜오 구간마다의 파괴 횟수를 구해야한다. 어떻게 할 수 있을까?

높이 * 길이 = 10^10으로 매우 큰 수다. 그대로 배열을 만들어서 누적할 수는 없다. 

높이 for + O(1)로 풀어내야한다.
어떻게 가능한가?

종유석의 쩜오당 개수, 석순의 쩜오당 개수를 구해놔서 합

그럼 쩜오당 개수를 어떻게 구하는가?
최소, 최대값을 구한다. 
그리고 그 구간에서 개수 계싼

누적(차감)을 어떻게 할 수 있는가?

길이별 석순 길이를 보관한다. 
그리고 sum[i] = sum[i - 1] - 석순길이[i - 1]

길이별 석순 길이는 어떻게 보관하는가?
입력받을 때 딕셔너리로 누적한다.
'''

'''
프로세스

1. 입력받으며 석순, 종유석의 딕셔너리에 += 1을 하여 길이 배열을 구한다. (O(row))
2. 쩜오당 개수를 구한다. 이는 min, max를 구하면 범위를 그나마 좁힐 수 있다. (일단 하지말고) 0.5씩 옮겨가면서 쩜오당 개수를 구한다. 
    종유석, 석순 둘다 (O(col)) * 2
3. for로 높이를 돌면서 누적합을 더한다. (O(col)) 
4. max와 개수 출력 O(col)

시간은 모두 O(n)으로 예상된다.
'''

row, col = map(int, input().split())

t = [] # 종유석
b = [] # 석순

t_d = {}
b_d = {}

# 1
for i in range(row):
    item = int(input())
    key = str(item)
    
    if i % 2 == 0: # 짝수는 석순
        b.append(item)
        
        if key in b_d:
            b_d[key] += 1
        else:
            b_d[key] = 1
    else: # 홀수는 종유석
        t.append(item)
        
        if key in t_d:
            t_d[key] += 1
        else:
            t_d[key] = 1

# 2-1. 석순
minB = min(b)
maxB = max(b)

sumB = [0] * col

# 최소 석순의 길이 이하로는 모두 다 부셔야됨
for i in range(minB):
    sumB[i] = len(b)

# i = i.5m를 의미한다.
for i in range(minB, maxB):
    prevCount = b_d[str(i)] if str(i) in b_d else 0
    
    sumB[i] = sumB[i - 1] - prevCount
    
# 2-2. 종유석
minT = min(t)
maxT = max(t)

sumT = [0] * col

for i in range(minT):
    sumT[i] = len(t)

for i in range(minT, maxT):
    prevCount = t_d[str(i)] if str(i) in t_d else 0
    
    sumT[i] = sumT[i - 1] - prevCount

# 3
sums = []
for i in range(col):
    sums.append(sumB[i] + sumT[col - 1 - i])
    
minPunch = min(sums)
count = 0
for i in range(len(sums)):
    if sums[i] == minPunch:
        count += 1
        
print(minPunch, count)

    

    


        
