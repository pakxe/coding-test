numbers = [int(input()) for _ in range(9)]

maxNum = max(numbers)

print(maxNum)
print(numbers.index(maxNum) + 1)