n = int(input())
string = input()

sumV = 0
for i in range(n):
    char = string[i]
    ascii = ord(char) - 96
    
    sumV += ascii * (31 ** i)
    
print(sumV % 1234567891)
    