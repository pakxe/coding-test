import sys

input = sys.stdin.readline

n = int(input())

dpArr = [0] * (n + 1)

dpArr[0] = 0
dpArr[1] = 0

for i in range(2, n + 1):
    validCountList = []
    
    if i % 3 == 0:
        validCountList.append(dpArr[i // 3])
    if i % 2 == 0:
        validCountList.append(dpArr[i // 2])
    validCountList.append(dpArr[i - 1])
    
    minCount = min(validCountList)
    
    dpArr[i] = minCount + 1


print(dpArr[n])