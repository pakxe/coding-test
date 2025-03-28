'''
배열을 합치는 식으로 만들 수 있을 것 같다. 


'''

import sys
input = sys.stdin.readline

L = 'L'
D = 'D'
B = 'B'
P = 'P'

origin = input().rstrip() 
originLen = len(origin)

n = int(input())

c = originLen

l = []
for i in range(len(origin)):
    l.append(origin[i])
r = []



for _ in range(n):
    command = input().rstrip() 
    
    if command[0] == L:
        if len(l) == 0:
            continue

        top = l.pop()
        r.append(top)
        
    if command[0] == D:
        if len(r) == 0:
            continue

        top = r.pop()
        l.append(top)
        
    if command[0] == B:
        if len(l) == 0:
            continue

        l.pop()
        
    if command[0] == P:
        l.append(command[2])

rst = []
for i in range(len(l)):
    rst.append(l[i])

for i in range(len(r) - 1, -1, -1):
    rst.append(r[i])
    
print(''.join(rst))
        