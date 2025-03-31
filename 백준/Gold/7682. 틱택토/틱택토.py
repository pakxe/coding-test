'''
invalid보다 valid를 추리는게 더 나을 것 같다. invalid가 너무 많은거같다. 

최종 상태
1. 누군가 빙고(하나일 필요는 없으나 두 유저가 동시 정답일 경우는 불가능)
    이때 빙고인 유저가 막타여야 한다. 
2. 판이 가득 채워지고 x가 더 많은 상태

1번은 두 유저의 빙고 유무를 확인하고 둘 중 하나가 빙고일 경우를 확인하자. 
'''

def getCount(target, line):
    c = 0
    
    for i in range(len(line)):
        if line[i] == target:
            c += 1
            
    return c

def getColCount(target, board, xIndex):
    c = 0
    
    for y in range(len(board)):
        if target == board[y][xIndex]:
            c += 1
            
    return c

def isBingo(target, board):
    rb = isValidRowBingo(target, board)
    cb = isValidColBingo(target, board)
    db = isValidDiagBingo(target, board)

    if rb == -1 or cb == -1:
        return -1

    return rb + cb + db

# 유일 1 빙고인지. 틀리면 False, 맞으면 숫자
def isValidRowBingo(target, board):
    bingoCount = 0

    for y in range(len(board)):
        c = getCount(target, board[y])
        
        if c == len(board[y]):
            bingoCount += 1
            
    if bingoCount > 1:
        return -1

    return bingoCount

def isValidColBingo(target, board):
    bingoCount = 0
    
    for x in range(len(board[0])):
        c = getColCount(target, board, x)
        
        if c == len(board):
            bingoCount += 1
            
    if bingoCount > 1:
        return -1
    
    return bingoCount

def isValidDiagBingo(target, board):
    # 우하향
    isBingo = True
    
    for y in range(len(board)):
        if board[y][y] != target:
            isBingo = False
            break
            
    if isBingo:
        return 1

    isBingo = True 
    
    # 우상향
    for y in range(len(board)):
        if board[y][len(board) - 1 - y] != target:
            isBingo = False
            break

    # print(isBingo, target)
    if isBingo:
        return 1
    
    return 0

X = 'X'
O = 'O'
def isValidTurn(lineBoard):
    x = 0
    o = 0
    
    for i in range(len(lineBoard)): 
        if lineBoard[i] == X:
            x += 1
        elif lineBoard[i] == O:
            o += 1

    if x < o or x - o > 1:
        return False
    
    return True
    
# 빙고가 있을 때 사용한다.
def getLastUser(lineBoard):
    x = 0
    o = 0
    
    for i in range(len(lineBoard)): 
        if lineBoard[i] == X:
            x += 1
        elif lineBoard[i] == O:
            o += 1
    
    if x == o:
        return O
    
    if x - o == 1:
        return X
        
    return "잘못짬"

def makeBoard(lineBoard):
    board = [[None] * 3 for _ in range(3)]

    for y in range(3):
        for x in range(3):
            board[y][x] = lineBoard[3 * y + x]
            
    return board

def isFull(line):
    for i in range(len(line)):
        if line[i] == '.':
            return False
        
    return True

V = 'valid'
INV = 'invalid'
END = 'end'
while True:
    line = input()
    
    if line == END:
        break
        
    
    if not isValidTurn(line):
        print(INV)
        continue

    board = makeBoard(line)
    isXBingo = isBingo(X, board)
    isOBingo = isBingo(O, board)

    # print(isXBingo, isOBingo)
    if isXBingo == -1 or isOBingo == -1 or (isXBingo >= 1 and isOBingo >= 1):
        print(INV)
        continue
        
    target = None
    if isXBingo != 0:
        target = X
    elif isOBingo != 0:
        target = O

    # print(target)
        
    if target == None and not isFull(line):
        print(INV)
        continue
    elif target == None and isFull(line):
        print(V)
        continue
        
    lastUser = getLastUser(line)
    # print(lastUser)
    if lastUser == target:
        print(V)
        continue

    print(INV)
    
    