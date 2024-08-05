import sys 
input = sys.stdin.readline

n = int(input())
st = input()

count = 0
for i in range(len(st)):
    curChar = st[i]
    
    if curChar == 'a': 
        count = count + 1
    if curChar == 'e': 
        count = count + 1
    if curChar == 'i': 
        count = count + 1
    if curChar == 'o': 
        count = count + 1
    if curChar == 'u': 
        count = count + 1
        
print(count)