# 23881
import sys
input = sys.stdin.readline

n, k = map(int, input().split())
m = list(map(int, input().split()))

def selectionSort():
  swapCount = 0

  # 뭉탱이
  for i in range(n - 1):
    maxNum = float('-inf')
    maxIndex = -1

    # 최대값 찾기
    for j in range(n - i):
      cur = m[j]
      if cur > maxNum:
        maxNum = cur
        maxIndex = j

    # 교환 
    if maxIndex != -1 and maxNum != m[n - 1 - i]:
      m[len(m) - 1 - i], m[maxIndex] =  m[maxIndex], m[len(m) - 1 - i]
      swapCount += 1
      if swapCount == k:
        return f'{m[maxIndex]} {m[len(m) - 1 - i]}'
      
  return -1

print(selectionSort())
        