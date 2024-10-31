'''
k 번째 교환되는 수를 구해라. 
'''

n = int(input())
m = list(map(int, input().split()))
t = list(map(int, input().split()))

def selectionSort():


    for i in range(n - 1, 0, -1):
        curMax = float('-inf')
        curMaxIndex = -1
        
        for j in range(i + 1):
            cur = m[j]
            
            if cur > curMax:
                curMax = cur
                curMaxIndex = j
                
        if curMaxIndex != -1 and curMaxIndex != i:
            m[curMaxIndex], m[i] = m[i], m[curMaxIndex]
            
            if m[curMaxIndex] == t[curMaxIndex] and m[i] == t[i] and ' '.join(map(str, m)) == ' '.join(map(str, t)) :
                return 1
            
    return 0

if ' '.join(map(str, m)) == ' '.join(map(str, t)):
    print(1);
else:
    print(selectionSort())