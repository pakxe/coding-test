import sys
a, b = map(str, input().split())

t = None
if len(a) < len(b):
    minL = len(a)
    t = a
else: 
    minL = len(b)
    t = b
    
r = []
for i in range(minL):
    z = a[len(a) - i - 1]
    x = b[len(b) - i - 1]

    r.append(int(z) + int(x))
r.reverse()
# print(r)

f = []
if len(a) == len(b):
    print(''.join(map(str, r)))
    sys.exit(0)
    
else:
    if len(a) > len(b):
        for i in range(len(a) - minL):
            f.append(a[i])
    else:
        for i in range(len(b) - minL):
            f.append(b[i])
            
for i in range(len(r)):
    f.append(r[i])
    
print(''.join(map(str, f)))
