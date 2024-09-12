count, price = list(map(int, input().split()))

total = count * 100;
if total >= price:
    print('Yes')
else:
    print('No')