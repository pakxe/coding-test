'''
삽입 정렬

왼쪽부터 정렬된다. 
따라서 제일 왼쪽이 아닌 한칸 옆에서부터 시작한다.
왼쪽으로 한칸씩 가면서 비교한다.
만약 이동값이 고정값보다 크다면 이동값을 오른쪽에 위치시킨다.
만약 이동값이 고정값보다 작다면 고정값을 오른쪽에 위치시킨다.

예외 케이스가 있다.
이동값이 고정값보다 작은데 이 고정값의 인덱스가 0이라면 고정값만 복제되는 현상이 일어난다. 

그래서 이 이동값을 배열에 삽입하는것은 안쪽 for문이 끝났을 때로 통합하도록 하자. 
'''

n = int(input())
m = list(map(int, input().split()))
t = list(map(int, input().split()))

def insertionSort():
    for i in range(1, n):
        cursorValue = m[i]
        insertionIndex = -1
        
        for j in range(i - 1, -1, -1):
            fixedValue = m[j]  
            
            if fixedValue > cursorValue:
                m[j + 1] = fixedValue
                insertionIndex = j # 다음으로 넣어질 위치
                
                if m[j + 1] == t[j + 1] and ' '.join(map(str, m)) == ' '.join(map(str, t)):
                    return 1
            else: # 커서값을 m[j+1]에 넣어야하는 경우
                break
                
        if insertionIndex != -1: # 지금 배열에 중복된 값이 하나라도 있음을 의미
            m[insertionIndex] = cursorValue
            
            if m[insertionIndex] == t[insertionIndex] and ' '.join(map(str, m)) == ' '.join(map(str, t)):
                return 1
    return 0
        

if ' '.join(map(str, m)) == ' '.join(map(str, t)):
    print(1)
else:
    print(insertionSort())