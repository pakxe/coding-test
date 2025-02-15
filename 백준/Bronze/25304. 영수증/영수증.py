total = int(input())
count = int(input())

s = 0
for _ in range(count):
    p, c = map(int, input().split())
    s += p * c
    
print('Yes' if s == total else 'No')
    