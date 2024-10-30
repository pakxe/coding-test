'''
26 길이의 -1로 초기화된 배열을 만든다.
문자열을 읽으며 읽힌 영어를 ㅁscii로바꾼 후 - 65한다.
만약 그 인덱스가 -1인 경우 갈아끼운다.
'''

noun = input()
indexList = [-1] * 26

for i in range(len(noun)):
    cur = noun[i]
    
    ascii = ord(cur) - 97
    
    if indexList[ascii] != -1: 
        continue
    
    indexList[ascii] = i
    

print(' '.join(map(str, indexList)))