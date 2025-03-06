'''
1, 2, 3, 4 번 톱니바퀴

k번 회전. 시계와 반시계가 있다. 

같은 극이면 함께 회전

rotate함수로 좌우인자를 받아 톱니 회전시키자. 

극확인 함수

회전하려는 톱니의 좌우를 보며 파동처럼 퍼뜨린다.
왼쪽
가톱니의 왼쪽이 피톱니의 극과 반대면
    시작톱니의 인덱스와 짝수차이라면 같은 방향 회전. 
    아니면 다른 방향 회전
    
같은 극이라면 회전 종료
'''

COUNT = 4
WHEEL_LEN = 8

R = 2
L = 6

CLOCK = 1
ANTI_CLOCK = -1

wheels = [[] for _ in range(COUNT)]

for i in range(COUNT):
    line = input()
    
    for j in range(len(line)):
        wheels[i].append(int(line[j]))
        
def isDiff(i, j):
    if i < j:
        return wheels[i][R] != wheels[j][L]
    
    else:
        return wheels[j][R] != wheels[i][L]
    
def rotate(i, direction):
    rotated = [[] for _ in range(WHEEL_LEN)]

    if direction == CLOCK:
        rotated[0] = wheels[i][WHEEL_LEN - 1]
        
        for j in range(1, WHEEL_LEN):
            rotated[j] = wheels[i][j - 1]
            
        wheels[i] = rotated
    else:
        rotated[WHEEL_LEN - 1] = wheels[i][0]
        
        for j in range(WHEEL_LEN - 1):
            rotated[j] = wheels[i][j + 1]

        wheels[i] = rotated

def antiDirection(d):
    return -1 if d == CLOCK else 1

testCount = int(input())

for i in range(testCount):
    wheelIdx, direction = map(int, input().split())
    wheelIdx -= 1
    
    # 왼쪽
    lc = wheelIdx
    if wheelIdx > 0:
        while True:
            if lc - 1 < 0:
                break
                
            if not isDiff(lc, lc - 1):
                break
            
            lc -= 1

    # 오른쪽
    rc = wheelIdx
    if wheelIdx < COUNT:
        while True:
            if rc + 1 >= COUNT:
                break

            if not isDiff(rc, rc + 1):
                break
            
            rc += 1

    ld = antiDirection(direction)
    for j in range(wheelIdx - 1, lc - 1, -1):
        rotate(j, ld)
        ld = antiDirection(ld)

    ld = antiDirection(direction)
    for j in range(wheelIdx + 1, rc + 1):
        rotate(j, ld)
        ld = antiDirection(ld)

    rotate(wheelIdx, direction)

score = 0
for i in range(COUNT):
    
    if wheels[i][0] == 1:
        score += (2 ** i)
        
print(score)
    

