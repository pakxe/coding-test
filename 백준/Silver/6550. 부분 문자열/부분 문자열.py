"""
대소문자 구분한다. 
각 문자열은 10만 이상이 아니다. 
몇 개의 테케가 들어올 지 모른다. 

s보다 t가 길다면 No
0번 문자 일치 확인 + 0번 문자일치 후 남은 길이와 남은 문자열 길이보다 작으면 No
그게 아니라면 이어서 일치를 확인하는데 일치 확인 이후 index부터 확인한다.
"""

def findIndexOfChar(char, string, startIndex):
    for i in range(startIndex, len(string)):
        if char == string[i]:
            return i;
        
    return -1

def isInclude(a, b):
    prevIndex = -1;
    
    for i in range(len(a)):
        if prevIndex >= len(b):
            return False
            
        curChar = a[i]
        
        index = findIndexOfChar(curChar, b, prevIndex + 1)
        
        if index == -1:
            return False
        prevIndex = index
        
    return True
        

YES, NO = 'Yes', 'No'

while True:
    try:
        answer, base = map(str, input().split())
        
        if len(answer) > len(base):
            print(NO)
            continue

        print(YES if isInclude(answer, base) else NO)
            
        
    except:
        break;
    