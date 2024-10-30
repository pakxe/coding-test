n = int(input())

for i in range(1, n + 1):
    empty = ' ' * (n - i)
    stars = '*' * i
    print(empty + stars)