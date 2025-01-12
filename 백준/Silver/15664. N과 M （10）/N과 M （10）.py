n, m = map(int, input().split())
lst = list(map(int, input().split()))

lst.sort()

temp = []
def comb(curIdx):
    if len(temp) == m:
        print(' '.join(map(str, temp)))
        return
    
    prev = None
    for i in range(curIdx, n):
        cur = lst[i]
        
        if cur == prev:
            continue
        
        prev = cur
        
        temp.append(cur)
        comb(i + 1)
        temp.pop()
    
comb(0)