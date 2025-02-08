TOKEN = 'OI'
O = 'O'
I = 'I'


n = int(input())
strLen = int(input())
string = input()

combo = 0
cursor = 0
total = 0

def sliceStr(idx, s, length):
    rst = []
    
    for i in range(idx, idx + length):
        rst.append(s[i])

    return ''.join(rst)
    
while True:
    # 끝
    if cursor >= (strLen - 1):
        break;
        
    char = string[cursor]
    
    if char == O:
        cursor += 1
        continue;
    
    # 콤보아님
    if combo == 0:
        # 끝에서 3자 앞이라면
        if cursor + 2 <= (strLen - 1):
            subStr = sliceStr(cursor + 1, string, 2)
            # 연속
            if subStr == TOKEN: 
                combo = 1
                
                if combo >= n:
                    total += 1
                    
                cursor += 2
            else:
                if subStr[0] == I:
                    cursor += 1
                else:
                    cursor += 2
        else:
            break;


    # 콤보중
    else:
        # 끝에서 3자 앞이라면
        if cursor + 2 <= (strLen - 1):
            subStr = sliceStr(cursor + 1, string, 2)
            
            # 연속
            if subStr == TOKEN:
                combo += 1

                if combo >= n:
                    total += 1
                    
                cursor += 2 
                
            # 연속 실패
            else:
                if subStr[0] == I:
                    cursor += 1
                else:
                    cursor += 2
                
                combo = 0
                    
        else:
            break;

print(total)
