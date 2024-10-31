'''
insertion sort

두번째 값부터 시작한다. 
한칸씩 앞으로 가며 해당 값과 비교한다.
만약 커서값이 비교값보다 크다면 밀어냈던 인덱스로 넣고 정렬이 끝난다.
만약 커서값이 비교값보다 작다면 비교값을 옆 인덱스로 넘기고 더 앞으로 이동한다.
'''
n, k = map(int, input().split())
m = list(map(int, input().split()))

def insertionSort():
    saveCount = 0
    
    # 삽입할 커서값을 선택하는 인덱스
    for i in range(1, n):
        savePoint = -1

        cv = m[i]
        
        # 비교할 인덱스
        for j in range(i - 1, -1, -1):
            tv = m[j]
            
            if tv > cv:
                m[j + 1] = tv
                savePoint = j
                saveCount += 1
                
                if saveCount == k:
                    return tv
            else:
                break;
            
        if savePoint != -1:
            m[savePoint] = cv
            
            saveCount += 1
            
            if saveCount == k:
                return cv

    return -1

print(insertionSort())
                
                