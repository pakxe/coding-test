'''

'''

size, count = map(int, input().split())

nums = list(map(int, input().split()))

def bubbleSort ():
    changeCount = 0;
    
    for i in range(size - 1, 0, -1):
        for j in range(i):
            if nums[j] > nums[j + 1]:
                changeCount += 1
                
                if changeCount == count:
                    print(nums[j + 1], nums[j])
                    return float('inf')
                
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
                
    return changeCount
                
changeCount = bubbleSort()

if(changeCount < count):
    print('-1')