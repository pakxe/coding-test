'''
입력: 영어 대문자 && 공백 x

1. 키 길이만큼 평문을 조각낸다. 
2. 키를 기준으로 열 단위로 정렬한다. (세로로 조각내서 그걸로 앞뒤 이동하는거)
    이때 같은 문자일 경우 우선순위는 앞 인덱스이다.
3. 열을 차례대로 출력하면 암호문이다.

1. 0 -> 00, 1 -> 10, 2 -> 20... 식으로 배열을 채운다. (일본어읽듯이..)
2. 키 대로 다시 배열을 돌려놓는다. 이때 같은 문자열의 순서가 바뀌지 않도록 유지한다.
3. -> 순서로 출력한다.
'''

import copy

# 같은 알파벡이라면 알파벡 배열에 마지막으로 발견된 위치를 저장하고 그 위치 + 1한 위치부터 찾도록 한다.
def findIndexsOfKey(key):
    
    sortedKey = sorted(list(key))
    
    alphabetArray = [None] * 26
    result = [None] * len(key)
    
    for i in range(len(sortedKey)):
        ascii = ord(sortedKey[i]) - 65
        
        startIndex = 0
        if alphabetArray[ascii] != None:
            startIndex = alphabetArray[ascii] + 1
        
        matchIndex = key.index(sortedKey[i], startIndex)
        result[i] = matchIndex
        alphabetArray[ascii] = matchIndex

    return result


def changeCol (changeIndexArray, grid):

    copiedGrid = copy.deepcopy(grid)

    for i in range(len(changeIndexArray)):
        targetCol = changeIndexArray[i]
        
        for y in range(len(grid)):
            grid[y][targetCol] = copiedGrid[y][i]

    return grid

key = input()
encoded = input()

rowCount = len(encoded) // len(key)
colCount = len(key)

grid = [[None] * colCount for _ in range(rowCount)]

for i in range(len(encoded)):
    row = i % rowCount
    col = i // rowCount
    
    grid[row][col] = encoded[i]
    

changeIndexArray = findIndexsOfKey(key)
grid = changeCol(changeIndexArray, grid)

res = ''
for i in range(len(grid)):
    res += ''.join(grid[i])
    
print(res)