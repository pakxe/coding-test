'''
push는 1, 2, 3,... 오름차순으로 하고
pop하는 걸로 보여지는 수열을 만들 수 있는지 묻는 문제
'''

'''
수열탑에 원하는 수가 없다면 원하는 수가 top될 때 까지 push 후 pop한다. 
원하는 수가 top에 있다면 뽑는다. 

다 넣었는데 원하는 수가 top에 없다면 NO
또는 원하는 수가 이미 넣었던 값이며 && top에는 원하는 수가 없을 때 NO
'''
PUSH = '+'
POP = '-'
ENABLE = 'NO'

n = int(input())
lst = [int(input()) for _ in range(n)]

stack = []
rst = []
idx = 0 # 그 값은 넣었다.
cursor = 0

can = True
while True:
    # 전부 소진하고 커서도 끝이 났을 때
    # print(idx, cursor, stack, rst)

    if idx >= n and cursor >= n:
        break;
     
    # 이미 넣은 값이며 top이 원하는 값이 아닐 경우(추가 pop이 필요한건데 그러면 수열이 깨지게 됨)
    if idx >= lst[cursor] and stack[len(stack) - 1] != lst[cursor]:
        can = False
        break;
        
    # 원하는 값이 들어갈 때까지 push한다.
    while True:
        # 원하는 값을 넣은 순간
        if idx >= lst[cursor]:
            stack.pop()
            rst.append(POP)
            cursor += 1
            break;
            
        idx += 1
        stack.append(idx)
        rst.append(PUSH)
                
print(ENABLE if not can else '\n'.join(rst))
        
    