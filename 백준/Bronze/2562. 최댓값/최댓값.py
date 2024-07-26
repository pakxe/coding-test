import sys

input = sys.stdin.readline

nums = []
while True:
    b = input().rstrip()

    if b == '':
        break;
    nums.append(int(b))

maxNum = max(nums)
maxNumCount = nums.index(maxNum)

print(maxNum)
print(maxNumCount + 1)

