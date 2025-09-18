'''
반을 나눌 수 있다.
(r - 2)(c - 2) = y
2c + 2r - 4 = b

근의 공식을 이용하면 된다. 
그러니 a, b, c를 먼저 구하자. 

[a]
(b + 4) / 2 = c + r
r = ((b + 4) / 2) - c

rc - 2c - 2r + 4 = y
[a = 1]

[b]
c(((b + 4) / 2) - c) - 2c - 2(((b + 4) / 2) - c) + 4 = y
- c^2 + ((b + 4) / 2)c -2((b + 4) / 2) + 4 = y
[b = -((b + 4) / 2)]

[c]
[c = y - 4 + 2((b + 4) / 2)]
'''
import math

def solution(brown, yellow):
    a = 1
    b = -((brown + 4) / 2)
    c = yellow - 4 + 2 * ((brown + 4) / 2)
    
    r1 = (-b + math.sqrt(b**2 - 4 * a * c)) / 2 * a
    r2 = (-b - math.sqrt(b**2 - 4 * a * c)) / 2 * a
    
    if r1 > r2:
        return [r1, r2]
    else:
        return [r2, r1]
    
    
    