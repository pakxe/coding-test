n, m = map(int, input().split())
lst = list(map(int, input().split()))

lst.sort()

temp = []
def perm():
    if len(temp) == m:
        print(' '.join(map(str, temp)))
        return
    
    prev = None
    for i in range(n):
        cur = lst[i]
        
        if cur == prev:
            continue
        
        prev = cur
        
        temp.append(cur)
        perm()
        temp.pop()
    
perm()