'''
set
'''

numbers = [int(input()) for _ in range(10)]

calcNumbers = map(lambda x: x % 42, numbers)

print(len(set(calcNumbers)))