lst = list(map(int, input().split()))

if sum(lst) >= 100:
    print('OK')
elif min(lst) == lst[0]:
    print('Soongsil')
elif min(lst) == lst[1]:
    print('Korea')
else:
    print('Hanyang')
