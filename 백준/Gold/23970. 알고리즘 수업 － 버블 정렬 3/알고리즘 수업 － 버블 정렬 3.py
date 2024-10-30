import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
target = list(map(int, input().split()))

def bubbleSort():
    if ' '.join(map(str, arr)) == ' '.join(map(str, target)):
        return 1
        
    for i in range(n - 1, 0, -1):
        for j in range(i):
            if arr[j] > arr[j+1]:
                arr[j],arr[j+1] = arr[j+1], arr[j]

                if arr[j] == target[j] and arr[j+1] == target[j+1] and ' '.join(map(str, arr)) == ' '.join(map(str, target)):
                    return 1;
    
    return 0

print(bubbleSort())