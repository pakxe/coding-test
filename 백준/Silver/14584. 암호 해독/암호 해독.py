'''
사전으로 주어진 단어가 하나 이상은 등장해야한다. 
0칸을 미루는 경우도 있으려나? 0~ 25칸 미루기

미루고 나서 그 단어를 포함하고 있는지 확인한다.

'''

def makeKaisarr(string, count):
    stringLst = list(string)
    
    for i in range(len(string)):
        ascii = ord(string[i]) - 97
        encodedAscii = (ascii + count) % 26 + 97
        
        stringLst[i] = chr(encodedAscii)
    
    return ''.join(stringLst)

def isIn(target, stringArr):
    for s in stringArr:
        if s in target:
            return True
        
    return False

encoded = input()
testCount = int(input())
testString = [input() for _ in range(testCount)]

for i in range(26):
    decoded = makeKaisarr(encoded, i)
    
    if isIn(decoded, testString):
        print(decoded)
        break
    
    


