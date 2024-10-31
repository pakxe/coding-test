'''
K번 교환이 발생한 직후의 배열 출력

[core idea of selection sort]
- 앞부터 읽어서 제일 큰 수를 찾는다. 
- 그 수를 제일 뒤의 값과 교환한다.
- 앞부터 정렬된 칸 전까지 그 다음으로 큰 수를 찾는다. 
- 그 수를 제일 뒤의 값에서 한칸 앞과 교환한다.
- 3, 4를 반복한다.
'''

n, k = map(int, input().split())
m = list(map(int, input().split()))

def selectionSort():
    swapCount = 0
    
    # 숫자가 장착될 인덱스
    for i in range(n - 1, 0, -1):
        curMax = float('-inf')
        curMaxIndex = -1
        
        # 최대값 찾기
        for j in range(i + 1):
            cur = m[j] 
            
            if cur > curMax:
                curMaxIndex = j
                curMax = cur
        
        # 최대값이 존재하며 그 값이 교환 위치와 다를 때
        if curMaxIndex != -1 and curMaxIndex != i:
            swapCount += 1
            m[curMaxIndex], m[i] = m[i], m[curMaxIndex]
            
            if swapCount == k:
                return ' '.join(map(str, m))
    return -1
        
        

print(selectionSort())