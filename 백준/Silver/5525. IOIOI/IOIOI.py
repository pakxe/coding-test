'''
N + 1개의 I개
N개의 O

IOIOI : P3
IOI: P1
'''

'''
겹치는 것도 해당이 된다. 

403020100
IOIOIOIOI

0030201001000
OOIOIOIOIIOII
2이상인 값이 몇 개 있는지 카운팅하면 된다.

뒤에서부터 세던 앞에서 세던 상관 없음. 

IOI토큰을 발견하면 1, 발견 상태에서는 2개의 OI토큰을 인식하면 +1
'''

'''
I로 계속 워프하면서 콤보를 찾아야한다.

'''
TOKEN = 'IOI'
COMBO_TOKEN = 'OI'
O = 'O'

n = int(input())
strLen = int(input())
string = input()

isCombo = False
counts = [0] * strLen
cursor = 0

def sliceStr(idx, s, length):
    rst = ''
    
    for i in range(idx, idx + length):
        rst += s[i]

    return rst
    
while True:
    # 끝
    if cursor > (strLen - 1):
        break;
        
    char = string[cursor]
    
    if char == O:
        cursor += 1
        continue;
    
    # 콤보아님
    if not isCombo:
        # 끝에서 3자 앞이라면
        if cursor + 2 <= (strLen - 1):
            subStr = sliceStr(cursor, string, 3)
            
            if subStr == TOKEN: 
                counts[cursor] = 1
                isCombo = True
                cursor += 2
            else:
                cursor += 1
        else:
            break;


    # 콤보중
    else:
        # 끝에서 3자 앞이라면
        if cursor + 2 <= (strLen - 1):
            subStr = sliceStr(cursor + 1, string, 2)
            
            # 연속
            if subStr == COMBO_TOKEN:
                counts[cursor] = counts[cursor - 2] + 1
                cursor += 2 # 다음 I로 워프
                
            # 연속 실패
            else:
                isCombo = False
                cursor += 1
        else:
            break;
total = 0
for count in counts:
    if count >= n:
        total += 1

print(total)
