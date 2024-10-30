numbers = list(map(int, input().split()))

print(sum(map(lambda x: x**2, numbers)) % 10)