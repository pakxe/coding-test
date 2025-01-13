'''
가장 빨리 끝나는 회의를 선택하면 남은 시간이 절대적으로 많다. 정답에 가까운 접근 
'''

n = int(input())
lst = []
for _ in range(n):
    v = list(map(int, input().split()))
    lst.append(v)
    
lst.sort(key = lambda x: (x[1], x[0]))

def f():
    lastTime = 0
    temp = 0
    
    for i in range(n):
        (start, end) = lst[i]
        
        if start >= lastTime:
            lastTime = end
            temp += 1

    print(temp)

f()
    
    

