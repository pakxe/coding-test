string = input()

a = [0] * 26

for i in range(len(string)):
    c = string[i]
    
    a[ord(c) - 97] += 1
    
print(' '.join(map(str, a)))