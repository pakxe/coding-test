import sys 

input = sys.stdin.readline

i = input().rstrip()


if isinstance(i, int):
    print(chr(i))
elif isinstance(i, str):
    print(ord(i[0]))