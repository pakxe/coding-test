import sys

input = sys.stdin.readline

n = int(input())
nums = input().rstrip()

numslist = []
for i in range(len(nums)):
    numslist.append(int(nums[i]))
    
print(sum(numslist))

