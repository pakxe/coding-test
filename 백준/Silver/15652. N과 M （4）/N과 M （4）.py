n, m = map(int, input().split())

arr = []
for i in range(1, n + 1):
    arr.append(i)

def func(v, arr):
    if len(arr) >= m:
        print(' '.join(map(str, arr)))
        return
    
    for i in range(v, n + 1):
        arr.append(i)

        func(i, arr)

        arr.pop()

        
func(1, [])

