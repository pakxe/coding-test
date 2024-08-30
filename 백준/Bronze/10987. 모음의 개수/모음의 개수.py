str = input()

count = 0;
for i in range(len(str)):
    cur = str[i]
    
    
    if cur == 'a' or cur == 'e' or cur == 'i' or cur == 'o' or cur == 'u':
        count = count + 1;
        
print(count)