import math

total, count = map(int, input().split())
each = total // count

if each * count == total:
    print(each)
    print(0)
else:
    print(each)
    print(total - (count * each))