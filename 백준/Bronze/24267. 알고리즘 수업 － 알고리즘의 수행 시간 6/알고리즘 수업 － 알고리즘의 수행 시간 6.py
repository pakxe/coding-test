import math

n = int(input())

c = 0
for i in range(1, n - 1):
    c += math.trunc(i * (i + 1) / 2)

print(c)
print(3)