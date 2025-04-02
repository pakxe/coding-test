'''
이전과 비교. 
이전이 + 고 지금이 . 또는 + 면 +1
이전이 - 고 지금이 . 또는 - 면 + 1

+ -> - 면 다시 1이 된다. 
'''
I = '+'
D = '-'
S = '.'

import sys

n = int(input())
l = list(map(int, input().split()))

if len(l) == 1:
    print(1)
    sys.exit(0)
    
inc = [1]
dec = [1]

for i in range(1, len(l)):
    diff = l[i] - l[i - 1]
    
    if l[i-1] > l[i]:
        dec.append(dec[len(dec) - 1] + 1)
        inc.append(1)
    
    if l[i-1] < l[i]:
        inc.append(inc[len(inc) - 1] + 1)
        dec.append(1)
    
    if l[i - 1] == l[i]:
        inc.append(inc[len(inc) - 1] + 1)
        dec.append(dec[len(dec) - 1] + 1)
        
print(max(max(inc), max(dec)))
    