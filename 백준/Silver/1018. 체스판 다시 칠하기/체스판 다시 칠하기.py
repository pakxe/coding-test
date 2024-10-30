'''
브루트포스

redrawCount함수를 만들어서 계산한다. 
시작하는 인덱스를 제공한다.
카운트가 제일 작은 깂을 출력한다

인덱스 목록을 계산해야한다.
가로 세로 모두 길이에서 8을 뺀 값들로 배열을 만든다.

개수를 세는 것은 검정으로 시작하는 것과 하양으로 시작하는 것중 최소값으로 선택해야한다.
'''

LEN = 8
W = 'W'
B = 'B'

def calcValidLocation (row, col):
    validRow = row - LEN
    validCol = col - LEN
    
    locationList = []
    
    for i in range(validRow + 1):
        for j in range(validCol + 1):
            locationList.append([i, j])
            
    return locationList

def sliceArr (row, col, arr):
    newArr = [] * LEN
    
    for i in range(LEN):
        newArr.append(arr[i+row][col:col+LEN])

    return newArr

def calcRedrawCount (location, lineList):
    row, col = location
    curLineList = sliceArr(row, col, lineList)

    sumWhenWhiteStart = 0
    sumWhenBlackStart = 0

    for i in range(len(curLineList)):
        sumWhenWhiteStart += calcRedrawCountInLine(W if i % 2 == 0 else B, curLineList[i])
        # print(calcRedrawCountInLine(W if i % 2 == 0 else B, curLineList[i]))

    for i in range(len(curLineList)):
        sumWhenBlackStart += calcRedrawCountInLine(B if i % 2 == 0 else W, curLineList[i])
        # print(calcRedrawCountInLine(B if i % 2 == 0 else W, curLineList[i]))

    return min(sumWhenWhiteStart, sumWhenBlackStart)
    

    
def calcRedrawCountInLine (startColor, line):
    totalRedrawCount = 0
    
    for i in range(len(line)):
        cur = line[i]
        
        if startColor == W:
            if i % 2 == 0 and cur != W:
                totalRedrawCount += 1
            if i % 2 == 1 and cur != B:
                totalRedrawCount += 1
            
        else:
            if i % 2 == 0 and cur != B:
                totalRedrawCount += 1
            if i % 2 == 1 and cur != W:
                totalRedrawCount += 1

    return totalRedrawCount

row, col = list(map(int, input().split()))

lineList = [input() for _ in range(row)]
locationList = calcValidLocation(row, col)
redrawCountList = list(map(lambda x: calcRedrawCount(x, lineList), locationList))

print(min(redrawCountList))
