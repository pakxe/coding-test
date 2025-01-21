n = int(input())

lst = []
for i in range(n):
    age, name = input().split()
    lst.append((int(age), name, i))
    
st = sorted(lst, key = lambda x: (x[0], x[2]))

for v in st:
    (age, name, _) = v
    print(age, name)
