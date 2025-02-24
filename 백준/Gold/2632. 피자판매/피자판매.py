'''
각 피자
1. for 모든 위치 O(10^3)
2. 모든 위치에서부터 출발하는 누적합 계산 O(10^3)
3. 크기 경우의 수 배열(ex 크기가 2인 경우의 수 = 3)에 합연산 O(10^3)

두 피자에 대하여 반복

두 피자의 경우의 수 합치기 O(10^6)

최대 10^6
'''

'''문제
모든 누적합에서 all피자 선택이 누적카운팅됨


'''

SIZE = 2_000_000

s = int(input())
a, b = map(int, input().split())

a_s = []
for i in range(a):
    a_s.append(int(input()))
    
b_s = []
for _ in range(b):
    b_s.append(int(input()))
    
def getSums(start, arr):
    t = [None] * len(arr)
    t[start] = arr[start]
    
    # 앞
    for i in range(start + 1, len(arr)):
        t[i] = t[i - 1] + arr[i]
       
    # 뒤
    if start != 0:
        t[0] = t[len(arr) - 1] + arr[0]
        
        for i in range(1, start):
            t[i] = t[i - 1] + arr[i]
            
    return t

ac = [0] * (s + 1)
totalS_a = 0
for i in range(a):
    sums = getSums(i, a_s)

    if i == 0:
        for j in range(len(sums)):
            if sums[j] > s: 
                continue
            ac[sums[j]] += 1
        totalS_a = sums[len(sums) - 1]
        
    else:
        for j in range(len(sums)):
            if sums[j] == totalS_a:
                continue
                
            if sums[j] > s: 
                continue
            ac[sums[j]] += 1
        
bc = [0] * (s + 1)
totalS_b = 0

for i in range(b):
    sums = getSums(i, b_s)
    
    if i == 0:
        for j in range(len(sums)):
            if sums[j] > s: 
                continue
            bc[sums[j]] += 1
        totalS_b = sums[len(sums) - 1]
        
    else:
        for j in range(len(sums)):
            if sums[j] == totalS_b:
                continue
                
            if sums[j] > s: 
                continue
            bc[sums[j]] += 1

c = 0
for i in range(s + 1):
    curCount = 0
    
    if i == 0 or s - i == 0:
        curCount = ac[i] + bc[s - i]
    else:
        curCount = ac[i] * bc[s - i]
        
    c += curCount
    # print(i, s - i)
    # print(ac[i], bc[s - i])
    # print(curCount)
    # print()

print(c)
    
    
    
    
    