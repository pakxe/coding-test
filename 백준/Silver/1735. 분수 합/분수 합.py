
'''
최소 공배수를 만들어 더하고.  least common multiple
최대 공약수로 나누면 된다. greatest common divider
'''
import math

a, b = map(int, input().split())
c, d = map(int, input().split())

lcm = math.lcm(b, d)

up = a * (lcm // b) + c * (lcm // d)

gcd = math.gcd(up, lcm)


if gcd == 1:
    print(up, lcm)
else:
    print(up // gcd, lcm // gcd)

