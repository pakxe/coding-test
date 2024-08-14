import sys
input_data = sys.stdin.read().strip().split()
numbers = [int(x) for x in input_data]

for i in range(len(numbers)):
    cur = numbers[i]
    
    if cur == 0:
        break;
    sum = 0
    for j in range(1, cur + 1):
        sum = sum + j
    
    print(sum)
