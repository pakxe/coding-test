'''
삼각형이 만들어지는 조건: 두 변 길이의 합 > 다른 한 변의 길이

sort하고 마지막 부터 한 칸씩 땡기면서 거기의 3개가 조건 충족하는지 확인
'''

n = int(input())
lst = [int(input()) for _ in range(n)]

lst.sort()

def canMakeTriangle(arr):
    maxLen = max(arr)
    
    if maxLen < sum(arr) - maxLen:
        return True
    else:
        return False
    
DISPLAY_SIZE = 3
cursor = len(lst) - DISPLAY_SIZE
ans = -1

while True:
    if cursor < 0: 
        break;

    if canMakeTriangle(lst[cursor:cursor+DISPLAY_SIZE]):
        ans = sum(lst[cursor:cursor+DISPLAY_SIZE])
        break
    
    cursor -= 1
    
print(ans)
    

