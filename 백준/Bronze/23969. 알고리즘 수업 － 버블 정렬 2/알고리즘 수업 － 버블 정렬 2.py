'''

'''

size, k = map(int, input().split())
arr = list(map(int, input().split()))

def bubbleSort():
    curK = 0
    
    for i in range(size - 1, 0, -1):
        for j in range(i):
            if arr[j] > arr[j+1]:
                curK += 1
                arr[j], arr[j+1] = arr[j+1], arr[j]
                
                if curK == k: 
                    print(' '.join(map(str, arr)))
                    return float('inf')
                
                
    return curK

resK = bubbleSort()

if resK < k:
    print('-1')

        