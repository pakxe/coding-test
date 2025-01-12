'''
그 차례에 이미 그 수가 등록되었다면 continue
'''

n, m = map(int, input().split())
lst = list(map(int, input().split()))

lst.sort()

temp = []
prevNum = None
def perm (curIdx, selected):
    if len(temp) == m:
        print(' '.join(map(str, temp)))
        return;
    
    prev = None
    for i in range(n):
        if i in selected: # 중복 선택이 안되므로 이미 선택된 값인지 확인ㅇ
            continue
                
        cur = lst[i]
        
        if prev == cur: # 정렬된 상태이기 떄문에 이전 값과 동일하다면 pass
            continue;

        prev = cur
        selected.append(i)
        temp.append(cur)
        
        perm(i + 1, selected)
        temp.pop()
        selected.pop()
            
        
perm(0, [])
            
    